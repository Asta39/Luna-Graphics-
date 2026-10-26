import fs from 'fs';
import path from 'path';
import express from 'express';
import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { getIndexableRoutes } from './route-manifest.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Vercel's build image lacks the system libraries full Chrome needs, so use the
// self-contained @sparticuz/chromium build there and regular puppeteer locally.
async function launchBrowser() {
  if (process.env.VERCEL) {
    const { default: chromium } = await import('@sparticuz/chromium');
    const { default: puppeteerCore } = await import('puppeteer-core');
    return puppeteerCore.launch({
      args: await puppeteerCore.defaultArgs({ args: chromium.args, headless: 'shell' }),
      executablePath: await chromium.executablePath(),
      headless: 'shell',
    });
  }
  return puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
}

const BUILD_DIR = path.resolve(__dirname, '../build');
const PORT = Number(process.env.PRERENDER_PORT || 3001);
const CONCURRENCY = Number(process.env.PRERENDER_CONCURRENCY || 4);
const RENDER_LIMIT = process.env.PRERENDER_LIMIT ? Number(process.env.PRERENDER_LIMIT) : Infinity;
const CRITICAL_URLS = new Set(['/', '/home', '/contact', '/services/large-format', '/blog']);

function outputPathFor(urlPath) {
  if (urlPath === '/') return path.join(BUILD_DIR, 'index.html');
  return path.join(BUILD_DIR, urlPath.replace(/^\//, ''), 'index.html');
}

async function renderUrl(browser, urlPath) {
  const page = await browser.newPage();
  try {
    await page.setViewport({ width: 1366, height: 900, deviceScaleFactor: 1 });
    // Keep the cookie banner out of the saved HTML
    await page.evaluateOnNewDocument(() => {
      localStorage.setItem('lunaCookieConsent', JSON.stringify({ necessary: true, analytics: false, marketing: false }));
    });
    await page.goto(`http://localhost:${PORT}${urlPath}`, {
      waitUntil: 'networkidle0',
      timeout: 45000,
    });
    // Network idle can fire before react-helmet writes the page's own title and canonical
    await page.waitForFunction((route) => {
      const canonical = document.querySelector('link[rel="canonical"][data-rh]');
      if (!canonical) return false;
      const canonicalPath = new URL(canonical.href).pathname.replace(/\/$/, '') || '/';
      return canonicalPath === (route.replace(/\/$/, '') || '/');
    }, { timeout: 10000 }, urlPath).catch(() => {
      console.warn(`⚠️ Canonical never matched ${urlPath}; saving anyway`);
    });

    const html = await page.content();
    const outputPath = outputPathFor(urlPath);
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, html);
    console.log(`✅ Pre-rendered: ${urlPath}`);
    return { url: urlPath, ok: true, outputPath: path.relative(BUILD_DIR, outputPath) };
  } catch (error) {
    console.error(`❌ Failed: ${urlPath} -> ${error.message}`);
    return { url: urlPath, ok: false, error: error.message };
  } finally {
    await page.close().catch(() => {});
  }
}

async function renderInBatches(browser, urls) {
  const results = [];
  for (let i = 0; i < urls.length; i += CONCURRENCY) {
    const chunk = urls.slice(i, i + CONCURRENCY);
    console.log(`\n📦 Rendering ${i + 1}-${Math.min(i + chunk.length, urls.length)} of ${urls.length}`);
    const chunkResults = await Promise.all(chunk.map(url => renderUrl(browser, url)));
    results.push(...chunkResults);
  }
  return results;
}

async function main() {
  if (!fs.existsSync(BUILD_DIR)) {
    throw new Error("Build directory does not exist. Run 'npm run build:vite' first.");
  }

  const app = express();
  // Keep the untouched Vite shell: once "/" is prerendered, build/index.html holds the home page
  const shellPath = path.join(BUILD_DIR, '.prerender-shell.html');
  if (!fs.existsSync(shellPath)) {
    fs.copyFileSync(path.join(BUILD_DIR, 'index.html'), shellPath);
  }
  const pristineIndexHtml = fs.readFileSync(shellPath, 'utf8');
  if (pristineIndexHtml.includes('data-rh=')) {
    throw new Error('build/index.html is already prerendered. Run `npm run build:vite` first.');
  }

  app.use((req, res, next) => {
    const ext = path.extname(req.path);
    if (!ext || ext === '.html') {
      res.send(pristineIndexHtml);
    } else {
      next();
    }
  });
  app.use(express.static(BUILD_DIR));

  const server = app.listen(PORT);
  let browser;

  try {
    const urls = getIndexableRoutes().map(route => route.url).slice(0, RENDER_LIMIT);
    console.log(`🚀 Prerender server: http://localhost:${PORT}`);
    console.log(`📋 Total URLs to prerender: ${urls.length}`);

    try {
      browser = await launchBrowser();
    } catch (err) {
      if (process.env.VERCEL) {
        // Don't block the deploy; the site still works as a client-rendered app
        console.error(`🚨 PRERENDER SKIPPED: Chromium failed to launch on Vercel: ${err.message}`);
        return;
      }
      throw new Error(`Puppeteer failed to launch Chrome: ${err.message}\nRun: npm run puppeteer:install`);
    }

    const results = await renderInBatches(browser, urls);
    const failed = results.filter(result => !result.ok);
    const criticalFailed = failed.filter(result => CRITICAL_URLS.has(result.url));

    const manifest = {
      generatedAt: new Date().toISOString(),
      count: results.length,
      succeeded: results.length - failed.length,
      failed: failed.length,
      results,
    };
    fs.writeFileSync(path.join(BUILD_DIR, 'prerender-manifest.json'), JSON.stringify(manifest, null, 2));

    if (criticalFailed.length > 0) {
      throw new Error(`Critical prerender failures: ${criticalFailed.map(result => result.url).join(', ')}`);
    }

    if (failed.length > 0) {
      console.warn(`⚠️ Completed with ${failed.length} non-critical prerender failures. See build/prerender-manifest.json.`);
    } else {
      console.log(`🎉 Success! Pre-rendered ${results.length} URLs.`);
    }
  } finally {
    if (browser) await browser.close().catch(() => {});
    await new Promise(resolve => server.close(resolve));
  }
}

main().catch(error => {
  console.error('🔥 Fatal prerender error:', error);
  process.exit(1);
});

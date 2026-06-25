import fs from 'fs';
import path from 'path';
import express from 'express';
import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { getIndexableRoutes } from './route-manifest.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BUILD_DIR = path.resolve(__dirname, '../build');
const PORT = Number(process.env.PRERENDER_PORT || 3001);
const CONCURRENCY = Number(process.env.PRERENDER_CONCURRENCY || 4);
const RENDER_LIMIT = process.env.PRERENDER_LIMIT ? Number(process.env.PRERENDER_LIMIT) : Infinity;
const CRITICAL_URLS = new Set(['/', '/shop', '/contact', '/services/large-format', '/blog']);

function outputPathFor(urlPath) {
  if (urlPath === '/') return path.join(BUILD_DIR, 'index.html');
  return path.join(BUILD_DIR, urlPath.replace(/^\//, ''), 'index.html');
}

async function renderUrl(browser, urlPath) {
  const page = await browser.newPage();
  try {
    await page.setViewport({ width: 1366, height: 900, deviceScaleFactor: 1 });
    await page.goto(`http://localhost:${PORT}${urlPath}`, {
      waitUntil: 'networkidle0',
      timeout: 45000,
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
  const pristineIndexHtml = fs.readFileSync(path.join(BUILD_DIR, 'index.html'), 'utf8');

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

    browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    }).catch(err => {
      throw new Error(`Puppeteer failed to launch Chrome: ${err.message}\nRun: npm run puppeteer:install`);
    });

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

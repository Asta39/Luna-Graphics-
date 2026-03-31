import fs from 'fs';
import path from 'path';
import express from 'express';
import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BUILD_DIR = path.resolve(__dirname, '../build');
const PORT = 3001;

// Set to Infinity to render everything, or set to 10 to just test it first
const RENDER_LIMIT = Infinity; 
const CONCURRENCY = 5; // Run 5 at a time to be fast without crashing

const app = express();
// Load pristine index.html into memory once so it doesn't get corrupted when we overwrite BUILD_DIR/index.html
const pristineIndexHtml = fs.readFileSync(path.join(BUILD_DIR, 'index.html'), 'utf8');

// Enable HTML5 history fallback so express serves index.html for unknown child routes
app.use((req, res, next) => {
  const ext = path.extname(req.path);
  if (!ext || ext === '.html') {
    res.send(pristineIndexHtml);
  } else {
    next();
  }
});
app.use(express.static(BUILD_DIR));

const server = app.listen(PORT, async () => {
  console.log(`\n🚀 Prerender Server starting on http://localhost:${PORT}`);
  
  try {
    const urlsToRender = ['/']; // Always do root
    
    // Safety check if build dir exists
    if (!fs.existsSync(BUILD_DIR)) {
      throw new Error("Build directory does not exist. Run 'npm run build' first!");
    }

    const xmlFiles = fs.readdirSync(BUILD_DIR).filter(f => f.startsWith('sitemap') && f.endsWith('.xml') && f !== 'sitemap.xml');
    
    xmlFiles.forEach(file => {
      const content = fs.readFileSync(path.join(BUILD_DIR, file), 'utf8');
      const matches = [...content.matchAll(/<loc>https:\/\/lunagraphics\.co\.ke(.*?)<\/loc>/g)];
      matches.forEach(m => {
        if (m[1] && m[1] !== '/') urlsToRender.push(m[1]);
      });
    });

    const uniqueUrls = [...new Set(urlsToRender)].slice(0, RENDER_LIMIT);
    console.log(`📋 Found ${uniqueUrls.length} unique URLs to pre-render. Processing in batches of ${CONCURRENCY}...\n`);

    console.log(`🤖 Launching Headless Chrome...`);
    const browser = await puppeteer.launch({ headless: "new" });

    // Helper to process a chunk of urls
    const renderChunk = async (urls) => {
      const promises = urls.map(async (urlPath) => {
        const page = await browser.newPage();
        try {
          await page.goto(`http://localhost:${PORT}${urlPath}`, { waitUntil: 'networkidle0', timeout: 30000 });
          const html = await page.content();
          
          let outputPath;
          if (urlPath === '/') {
             outputPath = path.join(BUILD_DIR, 'index.html');
          } else {
             outputPath = path.join(BUILD_DIR, urlPath, 'index.html');
          }

          const outputDir = path.dirname(outputPath);
          
          if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });
          fs.writeFileSync(outputPath, html);
          
          console.log(`✅ Pre-rendered: ${urlPath || '/'}`);
        } catch (e) {
          console.error(`❌ Failed: ${urlPath || '/'} -> ${e.message}`);
        } finally {
          await page.close();
        }
      });
      await Promise.all(promises);
    };

    // Batching to avoid maxing out RAM
    for (let i = 0; i < uniqueUrls.length; i += CONCURRENCY) {
      const chunk = uniqueUrls.slice(i, i + CONCURRENCY);
      await renderChunk(chunk);
    }

    await browser.close();
    console.log(`\n🎉 Success! Pre-rendered ${uniqueUrls.length} pages to static HTML.`);
  } catch (err) {
    console.error(`\n🔥 Fatal Error:`, err);
  } finally {
    server.close();
    process.exit(0);
  }
});

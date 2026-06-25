import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { getIndexableRoutes } from './route-manifest.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://lunagraphics.co.ke';
const PUBLIC_DIR = path.resolve(__dirname, '../public');
const CHUNK_SIZE = 45000;

function xmlEscape(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function urlToXml(route) {
  return `  <url>\n    <loc>${xmlEscape(BASE_URL + route.url)}</loc>\n    <lastmod>${xmlEscape(route.lastmod)}</lastmod>\n    <changefreq>${xmlEscape(route.changefreq)}</changefreq>\n    <priority>${xmlEscape(route.priority)}</priority>\n  </url>`;
}

function sitemapXml(routes) {
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes.map(urlToXml).join('\n')}\n</urlset>\n`;
}

function sitemapIndexXml(files) {
  const today = new Date().toISOString().split('T')[0];
  return `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${files.map(file => `  <sitemap>\n    <loc>${BASE_URL}/${file}</loc>\n    <lastmod>${today}</lastmod>\n  </sitemap>`).join('\n')}\n</sitemapindex>\n`;
}

function removeOldGeneratedSitemaps() {
  if (!fs.existsSync(PUBLIC_DIR)) fs.mkdirSync(PUBLIC_DIR, { recursive: true });
  for (const file of fs.readdirSync(PUBLIC_DIR)) {
    if (/^sitemap-(pages|products|blogs|services|routes)-?\d*\.xml$/.test(file)) {
      fs.unlinkSync(path.join(PUBLIC_DIR, file));
    }
  }
}

function chunkRoutes(routes) {
  const groups = {
    pages: routes.filter(route => ['page', 'legal', 'service-page'].includes(route.type)),
    blogs: routes.filter(route => route.type === 'blog-post'),
    products: routes.filter(route => route.type === 'product'),
    services: routes.filter(route => route.type === 'service-detail'),
  };

  const chunks = [];
  for (const [name, groupRoutes] of Object.entries(groups)) {
    for (let i = 0; i < groupRoutes.length; i += CHUNK_SIZE) {
      const suffix = groupRoutes.length > CHUNK_SIZE ? `-${Math.floor(i / CHUNK_SIZE) + 1}` : '';
      chunks.push({ file: `sitemap-${name}${suffix}.xml`, routes: groupRoutes.slice(i, i + CHUNK_SIZE) });
    }
  }
  return chunks.filter(chunk => chunk.routes.length > 0);
}

const routes = getIndexableRoutes();
removeOldGeneratedSitemaps();

const chunks = chunkRoutes(routes);
for (const chunk of chunks) {
  fs.writeFileSync(path.join(PUBLIC_DIR, chunk.file), sitemapXml(chunk.routes));
}
fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), sitemapIndexXml(chunks.map(chunk => chunk.file)));
fs.writeFileSync(path.join(PUBLIC_DIR, 'route-manifest.json'), JSON.stringify({ count: routes.length, routes }, null, 2));

console.log(`✅ Generated sitemap index with ${routes.length} URLs across ${chunks.length} sitemap files.`);
for (const chunk of chunks) {
  console.log(`  - ${chunk.file}: ${chunk.routes.length} URLs`);
}

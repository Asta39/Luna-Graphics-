import fs from 'fs';
import path from 'path';
import { getIndexableRoutes } from './route-manifest.js';

const ROOT = process.cwd();
const BUILD_DIR = path.join(ROOT, 'build');
const PUBLIC_DIR = path.join(ROOT, 'public');
const routes = getIndexableRoutes();
const failures = [];

function assert(condition, message) {
  if (!condition) failures.push(message);
}

assert(routes.length > 50, `Expected more than 50 indexable routes, found ${routes.length}`);
assert(routes.some(route => route.url === '/'), 'Missing homepage route /');
assert(!routes.some(route => route.url.includes('/homepage')), 'Route manifest must not include /homepage');
assert(routes.some(route => route.url.startsWith('/blog/')), 'Missing blog post routes');
assert(routes.some(route => route.url.startsWith('/shop/product/')), 'Missing product routes');

const publicSitemap = path.join(PUBLIC_DIR, 'sitemap.xml');
assert(fs.existsSync(publicSitemap), 'public/sitemap.xml is missing. Run npm run generate-sitemap.');
if (fs.existsSync(publicSitemap)) {
  const sitemap = fs.readFileSync(publicSitemap, 'utf8');
  assert(!sitemap.includes('/homepage'), 'Sitemap index contains /homepage');
}

if (fs.existsSync(BUILD_DIR)) {
  const buildSitemap = path.join(BUILD_DIR, 'sitemap.xml');
  assert(fs.existsSync(buildSitemap), 'build/sitemap.xml is missing');
  const prerenderManifest = path.join(BUILD_DIR, 'prerender-manifest.json');
  assert(fs.existsSync(prerenderManifest), 'build/prerender-manifest.json is missing');
  for (const url of ['/', '/shop', '/contact', '/services/large-format', '/blog']) {
    const htmlPath = url === '/' ? path.join(BUILD_DIR, 'index.html') : path.join(BUILD_DIR, url.replace(/^\//, ''), 'index.html');
    assert(fs.existsSync(htmlPath), `Missing prerendered HTML for ${url}`);
  }
}

if (failures.length) {
  console.error('❌ SEO validation failed:');
  failures.forEach(failure => console.error(`  - ${failure}`));
  process.exit(1);
}

console.log(`✅ SEO validation passed with ${routes.length} indexable routes.`);

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const SRC_DIR = path.join(ROOT_DIR, 'src');
const DATA_DIR = path.join(SRC_DIR, 'data');

const STATIC_ROUTES = [
  { url: '/', priority: '1.0', changefreq: 'daily', type: 'page' },
  { url: '/shop', priority: '0.9', changefreq: 'weekly', type: 'page' },
  { url: '/services/large-format', priority: '0.85', changefreq: 'monthly', type: 'service-page' },
  { url: '/services/plotting', priority: '0.85', changefreq: 'monthly', type: 'service-page' },
  { url: '/services/uv-printing', priority: '0.85', changefreq: 'monthly', type: 'service-page' },
  { url: '/services/cnc-cutting', priority: '0.85', changefreq: 'monthly', type: 'service-page' },
  { url: '/services/laser-cutting', priority: '0.85', changefreq: 'monthly', type: 'service-page' },
  { url: '/services/t-shirt-printing', priority: '0.85', changefreq: 'monthly', type: 'service-page' },
  { url: '/corporate-services', priority: '0.8', changefreq: 'monthly', type: 'page' },
  { url: '/corporate/events-exhibitions', priority: '0.75', changefreq: 'monthly', type: 'page' },
  { url: '/corporate/corporate-branding', priority: '0.75', changefreq: 'monthly', type: 'page' },
  { url: '/about', priority: '0.75', changefreq: 'monthly', type: 'page' },
  { url: '/team', priority: '0.7', changefreq: 'monthly', type: 'page' },
  { url: '/contact', priority: '0.8', changefreq: 'monthly', type: 'page' },
  { url: '/gallery', priority: '0.75', changefreq: 'weekly', type: 'page' },
  { url: '/blog', priority: '0.8', changefreq: 'daily', type: 'page' },
  { url: '/faq', priority: '0.65', changefreq: 'monthly', type: 'page' },
  { url: '/sitemap', priority: '0.5', changefreq: 'monthly', type: 'page' },
  { url: '/privacy-policy', priority: '0.3', changefreq: 'yearly', type: 'legal' },
  { url: '/terms-of-service', priority: '0.3', changefreq: 'yearly', type: 'legal' },
  { url: '/corporate-terms', priority: '0.3', changefreq: 'yearly', type: 'legal' },
];

function readIfExists(filePath) {
  return fs.existsSync(filePath) ? fs.readFileSync(filePath, 'utf8') : '';
}

function lastModifiedFor(filePath) {
  try {
    return fs.statSync(filePath).mtime.toISOString().split('T')[0];
  } catch {
    return new Date().toISOString().split('T')[0];
  }
}

function extractStringValues(content, key) {
  const matches = [...content.matchAll(new RegExp(`${key}:\\s*['\"]([^'\"]+)['\"]`, 'g'))];
  return [...new Set(matches.map(match => match[1]).filter(Boolean))];
}

function extractProductIds() {
  const filePath = path.join(DATA_DIR, 'products.js');
  const content = readIfExists(filePath);
  return extractStringValues(content, 'id').map(id => ({
    url: `/shop/product/${id}`,
    priority: '0.7',
    changefreq: 'weekly',
    type: 'product',
    source: 'src/data/products.js',
    lastmod: lastModifiedFor(filePath),
  }));
}

function extractBlogSlugs() {
  const filePath = path.join(DATA_DIR, 'blogData.js');
  const content = readIfExists(filePath);
  return extractStringValues(content, 'slug').map(slug => ({
    url: `/blog/${slug}`,
    priority: '0.65',
    changefreq: 'monthly',
    type: 'blog-post',
    source: 'src/data/blogData.js',
    lastmod: lastModifiedFor(filePath),
  }));
}

function extractServiceIds() {
  const filePath = path.join(DATA_DIR, 'services.js');
  const content = readIfExists(filePath);
  return extractStringValues(content, 'id').map(id => ({
    url: `/service/${id}`,
    priority: '0.65',
    changefreq: 'monthly',
    type: 'service-detail',
    source: 'src/data/services.js',
    lastmod: lastModifiedFor(filePath),
  }));
}

export function getIndexableRoutes() {
  const routes = [
    ...STATIC_ROUTES.map(route => ({
      ...route,
      source: route.source || 'static',
      lastmod: route.lastmod || new Date().toISOString().split('T')[0],
    })),
    ...extractBlogSlugs(),
    ...extractProductIds(),
    ...extractServiceIds(),
  ];

  const seen = new Set();
  return routes
    .filter(route => route.url && route.url.startsWith('/'))
    .filter(route => !route.url.includes('/homepage'))
    .filter(route => {
      if (seen.has(route.url)) return false;
      seen.add(route.url);
      return true;
    })
    .sort((a, b) => a.url.localeCompare(b.url));
}

if (import.meta.url === `file://${process.argv[1]}`) {
  console.log(JSON.stringify(getIndexableRoutes(), null, 2));
}

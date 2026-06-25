import fs from 'fs';
import path from 'path';

const ROOT = process.cwd();
const SEARCH_DIRS = ['src', 'scripts', 'public'];
const BAD_PATTERNS = [
  '/contact-page',
  '/gallery-page',
  '/service-detail-page',
  'cl assName',
  '1 day`',
];

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  return entries.flatMap(entry => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(fullPath);
    return [fullPath];
  });
}

const files = SEARCH_DIRS.flatMap(dir => walk(path.join(ROOT, dir)))
  .filter(file => /\.(js|jsx|mjs|cjs|html|css|xml|txt)$/.test(file))
  .filter(file => !file.endsWith(path.join('scripts', 'validate-links.js')));

const failures = [];
for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  for (const pattern of BAD_PATTERNS) {
    if (content.includes(pattern)) {
      failures.push(`${path.relative(ROOT, file)} contains ${pattern}`);
    }
  }
}

if (failures.length) {
  console.error('❌ Link/runtime validation failed:');
  failures.forEach(failure => console.error(`  - ${failure}`));
  process.exit(1);
}

console.log('✅ Link/runtime validation passed.');

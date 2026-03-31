import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://lunagraphics.co.ke';
const today = new Date().toISOString().split('T')[0];

// ==================== RECURSIVELY SCAN PAGES FOLDER ====================

const SKIP_FOLDERS = ['components', 'shared', 'hooks', 'utils', 'styles', 'assets', 'context', 'types'];
const SKIP_FILES = ['layout', 'template', 'app', 'main', 'index', 'routes', 'routesconfig', 'types', 'constants', 'utils', 'not-found', 'notfound', '404'];

function scanPagesFolderRecursive(dir, basePath = '') {
  const pages = [];
  const items = fs.readdirSync(dir);
  
  items.forEach(item => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      if (SKIP_FOLDERS.includes(item.toLowerCase())) return;
      
      const subPages = scanPagesFolderRecursive(fullPath, path.join(basePath, item));
      pages.push(...subPages);
    } else if (item.endsWith('.jsx') || item.endsWith('.js')) {
      const pageName = item.replace(/\.(jsx|js)$/, '');
      
      if (pageName.includes('.test') || pageName.includes('.spec')) return;
      
      // Build clean URL
      const pagePath = path.join(basePath, pageName).replace(/\\/g, '/');
      const pathParts = pagePath.split('/').filter(p => p);
      
      // NEW LOGIC: Support index.jsx as the parent folder's route
      let urlPath = pagePath;
      if (pageName.toLowerCase() === 'index') {
        if (!basePath) return; // Skip src/pages/index.js if it's the main entry (usually handled elsewhere)
        urlPath = basePath.replace(/\\/g, '/');
      } else if (SKIP_FILES.includes(pageName.toLowerCase())) {
        return;
      }
      
      // Skip dynamic templates
      if (pageName.toLowerCase() === 'blog-post' || pageName.toLowerCase() === 'product-detail' || pageName.toLowerCase() === 'service-detail') return;
      
      // Determine priority
      let priority = '0.7';
      let changefreq = 'monthly';
      
      const cleanUrl = urlPath.replace(/^\//, '').toLowerCase();
      
      if (!cleanUrl || cleanUrl === 'home' || cleanUrl === 'homepage') {
        urlPath = '/';
        priority = '1.0';
        changefreq = 'daily';
      } else if (cleanUrl === 'about') {
        priority = '0.8';
      } else if (cleanUrl === 'shop') {
        priority = '0.9';
        changefreq = 'weekly';
      } else if (cleanUrl === 'blog') {
        priority = '0.8';
        changefreq = 'daily';
      } else if (cleanUrl === 'contact') {
        priority = '0.7';
      } else if (cleanUrl.includes('service')) {
        priority = '0.8';
      } else if (cleanUrl === 'gallery') {
        priority = '0.7';
      } else if (cleanUrl === 'team') {
        priority = '0.7';
      } else if (cleanUrl === 'cart') {
        priority = '0.5';
      }
      
      pages.push({
        url: urlPath === '/' ? '/' : `/${urlPath.replace(/^\//, '')}`,
        priority,
        changefreq,
        source: path.join(basePath, item)
      });
    }
  });
  
  return pages;
}

function scanPagesFolder() {
  const pagesDir = path.resolve(__dirname, '../src/pages');
  
  if (!fs.existsSync(pagesDir)) {
    console.log('⚠️ Pages directory not found at:', pagesDir);
    return [];
  }
  
  return scanPagesFolderRecursive(pagesDir);
}

// ==================== LOAD DATA FILES ====================

async function loadData() {
  const data = {};
  const dataDir = path.resolve(__dirname, '../src/data');
  
  async function tryLoad(fileName, possibleExportNames) {
    try {
      const filePath = path.join(dataDir, fileName);
      
      if (!fs.existsSync(filePath)) {
        console.log(`⚠️ ${fileName} not found`);
        data[possibleExportNames[0]] = [];
        return;
      }
      
      // Read the file, replace asset imports, write to temp file
      let fileContent = fs.readFileSync(filePath, 'utf8');
      
      // Replace asset imports: import xyz from '../assets/foo.jpg' -> const xyz = '../assets/foo.jpg'
      // This handles the error where node fails to parse .jpg files
      fileContent = fileContent.replace(/import\s+([a-zA-Z0-9_]+)\s+from\s+['"]([^'"]+\.(jpe?g|png|gif|svg|webp|ico|mp4|webm))['"];?/gi, "const $1 = '$2';");
      
      const tempFileName = `.temp-${fileName}`;
      const tempFilePath = path.join(dataDir, tempFileName);
      fs.writeFileSync(tempFilePath, fileContent, 'utf8');
      
      // WINDOWS FIX: Convert to file:// URL using the temp file
      const fileUrl = new URL('file://' + tempFilePath.replace(/\\/g, '/')).href;
      
      let module;
      try {
        module = await import(fileUrl);
      } finally {
        if (fs.existsSync(tempFilePath)) {
          fs.unlinkSync(tempFilePath);
        }
      }
      
      let exportedData = null;
      let foundExportName = null;
      let isObject = false;
      
      // Check each possible export name
      for (const exportName of possibleExportNames) {
        if (module[exportName]) {
          // Check if it's an array
          if (Array.isArray(module[exportName])) {
            exportedData = module[exportName];
            foundExportName = exportName;
            break;
          }
          // Check if it's an object (like your services)
          else if (typeof module[exportName] === 'object' && module[exportName] !== null) {
            exportedData = module[exportName];
            foundExportName = exportName;
            isObject = true;
            break;
          }
        }
      }
      
      // Check for default export
      if (!exportedData && module.default) {
        if (Array.isArray(module.default)) {
          exportedData = module.default;
          foundExportName = 'default';
        } else if (typeof module.default === 'object' && module.default !== null) {
          exportedData = module.default;
          foundExportName = 'default';
          isObject = true;
        }
      }
      
      // Check all exports
      if (!exportedData) {
        const keys = Object.keys(module);
        for (const key of keys) {
          if (key === 'default') continue;
          const val = module[key];
          if (Array.isArray(val) && val.length > 0) {
            exportedData = val;
            foundExportName = key;
            break;
          } else if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
            // Check if it's a data object (not a function)
            const objKeys = Object.keys(val);
            if (objKeys.length > 0 && typeof val[objKeys[0]] === 'object') {
              exportedData = val;
              foundExportName = key;
              isObject = true;
              break;
            }
          }
        }
      }
      
      const primaryKey = possibleExportNames[0];
      
      // Convert object to array if needed (like your services object)
      if (isObject && exportedData) {
        const values = Object.values(exportedData);
        // Check if values are objects (not primitives)
        if (values.length > 0 && typeof values[0] === 'object') {
          data[primaryKey] = values;
          console.log(`✅ Loaded ${fileName}: Found object "${foundExportName}" with ${values.length} service entries (converted to array)`);
        } else {
          data[primaryKey] = [];
          console.log(`⚠️ ${fileName}: Object found but values aren't objects`);
        }
      } else {
        data[primaryKey] = exportedData || [];
        if (exportedData) {
          console.log(`✅ Loaded ${fileName}: Found "${foundExportName}" with ${exportedData.length || Object.keys(exportedData).length} items`);
        } else {
          console.log(`⚠️ ${fileName}: No data found`);
        }
      }
      
    } catch (error) {
      console.error(`❌ Error loading ${fileName}:`, error.message);
      data[possibleExportNames[0]] = [];
    }
  }
  
  // Load all data files
  await tryLoad('products.js', ['products', 'productList', 'items']);
  await tryLoad('blogData.js', ['blogs', 'blogPosts', 'posts', 'blog', 'articles']);
  await tryLoad('caseStudiesData.js', ['caseStudies', 'cases', 'studies', 'caseStudyList']);
  await tryLoad('galleryData.js', ['gallery', 'galleryItems', 'images', 'photos']);
  
  // IMPORTANT: serviceData.js exports an object, not array
  await tryLoad('serviceData.js', ['services', 'serviceList', 'serviceItems', 'serviceData', 'data']);
  
  // Load team data (handles multiple groups: leadership, technical, design)
  await tryLoad('teamData.js', ['leadershipTeam', 'technicalTeam', 'designTeam', 'team', 'teamMembers']);
  
  // If we only loaded one group, let's try to get others if needed 
  // (Note: the current tryLoad implementation only picks the first match)
  // For teamData specifically, we want everything.
  try {
    const teamFile = path.join(dataDir, 'teamData.js');
    if (fs.existsSync(teamFile)) {
      const fileUrl = new URL('file://' + teamFile.replace(/\\/g, '/')).href;
      const module = await import(fileUrl);
      const allMembers = [];
      if (Array.isArray(module.leadershipTeam)) allMembers.push(...module.leadershipTeam);
      if (Array.isArray(module.technicalTeam)) allMembers.push(...module.technicalTeam);
      if (Array.isArray(module.designTeam)) allMembers.push(...module.designTeam);
      if (allMembers.length > 0) {
        data.team = allMembers;
        console.log(`✅ Refined teamData.js: Merged leadership, technical, and design teams (${allMembers.length} members total)`);
      }
    }
  } catch (e) {
    console.log("ℹ️ Standard team loading used");
  }

  await tryLoad('reviewsData.js', ['reviews', 'testimonials', 'customerReviews']);
  await tryLoad('faqData.js', ['faq', 'faqs', 'questions', 'faqList']);
  await tryLoad('corporateEquipData.js', ['corporate', 'corporateEquipment', 'equipment', 'corpEquip']);
  await tryLoad('machineShowcaseData.js', ['machines', 'machineShowcase', 'showcase', 'equipment']);
  await tryLoad('homepageServicesData.js', ['homepageServices', 'homeServices', 'featuredServices']);
  
  return data;
}

// ==================== GENERATE SITEMAP ====================

function chunkArray(array, size) {
  const chunks = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
}

function generateSitemapString(urls) {
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;
  urls.forEach(u => {
    sitemap += `\n  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${u.lastmod}</lastmod>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`;
  });
  sitemap += `\n</urlset>`;
  return sitemap;
}

function writeSitemapFile(filename, content) {
  const publicDir = path.resolve(__dirname, '../public');
  if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });
  const outputPath = path.join(publicDir, filename);
  try {
    fs.writeFileSync(outputPath, content, 'utf8');
    console.log(`✅ Saved: ${filename}`);
  } catch (err) {
    console.error(`❌ Error saving ${filename}:`, err);
  }
}

function generateSitemap(staticPages, data) {
  const ITEMS_PER_SITEMAP = 50;
  const sitemapFiles = [];

  // 1. Static Pages
  const seenUrls = new Set();
  const uniquePages = [];
  staticPages.forEach(page => {
    if (!seenUrls.has(page.url)) {
      seenUrls.add(page.url);
      uniquePages.push(page);
    }
  });
  uniquePages.sort((a, b) => parseFloat(b.priority) - parseFloat(a.priority));
  
  const staticUrls = uniquePages.map(page => ({
    loc: `${BASE_URL}${page.url}`,
    lastmod: today,
    changefreq: page.changefreq,
    priority: page.priority
  }));
  console.log(`\n📄 Adding ${staticUrls.length} static pages...`);
  writeSitemapFile('sitemap-pages.xml', generateSitemapString(staticUrls));
  sitemapFiles.push('sitemap-pages.xml');

  // 2. Services
  const servicesUrls = [];
  if (data.services && data.services.length > 0) {
    console.log(`🔧 Adding ${data.services.length} services...`);
    data.services.forEach(service => {
      // Use service.id to match the /service/:serviceId route in App.jsx
      const serviceId = service.id || (service.name ? service.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') : `service-${Math.random().toString(36).substr(2, 9)}`);
      servicesUrls.push({
        loc: `${BASE_URL}/service/${serviceId}`,
        lastmod: today,
        changefreq: 'monthly',
        priority: '0.8'
      });
    });
    writeSitemapFile('sitemap-services.xml', generateSitemapString(servicesUrls));
    sitemapFiles.push('sitemap-services.xml');
  }

  // 3. Blogs (Chunked)
  if (data.blogs && data.blogs.length > 0) {
    console.log(`📝 Processing ${data.blogs.length} blog posts into chunks...`);
    const blogUrls = data.blogs.map(blog => {
      const slug = blog.slug || blog.id || (blog.title ? blog.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') : `post-${Math.random().toString(36).substr(2, 9)}`);
      const date = blog.date || blog.publishDate || blog.updatedAt || blog.createdAt || today;
      return {
        loc: `${BASE_URL}/blog/${slug}`,
        lastmod: date,
        changefreq: 'monthly',
        priority: '0.6'
      };
    });
    const chunks = chunkArray(blogUrls, ITEMS_PER_SITEMAP);
    chunks.forEach((chunk, index) => {
      const filename = `sitemap-blogs-${index + 1}.xml`;
      writeSitemapFile(filename, generateSitemapString(chunk));
      sitemapFiles.push(filename);
    });
  }

  // 4. Products (Chunked)
  if (data.products && data.products.length > 0) {
    console.log(`🛍️ Processing ${data.products.length} products into chunks...`);
    const productUrls = data.products.map(product => {
      const slug = product.slug || product.id || (product.name ? product.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') : `product-${Math.random().toString(36).substr(2, 9)}`);
      const category = (product.category || 'general').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      return {
        loc: `${BASE_URL}/shop/product/${slug}`,
        lastmod: product.updatedAt || product.date || today,
        changefreq: 'weekly',
        priority: '0.7'
      };
    });
    const chunks = chunkArray(productUrls, ITEMS_PER_SITEMAP);
    chunks.forEach((chunk, index) => {
      const filename = `sitemap-products-${index + 1}.xml`;
      writeSitemapFile(filename, generateSitemapString(chunk));
      sitemapFiles.push(filename);
    });
  }

  // 5. Others (Case studies, gallery, team)
  const otherUrls = [];
  if (data.caseStudies && data.caseStudies.length > 0) {
    console.log(`📊 Adding ${data.caseStudies.length} case studies...`);
    data.caseStudies.forEach(study => {
      const slug = study.slug || study.id || (study.title ? study.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') : `case-${Math.random().toString(36).substr(2, 9)}`);
      otherUrls.push({
        loc: `${BASE_URL}/case-studies/${slug}`,
        lastmod: study.date || study.updatedAt || today,
        changefreq: 'monthly',
        priority: '0.6'
      });
    });
  }
  if (data.gallery && data.gallery.length > 0) {
    console.log(`🖼️ Adding ${data.gallery.length} gallery items...`);
    data.gallery.forEach(item => {
      const slug = item.slug || item.id || (item.title ? item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') : `gallery-${Math.random().toString(36).substr(2, 9)}`);
      otherUrls.push({
        loc: `${BASE_URL}/gallery/${slug}`,
        lastmod: item.date || item.updatedAt || today,
        changefreq: 'monthly',
        priority: '0.5'
      });
    });
  }
  if (data.team && data.team.length > 0) {
    console.log(`👥 Found ${data.team.length} team members. (Individual pages skipped as they use in-page expansion)`);
    // Team member individual pages skipped as they are handled by expansion cards on /team
  }
  
  if (otherUrls.length > 0) {
    writeSitemapFile('sitemap-others.xml', generateSitemapString(otherUrls));
    sitemapFiles.push('sitemap-others.xml');
  }

  // 6. Master Sitemap Index
  let sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;
  sitemapFiles.forEach(file => {
    sitemapIndex += `\n  <sitemap>\n    <loc>${BASE_URL}/${file}</loc>\n    <lastmod>${today}</lastmod>\n  </sitemap>`;
  });
  sitemapIndex += `\n</sitemapindex>`;
  
  console.log(`\n🔗 Assembling global sitemap index with ${sitemapFiles.length} chunked sitemaps...`);
  writeSitemapFile('sitemap.xml', sitemapIndex);

  console.log(`\n✅ Completed Sitemap Generation! Your main sitemap index is now sitemap.xml in /public`);
}

// ==================== RUN ====================

console.log('🔍 Scanning pages folder...');
const staticPages = scanPagesFolder();
console.log(`Found ${staticPages.length} pages:`, staticPages.map(p => p.url).join(', '));

console.log('\n📦 Loading data files...');
loadData().then(data => {
  generateSitemap(staticPages, data);
}).catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
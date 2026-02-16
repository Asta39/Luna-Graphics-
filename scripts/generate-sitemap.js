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
      
      if (SKIP_FILES.includes(pageName.toLowerCase())) return;
      if (pageName.includes('.test') || pageName.includes('.spec')) return;
      
      // Build clean URL
      let urlPath = path.join(basePath, pageName).replace(/\\/g, '/');
      const pathParts = urlPath.split('/').filter(p => p);
      
      // Remove duplicates like "about/about"
      const cleanedParts = [];
      for (let i = 0; i < pathParts.length; i++) {
        if (i === 0 || pathParts[i].toLowerCase() !== pathParts[i-1].toLowerCase()) {
          cleanedParts.push(pathParts[i]);
        }
      }
      
      urlPath = cleanedParts.join('/');
      
      // Skip dynamic templates
      if (pageName.toLowerCase() === 'blog-post' || pageName.toLowerCase() === 'product-detail') return;
      
      // Determine priority
      let priority = '0.7';
      let changefreq = 'monthly';
      
      if (!urlPath || urlPath === 'home' || urlPath === 'homepage') {
        urlPath = '/';
        priority = '1.0';
        changefreq = 'daily';
      } else if (urlPath === 'about') {
        priority = '0.8';
      } else if (urlPath === 'shop') {
        priority = '0.9';
        changefreq = 'weekly';
      } else if (urlPath === 'blog') {
        priority = '0.8';
        changefreq = 'daily';
      } else if (urlPath === 'contact') {
        priority = '0.7';
      } else if (urlPath.includes('service')) {
        priority = '0.8';
      } else if (urlPath === 'gallery') {
        priority = '0.7';
      } else if (urlPath === 'team') {
        priority = '0.6';
      } else if (urlPath === 'cart') {
        priority = '0.5';
      }
      
      pages.push({
        url: urlPath === '/' ? '/' : `/${urlPath}`,
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
      
      // WINDOWS FIX: Convert to file:// URL
      const fileUrl = new URL('file://' + filePath.replace(/\\/g, '/')).href;
      
      const module = await import(fileUrl);
      
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
  
  await tryLoad('teamData.js', ['team', 'teamMembers', 'members', 'staff']);
  await tryLoad('reviewsData.js', ['reviews', 'testimonials', 'customerReviews']);
  await tryLoad('faqData.js', ['faq', 'faqs', 'questions', 'faqList']);
  await tryLoad('corporateEquipData.js', ['corporate', 'corporateEquipment', 'equipment', 'corpEquip']);
  await tryLoad('machineShowcaseData.js', ['machines', 'machineShowcase', 'showcase', 'equipment']);
  await tryLoad('homepageServicesData.js', ['homepageServices', 'homeServices', 'featuredServices']);
  
  return data;
}

// ==================== GENERATE SITEMAP ====================

function generateSitemap(staticPages, data) {
  // Remove duplicates
  const seenUrls = new Set();
  const uniquePages = [];
  
  staticPages.forEach(page => {
    if (!seenUrls.has(page.url)) {
      seenUrls.add(page.url);
      uniquePages.push(page);
    }
  });
  
  // Sort by priority
  uniquePages.sort((a, b) => parseFloat(b.priority) - parseFloat(a.priority));
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  // Add static pages
  console.log(`\n📄 Adding ${uniquePages.length} unique pages...`);
  uniquePages.forEach(page => {
    sitemap += `
  <url>
    <loc>${BASE_URL}${page.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
  });

  // Add blog posts
  if (data.blogs && data.blogs.length > 0) {
    console.log(`📝 Adding ${data.blogs.length} blog posts...`);
    data.blogs.forEach(blog => {
      const slug = blog.slug || blog.id || (blog.title ? blog.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') : `post-${Math.random().toString(36).substr(2, 9)}`);
      const date = blog.date || blog.publishDate || blog.updatedAt || blog.createdAt || today;
      
      sitemap += `
  <url>
    <loc>${BASE_URL}/blog/${slug}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`;
    });
  }

  // Add products
  if (data.products && data.products.length > 0) {
    console.log(`🛍️ Adding ${data.products.length} products...`);
    data.products.forEach(product => {
      const slug = product.slug || product.id || (product.name ? product.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') : `product-${Math.random().toString(36).substr(2, 9)}`);
      const category = (product.category || 'general').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      
      sitemap += `
  <url>
    <loc>${BASE_URL}/shop/${category}/${slug}</loc>
    <lastmod>${product.updatedAt || product.date || today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`;
    });
  }

  // Add services (now properly converted from object to array)
  if (data.services && data.services.length > 0) {
    console.log(`🔧 Adding ${data.services.length} services...`);
    data.services.forEach(service => {
      // Your services have a 'path' property like "/cnc-cutting"
      const slug = service.path ? service.path.replace(/^\//, '') : 
                   service.slug || service.id || 
                   (service.title ? service.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') : `service-${Math.random().toString(36).substr(2, 9)}`);
      
      sitemap += `
  <url>
    <loc>${BASE_URL}/services/${slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`;
    });
  } else {
    console.log('⚠️ No services found to add');
  }

  // Add case studies
  if (data.caseStudies && data.caseStudies.length > 0) {
    console.log(`📊 Adding ${data.caseStudies.length} case studies...`);
    data.caseStudies.forEach(study => {
      const slug = study.slug || study.id || (study.title ? study.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') : `case-${Math.random().toString(36).substr(2, 9)}`);
      
      sitemap += `
  <url>
    <loc>${BASE_URL}/case-studies/${slug}</loc>
    <lastmod>${study.date || study.updatedAt || today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`;
    });
  }

  // Add gallery items
  if (data.gallery && data.gallery.length > 0) {
    console.log(`🖼️ Adding ${data.gallery.length} gallery items...`);
    data.gallery.forEach(item => {
      const slug = item.slug || item.id || (item.title ? item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') : `gallery-${Math.random().toString(36).substr(2, 9)}`);
      
      sitemap += `
  <url>
    <loc>${BASE_URL}/gallery/${slug}</loc>
    <lastmod>${item.date || item.updatedAt || today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>`;
    });
  }

  // Add team members
  if (data.team && data.team.length > 0) {
    console.log(`👥 Adding ${data.team.length} team members...`);
    data.team.forEach(member => {
      const slug = member.slug || member.id || (member.name ? member.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') : `team-${Math.random().toString(36).substr(2, 9)}`);
      
      sitemap += `
  <url>
    <loc>${BASE_URL}/team/${slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>`;
    });
  }

  sitemap += `
</urlset>`;

  // Write to public folder
  const publicDir = path.resolve(__dirname, '../public');
  const outputPath = path.join(publicDir, 'sitemap.xml');
  
  // Ensure public directory exists
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  // Write file
  try {
    fs.writeFileSync(outputPath, sitemap, 'utf8');
    console.log(`\n✅ Sitemap saved successfully!`);
  } catch (err) {
    console.error(`❌ Error saving sitemap:`, err);
  }
  
  const totalDynamic = (data.blogs?.length || 0) + 
    (data.products?.length || 0) + 
    (data.services?.length || 0) +
    (data.caseStudies?.length || 0) + 
    (data.gallery?.length || 0) + 
    (data.team?.length || 0);

  console.log(`📄 Static pages: ${uniquePages.length}`);
  console.log(`📊 Dynamic content: ${totalDynamic}`);
  console.log(`🔗 Total URLs: ${uniquePages.length + totalDynamic}`);
  console.log(`📁 Location: ${outputPath}`);
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
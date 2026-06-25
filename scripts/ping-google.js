// scripts/ping-google.js
const SITEMAP_URL = 'https://lunagraphics.co.ke/sitemap.xml';

async function pingGoogle() {
  try {
    const response = await fetch(`http://www.google.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`);
    console.log('✅ Pinged Google successfully');
    console.log('📍 Sitemap URL:', SITEMAP_URL);
  } catch (error) {
    console.log('⚠️ Ping failed (non-critical):', error.message);
    console.log('💡 Manually submit at: https://search.google.com/search-console');
  }
}

pingGoogle();
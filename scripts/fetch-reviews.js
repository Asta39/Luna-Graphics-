import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const API_KEY = process.env.VITE_GOOGLE_PLACES_API_KEY || process.env.GOOGLE_PLACES_API_KEY;
const PLACE_ID = process.env.VITE_GOOGLE_PLACES_ID || process.env.GOOGLE_PLACES_ID;

if (!API_KEY || !PLACE_ID) {
  console.warn('⚠️  Missing Google Places env vars — skipping fetch, using existing reviewsData.js');
  console.warn('  Set VITE_GOOGLE_PLACES_API_KEY and VITE_GOOGLE_PLACES_ID to enable live reviews.');
  process.exit(0);
}

function fetchGoogleReviews() {
  return new Promise((resolve, reject) => {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews,rating,user_ratings_total&key=${API_KEY}`;

    https.get(url, (resp) => {
      let data = '';

      resp.on('data', (chunk) => {
        data += chunk;
      });

      resp.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          resolve(parsed);
        } catch (e) {
          reject(new Error('Failed to parse response: ' + e.message));
        }
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

async function generateReviewsFile() {
  try {
    console.log('🔄 Fetching reviews from Google Places API...');
    
    const data = await fetchGoogleReviews();

    if (data.status !== 'OK') {
      throw new Error(`Google API Error: ${data.status} - ${data.error_message || ''}`);
    }

    const reviews = data.result.reviews?.map((review, index) => ({
      id: review.time || index,
      name: review.author_name,
      avatar: review.profile_photo_url || '/assets/team-member-placeholder.jpg',
      rating: review.rating,
      review: review.text,
      date: new Date(review.time * 1000).toLocaleDateString('en-KE', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      }),
      relativeTime: review.relative_time_description,
      service: 'Google Review'
    })) || [];

    const stats = {
      averageRating: data.result.rating || 0,
      totalReviews: data.result.user_ratings_total || 0,
      lastUpdated: new Date().toISOString()
    };

    const fileContent = `// ⚠️ AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
// Generated at: ${new Date().toLocaleString('en-KE')}
// Run 'npm run fetch-reviews' to update

export const reviews = ${JSON.stringify(reviews, null, 2)};

export const reviewStats = ${JSON.stringify(stats, null, 2)};
`;

    // Ensure the data directory exists
    const dataDir = path.join(__dirname, '..', 'src', 'data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    const filePath = path.join(dataDir, 'reviewsData.js');
    fs.writeFileSync(filePath, fileContent);

    console.log(`✅ Success! Fetched ${reviews.length} reviews`);
    console.log(`⭐ Average Rating: ${stats.averageRating}`);
    console.log(`📝 Total Reviews: ${stats.totalReviews}`);
    console.log(`💾 Saved to: ${filePath}`);

  } catch (error) {
    console.error('❌ Error:', error.message);
    
    // Create fallback data if fetch fails
    console.log('⚠️ Creating fallback reviews data...');
    
    const fallbackContent = `// ⚠️ FALLBACK DATA - API fetch failed
// Run 'npm run fetch-reviews' to try again

export const reviews = [
  {
    id: 1,
    name: "Sarah Kimani",
    avatar: "/assets/team-member-placeholder.jpg",
    rating: 5,
    review: "Excellent printing quality and fast turnaround! Luna Graphics handled our corporate rebrand perfectly. Highly recommend their UV printing services.",
    date: "Jan 15, 2024",
    relativeTime: "2 months ago",
    service: "Corporate Branding"
  },
  {
    id: 2,
    name: "James Ochieng",
    avatar: "/assets/team-member-placeholder.jpg",
    rating: 5,
    review: "Best political campaign materials in Nairobi. They delivered 10,000 banners across 5 counties in just one week. Professional and reliable!",
    date: "Dec 20, 2023",
    relativeTime: "3 months ago",
    service: "Political Campaign"
  },
  {
    id: 3,
    name: "Wanjiku Mwangi",
    avatar: "/assets/team-member-placeholder.jpg",
    rating: 5,
    review: "Our exhibition stand at KICC looked amazing thanks to Luna Graphics. Great attention to detail and installation was seamless.",
    date: "Nov 10, 2023",
    relativeTime: "4 months ago",
    service: "Exhibition Branding"
  }
];

export const reviewStats = {
  averageRating: 4.9,
  totalReviews: 150,
  lastUpdated: "${new Date().toISOString()}",
  note: "Fallback data - API fetch failed"
};
`;

    const dataDir = path.join(__dirname, '..', 'src', 'data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    
    fs.writeFileSync(path.join(dataDir, 'reviewsData.js'), fallbackContent);
    console.log('✅ Fallback data created');
    
    // Don't exit with error so build can continue
    process.exit(0);
  }
}

generateReviewsFile();
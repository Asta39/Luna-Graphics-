export const products = [
  {
    id: 'roll-up-banner-850',
    name: 'Roll-Up Banner Stand',
    category: 'banners',
    subcategory: 'Roll-Up Banners',
    price: 8000,
    oldPrice: 9500,
    priceUnit: 'each',
    minOrder: 1,
    image: '/products/1.jfif',
    badge: 'Best Seller',
    discount: '-15%',
    rating: 4.8,
    reviews: 124,
    description: 'Premium roll-up banner stand with aluminum base and high-quality print.',
    features: ['850mm x 2000mm', 'Aluminum base', 'Carry bag included', 'Easy setup'],
    turnaround: '24-48 hours',
    stock: 15,
    sold: 89
  },
  {
    id: 'pop-up-backdrop-3x3',
    name: 'Pop-Up Backdrop Display',
    category: 'banners',
    subcategory: 'Backdrops',
    price: 45000,
    oldPrice: 52000,
    priceUnit: 'each',
    minOrder: 1,
    image: '/products/2.jfif',
    badge: 'Hot',
    discount: '-13%',
    rating: 4.9,
    reviews: 89,
    description: '3x3 curved pop-up backdrop with fabric print. Ideal for exhibitions.',
    features: ['3x3 panel design', 'Wrinkle-free fabric', 'Magnetic connection', 'Hard case included'],
    turnaround: '2-3 days',
    stock: 8,
    sold: 45
  },
  {
    id: 'acrylic-signage-5mm',
    name: 'Acrylic Signage (5mm)',
    category: 'signage',
    subcategory: 'Indoor Signs',
    price: 3500,
    priceUnit: 'sq ft',
    minOrder: 2,
    image: '/products/3.jfif',
    badge: null,
    discount: null,
    rating: 4.7,
    reviews: 156,
    description: 'Crystal clear 5mm acrylic signage with UV printing.',
    features: ['5mm cast acrylic', 'Diamond polished edges', 'UV-resistant', 'Standoffs included'],
    turnaround: '2-3 days',
    stock: 25,
    sold: 134
  },
  {
    id: 'business-cards-premium',
    name: 'Premium Business Cards',
    category: 'corporate',
    subcategory: 'Business Cards',
    price: 2500,
    oldPrice: 3000,
    priceUnit: '100 pcs',
    minOrder: 100,
    image: '/products/4.jfif',
    badge: 'Deal',
    discount: '-17%',
    rating: 4.9,
    reviews: 342,
    description: '350gsm premium business cards with matte or gloss lamination.',
    features: ['350gsm art card', 'Matte/gloss lamination', 'Rounded corners option', 'Double-sided'],
    turnaround: '24 hours',
    stock: 50,
    sold: 289
  },
  {
    id: 'branded-tshirts-polo',
    name: 'Branded Polo T-Shirts',
    category: 'merchandise',
    subcategory: 'Apparel',
    price: 1200,
    priceUnit: 'each',
    minOrder: 10,
    image: '/products/5.jfif',
    badge: null,
    discount: null,
    rating: 4.6,
    reviews: 78,
    description: 'High-quality cotton polo shirts with embroidered or printed logo.',
    features: ['100% cotton', 'Embroidery/DTG print', 'Sizes XS-3XL', 'Bulk discounts'],
    turnaround: '3-5 days',
    stock: 100,
    sold: 234
  },
  {
    id: 'branded-mugs-ceramic',
    name: 'Ceramic Branded Mugs',
    category: 'merchandise',
    subcategory: 'Drinkware',
    price: 800,
    oldPrice: 1000,
    priceUnit: 'each',
    minOrder: 12,
    image: '/products/6.jfif',
    badge: 'New',
    discount: '-20%',
    rating: 4.8,
    reviews: 203,
    description: '11oz white ceramic mugs with full-color sublimation printing.',
    features: ['11oz capacity', 'Dishwasher safe', 'Full wrap print', 'Gift boxes'],
    turnaround: '24-48 hours',
    stock: 75,
    sold: 156
  },
  {
    id: 'event-backdrop-fabric',
    name: 'Fabric Event Backdrop',
    category: 'events',
    subcategory: 'Backdrops',
    price: 15000,
    oldPrice: 18000,
    priceUnit: 'each',
    minOrder: 1,
    image: '/products/7.jfif',
    badge: 'New',
    discount: '-17%',
    rating: 4.7,
    reviews: 45,
    description: 'Wrinkle-free fabric backdrop with aluminum frame.',
    features: ['Wrinkle-free fabric', 'Aluminum frame', 'Machine washable', 'Tool-free setup'],
    turnaround: '2-3 days',
    stock: 12,
    sold: 34
  },
  {
    id: 'led-signage-acrylic',
    name: 'LED Illuminated Signage',
    category: 'signage',
    subcategory: 'LED Signs',
    price: 18000,
    priceUnit: 'sq ft',
    minOrder: 1,
    image: '/products/8.jfif',
    badge: 'Premium',
    discount: null,
    rating: 4.9,
    reviews: 67,
    description: 'Stunning LED backlit acrylic signage for reception areas.',
    features: ['LED backlighting', 'Acrylic face', 'Wall/suspended mount', 'Energy efficient'],
    turnaround: '5-7 days',
    stock: 5,
    sold: 23
  }
];

export const categories = [
  { id: 'banners', name: 'Banners & Displays', icon: 'Image', count: 24 },
  { id: 'signage', name: 'Signage', icon: 'Signpost', count: 18 },
  { id: 'corporate', name: 'Corporate Materials', icon: 'Briefcase', count: 32 },
  { id: 'events', name: 'Event Materials', icon: 'Calendar', count: 15 },
  { id: 'merchandise', name: 'Branded Merchandise', icon: 'Gift', count: 28 },
  { id: 'large-format', name: 'Large Format', icon: 'Maximize', count: 12 }
];

export const getProductById = (id) => products.find(p => p.id === id);
export const getProductsByCategory = (category) => products.filter(p => p.category === category);
export const getPopularProducts = () => products.filter(p => p.badge === 'Best Seller' || p.badge === 'Hot');
export const getNewArrivals = () => products.filter(p => p.badge === 'New');
export const getDeals = () => products.filter(p => p.discount);
export const searchProducts = (query) => {
  const lowerQuery = query.toLowerCase();
  return products.filter(p => 
    p.name.toLowerCase().includes(lowerQuery) ||
    p.description.toLowerCase().includes(lowerQuery)
  );
};
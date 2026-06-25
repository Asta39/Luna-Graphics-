// src/data/services.js

export const services = [
  {
    id: 'large-format-printing',
    name: 'Large Format Printing',
    shortDescription: 'Banners, posters, and signage up to 5m wide',
    fullDescription: `Our large format printing services deliver stunning visuals for all your marketing needs. Using state-of-the-art eco-solvent and UV printers, we produce vibrant, durable prints on various materials including PVC vinyl, canvas, fabric, and paper.

Whether you need indoor displays or weather-resistant outdoor signage, our large format solutions ensure your message stands out. We handle everything from small posters to massive building wraps.`,
    features: [
      'Up to 5m seamless printing width',
      '1440dpi high-resolution output',
      'Eco-solvent and UV printing options',
      'Same-day service available',
      'Indoor and outdoor materials',
      'Professional design assistance'
    ],
    applications: [
      'Billboards and building wraps',
      'Trade show displays',
      'Retail signage',
      'Event backdrops',
      'Vehicle wraps',
      'Wall murals'
    ],
    materials: ['PVC Vinyl (440gsm)', 'Canvas', 'Backlit Film', 'Mesh Banner', 'Photo Paper', 'Fabric'],
    turnaround: '24-48 hours',
    image: '/services/large-format.jpg',
    icon: 'Printer'
  },
  {
    id: 'uv-printing',
    name: 'UV Printing',
    shortDescription: 'Direct printing on rigid and flexible materials',
    fullDescription: `UV printing technology allows us to print directly onto virtually any surface. The UV-cured inks create vibrant, scratch-resistant images that last. Perfect for signage, promotional items, and custom projects on wood, glass, metal, acrylic, and more.

Our flatbed UV printer handles materials up to 50mm thick, opening endless possibilities for creative projects and industrial applications.`,
    features: [
      'Print on any material up to 50mm thick',
      'Instant drying with UV curing',
      'Scratch and fade resistant',
      'White ink capability',
      'Embossed texture effects',
      'No material limitations'
    ],
    applications: [
      'Acrylic signage',
      'Wooden plaques',
      'Glass awards',
      'Metal panels',
      'Phone cases',
      'Promotional items'
    ],
    materials: ['Acrylic', 'Wood', 'Glass', 'Metal', 'PVC', 'Leather', 'Ceramic'],
    turnaround: '2-3 days',
    image: '/services/uv-printing.jpg',
    icon: 'Sun'
  },
  {
    id: 'digital-printing',
    name: 'Digital Printing',
    shortDescription: 'High-quality paper and card printing',
    fullDescription: `Our digital printing services provide fast, cost-effective solutions for all your paper-based marketing materials. From business cards to brochures, we deliver crisp, professional results with quick turnaround times.

Perfect for small to medium runs where offset printing would be uneconomical, digital printing offers flexibility and speed without compromising quality.`,
    features: [
      'Full color CMYK printing',
      'Variable data capability',
      'Cost-effective for short runs',
      'Fast turnaround',
      'Proofing available',
      'Wide paper selection'
    ],
    applications: [
      'Business cards',
      'Flyers and leaflets',
      'Brochures',
      'Reports and proposals',
      'NCR forms',
      'Stationery'
    ],
    materials: ['Gloss Art Paper', 'Matte Paper', 'Bond Paper', 'Card Stock', 'Recycled Paper', 'Specialty Papers'],
    turnaround: 'Same day - 2 days',
    image: '/services/digital-printing.jpg',
    icon: 'FileText'
  },
  {
    id: 'sublimation-printing',
    name: 'Sublimation Printing',
    shortDescription: 'Full-color printing on fabric and hard goods',
    fullDescription: `Dye-sublimation printing infuses ink directly into polyester fabrics and polymer-coated items, creating permanent, vibrant images that won't crack, peel, or fade. Ideal for textiles, mugs, phone cases, and promotional products.

The process uses heat to convert dye into gas, which bonds with the material fibers, resulting in photo-quality prints that are part of the material itself.`,
    features: [
      'Permanent, fade-resistant colors',
      'Photo-quality detail',
      'All-over printing capability',
      'Soft hand feel on fabrics',
      'Dishwasher safe on mugs',
      'No minimum order quantity'
    ],
    applications: [
      'T-shirts and apparel',
      'Mugs and drinkware',
      'Phone cases',
      'Mouse pads',
      'Photo panels',
      'Flags and banners'
    ],
    materials: ['Polyester Fabric', 'Ceramic Mugs', 'Aluminum Panels', 'Phone Cases', 'Mouse Pads', 'Keychains'],
    turnaround: '24-48 hours',
    image: '/services/sublimation.jpg',
    icon: 'Thermometer'
  },
  {
    id: 'screen-printing',
    name: 'Screen Printing',
    shortDescription: 'Durable printing for apparel and promotional items',
    fullDescription: `Screen printing remains the gold standard for durability and vibrancy on textiles and flat surfaces. Our automated screen printing setup handles large volumes efficiently while maintaining consistent quality.

Ideal for bulk orders of t-shirts, tote bags, and promotional items where longevity and washability are essential.`,
    features: [
      'Extremely durable prints',
      'Vibrant, opaque colors',
      'Cost-effective for bulk orders',
      'Specialty inks available',
      'Large production capacity',
      'Pantone color matching'
    ],
    applications: [
      'T-shirts and apparel',
      'Tote bags',
      'Corporate uniforms',
      'Promotional products',
      'Posters',
      'Stickers'
    ],
    materials: ['Cotton', 'Polyester', 'Canvas', 'Paper', 'Cardboard', 'Plastic'],
    turnaround: '5-7 days',
    image: '/services/screen-printing.jpg',
    icon: 'Layers'
  },
  {
    id: 'embroidery',
    name: 'Embroidery',
    shortDescription: 'Professional stitching for apparel and caps',
    fullDescription: `Our computerized embroidery machines produce precise, professional stitching for corporate apparel, uniforms, and promotional items. Embroidery adds a premium, tactile quality that elevates your brand perception.

With thread colors to match any brand guidelines, we can reproduce logos, text, and designs with exceptional detail on various fabric types.`,
    features: [
      'Professional, premium appearance',
      'Extremely durable',
      '3D puff embroidery available',
      'Wide color selection',
      'No setup fees on repeat orders',
      'Small detail capability'
    ],
    applications: [
      'Polo shirts',
      'Caps and hats',
      'Corporate uniforms',
      'Jackets and hoodies',
      'Towels',
      'Bags'
    ],
    materials: ['Cotton', 'Polyester', 'Denim', 'Fleece', 'Twill', 'Pique'],
    turnaround: '5-7 days',
    image: '/services/embroidery.jpg',
    icon: 'Scissors'
  },
  {
    id: 'laser-engraving',
    name: 'Laser Engraving',
    shortDescription: 'Precision engraving on wood, metal, and acrylic',
    fullDescription: `Laser engraving provides permanent, precise marking on a wide range of materials. Our high-powered lasers can cut through materials or etch surface designs with incredible detail, perfect for awards, signage, and personalized items.

The non-contact process ensures clean results without material distortion, and the permanent nature of engraving ensures your branding lasts forever.`,
    features: [
      'Permanent, precise marking',
      'No material contact',
      'Intricate detail capability',
      'Cutting and engraving',
      'Various depths possible',
      'Fast turnaround'
    ],
    applications: [
      'Awards and trophies',
      'Signage',
      'Personalized gifts',
      'Industrial marking',
      'Architectural models',
      'Jewelry'
    ],
    materials: ['Wood', 'Acrylic', 'Metal', 'Glass', 'Leather', 'Paper', 'Fabric'],
    turnaround: '2-3 days',
    image: '/services/laser.jpg',
    icon: 'Zap'
  },
  {
    id: 'vehicle-branding',
    name: 'Vehicle Branding',
    shortDescription: 'Full and partial vehicle wraps',
    fullDescription: `Transform your fleet into mobile billboards with our professional vehicle branding services. Using premium cast vinyl from 3M and Avery, we create seamless wraps that protect your paint while advertising your business 24/7.

From simple door logos to full color changes, our certified installers ensure bubble-free, long-lasting results that withstand Kenyan road conditions.`,
    features: [
      'Premium cast vinyl (5-7 year life)',
      'Paint protection',
      'Full or partial wraps',
      'Certified installers',
      'Design and installation',
      'Removal without damage'
    ],
    applications: [
      'Company cars',
      'Delivery vans',
      'Trucks and lorries',
      'Buses and matatus',
      'Motorcycles',
      'Boats'
    ],
    materials: ['Cast Vinyl (3M/Avery)', 'Calendered Vinyl', 'Perforated Window Film', 'Reflective Vinyl'],
    turnaround: '2-5 days',
    image: '/services/vehicle.jpg',
    icon: 'Truck'
  },
  {
    id: 'signage-solutions',
    name: 'Signage Solutions',
    shortDescription: 'Indoor and outdoor business signage',
    fullDescription: `Complete signage solutions for businesses of all sizes. From simple door signs to complex illuminated channel letters, we design, manufacture, and install signage that makes your business impossible to miss.

Our team handles permits, structural calculations, and installation, providing a hassle-free experience from concept to completion.`,
    features: [
      'Custom design services',
      'Permit assistance',
      'Professional installation',
      'Illuminated and non-illuminated',
      'Weather-resistant materials',
      'Maintenance services'
    ],
    applications: [
      'Storefront signs',
      'Wayfinding systems',
      'Safety signage',
      'Illuminated letters',
      'Billboards',
      'Interior branding'
    ],
    materials: ['Acrylic', 'Metal', 'PVC', 'LED Components', 'Vinyl', 'Aluminum Composite'],
    turnaround: '5-10 days',
    image: '/services/signage.jpg',
    icon: 'MapPin'
  },
  {
    id: 'branding-consultation',
    name: 'Branding Consultation',
    shortDescription: 'Expert advice on marketing materials',
    fullDescription: `Not sure what you need? Our branding consultants help you choose the right materials, finishes, and strategies to maximize your marketing budget. We analyze your brand, target audience, and objectives to recommend optimal solutions.

From color psychology to material selection, our expertise ensures your branded materials deliver results.`,
    features: [
      'Brand audit and analysis',
      'Material recommendations',
      'Design guidance',
      'Budget optimization',
      'Campaign planning',
      'Ongoing support'
    ],
    applications: [
      'Brand launches',
      'Rebranding projects',
      'Marketing campaigns',
      'Event planning',
      'Corporate identity',
      'Product launches'
    ],
    materials: ['Consultation Report', 'Sample Materials', 'Mood Boards', 'Cost Analysis'],
    turnaround: 'By appointment',
    image: '/services/consultation.jpg',
    icon: 'Users'
  }
];

// Helper function to generate WhatsApp link
export const getWhatsAppLink = (serviceName, phoneNumber = '254791159618') => {
  const message = `Hello Luna Graphics! I'm interested in your ${serviceName} service. Can you provide more information about pricing and availability?`;
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};

export const getServiceById = (id) => services.find(s => s.id === id);
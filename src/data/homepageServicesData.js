// src/data/ServicesData.js

// 1. Import the main services object that already contains all our data and images
import { services } from './serviceData';

// 2. Define and export the list of services to show on the homepage grid
export const homepageServices = [
  {
    id: 1,
    name: "Large Format Printing",
    // --- FIX: Use the correct key 'large-format' ---
    path: services['large-format'].path,
    description: "High-quality banners, posters, and signage for events, advertising, and business promotions. Perfect for outdoor and indoor displays.",
    image: services['large-format'].heroImage,
    icon: "Maximize2",
    startingPrice: 500,
    turnaround: "24-48 hours",
    isPopular: true,
    features: [ "Weather-resistant materials", "Custom sizes up to 5m width", "Full-color printing", "Grommets and finishing included" ]
  },
  {
    id: 2,
    name: "Plotting Services",
    // --- FIX: Use the correct key 'plotting-services' ---
    path: services['plotting-services'].path,
    description: "Technical drawings, architectural plans, and engineering blueprints with precision and clarity. CAD file compatible.",
    image: services['plotting-services'].heroImage,
    icon: "PenTool",
    startingPrice: 200,
    turnaround: "Same day",
    isPopular: false,
    features: [ "A0 to A4 sizes available", "CAD file support", "High-resolution output", "Multiple paper types" ]
  },
  {
    id: 3,
    name: "UV Printing",
    // --- This one was already correct ---
    path: services['uv-printing'].path,
    description: "Direct printing on various materials including glass, metal, wood, and plastic with vibrant, durable results.",
    image: services['uv-printing'].heroImage,
    icon: "Zap",
    startingPrice: 1000,
    turnaround: "2-3 days",
    isPopular: true,
    features: [ "Print on any material", "Scratch and fade resistant", "Raised texture effects", "Eco-friendly UV inks" ]
  },
  {
    id: 4,
    name: "CNC Cutting",
    // --- This one was already correct ---
    path: services['cnc-cutting'].path,
    description: "Precision cutting services for wood, acrylic, metal, and foam materials. Perfect for signage and custom fabrication.",
    image: services['cnc-cutting'].heroImage,
    icon: "Scissors",
    startingPrice: 800,
    turnaround: "3-5 days",
    isPopular: false,
    features: [ "Multiple material support", "Complex shape cutting", "Smooth edge finishing", "Custom thickness options" ]
  },
  {
    id: 5,
    name: "Laser Cutting",
    // --- This one was already correct ---
    path: services['laser-cutting'].path,
    description: "High-precision laser cutting for intricate designs in various materials. Ideal for decorative items and prototypes.",
    image: services['laser-cutting'].heroImage,
    icon: "Zap",
    startingPrice: 600,
    turnaround: "2-4 days",
    isPopular: false,
    features: [ "Intricate detail capability", "Clean, precise cuts", "Engraving services", "Fast turnaround times" ]
  },
  {
    id: 6,
    name: "T-shirt Printing",
    // --- This one was already correct ---
    path: services['t-shirt-printing'].path,
    description: "Custom apparel printing including t-shirts, hoodies, and uniforms. Perfect for events, teams, and promotional wear.",
    image: services['t-shirt-printing'].heroImage,
    icon: "Shirt",
    startingPrice: 700,
    turnaround: "1-2 days",
    isPopular: true,
    features: [ "Various printing methods", "Quality cotton materials", "Bulk order discounts", "Custom design services" ]
  }
];
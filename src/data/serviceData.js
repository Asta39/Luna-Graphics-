// --- General Service Card Images (for use in Related Services) ---
import relatedLaserCuttingImg from '../assets/laser-hero-image.jpg';
import relatedLargeFormatImg from '../assets/large-format-hero-image.jpg';
import relatedUvPrintingImg from '../assets/uv-hero-image.jpg';
import relatedCncCuttingImg from '../assets/cnc-hero-image.jpg';
import relatedCorporateImg from '../assets/corporate-hero-image.jpg';

// 1. IMPORT YOUR IMAGES at the top of the file
import cncHeroImage from '../assets/cnc-hero-image.jpg';  // <-- Replace with your actual filename
import cncEquipmentRouter from '../assets/cncrouter.jpg';

import cncGalleryPanels from '../assets/cnc-gallery-panels.jpg';
import cncGallerySignage from '../assets/cnc-gallery-signage.jpg';
import cncGalleryDecorative from '../assets/cnc-gallery-decorative.jpg';
import cncGalleryPrototypes from '../assets/cnc-gallery-prototypes.jpg';
import cncGalleryFurniture from '../assets/cnc-gallery-furniture.jpg';
import cncGalleryDisplays from '../assets/cnc-gallery-displays.jpg';
import cncGalleryBrackets from '../assets/cnc-gallery-brackets.jpg';
import cncGalleryArt from '../assets/cnc-gallery-art.jpg';


import laserHeroImage from '../assets/laser-hero-image.jpg';
import laserEquipment from '../assets/lasercutter.jpg';

import laserGalleryPanels from '../assets/laser-gallery-panels.jpg';
import laserGallerySignage from '../assets/laser-gallery-signage.jpg';
import laserGalleryDecorative from '../assets/laser-gallery-decorative.jpg';
import laserGalleryPrototypes from '../assets/laser-gallery-prototypes.jpg';
import laserGalleryFurniture from '../assets/laser-gallery-furniture.jpg';
import laserGalleryDisplays from '../assets/laser-gallery-displays.jpg';
import laserGalleryBrackets from '../assets/laser-gallery-brackets.jpg';
import laserGalleryArt from '../assets/laser-gallery-art.jpg';


import uvHeroImage from '../assets/uv-hero-image.jpg';
import uvPrinterEquipment from '../assets/uvprinter.jpg';

import uvGallerySignage from '../assets/uv-gallery-signage.jpg';
import uvGalleryDecorative from '../assets/uv-gallery-decorative.jpg';
import uvGalleryPrototypes from '../assets/uv-gallery-prototypes.jpg';
import uvGalleryFurniture from '../assets/uv-gallery-furniture.jpg';
import uvGalleryDisplays from '../assets/uv-gallery-displays.jpg';
import uvGalleryBrackets from '../assets/uv-gallery-brackets.jpg';
import uvGalleryArt from '../assets/uv-gallery-art.jpg';

import largeFormatHeroImage from '../assets/large-format-hero-image.jpg';
import largeFormatEquipment from '../assets/largeformat.jpg';
import largeEquipment from '../assets/largeprinter-01.jpg';

import largeGallerySignage from '../assets/large-gallery-signage.jpg';
import largeGalleryDecorative from '../assets/large-gallery-decorative.jpg';
import largeGalleryPrototypes from '../assets/large-gallery-prototypes.jpg';
import largeGalleryFurniture from '../assets/large-gallery-furniture.jpg';
import largeGalleryDisplays from '../assets/large-gallery-displays.jpg';
import largeGalleryBrackets from '../assets/large-gallery-brackets.jpg';
import largeGalleryArt from '../assets/large-gallery-art.jpg';


import plottingHeroImage from '../assets/plotting-hero-image.jpg';
import plottingEquipment from '../assets/plotter.jpg';

import plottingGalleryPanels from '../assets/plotting-gallery-panels.jpg';
import plottingGallerySignage from '../assets/plotting-gallery-signages.jpg';
import plottingGalleryDecorative from '../assets/plotting-gallery-decorative.jpg';
import plottingGalleryPrototypes from '../assets/plotting-gallery-prototypes.jpg';
import plottingGalleryFurniture from '../assets/plotting-gallery-furniture.jpg';
import plottingGalleryDisplays from '../assets/plotting-gallery-displays.jpg';
import plottingGalleryBrackets from '../assets/plotting-gallery-brackets.jpg';
import plottingGalleryArt from '../assets/plotting-gallery-art.jpg';



import tShirtHeroImage from '../assets/t-shirt-hero-image.jpg';
import tShirtEquipment from '../assets/dtf-printer.jpg';

import tShirtGalleryFirm from '../assets/t-shirt-gallery-firm.jpg';
import tShirtGalleryDecorative from '../assets/t-shirt-gallery-decorative.jpg';
import tShirtGalleryPrototypes from '../assets/t-shirt-gallery-prototypes.jpg';
import tShirtGalleryFurniture from '../assets/t-shirt-gallery-furniture.jpg';
import tShirtGalleryDisplays from '../assets/t-shirt-gallery-displays.jpg';
import tShirtGalleryBrackets from '../assets/t-shirt-gallery-brackets.jpg';
import tShirtGalleryArt from '../assets/t-shirt-gallery-art.jpg';

import offsetPrintingHeroImage from '../assets/offset-printer.jpg';

// 2. DEFINE YOUR SERVICES
export const services = 
{
    "cnc-cutting":{
        id: 2,
    path: "/cnc-cutting",
    title: "CNC Cutting Services",
    category: "Precision Fabrication",
    description: "Professional CNC cutting services for precise fabrication of various materials including wood, acrylic, metal, and foam with custom design capabilities.",
    detailedDescription: `Our CNC cutting services demonstrate precision cutting capabilities for various materials to serve clients requiring accurate fabrication and custom manufacturing solutions. Using state-of-the-art CNC technology, we deliver exceptional precision and repeatability for your projects.\n\nWhether you need prototypes, architectural elements, signage, or custom parts, our advanced CNC machines handle complex geometries with tight tolerances. From intricate decorative panels to functional components, we transform your digital designs into physical reality with unmatched accuracy.\n\nOur experienced technicians work closely with you to optimize your designs for CNC cutting, ensuring the best possible results while meeting your specifications, timeline, and budget requirements.`,
    heroImage: cncHeroImage,
    startingPrice: 800,
    turnaround: "3-5 days",
    minimumOrder: "1 piece",
    keyFeatures: [
      "Precision Cutting",
      "Multiple Materials",
      "Custom Shapes",
      "CAD Compatible"
    ],
    specifications: [
      {
        icon: "Maximize",
        title: "Cutting Area",
        description: "Up to 2.5m x 1.5m cutting bed with 200mm material thickness"
      },
      {
        icon: "Target",
        title: "Precision",
        description: "±0.1mm accuracy with smooth edge finishing"
      },
      {
        icon: "Layers",
        title: "Material Compatibility",
        description: "Wood, acrylic, metal, foam, plastic, and composite materials"
      },
      {
        icon: "Zap",
        title: "Cutting Speed",
        description: "High-speed cutting with optimized feed rates"
      },
      {
        icon: "Settings",
        title: "Tool Options",
        description: "Various cutting tools for different materials and finishes"
      },
      {
        icon: "FileText",
        title: "File Support",
        description: "CAD, DXF, DWG, and vector file format compatibility"
      }
    ],
    materials: [
      "MDF & Plywood",
      "Acrylic Sheets",
      "Aluminum Composite",
      "Foam Board",
      "PVC Sheets",
      "Polycarbonate",
      "Wood Panels",
      "Metal Sheets",
      "Corrugated Plastic",
      "Cardboard",
      "Rubber Sheets",
      "Composite Materials"
    ],

    equipment: [
         {
      name: "Industrial CNC Router",
      description: "High-precision CNC router for accurate cutting of various materials with professional finishing.",
      image: cncEquipmentRouter,
      status: "Active",
      maxSize: "2.5m x 1.5m x 200mm",
      capabilities: [
        "Multi-axis cutting",
        "Automatic tool changing",
        "Vacuum hold-down system",
        "Dust collection system"
      ]
    },
   /* {
      name: "Precision Spindle System",
      description: "High-speed spindle system for smooth cuts and excellent surface finish.",
      image: "https://images.unsplash.com/photo-1563906267088-b029e7101114?w=600&h=400&fit=crop",
      status: "Active",
      maxSize: "Variable RPM up to 24,000",
      capabilities: [
        "Air-cooled spindle motor",
        "Precision collet system",
        "Variable speed control",
        "Low vibration operation"
      ]
    },
    {
      name: "CAD/CAM Software Suite",
      description: "Professional design and manufacturing software for optimal cutting paths.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      status: "Active",
      maxSize: "Unlimited design complexity",
      capabilities: [
        "3D modeling capability",
        "Toolpath optimization",
        "Material simulation",
        "Nesting algorithms"
      ]
    }*/
        
    ],
     gallery: [ {
      id: 1,
      
      
      image: cncGalleryPanels,
    },
    {
      id: 2,
     
      image: cncGallerySignage,
    },
    {
      id: 3,
     
      image: cncGalleryDecorative,
    },
    {
      id: 4,
      
      image: cncGalleryPrototypes,
    },
    {
      id: 5,
     
      image: cncGalleryFurniture,
    },
    {
      id: 6,
      
      image: cncGalleryDisplays,
    },
    {
      id: 7,
     
      image: cncGalleryBrackets,
    },
    {
      id: 8,
     
      image: cncGalleryArt,
    }
   ],
    pricing: [ {
      name: "Basic Cutting",
      description: "Perfect for simple shapes and prototypes",
      price: 800,
      originalPrice: 2500,
      unit: "board",
      popular: false,
      turnaround: "5-7 days",
      features: [
        "Standard material cutting",
        "Basic CAD file conversion",
        "Standard edge finishing",
        "Digital proof included",
        "Free delivery within Nairobi",
        "Quality guarantee"
      ]
    },
    {
      name: "Professional Cutting",
      description: "Most popular for commercial projects",
      price: 1500,
      originalPrice: 4500,
      unit: "board",
      popular: true,
      turnaround: "3-5 days",
      features: [
        "Premium material options",
        "Advanced CAD optimization",
        "Smooth edge finishing",
        "Multiple design revisions",
        "Rush delivery available",
        "Installation consultation",
        "2-year quality guarantee",
        "Technical support included"
      ]
    },
    {
      name: "Enterprise Cutting",
      description: "For large-scale manufacturing projects",
      price: 5500,
      unit: "board",
      popular: false,
      turnaround: "2-3 days",
      features: [
        "Premium specialty materials",
        "Dedicated project manager",
        "Custom tooling if required",
        "Precision quality control",
        "Same-day rush available",
        "On-site consultation",
        "3-year quality guarantee",
        "Volume pricing discounts",
        "Priority production queue"
      ]
    }
 ],
    related: [ {
      title: "Laser Cutting",
      path: "/laser-cutting",
      category: "Precision Cutting",
      description: "High-precision laser cutting for intricate designs and detailed fabrication.",
      image: relatedLaserCuttingImg,
      startingPrice: 600,
      turnaround: "2-3 days",
      features: ["Intricate Designs", "Multiple Materials", "High Precision"]
    },
    {
      title: "Large Format Printing",
      path: "/large-format",
      category: "Digital Printing",
      description: "Professional large format printing for banners, posters, and displays.",
      image: relatedLargeFormatImg,
      startingPrice: 500,
      turnaround: "24-48 hours",
      features: ["Weather Resistant", "Multiple Formats", "Fast Turnaround"]
    },
    {
      title: "UV Printing",
      path: "/uv-printing",
      category: "Specialty Printing",
      description: "Direct UV printing on various materials including glass, metal, and plastics.",
      image: relatedUvPrintingImg,
      startingPrice: 1000,
      turnaround: "2-3 days",   
      features: ["Direct Material Printing", "Durable Finish", "Vibrant Colors"]
    }
 ]
  },


  "laser-cutting":{
    id: 3,
    path: "/laser-cutting",
    title: "Laser Cutting Services",
    category: "Precision Laser Technology",
    description: "Professional laser cutting services for intricate designs and detailed fabrication on various materials including wood, acrylic, leather, and fabric with precision and design complexity capabilities.",
    detailedDescription: `Our Laser Cutting Services highlight precision laser cutting technology for intricate designs and detailed fabrication to attract clients requiring high-accuracy cutting solutions. Using advanced laser technology, we deliver exceptional precision and detail for your most demanding projects.\n\nWhether you need prototypes, decorative elements, signage, or custom parts, our laser cutting machines handle the most intricate patterns and precise cuts with minimal material waste. From delicate jewelry components to architectural details, we transform your vector designs into reality with unmatched accuracy.\n\nOur experienced technicians work closely with you to optimize your designs for laser cutting, ensuring the best possible results while maintaining design integrity, meeting your timeline and budget requirements.`,
    heroImage: laserHeroImage,
    startingPrice: 600,
    turnaround: "2-3 days",
    minimumOrder: "1 piece",
    keyFeatures: [
      "Intricate Patterns",
      "High Precision",
      "Multiple Materials",
      "Vector Compatible"
    ],
    specifications: [
      {
        icon: "Maximize",
        title: "Cutting Area",
        description: "Up to 1.3m x 0.9m cutting bed with precision positioning"
      },
      {
        icon: "Target",
        title: "Precision",
        description: "±0.05mm accuracy with clean, sealed edges"
      },
      {
        icon: "Layers",
        title: "Material Range",
        description: "Wood, acrylic, leather, fabric, cardboard, and thin metals"
      },
      {
        icon: "Zap",
        title: "Laser Power",
        description: "Variable power settings for different materials and thicknesses"
      },
      {
        icon: "Settings",
        title: "Design Complexity",
        description: "Handles intricate patterns and fine details with ease"
      },
      {
        icon: "FileText",
        title: "File Formats",
        description: "Vector files: AI, SVG, DXF, PDF for optimal results"
      }
    ],
    materials: [
      "Wood & Plywood",
      "Acrylic Sheets",
      "Leather & Faux Leather",
      "Fabric & Textiles",
      "Cardboard & Paper",
      "Foam Core",
      "Rubber Sheets",
      "Thin Metal Sheets",
      "Cork Sheets",
      "Felt Material",
      "Mylar & Films",
      "Veneer Sheets"
    ],
    equipment: [
      
        {
      name: "CO2 Laser Cutter",
      description: "High-precision CO2 laser system for accurate cutting of various non-metal materials with exceptional edge quality.",
      image: laserEquipment,
      status: "Active",
      maxSize: "1.3m x 0.9m cutting area",
      capabilities: [
        "Variable power control",
        "High-speed cutting",
        "Engraving capability",
        "Air assist system"
      ]
    }
    /*
    {
      name: "Precision Optics System",
      description: "Advanced laser optics with auto-focus capability for consistent cutting quality across materials.",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop",
      status: "Active",
      maxSize: "Focal length: 50-150mm",
      capabilities: [
        "Auto-focus technology",
        "Beam quality optimization",
        "Material thickness detection",
        "Edge quality enhancement"
      ]
    },
    {
      name: "Vector Processing Software",
      description: "Professional laser cutting software for optimal path planning and material efficiency.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      status: "Active",
      maxSize: "Unlimited design complexity",
      capabilities: [
        "Vector optimization",
        "Nesting algorithms",
        "Multi-layer processing",
        "Cut quality simulation"
      ]
    }*/
  ],
    gallery: [  {
      id: 1,
      
      image: laserGallerySignage
    },
    {
      id: 2,
     
      image: laserGalleryBrackets
    },
    {
      id: 3,
      
      image: laserGalleryPrototypes
    },
    {
      id: 4,
     
      image: laserGalleryDecorative
    },
    {
      id: 5,
      
      image: laserGalleryDisplays
    },
    {
      id: 6,
      
      image: laserGalleryPanels
    },
    {
      id: 7,
      
      image: laserGalleryArt
    },
    {
      id: 8,
      
      image: laserGalleryFurniture
    }
 ],
    pricing: [  {
      name: "Basic Laser Cutting",
      description: "Perfect for simple designs and small projects",
      price: 1500,
      originalPrice: 2000,
      unit: "board",
      popular: false,
      turnaround: "3-5 days",
      features: [
        "Standard material cutting",
        "Basic vector file conversion",
        "Standard edge finishing",
        "Digital proof included",
        "Free delivery within Nairobi",
        "Quality guarantee"
      ]
    },
    {
      name: "Professional Cutting",
      description: "Most popular for intricate commercial projects",
      price: 2800,
      originalPrice: 3500,
      unit: "board",
      popular: true,
      turnaround: "2-3 days",
      features: [
        "Premium material options",
        "Advanced vector optimization",
        "Precision edge finishing",
        "Multiple design iterations",
        "Rush delivery available",
        "Design consultation",
        "2-year quality guarantee",
        "Technical support included"
      ]
    },
    {
      name: "Premium Precision",
      description: "For high-end detailed fabrication projects",
      price: 4500,
      unit: "board",
      popular: false,
      turnaround: "24-48 hours",
      features: [
        "Premium specialty materials",
        "Dedicated project manager",
        "Ultra-precision cutting",
        "Custom material sourcing",
        "Same-day rush available",
        "On-site consultation",
        "3-year quality guarantee",
        "Volume pricing discounts",
        "Priority production queue"
      ]
    }
 ],
    related: [  {
      title: "CNC Cutting",
      path: "/cnc-cutting",
      category: "Precision Fabrication",
      description: "Professional CNC cutting services for precise fabrication of various materials.",
      image: relatedCncCuttingImg,
      startingPrice: 800,
      turnaround: "3-5 days",
      features: ["Precision Cutting", "Multiple Materials", "Custom Shapes"],
       faqs: [
      { question: "What materials can you cut?", answer: "We cut acrylic, wood, MDF, aluminum..." }
    ]

    },
    {
      title: "Large Format Printing",
      path: "/large-format",
      category: "Digital Printing",
      description: "Professional large format printing for banners, posters, and displays.",
      image: relatedLargeFormatImg,
      startingPrice: 500,
      turnaround: "24-48 hours",
      features: ["Weather Resistant", "Multiple Formats", "Fast Turnaround"]
    },
    {
      title: "UV Printing",
      path: "/uv-printing",
      category: "Specialty Printing",
      description: "Direct UV printing on various materials including glass, metal, and plastics.",
      image: relatedUvPrintingImg,
      startingPrice: 1000,
      turnaround: "2-3 days",
      features: ["Direct Material Printing", "Durable Finish", "Vibrant Colors"]
    }
 ]
    },

    "plotting-services": {
         id: 2,
    path: "/plotting",     
    title: "Plotting Services",
    category: "Technical Drawing",
    description: "Professional plotting services for technical drawings, architectural plans, engineering drawings, and CAD documentation with precision and clarity.",
    detailedDescription: `Our plotting services provide high-quality technical drawing reproduction for engineering, architectural, and construction professionals. Using advanced large format plotters, we deliver crisp, accurate plots from A4 to A0 sizes.\n\nWhether you need architectural blueprints, engineering schematics, construction drawings, or CAD documentation, our plotting service ensures every line and detail is reproduced with precision. We work with various file formats and provide fast turnaround times for urgent projects.\n\nOur experienced team understands the critical nature of technical documentation and maintains strict quality control to ensure your plots meet professional standards and specifications.`,
    heroImage: plottingHeroImage,
    startingPrice: 200,
    turnaround: "Same day",
    minimumOrder: "1 sheet",
    keyFeatures: [
      "High Precision Plotting",
      "Multiple Paper Sizes",
      "CAD File Support",
      "Fast Turnaround"
    ],
    specifications: [
      {
        icon: "Maximize",
        title: "Paper Sizes",
        description: "A4, A3, A2, A1, A0 plotting capabilities"
      },
      {
        icon: "Target",
        title: "Precision",
        description: "±0.1mm accuracy for technical drawings"
      },
      {
        icon: "FileText",
        title: "File Formats",
        description: "DWG, DXF, PDF, PLT, and various CAD formats"
      },
      {
        icon: "Zap",
        title: "Resolution",
        description: "Up to 2400 DPI for crisp line work"
      },
      {
        icon: "Clock",
        title: "Speed",
        description: "A0 plots in under 2 minutes"
      },
      {
        icon: "Archive",
        title: "Paper Types",
        description: "Bond, vellum, film, and specialty media options"
      }
    ],
    materials: [
      "20lb Bond Paper",
      "24lb Bond Paper",
      "Vellum Paper",
      "Polyester Film",
      "Translucent Bond",
      "Photo Paper",
      "Recycled Paper",
      "Heavyweight Paper",
      "Coated Paper",
      "Archival Paper"
    ],

    equipment: [
      {
         name: "HP DesignJet T830 Plotter",
      description: "Professional large format plotter designed for technical drawings and CAD applications.",
      image: plottingEquipment,
      status: "Active",
      maxSize: "A0 (841mm x 1189mm)",
      capabilities: [
        "High precision plotting",
        "Multiple media support",
        "Fast processing speed",
        "Network connectivity"
      ]
    }
    /*
    {
      name: "Canon imagePROGRAF TX-4000",
      description: "Advanced technical document plotter with exceptional line quality and speed.",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop",
      status: "Active",
      maxSize: "44-inch width (1118mm)",
      capabilities: [
        "Superior line quality",
        "Water-resistant pigment inks",
        "High-speed printing",
        "Integrated stacker"
      ]
    },
    {
      name: "Epson SureColor T5170",
      description: "Reliable wireless plotter for engineering and architectural drawings.",
      image: "https://images.unsplash.com/photo-1563906267088-b029e7101114?w=600&h=400&fit=crop",
      status: "Active",
      maxSize: "36-inch width (914mm)",
      capabilities: [
        "Wireless connectivity",
        "PrecisionCore technology",
        "Versatile media handling",
        "Mobile printing support"
      ]
    }*/
  ],
     gallery: [  {
      id: 1,
     
      image: plottingGalleryArt,
    },
    {
      id: 2,
      
      image: plottingGalleryBrackets,
    },
    {
      id: 3,
     
      image: plottingGalleryDecorative
    },
    {
      id: 4,
      
      image: plottingGalleryDisplays
    },
    {
      id: 5,
      
      image: plottingGalleryFurniture
    },
    {
      id: 6,
     
      image: plottingGalleryPrototypes
    },
    {
      id: 7,
      
      image: plottingGallerySignage
    },
    {
      id: 8,
      
      image: plottingGalleryPanels
    }
 ],
    pricing: [ {
      name: "Standard Plotting",
      description: "Perfect for individual drawings and small projects",
      price: 200,
      originalPrice: 300,
      unit: "per metre",
      popular: false,
      turnaround: "Same day",
      features: [
        "Vinyl support",
        "Print and cut services",
        "Digital file processing",
        "Quality check included",
        "Free pickup in CBD",
        "Standard resolution"
      ]
    },
    {
      name: "Professional Plotting",
      description: "Most popular for architects and engineers",
      price: 350,
      originalPrice: 500,
      unit: "per metre",
      popular: true,
      turnaround: "2-4 hours",
      features: [
        "Premium material options",
        "Vinyl plotting available",
        "Multiple copy discounts",
        "Rush service included",
        "File format conversion",
        "Delivery service",
        "Quality guarantee",
        "Technical support"
      ]
    },
    {
      name: "Bulk Plotting",
      description: "For large projects and construction firms",
      price: 150,
      unit: "per metre",
      popular: false,
      turnaround: "24 hours",
      features: [
        "Volume discounts (50+ metres)",
        "Premium media options",
        "Dedicated project manager",
        "Priority processing",
        "Free delivery",
        "Extended warranty",
        "Bulk storage options",
        "Account billing available",
        "Technical consultation"
      ]
    }
 ],
    related: [  {
      title: "Large Format Printing",
      path: "/large-format",
      category: "Branding and Printing",
      description: "Professional large format printing for banners, posters, and signage applications.",
      image: relatedLargeFormatImg,
      startingPrice: 500,
      turnaround: "24-48 hours",
      features: ["High Resolution", "Weather Resistant", "Custom Sizes"]
    },
    {
      title: "UV printing services",
      path: "/uv-printing",
      category: "Production",
      description: "Professional UV printing services to produce impactful products.",
      image: relatedUvPrintingImg,
      startingPrice: 1000,
      turnaround: "2-3 days",
      features: ["Tampered glass", "Scratch, water and UV resistant", "Eco friendly inks"]
    },
    {
      title: "CNC cutting services",
      path: "/cnc-cutting",
      category: "Production",
      description: "Professional CNC cutting services for precise fabrication of various materials.",
      image: relatedCncCuttingImg,
      startingPrice: 800,
      turnaround: "3-5 days",
      features: ["Precision cutting", "Multiple materials", "Custom shapes"]
    }
 ]
  },

     "large-format":{
    id: 1,
    path: "/large-format",
    title: "Large Format Printing",
    category: "Digital Printing",
    description: "Professional large format printing services for banners, posters, signage, and displays with vibrant colors and exceptional quality.",
    detailedDescription: `Our large format printing service delivers stunning visual impact for your marketing campaigns, events, and business signage. Using state-of-the-art digital printing technology, we produce high-resolution prints on a wide variety of materials.\n\nWhether you need indoor or outdoor applications, our weather-resistant inks and premium substrates ensure your prints maintain their vibrancy and durability. From small promotional posters to massive building wraps, we handle projects of all sizes with precision and attention to detail.\n\nOur experienced team works closely with you to optimize your designs for large format printing, ensuring the best possible results while meeting your timeline and budget requirements.`,
    heroImage: largeFormatHeroImage,
    startingPrice: 500,
    turnaround: "24-48 hours",
    minimumOrder: "1 metre",
    keyFeatures: [
      "High Resolution Printing",
      "Weather Resistant",
      "Multiple Materials",
      "Custom Sizes"
    ],
    specifications: [
      {
        icon: "Maximize",
        title: "Maximum Size",
        description: "Up to 1.6m x 50m continuous printing capability"
      },
      {
        icon: "Palette",
        title: "Color Quality",
        description: "4-color solvent inks for vibrant, long-lasting prints"
      },
      {
        icon: "Layers",
        title: "Material Options",
        description: "Vinyl, canvas, fabric, paper, and specialty substrates"
      },
      {
        icon: "Zap",
        title: "Resolution",
        description: "Up to 1440 DPI for crisp, detailed output"
      },
      {
        icon: "Shield",
        title: "Durability",
        description: "Eco-solvent inks with 2-3 year outdoor lifespan"
      },
      {
        icon: "Settings",
        title: "Finishing Options",
        description: "Lamination, mounting, grommets, and hemming available"
      }
    ],
    materials: [
      "Vinyl Banner Material",
      "Canvas",
      "Mesh Banner",
      "Fabric",
      "Photo Paper",
      "Adhesive Vinyl",
      "Backlit Film",
      "Window Cling",
      "Magnetic Material",
      "Foam Board",
      "Corrugated Plastic",
      "Aluminum Composite"
    ],
    equipment: [
      {
        name: "Wit-Color Ultra Ultra i3200 1702 TP",
      description: "Professional large format printer delivering exceptional quality with eco-friendly latex inks.",
      image: largeFormatEquipment,
      status: "Active",
      maxSize: "1.6m x 50m",
      capabilities: [
        "With 2 pcs i3200 print heads, the 3 pass printing speeding is 64 sqm/h.",
        "Scratch and water resistant",
        "Odorless prints",
        "Indoor/outdoor applications"
      ]
    },
    {
      name: "Roland VersaCAMM VS-640i",
      description: "Integrated print and cut solution for precision graphics and signage production.",
      image: largeEquipment,
      status: "Active",
      maxSize: "1.6m x 25m",
      capabilities: [
        "Print and cut in one pass",
        "Eco-solvent inks",
        "Contour cutting",
        "Kiss cut and through cut"
      ]
    }
    /*
    {
      name: "Mimaki JV300-160",
      description: "High-speed solvent printer for outdoor signage and vehicle graphics.",
      image: "https://images.unsplash.com/photo-1563906267088-b029e7101114?w=600&h=400&fit=crop",
      status: "Active",
      maxSize: "1.6m x 50m",
      capabilities: [
        "High-speed printing",
        "Durable solvent inks",
        "Variable droplet technology",
        "Unattended printing"
      ]
    }*/
  ],
     gallery: [   {
      id: 1,
      
      image: largeGalleryArt
    },
    {
      id: 2,
      
      image: largeGalleryBrackets
    },
    {
      id: 3,
      
      image: largeGalleryDecorative
    },
    {
      id: 4,
     
      image: largeGalleryDisplays
    },
    {
      id: 5,
      
      image: largeGalleryFurniture
    },
    {
      id: 6,
      
      image: largeGalleryPrototypes
    },
    {
      id: 7,
      
      image: largeGallerySignage
    }
 ],
    pricing: [   {
      name: "Basic Package",
      description: "Perfect for small businesses and events",
      price: 500,
      originalPrice: 1000,
      unit: "sq meter",
      popular: false,
      turnaround: "3-5 days",
      features: [
        "Standard vinyl material",
        "Basic design consultation",
        "Digital proof included",
        "Standard finishing",
        "Free delivery within Nairobi",
        "1-year color guarantee"
      ]
    },
    {
      name: "Professional Package",
      description: "Most popular choice for businesses",
      price: 2500,
      originalPrice: 3200,
      unit: "sq meter",
      popular: true,
      turnaround: "24-48 hours",
      features: [
        "Premium vinyl material",
        "Professional design service",
        "Multiple design revisions",
        "Lamination included",
        "Grommets and hemming",
        "Rush delivery available",
        "2-year color guarantee",
        "Installation service available"
      ]
    },
    {
      name: "Enterprise Package",
      description: "For large campaigns and corporations",
      price: 4000,
      unit: "sq meter",
      popular: false,
      turnaround: "24 hours",
      features: [
        "Premium specialty materials",
        "Dedicated project manager",
        "Unlimited design revisions",
        "Premium finishing options",
        "Installation included",
        "Same-day rush available",
        "3-year color guarantee",
        "Volume discounts",
        "Priority support"
      ]
    }
 ],
    related: [ {
      title: "Laser Cutting",
      path: "/laser-cutting",
      category: "Specialty Cutting",
      description: "High-quality laser cutting for signages, cutouts and more print works.",
      image: relatedLaserCuttingImg,
      startingPrice: 600,
      turnaround: "Same day",
      features: ["Precision Cutting", "Multiple Materials", "Custom Shapes"]
    },
    {
      title: "UV Printing",
      path: "/uv-printing",
      category: "Specialty Printing",
      description: "Direct UV printing on various materials including glass, metal, wood, and plastics.",
      image: relatedUvPrintingImg,
      startingPrice: 1000,
      turnaround: "2-3 days",
      features: ["Direct Material Printing", "Durable Finish", "Vibrant Colors"]
    },
    {
      title: "CNC Cutting",
      path: "/cnc-cutting",
      category: "Fabrication",
      description: "Precision CNC cutting services for signage, displays, and custom fabrication projects.",
      image: relatedCncCuttingImg,
      startingPrice: 800,
      turnaround: "3-5 days",
      features: ["Precision Cutting", "Multiple Materials", "Custom Shapes"]
    }
 ]
},
    "t-shirt-printing":{
    id: 6,
    path: "/t-shirt-printing",
    title: "T-shirt Printing Services",
    category: "Custom Apparel",
    description: "Professional custom t-shirt printing services targeting businesses, events, and personal branding needs with comprehensive printing method options and bulk pricing in KES currency.",
    detailedDescription: `Our T-shirt Printing Services showcase custom apparel printing capabilities for businesses, events, and personal branding with various printing methods and competitive bulk pricing. Using mobile-first responsive approach, we deliver high-quality custom t-shirts with vibrant designs and exceptional durability.\n\nWhether you need promotional apparel for corporate events, branded merchandise for your business, or custom designs for personal use, our comprehensive printing methods include screen printing, heat transfer, vinyl cutting, and direct-to-garment printing. Each method is carefully selected based on your design requirements, quantity, and budget.\n\nOur experienced team provides design consultation, artwork requirements guidance, and color matching capabilities to ensure your vision becomes reality. With quick turnaround times and competitive KES pricing, we make custom apparel accessible for projects of all sizes.`,
    heroImage: tShirtHeroImage,
    startingPrice: 450,
    turnaround: "3-5 days",
    minimumOrder: "10 pieces",
    keyFeatures: [
      "Multiple Printing Methods",
      "Bulk Pricing Available",
      "Custom Design Service",
      "Quick Turnaround"
    ],
    specifications: [
      {
        icon: "Palette",
        title: "Printing Methods",
        description: "Screen print, heat transfer, vinyl cutting, DTG printing"
      },
      {
        icon: "Shirt",
        title: "Garment Options",
        description: "Cotton, polyester, blends, hoodies, polo shirts, tank tops"
      },
      {
        icon: "Maximize",
        title: "Print Areas",
        description: "Front, back, sleeves, chest pocket designs available"
      },
      {
        icon: "Palette",
        title: "Color Options",
        description: "Full-color prints, spot colors, metallic, glow-in-dark"
      },
      {
        icon: "Users",
        title: "Bulk Orders",
        description: "Competitive pricing for 50+ pieces with volume discounts"
      },
      {
        icon: "Clock",
        title: "Rush Orders",
        description: "Express 24-48 hour service available for urgent needs"
      }
    ],
    materials: [
      "100% Cotton T-shirts",
      "Cotton-Polyester Blends",
      "Performance Polyester",
      "Premium Cotton",
      "Hoodies & Sweatshirts",
      "Polo Shirts",
      "Tank Tops",
      "Long Sleeve Shirts",
      "V-neck T-shirts",
      "Organic Cotton",
      "Moisture-Wicking Fabric",
      "Fashion Fit Shirts"
    ],
    equipment: [
      {
        name: "Direct-to-Garment Printer",
      description: "Professional DTG printer for high-quality full-color designs with photographic detail on cotton garments.",
      image: tShirtEquipment,
      status: "Active",
      maxSize: "A3+ print area (16\" x 20\")",
      capabilities: [
        "Full-color printing",
        "Photo-quality results",
        "Water-based eco inks",
        "Soft hand feel"
      ]
    }
    /*
    {
      name: "Heat Transfer Vinyl Cutter",
      description: "Precision vinyl cutting system for creating durable, professional heat transfer designs and logos.",
      image: "https://images.unsplash.com/photo-1563906267088-b029e7101114?w=600&h=400&fit=crop",
      status: "Active",
      maxSize: "24-inch cutting width",
      capabilities: [
        "Precision cutting",
        "Various vinyl materials",
        "Weeding tools included",
        "Long-lasting adhesion"
      ]
    },
    {
      name: "Screen Printing Setup",
      description: "Professional screen printing equipment for high-volume orders with consistent color reproduction.",
      image: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=600&h=400&fit=crop",
      status: "Active",
      maxSize: "Multiple screen sizes available",
      capabilities: [
        "High-volume production",
        "Consistent color matching",
        "Multiple ink types",
        "Cost-effective for bulk"
      ]
    }*/
  ],
     gallery: [    {
      id: 1,
      
      image: tShirtGalleryArt
    },
    {
      id: 2,
      
      image: tShirtGalleryBrackets
    },
    {
      id: 3,
      
      image: tShirtGalleryDecorative
    },
    {
      id: 4,
     
      image: tShirtGalleryDisplays
    },
    {
      id: 5,
      
      image: tShirtGalleryFirm
    },
    {
      id: 6,
      
      image: tShirtGalleryFurniture
    },
    {
      id: 7,
      
      image: tShirtGalleryPrototypes
    },
    

 ],
    pricing: [     {
      name: "Starter Package",
      description: "Perfect for small events and personal projects",
      price: 850,
      originalPrice: 950,
      unit: "per shirt",
      popular: false,
      turnaround: "5-7 days",
      features: [
        "10-24 pieces minimum",
        "Single color design",
        "Standard cotton shirts",
        "Front print only",
        "Basic design consultation",
        "Free delivery in Nairobi"
      ]
    },
    {
      name: "Business Package",
      description: "Most popular for corporate and promotional needs",
      price: 700,
      originalPrice: 800,
      unit: "per shirt",
      popular: true,
      turnaround: "3-5 days",
      features: [
        "25-99 pieces",
        "Multi-color designs",
        "Premium cotton options",
        "Front and back printing",
        "Professional design service",
        "Rush delivery available",
        "Size guide assistance",
        "Quality guarantee"
      ]
    },
    {
      name: "Bulk Package",
      description: "Best value for large orders and events",
      price: 600,
      unit: "per shirt",
      popular: false,
      turnaround: "3-5 days",
      features: [
        "100+ pieces volume pricing",
        "Full-color designs available",
        "Premium garment selection",
        "Multiple print locations",
        "Dedicated project manager",
        "Express production available",
        "Custom packaging options",
        "Extended warranty",
        "Account billing available"
      ]
    }
],
    related: [     {
      title: "Large Format Printing",
      path: "/large-format",
      category: "Digital Printing",
      description: "Professional large format printing for banners, posters, and business signage.",
      image: relatedLargeFormatImg,
      startingPrice: 500,
      turnaround: "24-48 hours",
      features: ["Weather Resistant", "Multiple Sizes", "Fast Turnaround"]
    },
    {
      title: "UV Printing",
      path: "/uv-printing",
      category: "Specialty Printing",
      description: "Direct UV printing on promotional items, phone cases, and custom accessories.",
      image: relatedUvPrintingImg,
      startingPrice: 800,
      turnaround: "2-3 days",
      features: ["Direct Material Printing", "Durable Finish", "Custom Items"]
    },
    {
      title: "Corporate Services",
      path: "/corporate-services",
      category: "Business Solutions",
      description: "Comprehensive corporate branding and marketing material solutions.",
      image: relatedCorporateImg,
      startingPrice: 1000,
      turnaround: "5-7 days",
      features: ["Brand Consistency", "Volume Discounts", "Account Management"]
    }
 ]
  },

  "uv-printing": {
    
    id: 3,
    path: "/uv-printing",
    title: "UV Printing Services",
    category: "Specialty Printing",
    description: "Advanced UV printing services for premium materials and custom applications offering exceptional durability, vibrant colors, and versatile substrate compatibility.",
    detailedDescription: `Our UV printing services showcase cutting-edge technology that delivers superior print quality on an extensive range of materials. Unlike traditional printing methods, UV printing cures ink instantly using ultraviolet light, resulting in scratch-resistant, waterproof, and fade-resistant prints.\n\nWe specialize in direct-to-substrate printing on glass, metal, wood, acrylic, ceramics, and various rigid materials. This technology opens up unlimited creative possibilities for promotional items, signage, decorative panels, and custom applications that traditional printing cannot achieve.\n\nOur UV printing process is environmentally friendly, using eco-solvent inks with no volatile organic compounds (VOCs), making it safe for indoor applications and reducing environmental impact while maintaining exceptional print quality and durability.`,
    heroImage: uvHeroImage,
    startingPrice: 800,
    turnaround: "2-3 days",
    minimumOrder: "1 piece",
    keyFeatures: [
      "Direct Material Printing",
      "Instant Curing",
      "Eco-Friendly Inks",
      "Superior Durability"
    ],
    specifications: [
      {
        icon: "Layers",
        title: "Substrate Range",
        description: "Glass, metal, wood, acrylic, ceramics, and rigid materials"
      },
      {
        icon: "Palette",
        title: "Color Gamut",
        description: "Wide color gamut with vibrant, true-to-life reproduction"
      },
      {
        icon: "Shield",
        title: "Durability",
        description: "Scratch, water, and UV resistant with long-lasting colors"
      },
      {
        icon: "Zap",
        title: "Resolution",
        description: "Up to 1200 DPI for fine detail reproduction"
      },
      {
        icon: "Leaf",
        title: "Eco-Friendly",
        description: "VOC-free inks with minimal environmental impact"
      },
      {
        icon: "Settings",
        title: "Finish Options",
        description: "Matte, gloss, textured, and special effect finishes"
      }
    ],
    materials: [
      "Tempered Glass",
      "Acrylic Sheets",
      "Aluminum Panels",
      "Wood Substrates",
      "Ceramic Tiles",
      "PVC Boards",
      "Metal Sheets",
      "Foam Board",
      "Corrugated Plastic",
      "Polycarbonate",
      "Dibond",
      "Mirror Surfaces"
    ],
    equipment: [
      {
        name: "XP600 printhead i3200 printhead 6090 uv printer",
      description: "Professional flatbed UV printer for direct printing on various rigid materials with exceptional quality.",
      image: uvPrinterEquipment,
      status: "Active",
      maxSize: "770mm x 330mm",
      capabilities: [
        "Direct substrate printing",
        "Variable droplet technology",
        "White and clear ink options",
        "Multilayer printing capability"
      ]
    }
    /*
    {
      name: "Mimaki UJF-7151plus",
      description: "Advanced UV-LED inkjet printer offering high-speed printing with superior quality on diverse materials.",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop",
      status: "Active",
      maxSize: "711mm x 508mm",
      capabilities: [
        "UV-LED instant curing",
        "2.5D textured printing",
        "Primer and varnish printing",
        "High-speed production"
      ]
    },
    {
      name: "HP Stitch S500",
      description: "High-performance UV printer designed for promotional products and custom applications.",
      image: "https://images.unsplash.com/photo-1563906267088-b029e7101114?w=600&h=400&fit=crop",
      status: "Active",
      maxSize: "635mm x 508mm",
      capabilities: [
        "Water-based UV inks",
        "Stretch and flexibility",
        "Fast production speeds",
        "Consistent color accuracy"
      ]
    } */
  ],
     gallery: [     {
      id: 1,
      
      image: uvGalleryArt
    },
    {
      id: 2,
      
      image: uvGalleryBrackets
    },
    {
      id: 3,
      
      image: uvGalleryDecorative
    },
    {
      id: 4,
      
      image: uvGalleryDisplays
    },
    {
      id: 5,
      
      image: uvGalleryFurniture
    },
    {
      id: 6,
     
      image: uvGalleryPrototypes
    },
    {
      id: 7,
     
      image: uvGallerySignage
    }
 ],
    pricing: [     {
      name: "Standard UV Package",
      description: "Perfect for promotional items and small projects",
      price: 1200,
      originalPrice: 1600,
      unit: "per piece",
      popular: false,
      turnaround: "3-5 days",
      features: [
        "Standard substrate options",
        "Single-sided printing",
        "Basic color matching",
        "Standard resolution",
        "Free design consultation",
        "Quality guarantee"
      ]
    },
    {
      name: "Professional UV Package",
      description: "Most popular for business applications",
      price: 2000,
      originalPrice: 2800,
      unit: "per piece",
      popular: true,
      turnaround: "2-3 days",
      features: [
        "Premium substrate options",
        "Double-sided printing available",
        "Color-accurate proofing",
        "High-resolution printing",
        "White and clear ink options",
        "Rush service available",
        "Professional finishing",
        "Custom size accommodation"
      ]
    },
    {
      name: "Premium UV Package",
      description: "For high-end applications and volume orders",
      price: 3500,
      unit: "per piece",
      popular: false,
      turnaround: "24-48 hours",
      features: [
        "Specialty substrate materials",
        "Multi-layer printing effects",
        "Textured 2.5D printing",
        "Custom color matching",
        "Priority production",
        "Same-day rush available",
        "Premium packaging",
        "Volume discounts",
        "Dedicated project manager"
      ]
    }
],
    related: [    {
      title: "Large Format Printing",
      path: "/large-format",
      category: "Digital Printing",
      description: "Professional large format printing for banners, posters, and signage applications.",
      image: relatedLargeFormatImg,
      startingPrice: 500,
      turnaround: "24-48 hours",
      features: ["High Resolution", "Weather Resistant", "Custom Sizes"]
    },
    {
      title: "CNC Cutting",
      path:"/cnc-cutting",
      category: "Fabrication",
      description: "Precision CNC cutting services for signage, displays, and custom fabrication projects.",
      image: relatedCncCuttingImg,
      startingPrice: 300,
      turnaround: "3-5 days",
      features: ["Precision Cutting", "Multiple Materials", "Custom Shapes"]
    },
    {
      title: "Laser Engraving",
      path:"/laser-cutting",
      category: "Engraving",
      description: "Professional laser engraving services for promotional items and custom applications.",
      image: relatedLaserCuttingImg,
      startingPrice: 250,
      turnaround: "1-2 days",
      features: ["Precision Engraving", "Various Materials", "Custom Designs"]
    } ]
    
  },

   "offset-printing": {
    id: 7, // Give it a unique ID
    path: "/offset-printing", // A future path
    title: "Offset Printing Services",
    category: "Commercial Printing",
    description: "High-volume commercial printing for books, brochures, packaging, and more with exceptional quality and color consistency.",
    heroImage: offsetPrintingHeroImage, // <-- Using the new imported image
    // You can leave these other properties as empty arrays for now
    equipment: [], 
    gallery: [],
    pricing: [],
    related: []
  }
  
};
// --- General Service Card Images (for use in Related Services) ---
import relatedLaserCuttingImg from '../assets/laser-hero-image.webp';
import relatedLargeFormatImg from '../assets/large-format-hero-image.webp';
import relatedUvPrintingImg from '../assets/uv-hero-image.webp';
import relatedCncCuttingImg from '../assets/cnc-hero-image.webp';
import relatedCorporateImg from '../assets/corporate-hero-image.webp';

// 1. IMPORT YOUR IMAGES at the top of the file
import cncHeroImage from '../assets/cnc-hero-image.webp';  // <-- Replace with your actual filename
import cncEquipmentRouter from '../assets/cncrouter.webp';

import cncGalleryPanels from '../assets/cnc-gallery-panels.webp';
import cncGallerySignage from '../assets/cnc-gallery-signage.webp';
import cncGalleryDecorative from '../assets/cnc-gallery-decorative.webp';
import cncGalleryPrototypes from '../assets/cnc-gallery-prototypes.webp';
import cncGalleryFurniture from '../assets/cnc-gallery-furniture.webp';
import cncGalleryDisplays from '../assets/cnc-gallery-displays.webp';
import cncGalleryBrackets from '../assets/cnc-gallery-brackets.webp';
import cncGalleryArt from '../assets/cnc-gallery-art.webp';


import laserHeroImage from '../assets/laser-hero-image.webp';
import laserEquipment from '../assets/lasercutter.webp';

import laserGalleryPanels from '../assets/laser-gallery-panels.webp';
import laserGallerySignage from '../assets/laser-gallery-signage.webp';
import laserGalleryDecorative from '../assets/laser-gallery-decorative.webp';
import laserGalleryPrototypes from '../assets/laser-gallery-prototypes.webp';
import laserGalleryFurniture from '../assets/laser-gallery-furniture.webp';
import laserGalleryDisplays from '../assets/laser-gallery-displays.webp';
import laserGalleryBrackets from '../assets/laser-gallery-brackets.webp';
import laserGalleryArt from '../assets/laser-gallery-art.webp';


import uvHeroImage from '../assets/uv-hero-image.webp';
import uvPrinterEquipment from '../assets/uvprinter.webp';

import uvGallerySignage from '../assets/uv-gallery-signage.webp';
import uvGalleryDecorative from '../assets/uv-gallery-decorative.webp';
import uvGalleryPrototypes from '../assets/uv-gallery-prototypes.webp';
import uvGalleryFurniture from '../assets/uv-gallery-furniture.webp';
import uvGalleryDisplays from '../assets/uv-gallery-displays.webp';
import uvGalleryBrackets from '../assets/uv-gallery-brackets.webp';
import uvGalleryArt from '../assets/uv-gallery-art.webp';

import largeFormatHeroImage from '../assets/large-format-hero-image.webp';
import largeFormatEquipment from '../assets/largeformat.webp';
import largeEquipment from '../assets/largeprinter-01.webp';

import largeGallerySignage from '../assets/large-gallery-signage.webp';
import largeGalleryDecorative from '../assets/large-gallery-decorative.webp';
import largeGalleryPrototypes from '../assets/large-gallery-prototypes.webp';
import largeGalleryFurniture from '../assets/large-gallery-furniture.webp';
import largeGalleryDisplays from '../assets/large-gallery-displays.webp';
import largeGalleryBrackets from '../assets/large-gallery-brackets.webp';
import largeGalleryArt from '../assets/large-gallery-art.webp';


import plottingHeroImage from '../assets/plotting-hero-image.webp';
import plottingEquipment from '../assets/plotter.webp';

import plottingGalleryPanels from '../assets/plotting-gallery-panels.webp';
import plottingGallerySignage from '../assets/plotting-gallery-signages.webp';
import plottingGalleryDecorative from '../assets/plotting-gallery-decorative.webp';
import plottingGalleryPrototypes from '../assets/plotting-gallery-prototypes.webp';
import plottingGalleryFurniture from '../assets/plotting-gallery-furniture.webp';
import plottingGalleryDisplays from '../assets/plotting-gallery-displays.webp';
import plottingGalleryBrackets from '../assets/plotting-gallery-brackets.webp';
import plottingGalleryArt from '../assets/plotting-gallery-art.webp';



import tShirtHeroImage from '../assets/t-shirt-hero-image.webp';
import tShirtEquipment from '../assets/dtf-printer.webp';

import tShirtGalleryFirm from '../assets/t-shirt-gallery-firm.webp';
import tShirtGalleryDecorative from '../assets/t-shirt-gallery-decorative.webp';
import tShirtGalleryPrototypes from '../assets/t-shirt-gallery-prototypes.webp';
import tShirtGalleryFurniture from '../assets/t-shirt-gallery-furniture.webp';
import tShirtGalleryDisplays from '../assets/t-shirt-gallery-displays.webp';
import tShirtGalleryBrackets from '../assets/t-shirt-gallery-brackets.webp';
import tShirtGalleryArt from '../assets/t-shirt-gallery-art.webp';

import offsetPrintingHeroImage from '../assets/offset-printer.webp';
import sublimationHeroImage from '../assets/heatpress.webp';
import dtfHeroImage from '../assets/t-shirt-hero-image.webp';
import dtfEquipmentImage from '../assets/dtf-printer.webp';
import digitalHeroImage from '../assets/uvbooks.webp';
import digitalEquipmentImage from '../assets/uvmagazines.webp';
import sublimationGalleryVests from '../assets/vests.webp';
import sublimationGalleryGifts from '../assets/giftbox.webp';
import digitalGallerySignages from '../assets/signages.webp';

// 2. DEFINE YOUR SERVICES
export const services = 
{
    "cnc-cutting":{
        id: 2,
    path: "/services/cnc-cutting",
    title: "CNC Cutting Nairobi",
    category: "Precision Fabrication",
    description: "CNC cutting services in Nairobi — precision cutting of acrylic, wood, MDF, foam, and metal for signage, furniture, displays, and prototypes. Custom shapes, fast turnaround. Get a quote from Luna Graphics.",
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
      path: "/services/laser-cutting",
      category: "Precision Cutting",
      description: "High-precision laser cutting for intricate designs and detailed fabrication.",
      image: relatedLaserCuttingImg,
      startingPrice: 600,
      turnaround: "2-3 days",
      features: ["Intricate Designs", "Multiple Materials", "High Precision"]
    },
    {
      title: "Large Format Printing",
      path: "/services/large-format",
      category: "Digital Printing",
      description: "Professional large format printing for banners, posters, and displays.",
      image: relatedLargeFormatImg,
      startingPrice: 500,
      turnaround: "24-48 hours",
      features: ["Weather Resistant", "Multiple Formats", "Fast Turnaround"]
    },
    {
      title: "UV Printing",
      path: "/services/uv-printing",
      category: "Specialty Printing",
      description: "Direct UV printing on various materials including glass, metal, and plastics.",
      image: relatedUvPrintingImg,
      startingPrice: 1000,
      turnaround: "2-3 days",
      features: ["Direct Material Printing", "Durable Finish", "Vibrant Colors"]
    }
 ],
    faqs: [
      {
        question: "How much does CNC cutting cost in Nairobi?",
        answer: "CNC cutting prices in Nairobi start from KES 800 per piece for simple shapes in standard materials. Complex designs, larger sizes, and premium materials such as thick acrylic or metal cost more. Luna Graphics provides free quotes — send us your design file and material requirements."
      },
      {
        question: "What materials can you CNC cut in Kenya?",
        answer: "Luna Graphics CNC cuts wood (plywood, MDF, solid timber), acrylic, aluminium, mild steel, foam, PVC, and composite panels. Our cutting bed handles sheets up to 2.5m x 1.5m with up to 200mm thickness depending on material."
      },
      {
        question: "How long does CNC cutting take in Nairobi?",
        answer: "Standard turnaround is 2–5 business days depending on complexity and quantity. Rush orders can be accommodated. We deliver across Nairobi — Industrial Area, Westlands, Karen — and Kenya-wide."
      },
      {
        question: "Can you cut acrylic letters and signage with CNC in Nairobi?",
        answer: "Yes. Luna Graphics specialises in CNC-cut acrylic letters, 3D signage, logo cutouts, and custom display stands. We cut, route, and engrave acrylic in any colour and thickness — popular for office signage, retail displays, and event props."
      }
    ],
    relatedBlogPosts: [
      {
        slug: "uv-vs-screen-printing-nairobi-guide",
        title: "UV Printing vs Screen Printing in Nairobi: The Complete Guide",
        excerpt: "Discover which printing method suits your project — cost, durability, and material comparisons.",
        category: "Printing Tips",
        image: "/images/blog/1.jfif"
      },
      {
        slug: "exhibition-stand-design-trends-nairobi-2024",
        title: "Exhibition Stand Design Trends in Nairobi 2024",
        excerpt: "How to make your trade show booth stand out with cutting-edge display strategies.",
        category: "Exhibition & Events",
        image: "/images/blog/4.jfif"
      },
      {
        slug: "large-format-printing-file-preparation-guide",
        title: "Large Format Printing File Preparation: The Technical Guide",
        excerpt: "Prepare print-ready files for CNC and large format projects — resolution, bleed, and formats.",
        category: "Printing Tips",
        image: "/images/blog/5.jfif"
      }
    ]
  },


  "laser-cutting":{
    id: 3,
    path: "/services/laser-cutting",
    title: "Laser Cutting Nairobi",
    category: "Precision Laser Technology",
    description: "Laser cutting and engraving services in Nairobi — wood, acrylic, leather, MDF, and glass. Intricate designs, personalised gifts, signage letters, and trophies. Fast turnaround. Luna Graphics Kenya.r, and fabric with precision and design complexity capabilities.",
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
      path: "/services/cnc-cutting",
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
      path: "/services/large-format",
      category: "Digital Printing",
      description: "Professional large format printing for banners, posters, and displays.",
      image: relatedLargeFormatImg,
      startingPrice: 500,
      turnaround: "24-48 hours",
      features: ["Weather Resistant", "Multiple Formats", "Fast Turnaround"]
    },
    {
      title: "UV Printing",
      path: "/services/uv-printing",
      category: "Specialty Printing",
      description: "Direct UV printing on various materials including glass, metal, and plastics.",
      image: relatedUvPrintingImg,
      startingPrice: 1000,
      turnaround: "2-3 days",
      features: ["Direct Material Printing", "Durable Finish", "Vibrant Colors"]
    }
 ],
    relatedBlogPosts: [
      {
        slug: "uv-vs-screen-printing-nairobi-guide",
        title: "UV Printing vs Screen Printing in Nairobi: The Complete Guide",
        excerpt: "Which method suits your project? Cost, durability, and material compatibility compared.",
        category: "Printing Tips",
        image: "/images/blog/1.jfif"
      },
      {
        slug: "exhibition-stand-design-trends-nairobi-2024",
        title: "Exhibition Stand Design Trends in Nairobi 2024",
        excerpt: "Laser-cut display elements and signage are transforming trade show booths.",
        category: "Exhibition & Events",
        image: "/images/blog/4.jfif"
      },
      {
        slug: "large-format-printing-file-preparation-guide",
        title: "Large Format Printing File Preparation Guide",
        excerpt: "Technical file specs for precision cutting and large format print projects.",
        category: "Printing Tips",
        image: "/images/blog/5.jfif"
      }
    ]
    },

    "plotting-services": {
         id: 2,
    path: "/services/plotting",     
    title: "Plotting Services Nairobi",
    category: "Technical Drawing",
    description: "Large format plotting in Nairobi for architectural plans, engineering drawings, CAD files, and technical documents. A0/A1/A2 sizes, fast turnaround, colour and monochrome. Luna Graphics Kenya. clarity.",
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
      path: "/services/large-format",
      category: "Branding and Printing",
      description: "Professional large format printing for banners, posters, and signage applications.",
      image: relatedLargeFormatImg,
      startingPrice: 500,
      turnaround: "24-48 hours",
      features: ["High Resolution", "Weather Resistant", "Custom Sizes"]
    },
    {
      title: "UV printing services",
      path: "/services/uv-printing",
      category: "Production",
      description: "Professional UV printing services to produce impactful products.",
      image: relatedUvPrintingImg,
      startingPrice: 1000,
      turnaround: "2-3 days",
      features: ["Tampered glass", "Scratch, water and UV resistant", "Eco friendly inks"]
    },
    {
      title: "CNC cutting services",
      path: "/services/cnc-cutting",
      category: "Production",
      description: "Professional CNC cutting services for precise fabrication of various materials.",
      image: relatedCncCuttingImg,
      startingPrice: 800,
      turnaround: "3-5 days",
      features: ["Precision cutting", "Multiple materials", "Custom shapes"]
    }
 ],
    faqs: [
      {
        question: "What is plotting and how is it different from regular printing?",
        answer: "Plotting refers to large-format technical printing using a plotter machine, designed specifically for architectural drawings, engineering plans, CAD files, and construction documents. Unlike regular printing, plotters handle A0, A1, and A2 paper sizes at very high resolution, preserving fine lines, dimensions, and annotations critical for technical use."
      },
      {
        question: "How much does A1 and A0 plotting cost in Nairobi?",
        answer: "Luna Graphics offers A1 plotting from KES 200 per copy and A0 from KES 350 per copy for standard monochrome technical drawings. Colour plots and premium media cost more. Bulk orders of 10+ sheets get discounted rates. Contact us for project-specific pricing."
      },
      {
        question: "What file formats do you accept for plotting?",
        answer: "We accept DWG, DXF (AutoCAD), PDF, TIFF, PNG, and most common CAD and image formats. Send files via WhatsApp, email, or USB drive. Our team checks files before plotting and alerts you to any issues with resolution or scale."
      },
      {
        question: "How fast is your plotting turnaround in Nairobi?",
        answer: "Standard turnaround is 2–4 hours for urgent project sets. Same-day plotting available for orders placed before 2PM. For large bulk orders (construction project sets), allow 24 hours. We also offer delivery to construction sites across Nairobi."
      }
    ],
    relatedBlogPosts: [
      {
        slug: "exhibition-display-solutions-nairobi",
        title: "Exhibition & Trade Show Display Solutions in Nairobi",
        excerpt: "Pull-up banners, teardrop flags, pop-up stands — complete display solutions with prices.",
        category: "Exhibition & Events",
        image: "/assets/exhibition.webp"
      },
      {
        slug: "roll-up-banner-printing-nairobi-cost",
        title: "Roll-Up Banner Printing in Nairobi: Prices & What Affects the Cost",
        excerpt: "Banner costs explained — size, material, stand quality, and turnaround time all factor in.",
        category: "Large Format",
        image: "/assets/stands.webp"
      },
      {
        slug: "large-format-printing-file-preparation-guide",
        title: "Large Format Printing File Preparation: The Technical Guide",
        excerpt: "Master resolution, colour mode, bleed, and file formats for perfect large format prints.",
        category: "Printing Tips",
        image: "/images/blog/5.jfif"
      }
    ]
  },

     "large-format":{
    id: 1,
    path: "/services/large-format",
    title: "Large Format Printing Nairobi",
    category: "Digital Printing",
    description: "Premium large format printing in Nairobi — banners, billboards, building wraps, exhibition displays, and outdoor signage. High-resolution prints, weather-resistant materials, fast turnaround. Call Luna Graphics for a quote.",
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
      path: "/services/laser-cutting",
      category: "Specialty Cutting",
      description: "High-quality laser cutting for signages, cutouts and more print works.",
      image: relatedLaserCuttingImg,
      startingPrice: 600,
      turnaround: "Same day",
      features: ["Precision Cutting", "Multiple Materials", "Custom Shapes"]
    },
    {
      title: "UV Printing",
      path: "/services/uv-printing",
      category: "Specialty Printing",
      description: "Direct UV printing on various materials including glass, metal, wood, and plastics.",
      image: relatedUvPrintingImg,
      startingPrice: 1000,
      turnaround: "2-3 days",
      features: ["Direct Material Printing", "Durable Finish", "Vibrant Colors"]
    },
    {
      title: "CNC Cutting",
      path: "/services/cnc-cutting",
      category: "Fabrication",
      description: "Precision CNC cutting services for signage, displays, and custom fabrication projects.",
      image: relatedCncCuttingImg,
      startingPrice: 800,
      turnaround: "3-5 days",
      features: ["Precision Cutting", "Multiple Materials", "Custom Shapes"]
    }
 ],
    faqs: [
      {
        question: "How much does large format printing cost in Nairobi?",
        answer: "Large format printing prices in Nairobi start from KES 800 per square metre for standard PVC banners, rising to KES 2,500+ for premium substrates like canvas, mesh, or backlit film. The final cost depends on material, size, quantity, and finishing (eyelets, hemming, lamination). Contact Luna Graphics for a free quote tailored to your project."
      },
      {
        question: "What is the largest size you can print?",
        answer: "Luna Graphics can print banners and signage up to 5 metres wide and virtually unlimited length on our wide-format printers. For building wraps and billboards, we tile and seam panels seamlessly to cover any size. We have delivered prints for building facades exceeding 20 metres in height."
      },
      {
        question: "How long does large format printing take in Nairobi?",
        answer: "Standard turnaround is 24–72 hours for most banner and signage orders. Rush same-day printing is available for urgent jobs. Large orders such as building wraps or event backdrops typically take 3–5 business days. We serve clients across Nairobi, Westlands, CBD, Karen, and deliver Kenya-wide."
      },
      {
        question: "What materials do you print on for outdoor use?",
        answer: "For outdoor large format printing we use UV-resistant, weatherproof materials including PVC flex banners, mesh vinyl (for wind-resistant applications), blockout banners, canvas, polyester fabric, and aluminium composite panels. All outdoor inks are UV-cured or solvent-based for lasting vibrancy in Nairobi's climate."
      },
      {
        question: "Can you print building wraps and billboard skins in Kenya?",
        answer: "Yes. Luna Graphics specialises in large-scale building wraps, hoarding graphics, and billboard skins for both indoor and outdoor use across Kenya. We handle design, printing, and can coordinate installation. We have completed projects for major brands, government agencies, and real estate developers in Nairobi."
      }
    ],
    relatedBlogPosts: [
      {
        slug: "roll-up-banner-printing-nairobi-cost",
        title: "Roll-Up Banner Printing in Nairobi: Prices & What Affects the Cost",
        excerpt: "Size, material, stand type — everything that drives the price of a roll-up banner in Nairobi.",
        category: "Large Format",
        image: "/assets/stands.webp"
      },
      {
        slug: "exhibition-display-solutions-nairobi",
        title: "Exhibition & Trade Show Display Solutions in Nairobi",
        excerpt: "From pull-up banners to full branded booth packages — all options with prices.",
        category: "Exhibition & Events",
        image: "/assets/exhibition.webp"
      },
      {
        slug: "exhibition-stand-design-trends-nairobi-2024",
        title: "Exhibition Stand Design Trends in Nairobi 2024",
        excerpt: "The display and printing trends shaping Nairobi's top trade shows in 2024.",
        category: "Exhibition & Events",
        image: "/images/blog/4.jfif"
      }
    ]
},
    "t-shirt-printing":{
    id: 6,
    path: "/services/t-shirt-printing",
    title: "T-Shirt Printing Nairobi",
    category: "Custom Apparel",
    description: "Custom t-shirt and garment printing in Nairobi — screen printing, DTF, and sublimation for corporates, schools, events, and sports teams. No minimum order. Bulk discounts. Fast delivery Kenya-wide. Luna Graphics.",
    detailedDescription: `Our T-shirt Printing Services showcase custom apparel printing capabilities for businesses, events, and personal branding with various printing methods and competitive bulk pricing. Using mobile-first responsive approach, we deliver high-quality custom t-shirts with vibrant designs and exceptional durability.\n\nWhether you need promotional apparel for corporate events, branded merchandise for your business, or custom designs for personal use, our comprehensive printing methods include screen printing, heat transfer, vinyl cutting, and direct-to-garment printing. Each method is carefully selected based on your design requirements, quantity, and budget.\n\nOur experienced team provides design consultation, artwork requirements guidance, and color matching capabilities to ensure your vision becomes reality. With quick turnaround times and competitive KES pricing, we make custom apparel accessible for projects of all sizes.`,
    heroImage: tShirtHeroImage,
    startingPrice: 600,
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
      path: "/services/large-format",
      category: "Digital Printing",
      description: "Professional large format printing for banners, posters, and business signage.",
      image: relatedLargeFormatImg,
      startingPrice: 500,
      turnaround: "24-48 hours",
      features: ["Weather Resistant", "Multiple Sizes", "Fast Turnaround"]
    },
    {
      title: "UV Printing",
      path: "/services/uv-printing",
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
 ],
    faqs: [
      {
        question: "How much does t-shirt printing cost in Nairobi?",
        answer: "T-shirt printing prices in Nairobi start from KES 350 per shirt for bulk screen printing orders of 50+. DTF and sublimation printing for smaller quantities start from KES 600 per shirt. Prices include printing — shirts supplied separately or by Luna Graphics. Contact us for a bulk quote."
      },
      {
        question: "What is the minimum order for t-shirt printing in Nairobi?",
        answer: "Luna Graphics has no minimum order for DTF printing — we print single pieces. For screen printing, the minimum is typically 12 shirts per design for cost-effectiveness. Sublimation printing requires white or light polyester fabric with no minimum."
      },
      {
        question: "How long does t-shirt printing take in Nairobi?",
        answer: "Standard turnaround for garment printing is 3–5 business days. Rush 24–48 hour printing is available for urgent orders such as events, sports teams, and corporate functions. We deliver across Nairobi and Kenya-wide."
      },
      {
        question: "Can you print on uniforms and corporate shirts in Kenya?",
        answer: "Yes. Luna Graphics handles bulk corporate uniform printing for companies, schools, hospitals, and NGOs across Kenya. We print logos and branding on polo shirts, T-shirts, jackets, caps, and overalls using screen printing, embroidery, or DTF depending on the fabric and design."
      }
    ],
    relatedBlogPosts: [
      {
        slug: "dtf-printing-nairobi-guide",
        title: "DTF Printing in Nairobi: The Complete Guide to Direct to Film Printing",
        excerpt: "How DTF works, what fabrics it suits, pricing, and how it compares to screen printing.",
        category: "Printing Tips",
        image: "/assets/dtf-printer.webp"
      },
      {
        slug: "sublimation-printing-nairobi-guide",
        title: "Sublimation Printing in Nairobi: Mugs, Jerseys & Corporate Gifts",
        excerpt: "Dye sublimation explained — fabrics, hard goods, prices, and when to use it.",
        category: "Printing Tips",
        image: "/assets/heatpress.webp"
      },
      {
        slug: "corporate-gifts-printing-nairobi",
        title: "Corporate Gifts Printing in Nairobi: 15 Branded Gift Ideas",
        excerpt: "T-shirts, mugs, notebooks, plaques — 15 branded corporate gift ideas with KES prices.",
        category: "Corporate Branding",
        image: "/assets/giftbox.webp"
      }
    ]
  },

  "uv-printing": {
    
    id: 3,
    path: "/services/uv-printing",
    title: "UV Printing Nairobi",
    category: "Specialty Printing",
    description: "UV flatbed printing in Nairobi — direct printing on acrylic, glass, wood, metal, leather, and rigid substrates. Scratch-resistant, vibrant, no plate costs. Same-day available. Luna Graphics Nairobi.trate compatibility.",
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
      path: "/services/large-format",
      category: "Digital Printing",
      description: "Professional large format printing for banners, posters, and signage applications.",
      image: relatedLargeFormatImg,
      startingPrice: 500,
      turnaround: "24-48 hours",
      features: ["High Resolution", "Weather Resistant", "Custom Sizes"]
    },
    {
      title: "CNC Cutting",
      path:"/services/cnc-cutting",
      category: "Fabrication",
      description: "Precision CNC cutting services for signage, displays, and custom fabrication projects.",
      image: relatedCncCuttingImg,
      startingPrice: 300,
      turnaround: "3-5 days",
      features: ["Precision Cutting", "Multiple Materials", "Custom Shapes"]
    },
    {
      title: "Laser Engraving",
      path:"/services/laser-cutting",
      category: "Engraving",
      description: "Professional laser engraving services for promotional items and custom applications.",
      image: relatedLaserCuttingImg,
      startingPrice: 250,
      turnaround: "1-2 days",
      features: ["Precision Engraving", "Various Materials", "Custom Designs"]
    } ],
    faqs: [
      {
        question: "What is UV printing and how does it work in Nairobi?",
        answer: "UV flatbed printing uses ultraviolet light to instantly cure ink directly onto rigid and flexible substrates — no heat, no drying time. Luna Graphics in Nairobi prints on acrylic, glass, wood, metal, ceramic, leather, and PVC. The result is scratch-resistant, vibrant, and suitable for indoor and outdoor use."
      },
      {
        question: "How much does UV printing cost in Kenya?",
        answer: "UV printing prices in Nairobi depend on substrate, size, and quantity. Prices start from KES 1,000 for small items like phone cases or plaques, rising to KES 5,000+ per sqm for large rigid panels. Contact Luna Graphics for a free quote."
      },
      {
        question: "Can you UV print on acrylic and glass in Nairobi?",
        answer: "Yes. UV flatbed printing on acrylic and glass is one of Luna Graphics' most popular services. We print logos, artwork, and full-colour designs on acrylic sheets for signage, awards, and interior décor, and on glass for office partitions, doors, and gifts."
      },
      {
        question: "What is the difference between UV printing and normal printing?",
        answer: "Normal printing (inkjet/offset) uses water-based inks that soak into paper. UV printing uses inks cured instantly by UV light on almost any surface — rigid boards, glass, metal, wood. The result is waterproof, fade-resistant, and far more durable, making it ideal for Nairobi's outdoor conditions."
      }
    ],
    relatedBlogPosts: [
      {
        slug: "uv-vs-screen-printing-nairobi-guide",
        title: "UV Printing vs Screen Printing in Nairobi: The Complete Guide",
        excerpt: "In-depth comparison of UV printing and screen printing for Kenyan businesses.",
        category: "Printing Tips",
        image: "/images/blog/1.jfif"
      },
      {
        slug: "corporate-gifts-printing-nairobi",
        title: "Corporate Gifts Printing in Nairobi: 15 Branded Gift Ideas",
        excerpt: "UV-printed power banks, plaques, and keyrings — premium corporate gift options.",
        category: "Corporate Branding",
        image: "/assets/giftbox.webp"
      },
      {
        slug: "exhibition-stand-design-trends-nairobi-2024",
        title: "Exhibition Stand Design Trends in Nairobi 2024",
        excerpt: "UV-printed panels and acrylic elements transforming exhibition displays.",
        category: "Exhibition & Events",
        image: "/images/blog/4.jfif"
      }
    ]
  },

   "offset-printing": {
    id: 7,
    path: "/services/digital-printing",
    title: "Offset Printing Services",
    category: "Commercial Printing",
    description: "High-volume commercial printing for books, brochures, packaging, and more with exceptional quality and color consistency.",
    heroImage: offsetPrintingHeroImage,
    equipment: [],
    gallery: [],
    pricing: [],
    related: []
  },

  "dtf-printing": {
    id: 8,
    path: "/services/dtf-printing",
    title: "DTF Printing Nairobi",
    category: "Garment & Textile Printing",
    description: "Professional Direct to Film (DTF) printing in Nairobi for vivid, durable transfers on any fabric. No minimum order, full-colour prints on cotton, polyester, and blended garments.",
    detailedDescription: `DTF (Direct to Film) printing is the most versatile garment decoration technology available today. Unlike screen printing which requires separate setups per colour, DTF produces full-colour photographic prints in a single pass — making it ideal for short runs, complex designs, and on-demand printing.\n\nOur DTF process uses high-quality PET film, CMYK + white inks, and hot-melt adhesive powder to create transfers that bond permanently to virtually any fabric. The result is a soft, flexible print that won't crack, peel, or fade after washing.\n\nWe serve corporate clients needing branded uniforms, event organisers printing team shirts, political campaigns printing supporter merchandise, and retailers offering custom apparel — all with no minimum order and same-day turnaround for small quantities.`,
    heroImage: dtfHeroImage,
    startingPrice: 150,
    turnaround: "Same day – 24 hours",
    minimumOrder: "No minimum",
    keyFeatures: [
      "Full Colour, No Setup Fees",
      "Any Fabric Type",
      "No Minimum Order",
      "Photographic Print Quality"
    ],
    specifications: [
      { icon: "Palette", title: "Colour", description: "Unlimited colours including gradients, photos, and fine detail" },
      { icon: "Layers", title: "Fabric Compatibility", description: "Cotton, polyester, nylon, blends, denim, canvas, and more" },
      { icon: "Shield", title: "Wash Durability", description: "50+ machine washes without cracking, fading, or peeling" },
      { icon: "Zap", title: "Turnaround", description: "Same-day ready for small quantities; bulk next-day" },
      { icon: "Maximize", title: "Print Size", description: "Up to A3 (297mm × 420mm) per transfer" },
      { icon: "Settings", title: "Finish", description: "Soft, matte finish that feels natural on the garment" }
    ],
    materials: ["100% Cotton", "100% Polyester", "Cotton/Polyester Blend", "Nylon", "Denim", "Canvas Tote Bags", "Caps & Hats", "Hoodies"],
    applications: ["Corporate branded T-shirts", "Event merchandise", "Political campaign shirts", "Sports team uniforms", "Promotional gifts", "Custom hoodies and caps", "School uniforms", "NGO branded apparel"],
    equipment: [
      {
        name: "DTF Printer (A3 Format)",
        description: "Industrial-grade DTF printer with CMYK + White ink channels for full-colour, single-pass transfer production.",
        image: dtfEquipmentImage,
        specs: ["A3 print width", "CMYK + White inks", "High-speed production", "Water-based eco inks"]
      }
    ],
    gallery: [
      { image: tShirtGalleryFirm, title: "Corporate Uniform Printing", description: "Branded staff uniforms with full-colour DTF transfers" },
      { image: tShirtGalleryDecorative, title: "Event T-Shirts", description: "Custom event merchandise printed same-day" },
      { image: tShirtGalleryPrototypes, title: "Political Campaign Shirts", description: "Bulk campaign T-shirts with crisp logo prints" },
      { image: tShirtGalleryFurniture, title: "Sports Team Kits", description: "Numbered and named sports kits" },
      { image: tShirtGalleryDisplays, title: "Promotional Merchandise", description: "Branded hoodies, caps, and tote bags" },
      { image: tShirtGalleryArt, title: "Custom Fashion Pieces", description: "Artistic and photographic prints on garments" }
    ],
    pricing: [
      { name: "Single Transfer", description: "One-off custom transfer, A4 size", price: 150, unit: "per transfer" },
      { name: "Small Batch (5–20 pcs)", description: "Full-colour transfers, any size up to A3", price: 120, unit: "per transfer" },
      { name: "Medium Batch (21–100 pcs)", description: "Bulk rate with faster turnaround", price: 90, unit: "per transfer" },
      { name: "Large Batch (100+ pcs)", description: "Volume pricing for campaigns and corporate orders", price: 70, unit: "per transfer" }
    ],
    faqs: [
      { question: "What is the difference between DTF printing and screen printing?", answer: "DTF printing requires no screens or setup, supports unlimited colours, and is cost-effective for small quantities. Screen printing has lower per-unit cost for very large runs (500+ pieces) but requires setup fees per colour. DTF is better for detailed, photographic designs and short runs." },
      { question: "Do I need to bring my own garments?", answer: "Yes, you can bring your own garments, or we can source quality blanks for you at competitive prices. We print on most fabric types." },
      { question: "How long do DTF prints last?", answer: "Our DTF transfers are rated for 50+ machine washes at 40°C without cracking, peeling, or significant fading — when cared for according to our guidelines." },
      { question: "Can you print small quantities like 1–5 shirts?", answer: "Yes. DTF has no minimum order, so you can order a single custom transfer. This makes it perfect for samples, prototypes, or personal gifts." }
    ],
    related: [
      { key: "t-shirt-printing", title: "T-Shirt & Garment Printing", path: "/services/t-shirt-printing", image: tShirtHeroImage, description: "Full garment printing including sublimation and screen printing" },
      { key: "large-format", title: "Large Format Printing", path: "/services/large-format", image: relatedLargeFormatImg, description: "Banners, posters, and event backdrops" },
      { key: "uv-printing", title: "UV Printing", path: "/services/uv-printing", image: relatedUvPrintingImg, description: "Direct printing on rigid materials" }
    ]
  },

  "sublimation-printing": {
    id: 9,
    path: "/services/sublimation-printing",
    title: "Sublimation Printing Nairobi",
    category: "Garment & Promotional Printing",
    description: "High-quality dye sublimation printing in Nairobi for vibrant, permanent full-colour prints on polyester garments, mugs, phone cases, and corporate promotional items.",
    detailedDescription: `Dye sublimation is a heat-based printing process that converts solid ink into gas, permanently bonding colour into the fibres of polyester fabrics or the coating of hard substrates. The result is a print that won't crack, peel, or wash out — it becomes part of the material itself.\n\nAt Luna Graphics, we use sublimation for all-over garment printing (jerseys, sportswear, uniforms), promotional hard goods (mugs, phone cases, keyrings, coasters), and custom branded merchandise for corporate and events clients.\n\nSublimation produces the most vibrant colours possible on white or light-coloured polyester, making it the top choice for sports kits, hospitality uniforms, event merchandise, and photographic gifts. We handle everything from single-piece gifts to large corporate uniform runs.`,
    heroImage: sublimationHeroImage,
    startingPrice: 200,
    turnaround: "1–2 days",
    minimumOrder: "1 piece",
    keyFeatures: [
      "Permanent, Fade-Proof Colour",
      "All-Over Garment Printing",
      "Hard Goods & Soft Goods",
      "Photographic Quality"
    ],
    specifications: [
      { icon: "Palette", title: "Colour Quality", description: "Vibrant, photographic CMYK+ colour with no colour limits" },
      { icon: "Layers", title: "Fabric Requirements", description: "Minimum 65% polyester content for garments; 100% polyester for best results" },
      { icon: "Shield", title: "Durability", description: "Colour becomes part of the material — will not crack, peel, or fade" },
      { icon: "Maximize", title: "Print Coverage", description: "All-over printing from collar to hem, seam to seam" },
      { icon: "Zap", title: "Turnaround", description: "1–2 days for standard orders; same-day for mugs and small items" },
      { icon: "Settings", title: "Substrates", description: "Polyester garments, mugs, phone cases, coasters, keyrings, photo panels" }
    ],
    materials: ["Polyester Jerseys", "Sports Kits", "Polo Shirts (65%+ polyester)", "Sublimation Mugs", "Phone Cases", "Ceramic Tiles", "Metal Photo Panels", "Coasters & Keyrings"],
    applications: ["Sports team jerseys and kits", "Hospitality and hotel uniforms", "Corporate promotional mugs and gifts", "NGO branded apparel", "School sports kits", "Event merchandise", "Personalised photo gifts", "Branded workwear"],
    equipment: [
      {
        name: "Heat Press & Sublimation System",
        description: "Large-format sublimation printer paired with industrial heat press for consistent, permanent colour transfer on all substrates.",
        image: sublimationHeroImage,
        specs: ["Large-format sublimation print", "Industrial heat press", "Even pressure distribution", "Precise temperature control"]
      }
    ],
    gallery: [
      { image: sublimationGalleryVests, title: "Sports Vests & Jerseys", description: "All-over sublimation printed sports kits for teams and clubs" },
      { image: sublimationGalleryGifts, title: "Corporate Gift Sets", description: "Branded mugs, coasters, and photo panels for corporate gifting" },
      { image: tShirtGalleryFirm, title: "Hospitality Uniforms", description: "Hotel and restaurant sublimated polo shirts and aprons" },
      { image: tShirtGalleryPrototypes, title: "NGO Branded Apparel", description: "Field uniforms and event T-shirts for NGOs and nonprofits" },
      { image: tShirtGalleryDisplays, title: "Promotional Items", description: "Phone cases, keyrings, and photo panels" },
      { image: tShirtGalleryArt, title: "Custom School Kits", description: "School sports team kits with name and number" }
    ],
    pricing: [
      { name: "Sublimation Mug", description: "11oz ceramic mug, full wraparound print", price: 350, unit: "per mug" },
      { name: "Sublimation Jersey", description: "All-over printed polyester jersey, custom design", price: 800, unit: "per piece" },
      { name: "Photo Panel (A4)", description: "Aluminium photo panel, glossy sublimation print", price: 600, unit: "per panel" },
      { name: "Corporate Bundle", description: "Custom pricing for 50+ pieces — mugs, shirts, panels", price: null, unit: "get a quote" }
    ],
    faqs: [
      { question: "Can sublimation be done on cotton fabric?", answer: "No — sublimation only works on polyester (or polyester-coated hard goods). For cotton garments, DTF printing or screen printing is the better choice. We can advise on the best process for your specific garment and design." },
      { question: "Can you print on dark-coloured shirts?", answer: "Sublimation only works on white or very light fabrics. On dark fabrics, we recommend DTF printing which uses a white underbase layer to ensure colours pop." },
      { question: "How long does sublimation last?", answer: "Sublimation colour is permanent — it bonds into the fabric fibres, not onto the surface. It will not crack, peel, or wash out under normal care conditions." },
      { question: "Do you supply the blanks (mugs, garments)?", answer: "Yes. We can supply sublimation-ready blanks (mugs, jerseys, phone cases, etc.) at competitive rates, or print on blanks you supply provided they meet the polyester/coating requirements." }
    ],
    related: [
      { key: "dtf-printing", title: "DTF Printing", path: "/services/dtf-printing", image: dtfHeroImage, description: "Full-colour transfers on any fabric, no minimums" },
      { key: "t-shirt-printing", title: "T-Shirt Printing", path: "/services/t-shirt-printing", image: tShirtHeroImage, description: "Bulk garment printing for teams and corporates" },
      { key: "uv-printing", title: "UV Printing", path: "/services/uv-printing", image: relatedUvPrintingImg, description: "Direct printing on rigid promotional items" }
    ]
  },

  "digital-printing": {
    id: 10,
    path: "/services/digital-printing",
    title: "Digital Printing Nairobi",
    category: "Commercial Printing",
    description: "Fast, affordable digital printing in Nairobi for business cards, flyers, brochures, catalogues, and stationery. Full-colour CMYK printing with same-day turnaround available.",
    detailedDescription: `Digital printing is the foundation of modern commercial print — fast, flexible, and cost-effective from a single copy to thousands. Unlike offset printing, digital requires no printing plates, which means lower setup costs, faster turnaround, and the ability to personalise every single piece.\n\nAt Luna Graphics, our digital printing covers the full range of business stationery and marketing materials: business cards, letterheads, flyers, brochures, menus, catalogues, certificates, NCR forms, and more. We print on premium paper stocks from 90gsm bond to 400gsm board, with matte, gloss, and silk lamination finishes available.\n\nOur same-day digital printing service is popular with businesses that need urgent marketing collateral, event programmes, or last-minute stationery. We offer both standard sizes and custom formats, with full design support available.`,
    heroImage: digitalHeroImage,
    startingPrice: 50,
    turnaround: "Same day – 48 hours",
    minimumOrder: "1 copy",
    keyFeatures: [
      "Same-Day Printing Available",
      "No Minimum Order",
      "Premium Paper Stocks",
      "Full Colour CMYK"
    ],
    specifications: [
      { icon: "Palette", title: "Colour", description: "Full-colour CMYK printing with accurate colour reproduction" },
      { icon: "Layers", title: "Paper Stocks", description: "90gsm to 400gsm; bond, art, matte, and speciality papers" },
      { icon: "Maximize", title: "Print Sizes", description: "A6 to A0; custom sizes available on request" },
      { icon: "Shield", title: "Finishes", description: "Gloss, matte, silk, velvet lamination; spot UV; foil on request" },
      { icon: "Zap", title: "Turnaround", description: "Standard same-day for up to 500 copies; large runs in 48 hours" },
      { icon: "Settings", title: "Variable Data", description: "Personalised printing with unique names, codes, or QR codes per copy" }
    ],
    materials: ["Gloss Art Paper (130–200gsm)", "Matte Art Paper", "Bond Paper (90–120gsm)", "Card Stock (250–400gsm)", "Recycled Paper", "Kraft Paper", "NCR Carbonless Forms"],
    applications: ["Business cards and letterheads", "Flyers and leaflets", "Company brochures and catalogues", "Event programmes and invitations", "Restaurant and hotel menus", "Certificates and awards", "NCR order forms and receipts", "Company reports and booklets"],
    equipment: [
      {
        name: "Digital Production Press",
        description: "High-speed digital press for sharp, colour-accurate prints on a wide range of media types and weights.",
        image: digitalEquipmentImage,
        specs: ["Up to 300 A4 pages/min", "1200 DPI resolution", "Wide media range", "Consistent colour output"]
      }
    ],
    gallery: [
      { image: digitalGallerySignages, title: "Business Stationery", description: "Premium business cards, letterheads, and envelopes" },
      { image: digitalHeroImage, title: "Brochures & Catalogues", description: "Full-colour product catalogues and company brochures" },
      { image: sublimationGalleryGifts, title: "Branded Stationery Sets", description: "Corporate stationery packs for events and new offices" },
      { image: tShirtGalleryFurniture, title: "Event Programmes", description: "Conference and event programme booklets" },
      { image: digitalEquipmentImage, title: "Menus & Price Lists", description: "Restaurant menus and service price lists" },
      { image: tShirtGalleryArt, title: "Marketing Flyers", description: "Short-run promotional flyers and leaflets" }
    ],
    pricing: [
      { name: "Flyers (A5, 1-sided)", description: "Full colour on 130gsm gloss art, quantity 500", price: 3500, unit: "per 500 copies" },
      { name: "Business Cards", description: "Full colour both sides, 350gsm, quantity 250", price: 1800, unit: "per 250 copies" },
      { name: "A4 Brochure (folded)", description: "Full colour on 150gsm, folded to A5", price: 8000, unit: "per 500 copies" },
      { name: "Custom Quote", description: "Catalogues, booklets, NCR forms, and large runs", price: null, unit: "get a quote" }
    ],
    faqs: [
      { question: "What file formats do you accept for digital printing?", answer: "We accept PDF (preferred), AI, EPS, TIFF, and high-resolution PNG/JPEG. PDFs should be press-ready with 3mm bleed, CMYK colour mode, and fonts embedded." },
      { question: "Can I get a proof before printing?", answer: "Yes. We can provide a digital PDF proof for approval before going to print, or a physical printed proof for an additional fee on large runs." },
      { question: "Do you offer design services?", answer: "Yes. Our in-house designers can create or format your artwork for an additional design fee. Share your brief and we will quote accordingly." },
      { question: "What is the minimum order for business cards?", answer: "We print from as few as 1 copy digitally — though minimum economic quantities are typically 50+ for business cards and 100+ for flyers." }
    ],
    related: [
      { key: "large-format", title: "Large Format Printing", path: "/services/large-format", image: relatedLargeFormatImg, description: "Banners, posters, and event backdrops" },
      { key: "uv-printing", title: "UV Printing", path: "/services/uv-printing", image: relatedUvPrintingImg, description: "Premium finishes on rigid substrates" },
      { key: "t-shirt-printing", title: "T-Shirt Printing", path: "/services/t-shirt-printing", image: tShirtHeroImage, description: "Branded garments for teams and events" }
    ]
  }
};
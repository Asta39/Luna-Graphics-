// 1. Import the main services object which contains all our hero images
import { services } from './serviceData';

// 2. Define and export the list of equipment for the showcase
export const corporateEquipment = [
{
name: 'Large Format UV Printer',
model: 'Wit-Color Ultra Ultra i3200 1702 TP',
image: services['large-format'].heroImage, // <-- USE THE HERO IMAGE
capabilities: [ 'Print size up to 770mm × 330mm', 'ECO-solvent colour technology', 'Print on various materials', 'Weather resistance' ],
specifications: { 'Max Print Speed': '3.2 m²/hour', 'Resolution': '1440 × 1440 dpi', 'Ink Colors': '4 colors + White + Clear', 'Material Thickness': 'Up to 100mm' },
applications: ['Signage', 'Promotional items', 'Phone cases', 'Awards']
},
{
name: 'CNC Cutting Machine',
model: 'Multicam 3000 Series',
image: services['cnc-cutting'].heroImage, // <-- USE THE HERO IMAGE
capabilities: [ 'Precision cutting and engraving', 'Multiple material compatibility', 'Automated tool changing', '3D carving capabilities' ],
specifications: { 'Cutting Area': '3000mm × 1500mm', 'Spindle Power': '9.0 kW HSD', 'Positioning Accuracy': '±0.05mm', 'Max Cutting Speed': '30 m/min' },
applications: ['Acrylic signs', 'Wood engraving', 'Metal cutting', 'Architectural models']
},
{
name: 'Industrial Plotter',
model: 'HP DesignJet Z9+',
image: services['plotting-services'].heroImage, // <-- USE THE HERO IMAGE
capabilities: [ 'High-speed large format printing', 'Professional color accuracy', 'Multiple media handling', 'Automated maintenance' ],
specifications: { 'Print Width': 'Up to 1118mm (44")', 'Print Speed': 'Up to 91 m²/hour', 'Resolution': 'Up to 2400 × 1200 dpi', 'Ink System': '9-ink ChromaPRESS' },
applications: ['Technical drawings', 'Architectural plans', 'Posters', 'Banners']
},
{
name: 'Laser Cutting System',
model: 'Epilog Fusion Pro 48',
image: services['laser-cutting'].heroImage, // <-- USE THE HERO IMAGE
capabilities: [ 'Precision laser cutting', 'Engraving capabilities', 'Multiple material support', 'Computer-controlled operation' ],
specifications: { 'Cutting Area': '1219mm × 914mm', 'Laser Power': '120 Watts CO2', 'Cutting Speed': 'Up to 1676mm/min', 'Engraving Speed': 'Up to 3556mm/min' },
applications: ['Acrylic cutting', 'Wood engraving', 'Fabric cutting', 'Custom designs']
},
{
name: 'DTF Printer',
model: 'Epson SureColor F9470H',
image: services['t-shirt-printing'].equipment[0].image, // <-- USE THE HERO IMAGE
capabilities: [ 'High-volume textile printing', 'Fluorescent ink compatibility', 'Automated media handling', 'Production-level reliability' ],
specifications: { 'Print Width': '1626mm (64")', 'Print Speed': 'Up to 635 m²/hour', 'Ink Configuration': '8-color UltraChrome', 'Media Capacity': '180kg roll weight' },
applications: ['T-shirt printing', 'Banners', 'Flags', 'Soft signage']
},
{
name: 'Offset Printing Press',
model: 'Heidelberg Speedmaster XL 75',
// Using the large format hero image as a placeholder for general printing
image: services['offset-printing'].heroImage, // <-- REUSE AN APPROPRIATE HERO IMAGE
capabilities: [ 'High-volume commercial printing', 'Superior print quality', 'Multiple format support', 'Automated color control' ],
specifications: { 'Sheet Size': 'Up to 530mm × 750mm', 'Print Speed': 'Up to 18,000 sheets/hour', 'Colors': 'Up to 8 colors', 'Registration Accuracy': '±0.1mm' },
applications: ['Business cards', 'Brochures', 'Books', 'Packaging']
}
];
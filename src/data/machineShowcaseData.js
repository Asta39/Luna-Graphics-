// 1. Import the main services object which contains all our hero images
import { services } from './serviceData';

export const machines = [
{
id: 1,
name: "Wit-Color Ultra Ultra i3200 1702 TP",
category: "Large Format Printer",
image: services['large-format'].heroImage, // <-- USE THE HERO IMAGE from Large Format service
specifications: [ "Maximum width: 1,625mm (64 inches)", "Print resolution: Up to 1440 dpi", "Printing speed; 63msq/hr", "Media types: Vinyl, banner, canvas" ],
capabilities: [ "Print and cut in one process", "Eco-solvent ink technology", "Automatic media detection", "Contour cutting precision" ],
applications: ["Vehicle wraps", "Banners", "Decals", "Signage"]
},
{
id: 2,
name: "XP600 printhead i3200 printhead 6090 uv printer",
category: "UV Printer",
image: services['uv-printing'].heroImage, // <-- USE THE HERO IMAGE from UV Printing service
specifications: [ "Print area: 711 × 508mm", "Maximum thickness: 153mm", "Resolution: Up to 1200 × 1200 dpi", "Ink types: UV-LED curable" ],
capabilities: [ "Direct printing on objects", "White and clear ink options", "Multi-layer printing", "Instant curing technology" ],
applications: ["Phone cases", "Awards", "Promotional items", "Industrial parts"]
},
{
id: 3,
name: "Epilog Fusion Pro 48",
category: "CNC/Cutter",
image: services['cnc-cutting'].heroImage, // <-- USE THE HERO IMAGE from CNC Cutting service
specifications: [ "Work area: 1219 × 914mm", "Maximum spindle speed 10,000rpm", "Speed: Up to 1651mm/min", "Materials: Wood, acrylic, metal" ],
capabilities: [ "Precision cutting ", "Vector and raster processing", "Time efficient", "Advanced motion control" ],
applications: ["Architectural models", "Cutouts", "Prototypes", "Custom shapes"]
}
];
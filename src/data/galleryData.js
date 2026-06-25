// 1. Import all 12 of your custom gallery images
import safaricomBrandingImg from '../assets/giftbox.jpg';
import weddingSignageImg from '../assets/uvmagazines.jpg';
import javaMenuBoardsImg from '../assets/tablenumbers.jpg';
import schoolAwardsImg from '../assets/cutouts.jpg';
import techTshirtsImg from '../assets/teadrops.jpg';
import hospitalSignageImg from '../assets/signages.jpg';
import retailGraphicsImg from '../assets/uvbooks.jpg';
import architecturalPlansImg from '../assets/broadbase.jpg';
import eventBackdropImg from '../assets/lightbox.jpg';
import metalSignageImg from '../assets/stands.jpg';
import sportsJerseysImg from '../assets/vests.jpg';
import hotelSignageImg from '../assets/lightsignage.jpg';

// 2. Define and export the projects data
export const projects = [
  {
    id: 1,
    title: "Wedding Gift Box",
    image: safaricomBrandingImg, // <-- Using imported variable
    description: "A custom gift box required for a wedding.",
    serviceType: "large-format", industry: "events", material: "vinyl", scale: "medium", turnaroundTime: "1 days", completedDate: "2023-01-15",
  },
  {
    id: 2,
    title: "Birthday Magazines",
    image: weddingSignageImg, // <-- Using imported variable
    description: "Birthday magazines that bring a vintage yet classy vibe to the eventy.",
    serviceType: "Digital Printing", industry: "events", material: "paper", scale: "small", turnaroundTime: "1 days", completedDate: "2022-01-20",
  },
  {
    id: 3,
    title: "Table Numbers",
    image: javaMenuBoardsImg, // <-- Using imported variable
    description: "Durable outdoor and indoor table numbers customly made according to the events.",
    serviceType: "cnc-cutting", industry: "events", material: "forex", scale: "medium", turnaroundTime: "1 days", completedDate: "2022-01-25",
  },
  {
    id: 4,
    title: "Animation Cutouts",
    image: schoolAwardsImg, // <-- Using imported variable
    description: "Custom cnc cut cutouts that bring a warm vibe to parties especially kids events.",
    serviceType: "cnc-cutting", industry: "kids", material: "forex", scale: "medium", turnaroundTime: "1 days", completedDate: "2020-02-01",
  },
  {
    id: 5,
    title: "Teardrop Banners",
    image: techTshirtsImg, // <-- Using imported variable
    description: "Custom branded fabrics for company visibility during events.",
    serviceType: "t-shirt", industry: "corporate", material: "fabric", scale: "bulk", turnaroundTime: "1 days", completedDate: "2024-02-05",
  },
  {
    id: 6,
    title: "Welcome Signages",
    image: hospitalSignageImg, // <-- Using imported variable
    description: "Welcome signages for any event custom made to match the event vibe.",
    serviceType: "large-format", industry: "events", material: "vinyl", scale: "medium", turnaroundTime: "1 days", completedDate: "2017-02-10",
  },
  {
    id: 7,
    title: "UV printed Corporate Notebooks",
    image: retailGraphicsImg, // <-- Using imported variable
    description: "Eye-catching and well detailed uv printing for corporate needs and events.",
    serviceType: "uv-printing", industry: "corporate", material: "books", scale: "large", turnaroundTime: "3 days", completedDate: "2019-02-15",
  },
  {
    id: 8,
    title: "Broadbase Banners",
    image: architecturalPlansImg, // <-- Using imported variable
    description: "Large format printed banners for any kind of event display.",
    serviceType: "large-format", industry: "corporate", material: "satin", scale: "medium", turnaroundTime: "2 days", completedDate: "2025-02-20",
  },
  {
    id: 9,
    title: "Lighbox Signages",
    image: eventBackdropImg, // <-- Using imported variable
    description: "Well lit lightboxes for business visibilty from a distance during any time of the day.",
    serviceType: "laser-cutting", industry: "businesses", material: "forex", scale: "large", turnaroundTime: "3 days", completedDate: "2020-02-25",
  },
  {
    id: 10,
    title: "Exhibition Stands",
    image: metalSignageImg, // <-- Using imported variable
    description: "Detailed and meticulously built exhibition stands for corporate events and exhibitions.",
    serviceType: "cnc-cutting", industry: "exhibitions", material: "forex", scale: "medium", turnaroundTime: "2 days", completedDate: "2022-03-01",
  },
  {
    id: 11,
    title: "Company Reflectors",
    image: sportsJerseysImg, // <-- Using imported variable
    description: "Custom company reflectors for on site monitoring and professionalism.",
    serviceType: "t-shirt", industry: "events", material: "fabric", scale: "bulk", turnaroundTime: "3 days", completedDate: "2020-03-05",
  },
  {
    id: 12,
    title: "Light Signage",
    image: hotelSignageImg, // <-- Using imported variable
    description: "Elegant light signage, perfect for night events.",
    serviceType: "laser-cutting", industry: "events", material: "forex", scale: "large", turnaroundTime: "3 days", completedDate: "2017-03-10", 
  }
];
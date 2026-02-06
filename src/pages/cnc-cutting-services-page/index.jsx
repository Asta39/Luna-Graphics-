import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { services } from '../../data/serviceData'; // 1. Your central data import

// --- UI Component Imports ---
import Header from '../../components/ui/Header';
import ServiceHero from './components/ServiceHero';
import ServiceDetails from './components/ServiceDetails';
import EquipmentShowcase from './components/EquipmentShowcase';
import SampleGallery from './components/SampleGallery';
import PricingTable from './components/PricingTable';
import RelatedServices from './components/RelatedServices';
import ContactForm from './components/ContactForm';
import Breadcrumb from './components/Breadcrumb';

import logoImage from '../../assets/luna-logo2.png';

const CNCCuttingServicesPage = () => {
  const navigate = useNavigate();

  // 2. Get the data for THIS page using its correct key from your central file.
  const pageData = services['cnc-cutting']; 

  // 3. All old state (useState, useEffect) and local data arrays are now DELETED.

  // 4. Handle cases where the data might not be found (e.g., typo in the key)
  if (!pageData) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Service Not Found</h1>
          <p>The data for 'cnc-cutting' could not be found. Please check the key in serviceData.js.</p>
        </div>
      </div>
    );
  }

  // 5. Define SEO variables using the single `pageData` object.
  const pageTitle = `${pageData.title} in Nairobi | Luna Graphics`;
  const pageDescription = pageData.description; // Using the description from your data
  const pageUrl = `https://lunagraphics.co.ke ${pageData.path}`;
  const imageUrl = pageData.heroImage;
  const brandName = "Luna Graphics";
  const twitterHandle = "@YourTwitterHandle";

  // ===== ENHANCED SEO: Structured Data for LocalBusiness + Service =====
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": pageData.title,
    "provider": {
      "@type": "LocalBusiness",
      "name": brandName,
      "image": `https://lunagraphics.co.ke${logoImage}`,
      "telephone": "+254-791-159-618",
      "email": "info@lunagraphics.co.ke",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Nairobi",
        "addressCountry": "KE"
      },
      "url": "https://lunagraphics.co.ke"
    },
    "areaServed": {
      "@type": "City",
      "name": "Nairobi",
      "containedInPlace": {
        "@type": "Country",
        "name": "Kenya"
      }
    },
    "description": pageDescription
  };

  // ===== ENHANCED SEO: Breadcrumb Schema =====
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://lunagraphics.co.ke/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://lunagraphics.co.ke/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": pageData.title,
        "item": pageUrl.replace(' ', '') // Remove space from URL
      }
    ]
  };

  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: pageData.title, path: null }
  ];
  
  // --- Updated handlers that use the correct `pageData` variable ---
  const handleGetQuote = (packageData = null) => {
    navigate('/contact-page', { 
      state: { 
        service: pageData.title,
        package: packageData?.name 
      }
    });
  };

  const handleWhatsAppChat = () => {
    const phoneNumber = '254791159618';
    const message = `Hello! I'm interested in ${pageData.title} services. Could you please provide more information?`;
    const whatsappUrl = `https://wa.me/ ${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };
  
  // The old handleServiceClick function is removed as RelatedServices handles its own navigation.

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        
        {/* ===== ENHANCED SEO: Canonical URL (fixed spacing) ===== */}
        <link rel="canonical" href={pageUrl.replace(' ', '')} />
        
        {/* ===== ENHANCED SEO: Robots meta for rich snippets ===== */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        
        {/* ===== ENHANCED SEO: Language and Locale ===== */}
        <html lang="en" />
        <meta property="og:locale" content="en_KE" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:site_name" content={brandName} />
        <meta property="og:type" content="business.business" />
        <meta property="og:url" content={pageUrl.replace(' ', '')} />
        <meta property="business:contact_data:locality" content="Nairobi" />
        <meta property="business:contact_data:country" content="Kenya" />
        <meta property="business:contact_data:phone_number" content="+254791159618" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={pageUrl.replace(' ', '')} />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={imageUrl} />
        <meta name="twitter:site" content={twitterHandle} />
        
        {/* ===== ENHANCED SEO: Geo Tags for Local SEO ===== */}
        <meta name="geo.region" content="KE-30" />
        <meta name="geo.placename" content="Nairobi" />
        <meta name="geo.position" content="-1.2921;36.8219" />
        <meta name="ICBM" content="-1.2921, 36.8219" />
        
        {/* ===== ENHANCED SEO: Keywords meta ===== */}
        <meta name="keywords" content={`${pageData.title}, CNC cutting Nairobi, laser cutting Kenya, acrylic cutting, wood engraving, precision cutting, signage making Nairobi, custom fabrication Kenya`} />
        
        {/* ===== ENHANCED SEO: Structured Data (JSON-LD) ===== */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>
      
      <Header />
      
      <main className="pt-16">
        <Breadcrumb items={breadcrumbItems} />
        
        {/* 6. Pass the correct data from `pageData` to all child components */}
        <ServiceHero 
          service={pageData}
          onGetQuote={handleGetQuote}
          onWhatsAppChat={handleWhatsAppChat}
        />
        
        <ServiceDetails service={pageData} />
        
        <EquipmentShowcase equipment={pageData.equipment} />
        
        <SampleGallery samples={pageData.gallery} />
        
        <PricingTable pricingPackages={pageData.pricing} />
        
        <RelatedServices relatedServices={pageData.related} />
        
        <ContactForm serviceName={pageData.title} />
      </main>
      
      {/* --- Footer remains the same --- */}
      <footer className="bg-primary text-white py-12">
        {/* ... your footer JSX ... */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                 <img 
                  src={logoImage} 
                  alt="Luna Graphics Logo" 
                  className="w-12 h-12 rounded-lg object-cover" // Added size and rounded corners
                />
                <div>
                  <span className="text-xl font-heading font-bold">Luna Graphics</span>
                </div>
              </div>
              <p className="text-gray-300 mb-4 max-w-md">
                Your trusted partner for professional printing services in Nairobi. Quality, speed, and reliability in every project.
              </p>
              <div className="text-sm text-gray-400">
                © {new Date().getFullYear()} Luna Graphics. All rights reserved.
              </div>
            </div>
            
            <div>
              <h3 className="font-heading font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><button onClick={() => navigate('/homepage')} className="hover:text-white transition-colors">Home</button></li>
                <li><button onClick={() => navigate('/service-detail-page')} className="hover:text-white transition-colors">Services</button></li>
                <li><button onClick={() => navigate('/gallery-page')} className="hover:text-white transition-colors">Gallery</button></li>
                <li><button onClick={() => navigate('/contact-page')} className="hover:text-white transition-colors">Contact</button></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-heading font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>‪+254 791 159 618‬ </li>
                <li>info@lunagraphics.co.ke</li>
                <li>Nairobi, Kenya</li>
                <li>Mon-Fri: 8AM-6PM</li>
              </ul>
            </div>
          </div>
        </div>

      </footer>
    </div>
  );
};

export default CNCCuttingServicesPage;
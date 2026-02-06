import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { services } from '../../data/serviceData';

// --- UPDATED, CORRECT IMPORT PATHS ---
import Header from '../../components/ui/Header';
import ServiceHero from '../../components/services/ServiceHero';
import ServiceDetails from '../../components/services/ServiceDetails';
import EquipmentShowcase from '../../components/services/EquipmentShowcase';
import SampleGallery from '../../components/services/SampleGallery';
import PricingTable from '../../components/services/PricingTable';
import RelatedServices from '../../components/services/RelatedServices';
import ContactForm from '../../components/services/ContactForm';
import Breadcrumb from '../../components/services/Breadcrumb';
import logoImage from '../../assets/luna-logo2.png';

const PlottingServicesPage = () => {
  const navigate = useNavigate();
  const pageData = services['plotting-services']; 

  if (!pageData) return <div>Service data for 'plotting-services' not found.</div>;

  const pageTitle = `${pageData.title} in Nairobi | Luna Graphics`;
  const pageDescription = pageData.description;
  // ===== ENHANCED SEO: Fixed spacing in URL =====
  const pageUrl = `https://lunagraphics.co.ke${pageData.path}`;
  const imageUrl = pageData.heroImage;
  const brandName = "Luna Graphics";
  const twitterHandle = "@LunaGraphicsKE";

    // Helper function to safely extract price
  const safePrice = (price) => {
    if (typeof price === 'number') return price.toString();
    if (typeof price === 'string') return price.replace(/[^0-9.]/g, '');
    return '';
  };

  // ===== ENHANCED SEO: Structured Data =====
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": pageData.title,
    "name": pageData.title,
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
    "description": pageDescription,
    "offers": Array.isArray(pageData.pricing) ? pageData.pricing.map(pkg => ({
      "@type": "Offer",
      "name": pkg.name || 'Package',
      "description": pkg.description || '',
      "price": safePrice(pkg.price),
      "priceCurrency": "KES",
      "availability": "https://schema.org/InStock",
      "url": pageUrl
    })) : []
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
        "item": pageUrl
      }
    ]
  };

  // ===== ENHANCED SEO: FAQ Schema (if FAQs exist in data) =====
  const faqSchema = pageData.faqs ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": pageData.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  const breadcrumbItems = [ 
    { label: "Home", path: "/" }, 
    { label: "Services", path: "/services" }, 
    { label: pageData.title, path: null } ];
  
  const handleGetQuote = (packageData = null) => {
    navigate('/contact-page', { state: { service: pageData.title, package: packageData?.name } });
  };

  const handleWhatsAppChat = () => {
    const phoneNumber = '254791159618';
    const message = `Hello! I'm interested in ${pageData.title} services.`;
    // ===== ENHANCED SEO: Fixed spacing in WhatsApp URL =====
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={pageUrl} />
        
        {/* ===== ENHANCED SEO: Robots and Language ===== */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <html lang="en" />
        
        {/* ===== ENHANCED SEO: Keywords Meta ===== */}
        <meta name="keywords" content="plotting services Nairobi, large format printing Kenya, architectural plotting, CAD printing Nairobi, blueprint printing, construction plans printing, technical drawing printing, poster printing Nairobi, banner plotting, Luna Graphics plotting" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:site_name" content={brandName} />
        <meta property="og:type" content="business.business" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:locale" content="en_KE" />
        <meta property="business:contact_data:locality" content="Nairobi" />
        <meta property="business:contact_data:country" content="Kenya" />
        <meta property="business:contact_data:phone_number" content="+254791159618" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={pageUrl} />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={imageUrl} />
        <meta name="twitter:site" content={twitterHandle} />
        <meta name="twitter:creator" content={twitterHandle} />
        <meta name="twitter:image:alt" content={`${pageData.title} services in Nairobi`} />
        
        {/* ===== ENHANCED SEO: Geo Tags for Local SEO ===== */}
        <meta name="geo.region" content="KE-30" />
        <meta name="geo.placename" content="Nairobi" />
        <meta name="geo.position" content="-1.2921;36.8219" />
        <meta name="ICBM" content="-1.2921, 36.8219" />
        
        {/* ===== ENHANCED SEO: Author and Copyright ===== */}
        <meta name="author" content={brandName} />
        <meta name="copyright" content={`© ${new Date().getFullYear()} ${brandName}. All rights reserved.`} />

        {/* ===== ENHANCED SEO: Structured Data (JSON-LD) ===== */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        {faqSchema && (
          <script type="application/ld+json">
            {JSON.stringify(faqSchema)}
          </script>
        )}
      </Helmet>
      <Header />
      <main className="pt-16">
        <Breadcrumb items={breadcrumbItems} />
        <ServiceHero service={pageData} onGetQuote={handleGetQuote} onWhatsAppChat={handleWhatsAppChat} />
        <ServiceDetails service={pageData} />
        <EquipmentShowcase equipment={pageData.equipment} />
        <SampleGallery samples={pageData.gallery} />
        <PricingTable pricingPackages={pageData.pricing} />
        <RelatedServices relatedServices={pageData.related} />
        <ContactForm serviceName={pageData.title} />
      </main>
      <footer className="bg-primary text-white py-12">{/* ... footer JSX ... */}
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src={logoImage} 
                  alt="Luna Graphics Logo" 
                  className="w-12 h-12 rounded-lg object-cover"
                  loading="lazy"
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
                <li>+254 791 159 618</li>
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

export default PlottingServicesPage;
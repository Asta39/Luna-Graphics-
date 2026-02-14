import React from 'react';
import { Helmet } from 'react-helmet-async';
import { services } from '../../data/serviceData';

import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import ServicePackages from './components/ServicePackages';
import EquipmentCapabilities from './components/EquipmentCapabilities';
import CaseStudies from './components/CaseStudies';
import ComplianceSection from './components/ComplianceSection';
import CorporateQuoteForm from './components/CorporateQuoteForm';

import logoImage from '../../assets/luna-logo2.png';

// ===== ENHANCED SEO: Fixed spacing in URLs and optimized metadata =====
const pageTitle = `Corporate Printing Services Nairobi | Political Campaigns & Branding | Luna Graphics`;
const pageDescription = `Kenya's leading corporate printing partner in Nairobi. Specializing in large-scale political campaigns, corporate branding, high-volume commercial printing & election materials. Get a free quote today.`;
const pageUrl = `https://lunagraphics.co.ke/corporate-services`; // Removed space and simplified URL
const imageUrl = `https://lunagraphics.co.ke/corporate-services-og.jpg`; // Removed space - use dedicated social image
const brandName = "Luna Graphics";
const twitterHandle = "@LunaGraphicsKE"; // Updated placeholder

// ===== ENHANCED SEO: Structured Data for Corporate Service =====
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Corporate Printing Services",
  "name": "Corporate Printing & Political Campaign Solutions",
  "provider": {
    "@type": "LocalBusiness",
    "name": brandName,
    "image": `https://lunagraphics.co.ke${logoImage}`,
    "telephone": "+254-791-159-618",
    "email": "info.lunagraphics@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kweria Road",
      "addressLocality": "Nairobi",
      "addressCountry": "KE"
    },
    "url": "https://lunagraphics.co.ke",
    "priceRange": "$$"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Nairobi"
    },
    {
      "@type": "Country",
      "name": "Kenya"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Corporate Printing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Election Campaign Materials"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Corporate Branding Solutions"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Large Format Printing"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Event Materials & Custom Merchandise"
        }
      }
    ]
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
      "name": "Corporate Services",
      "item": pageUrl
    }
  ]
};

// ===== ENHANCED SEO: Organization Schema =====
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": brandName,
  "url": "https://lunagraphics.co.ke",
  "logo": `https://lunagraphics.co.ke${logoImage}`,
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+254-791-159-618",
    "contactType": "sales",
    "areaServed": "KE",
    "availableLanguage": ["English", "Swahili"]
  },
  "sameAs": [
    "https://instagram.com/lunagraphics", // Add your actual social links
    "https://twitter.com/LunaGraphicsKE"
  ]
};

const CorporateServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        {/* --- Primary Meta Tags (MUST be unique for each page) --- */}
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={pageUrl} />
        
        {/* ===== ENHANCED SEO: Robots and Language ===== */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <html lang="en" />
        <meta name="keywords" content="corporate printing Nairobi, political campaign printing Kenya, election materials, corporate branding Nairobi, large format printing, commercial printing services, branded merchandise Kenya, campaign posters Kenya, corporate gifts Nairobi" />
        
        {/* --- Open Graph / Facebook --- */}
        <meta property="og:type" content="business.business" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Luna Graphics Corporate Printing Services in Nairobi" />
        <meta property="og:site_name" content={brandName} />
        <meta property="og:locale" content="en_KE" />
        <meta property="business:contact_data:locality" content="Nairobi" />
        <meta property="business:contact_data:country" content="Kenya" />
        <meta property="business:contact_data:phone_number" content="+254791159618" />
        <meta property="business:contact_data:email" content="info.lunagraphics@gmail.com" />

        {/* --- Twitter --- */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={pageUrl} />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={imageUrl} />
        <meta name="twitter:site" content={twitterHandle} />
        <meta name="twitter:creator" content={twitterHandle} />
        <meta name="twitter:image:alt" content="Luna Graphics Corporate Printing Services" />

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
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      </Helmet>

      <Header />
      
      {/* Main Content */}
      <main className="pt-16">
        <HeroSection />
        <ServicePackages />
        <EquipmentCapabilities />
        <CaseStudies />
        <ComplianceSection />
        <CorporateQuoteForm />
      </main>

      {/* Footer - Enhanced with LocalBusiness Schema */}
      <footer className="bg-primary-900 text-white py-12" itemScope itemType="https://schema.org/LocalBusiness">
        <meta itemProp="name" content={brandName} />
        <meta itemProp="image" content={logoImage} />
        <meta itemProp="telephone" content="+254791159618" />
        <meta itemProp="email" content="info.lunagraphics@gmail.com" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src={logoImage} 
                  alt="Luna Graphics Logo" 
                  className="w-12 h-12 rounded-lg object-cover"
                  loading="lazy"
                />
                <div>
                  <div className="text-xl font-heading font-bold" itemProp="name">Luna Graphics</div>
                  <div className="text-sm text-primary-200" itemProp="description">Corporate Printing Solutions</div>
                </div>
              </div>
              <p className="text-primary-200 mb-6 max-w-md">
                Kenya's leading corporate printing partner, specializing in large-scale political campaigns, 
                corporate branding, and high-volume commercial printing solutions.
              </p>
              <div className="flex space-x-4">
                <a href="https://instagram.com/lunagraphics_ke" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary-800 rounded-lg flex items-center justify-center hover:bg-primary-700 transition-colors cursor-pointer" aria-label="Instagram">
                  <span className="text-white text-sm font-bold">Ig</span>
                </a>
                <a href="https://twitter.com/LunaGraphicsKE" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary-800 rounded-lg flex items-center justify-center hover:bg-primary-700 transition-colors cursor-pointer" aria-label="Twitter">
                  <span className="text-white text-sm font-bold">T</span>
                </a>
                <a href="https://pinterest.com/lunagraphicske" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary-800 rounded-lg flex items-center justify-center hover:bg-primary-700 transition-colors cursor-pointer" aria-label="Pinterest">
                  <span className="text-white text-sm font-bold">P</span>
                </a>
              </div>
              <meta itemProp="streetAddress" content="Kweria Road" />
              <meta itemProp="addressLocality" content="Nairobi" />
              <meta itemProp="addressCountry" content="Kenya" />
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Corporate Services</h4>
              <ul className="space-y-3 text-primary-200" itemScope itemType="https://schema.org/OfferCatalog">
                <li itemProp="itemListElement" itemScope itemType="https://schema.org/Offer">
                  <a href="/corporate-services" className="hover:text-white transition-colors" itemProp="name">Election Campaigns</a>
                </li>
                <li itemProp="itemListElement" itemScope itemType="https://schema.org/Offer">
                  <a href="/corporate-services" className="hover:text-white transition-colors" itemProp="name">Corporate Branding</a>
                </li>
                <li itemProp="itemListElement" itemScope itemType="https://schema.org/Offer">
                  <a href="/large-format" className="hover:text-white transition-colors" itemProp="name">Large Format Printing</a>
                </li>
                <li itemProp="itemListElement" itemScope itemType="https://schema.org/Offer">
                  <a href="/cnc-cutting" className="hover:text-white transition-colors" itemProp="name">CNC Cutting</a>
                </li>
                <li itemProp="itemListElement" itemScope itemType="https://schema.org/Offer">
                  <a href="/t-shirt-printing" className="hover:text-white transition-colors" itemProp="name">Custom Merchandise</a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Information</h4>
              <div className="space-y-4 text-primary-200">
                <div>
                  <div className="font-medium text-white">Corporate Hotline</div>
                  <div itemProp="telephone">+254 791 159 618</div>
                </div>
                <div>
                  <div className="font-medium text-white">Email</div>
                  <div itemProp="email">info.lunagraphics@gmail.com</div>
                </div>
                <div>
                  <div className="font-medium text-white">Address</div>
                  <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                    <span itemProp="streetAddress">Kweria Road</span>, <span itemProp="addressLocality">Nairobi</span><br />
                    <span itemProp="addressCountry">Kenya</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-primary-800 mt-12 pt-8 flex flex-col lg:flex-row justify-between items-center">
            <div className="text-primary-200 text-sm">
              © {new Date().getFullYear()} Luna Graphics. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-primary-200 mt-4 lg:mt-0">
              <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="/corporate-terms" className="hover:text-white transition-colors">Corporate Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CorporateServicesPage;
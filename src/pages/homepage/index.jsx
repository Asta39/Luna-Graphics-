import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { services } from '../../data/serviceData';

import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import ServicesGrid from './components/ServicesGrid';
import MachineShowcase from './components/MachineShowcase';
import GoogleReviews from './components/GoogleReviews';
import CorporateServices from './components/CorporateServices';
import CookieBanner from '../../components/ui/CookieBanner';
import Footer from './components/Footer';

const Homepage = () => {
  const brandName = "Luna Graphics";
  const tagline = "Premier Print Shop in Nairobi | Quality Printing Services | Large Format, UV Printing, CNC Cutting, Laser Cutting, Political Campaign Materials, Election Printing 2027";
  // ===== ENHANCED SEO: Fixed spacing in URLs =====
  const pageUrl = "https://lunagraphics.co.ke/";
  const imageUrl = "https://lunagraphics.co.ke/social-sharing-image.jpg";
  const twitterHandle = "@LunaGraphicsKE";

  // ===== ENHANCED SEO: Organization Schema for Homepage =====
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": brandName,
    "url": pageUrl,
    "logo": imageUrl,
    "image": imageUrl,
    "telephone": "+254-791-159-618",
    "email": "info.lunagraphics@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kweria Road",
      "addressLocality": "Nairobi",
      "addressCountry": "KE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-1.2921",
      "longitude": "36.8219"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "14:00"
      }
    ],
    "priceRange": "$$",
    "description": "Premier print shop in Nairobi offering UV printing, large format banners, CNC cutting, laser cutting, and corporate branding services."
  };

  // ===== ENHANCED SEO: Website Schema for Sitelinks Searchbox =====
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": pageUrl,
    "name": brandName,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://lunagraphics.co.ke/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  // ===== ENHANCED SEO: Service Area Schema =====
  const serviceAreaSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Printing Services",
    "provider": {
      "@type": "LocalBusiness",
      "name": brandName
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Nairobi",
        "containedInPlace": {
          "@type": "Country",
          "name": "Kenya"
        }
      },
      {
        "@type": "Place",
        "name": "Kiambu"
      },
      {
        "@type": "Place",
        "name": "Kajiado"
      },
      {
        "@type": "Place",
        "name": "Machakos"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Printing Services",
      "itemListElement": [
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
            "name": "UV Printing"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "CNC Cutting"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Laser Cutting & Engraving"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Political Campaign Materials"
          }
        }
      ]
    }
  };

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        {/*************************************************
          * 
          *  CORE SEO - For Google, Bing, etc.
          * 
          **************************************************/}

        {/* The Title of the page (shows in the browser tab and search results) */}
        <title>{`${brandName} | ${tagline}`}</title>
        
        {/* The Description of the page (the ~160 character snippet in search results) */}
        <meta name="description" content="Luna Graphics is a premier print shop in Nairobi, offering quality printing services including high-quality UV printing, large format banners, CNC cutting, custom t-shirts, and corporate branding. Get a free quote today!" />
        
        {/* Keywords - Yours were great, I've kept them */}
        <meta name="keywords" content="printing services Nairobi, print shops in Nairobi, quality print shop, premium print shops, large format printing, UV printing, CNC cutting, laser cutting, political campaign materials, election printing 2027, Nairobi printing company, Kenya printing services" />
        
        {/* The "preferred" version of a page to avoid duplicate content issues */}
        <link rel="canonical" href={pageUrl} />

        {/* Instructions for search engine crawlers */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content={brandName} />
        
        {/* ===== ENHANCED SEO: Language and Locale ===== */}
        <html lang="en" />
        <meta property="og:locale" content="en_KE" />
        
        {/* ===== ENHANCED SEO: Geo Tags for Local SEO ===== */}
        <meta name="geo.region" content="KE-30" />
        <meta name="geo.placename" content="Nairobi" />
        <meta name="geo.position" content="-1.2921;36.8219" />
        <meta name="ICBM" content="-1.2921, 36.8219" />
        
        {/* ===== ENHANCED SEO: Copyright ===== */}
        <meta name="copyright" content={`© ${new Date().getFullYear()} ${brandName}. All rights reserved.`} />


        {/*************************************************
          * 
          *  OPEN GRAPH (OG) - For Facebook, LinkedIn, Pinterest
          * 
          **************************************************/}

        {/* The title that appears when shared on social media */}
        <meta property="og:title" content={`${brandName} | ${tagline}`} />

        {/* A compelling, human-readable description for social media */}
        <meta property="og:description" content="Luna Graphics: A premier and quality print shop in Nairobi. From eye-catching campaign materials to professional corporate branding, we deliver top-tier printing solutions. See our work and get a quote!" />
        
        {/* The type of content. "website" is correct for a homepage. */}
        <meta property="og:type" content="website" />
        
        {/* The canonical URL of the page */}
        <meta property="og:url" content={pageUrl} />
        
        {/* The name of your overall website */}
        <meta property="og:site_name" content={brandName} />

        {/* !! CRITICAL !! The image that appears when you share the link */}
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={`Logo and services of ${brandName}`} />
        
        {/* ===== ENHANCED SEO: Business Contact Data ===== */}
        <meta property="business:contact_data:locality" content="Nairobi" />
        <meta property="business:contact_data:country" content="Kenya" />
        <meta property="business:contact_data:phone_number" content="+254791159618" />
        <meta property="business:contact_data:email" content="info.lunagraphics@gmail.com" />


        {/*************************************************
          * 
          *  TWITTER CARDS - For Twitter sharing
          * 
          **************************************************/}
        
        {/* The type of card. "summary_large_image" is best for visual impact. */}
        <meta name="twitter:card" content="summary_large_image" />
        
        {/* Your Twitter @username for attribution */}
        <meta name="twitter:site" content={twitterHandle} />
        <meta name="twitter:creator" content={twitterHandle} />
        
        {/* Title for Twitter */}
        <meta name="twitter:title" content={`${brandName} | ${tagline}`} />
        
        {/* Description for Twitter (can be the same as OG) */}
        <meta name="twitter:description" content="Luna Graphics: A premier and quality print shop in Nairobi. From eye-catching campaign materials to professional corporate branding, we deliver top-tier printing solutions. See our work and get a quote!" />

        {/* !! CRITICAL !! Image for Twitter (can be the same as OG) */}
        <meta name="twitter:image" content={imageUrl} />
        <meta name="twitter:image:alt" content="Luna Graphics - Premier Print Shop in Nairobi" />

        {/*************************************************
          * 
          *  STRUCTURED DATA - JSON-LD Schema
          * 
          **************************************************/}
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(websiteSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(serviceAreaSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main>
          {/* Hero Section */}
          <HeroSection />

          {/* Services Grid */}
          <ServicesGrid />

          {/* Machine Showcase */}
          <MachineShowcase />

          {/* Google Reviews */}
          <GoogleReviews />

          {/* Corporate Services */}
          <CorporateServices />
        </main>
        <CookieBanner />

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Homepage;
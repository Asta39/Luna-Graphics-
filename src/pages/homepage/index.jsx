import React, { useEffect } from 'react';
import SEO from '../../components/SEO';
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
    <div className="min-h-screen bg-background">
      <SEO 
        title={`${brandName} | ${tagline}`}
        description="Luna Graphics is a premier print shop in Nairobi, offering quality printing services including high-quality UV printing, large format banners, CNC cutting, custom t-shirts, and corporate branding. Get a free quote today!"
        keywords="printing services Nairobi, print shop in Nairobi, quality print shop, premium print shops, large format printing, UV printing, CNC cutting, laser cutting, political campaign materials, election printing 2027, Nairobi printing company, Kenya printing services"
        canonical={pageUrl}
        ogImage={imageUrl}
        type="website"
        schemaData={[organizationSchema, websiteSchema, serviceAreaSchema]}
        robots="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        geo={{
          region: "KE-30",
          placename: "Nairobi",
          position: "-1.2921;36.8219"
        }}
      />

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
    </div>
  );
};

export default Homepage;
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { services } from '../../data/serviceData';

import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import ServicesGrid from './components/ServicesGrid';
import MachineShowcase from './components/MachineShowcase';
import GoogleReviews from './components/GoogleReviews';
import CorporateServices from './components/CorporateServices';
import Footer from './components/Footer';

const Homepage = () => {
   const brandName = "Luna Graphics";
  const tagline = "Premier Print Shop in Nairobi | Quality Printing Services | Large Format, UV Printing, CNC Cutting, Laser Cutting, Political Campaign Materials, Election Printing 2027";
  const pageUrl = "https://lunagraphics.co.ke"; // Replace with your actual domain
  const imageUrl = "https://lunagraphics.co.ke/social-sharing-image.jpg"; // IMPORTANT: Create and upload this image
  const twitterHandle = "@LunaGraphicsKE"; // Replace with your actual Twitter handle

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
  <meta name="keywords" content="printing services Nairobi, print shops in Nairobi, quality print shop, premium print shops, large format printing, UV printing, CNC cutting, laser cutting, political campaign materials, election printing 2027" />
  
  {/* The "preferred" version of a page to avoid duplicate content issues */}
  <link rel="canonical" href={pageUrl} />

  {/* Instructions for search engine crawlers */}
  <meta name="robots" content="index, follow" />
  <meta name="author" content={brandName} />


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


  {/*************************************************
    * 
    *  TWITTER CARDS - For Twitter sharing
    * 
    **************************************************/}
  
  {/* The type of card. "summary_large_image" is best for visual impact. */}
  <meta name="twitter:card" content="summary_large_image" />
  
  {/* Your Twitter @username for attribution */}
  <meta name="twitter:site" content={twitterHandle} />
  
  {/* Title for Twitter */}
  <meta name="twitter:title" content={`${brandName} | ${tagline}`} />
  
  {/* Description for Twitter (can be the same as OG) */}
  <meta name="twitter:description" content="Luna Graphics: A premier and quality print shop in Nairobi. From eye-catching campaign materials to professional corporate branding, we deliver top-tier printing solutions. See our work and get a quote!" />

  {/* !! CRITICAL !! Image for Twitter (can be the same as OG) */}
  <meta name="twitter:image" content={imageUrl} />

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

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Homepage;
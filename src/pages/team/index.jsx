import React from 'react';
import Header from '../../components/ui/Header';
import TeamHero from './components/TeamHero';
import TeamStats from './components/TeamStats';
import TeamSection from './components/TeamSection';
import CareersSection from './components/CareersSection';
import { Helmet } from 'react-helmet-async';


import { leadershipTeam, technicalTeam, designTeam } from '../../data/teamData';

const TeamPage = () => {
  // Leadership Team Data

    const pageTitle = `Luna Graphics Team in Nairobi | Luna Graphics`;
  const pageDescription = `Expert team in Nairobi. We are dedicated to delivering top-notch printing solutions to our clients.`;
  const pageUrl = `https://lunagraphics.co.ke/team-page`; // Use the actual URL for this page
  const imageUrl = "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop"; // Use this page's hero image for social sharing
  const brandName = "Luna Graphics";
  const twitterHandle = "@YourTwitterHandle"; // Replace with your handle



  return (
    <div className="min-h-screen bg-background">

            <Helmet>
        {/* --- Primary Meta Tags (MUST be unique for each page) --- */}
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={pageUrl} />

        {/* --- Open Graph / Facebook --- */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:site_name" content={brandName} />

        {/* --- Twitter --- */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={pageUrl} />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={imageUrl} />
        <meta name="twitter:site" content={twitterHandle} />
      </Helmet>


      <Header />
      
      {/* Hero Section */}
      <TeamHero />
      {/*Careers*/}
      <CareersSection />

      {/* Team Stats */}
      <TeamStats />

      {/* Leadership Team */}
      <TeamSection
        title="Leadership Team"
        description="Experienced leaders driving innovation and excellence in printing solutions"
        members={leadershipTeam}
        isLeadership={true}
      />

      {/* Technical Specialists */}
      <div className="bg-surface-50">
        <TeamSection
          title="Technical Specialists"
          description="Expert technicians ensuring quality and precision in every project"
          members={technicalTeam}
        />
      </div>

      {/* Design Team */}
      <TeamSection
        title="Creative Design Team"
        description="Talented designers bringing your vision to life with creativity and expertise"
        members={designTeam}
      />

      {/* Call to Action Section */}
      <div className="bg-gradient-to-r from-primary to-primary-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading font-bold text-white mb-4">
            Ready to Work with Our Expert Team?
          </h2>
          <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your printing needs and discover how our skilled professionals can bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.location.href = '/contact-page'}
              className="inline-flex items-center px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-surface-100 transition-colors duration-200"
            >
              Get Started Today
            </button>
            <button
              onClick={() => window.location.href = '/gallery-page'}
              className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-colors duration-200"
            >
              View Our Portfolio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/ui/Header';
import TeamHero from './components/TeamHero';
import TeamStats from './components/TeamStats';
import TeamSection from './components/TeamSection';
import CareersSection from './components/CareersSection';
import SEO from '../../components/SEO';


import { leadershipTeam, technicalTeam, designTeam } from '../../data/teamData';

const TeamPage = () => {
  const navigate = useNavigate();
  // Leadership Team Data

    const pageTitle = `Luna Graphics Team in Nairobi | Luna Graphics`;
  const pageDescription = `Expert team in Nairobi. We are dedicated to delivering top-notch printing solutions to our clients.`;
  const pageUrl = `https://lunagraphics.co.ke/team`; // Use the actual URL for this page
  const imageUrl = "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop"; // Use this page's hero image for social sharing
  const brandName = "Luna Graphics";
  const twitterHandle = "@YourTwitterHandle"; // Replace with your handle



  return (
    <div className="min-h-screen bg-background">

      <SEO 
        title="Meet Our Expert Printing & Design Team | Luna Graphics Nairobi"
        description="Meet the creative minds and technical specialists leading Nairobi's premier printing and branding company. Expert designers and printing technicians dedicated to your vision."
        canonical="/team"
        ogImage="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop"
        type="website"
        keywords="printing team Nairobi, graphic designers Kenya, printing technicians, professional branding experts, Luna Graphics staff, expert printers Nairobi"
        robots="index, follow"
        geo={{
          region: "KE-30",
          placename: "Nairobi",
          position: "-1.2921;36.8219"
        }}
        schemaData={[
          {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "mainEntity": {
              "@type": "Organization",
              "name": "Luna Graphics",
              "employee": [
                ...leadershipTeam.map(m => ({ "@type": "Person", "name": m.name, "jobTitle": m.role })),
                ...technicalTeam.map(m => ({ "@type": "Person", "name": m.name, "jobTitle": m.role })),
                ...designTeam.map(m => ({ "@type": "Person", "name": m.name, "jobTitle": m.role }))
              ]
            }
          }
        ]}
      />


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
              onClick={() => navigate('/contact')}
              className="inline-flex items-center px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-surface-100 transition-colors duration-200"
            >
              Get Started Today
            </button>
            <button
              onClick={() => navigate('/gallery')}
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
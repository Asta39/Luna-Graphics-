import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { Helmet } from 'react-helmet-async';

import { caseStudies } from '../../../data/caseStudiesData';

  const handleWhatsAppClick = () => {
    const phoneNumber = '254791159618';
    const message = 'Hello! I would like to inquire about your corporate and political projects.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

    const pageTitle = "Exhibition, Corporate & Election Printing Providers in Kenya | Luna Graphics";
  const pageDescription = "Luna Graphics is a top provider of exhibition stands, corporate branding, and election campaign materials in Nairobi. See our case studies and get a quote today.";
  const pageUrl = "https://lunagraphics.co.ke/corporate-services-page";
  const imageUrl = "https://lunagraphics.co.ke/assets/images/corporate-hero-image.jpg"; // Use the actual imported image variable if available
  const brandName = "Luna Graphics";
  const twitterHandle = "@YourTwitterHandle";

const CaseStudies = () => {
  const [activeCase, setActiveCase] = useState(0);



  return (
    <section className="py-20 bg-surface-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={pageUrl} />
        
        {/* --- Keywords Tag --- */}
        <meta name="keywords" content="exhibition providers kenya, corporate branding nairobi, election printing 2027, trade show stands, campaign materials, large format printing" />

        {/* --- Open Graph / Facebook --- */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:site_name" content={brandName} />

        {/* --- Twitter --- */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={imageUrl} />
        <meta name="twitter:site" content={twitterHandle} />
      </Helmet>

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
            Success Stories
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Real results from major corporate and political projects across Kenya
          </p>
        </div>

        {/* Case Study Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {caseStudies.map((study, index) => (
            <button
              key={index}
              onClick={() => setActiveCase(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeCase === index
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white text-text-secondary hover:bg-primary-50 hover:text-primary'
              }`}
            >
              {study.category}
            </button>
          ))}
        </div>

        {/* Active Case Study */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Case Study Header */}
          <div className="relative h-80 overflow-hidden">
            <Image
              src={caseStudies[activeCase].image}
              alt={caseStudies[activeCase].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <div className="inline-block bg-secondary px-3 py-1 rounded-full text-sm font-semibold mb-4">
                {caseStudies[activeCase].category}
              </div>
              <h3 className="text-3xl lg:text-4xl font-heading font-bold mb-2">
                {caseStudies[activeCase].title}
              </h3>
              <div className="flex flex-wrap gap-6 text-sm opacity-90">
                <div className="flex items-center space-x-2">
                  <Icon name="Building2" size={16} />
                  <span>{caseStudies[activeCase].client}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" size={16} />
                  <span>{caseStudies[activeCase].duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="DollarSign" size={16} />
                  <span>{caseStudies[activeCase].budget}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Case Study Content */}
          <div className="p-8 lg:p-12">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Challenge */}
                <div>
                  <h4 className="text-2xl font-heading font-bold text-primary mb-4 flex items-center">
                    <Icon name="Target" size={24} className="mr-3 text-error" />
                    The Challenge
                  </h4>
                  <p className="text-text-secondary leading-relaxed">
                    {caseStudies[activeCase].challenge}
                  </p>
                </div>

                {/* Solution */}
                <div>
                  <h4 className="text-2xl font-heading font-bold text-primary mb-4 flex items-center">
                    <Icon name="Lightbulb" size={24} className="mr-3 text-warning" />
                    Our Solution
                  </h4>
                  <div className="text-text-secondary leading-relaxed whitespace-pre-line">
                    {caseStudies[activeCase].solution}
                  </div>
                </div>

                {/* Results */}
                <div>
                  <h4 className="text-2xl font-heading font-bold text-primary mb-4 flex items-center">
                    <Icon name="TrendingUp" size={24} className="mr-3 text-success" />
                    Results Achieved
                  </h4>
                  <div className="grid gap-3">
                    {caseStudies[activeCase].results.map((result, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <Icon name="CheckCircle" size={20} className="text-success mt-0.5 flex-shrink-0" />
                        <span className="text-text-secondary">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-primary-50 rounded-xl p-6">
                  <div className="flex items-start space-x-4">
                    <Icon name="Quote" size={32} className="text-primary flex-shrink-0" />
                    <div>
                      <p className="text-text-primary italic text-lg leading-relaxed mb-4">
                        "{caseStudies[activeCase].testimonial}"
                      </p>
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                          <Icon name="User" size={20} color="white" />
                        </div>
                        <div>
                          <div className="font-semibold text-text-primary">
                            {caseStudies[activeCase].author}
                          </div>
                          <div className="text-sm text-text-secondary">
                            {caseStudies[activeCase].client}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Metrics Sidebar */}
              <div className="space-y-6">
                <h4 className="text-xl font-heading font-bold text-primary">Key Metrics</h4>
                <div className="space-y-4">
                  {caseStudies[activeCase].metrics.map((metric, index) => (
                    <div key={index} className="bg-surface-50 rounded-lg p-4">
                      <div className="text-2xl font-heading font-bold text-primary mb-1">
                        {metric.value}
                      </div>
                      <div className="text-sm text-text-secondary">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="bg-gradient-to-br from-primary to-primary-700 rounded-xl p-6 text-white text-center">
                  <h5 className="font-heading font-bold mb-2">Ready for Similar Results?</h5>
                  <p className="text-sm text-primary-100 mb-4">
                    Let's discuss your project requirements
                  </p>
                  <Button
                    variant="secondary"
                    size="sm"
                    iconName="ArrowRight"
                    iconPosition="right"
                    onClick={handleWhatsAppClick}
                    className=" text-primary "
                  >
                    Start Your Project
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

import whyChooseUsImage from '../../../assets/why-choose-luna.jpg';
const CorporateServices = () => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate('/corporate-services-page');
  };

  const handleGetQuote = () => {
    navigate('/corporate-services-page');
  };

  const electionServices = [
    {
      icon: "Flag",
      title: "Campaign Materials",
      description: "Banners, posters, flyers, and billboards for political campaigns",
      features: ["Weather-resistant materials", "Bulk pricing available", "Fast turnaround"]
    },
    {
      icon: "Users",
      title: "Event Signage",
      description: "Rally banners, stage backdrops, and directional signage",
      features: ["Large format printing", "Professional finishing", "Setup assistance"]
    },
    {
      icon: "Shirt",
      title: "Branded Merchandise",
      description: "T-shirts, caps, bags, and promotional items with party branding",
      features: ["Quality materials", "Multiple printing methods", "Custom designs"]
    },
    {
      icon: "FileText",
      title: "Documentation",
      description: "Manifesto printing, voter education materials, and official documents",
      features: ["High-volume printing", "Professional binding", "Multiple formats"]
    }
  ];

  const corporatePackages = [
    {
      name: "Startup Package",
      price: "200000",
      description: "Perfect for new political parties and small campaigns",
      features: [
        "500 A4 flyers",
        "10 large banners (1m by 3m)",
        "100 branded t-shirts",
        "Basic logo design",
        "Free delivery in Nairobi"
      ],
      popular: false
    },
    {
      name: "Campaign Package",
      price: "600000",
      description: "Comprehensive solution for active political campaigns",
      features: [
        "2,000 A4 flyers",
        "25 large banners (1m by 3m)",
        "300 branded t-shirts",
        "Professional design service",
        "Billboard design included",
        "Priority support"
      ],
      popular: true
    },
    {
      name: "Presidential Package",
      price: "2000000",
      description: "Full-scale printing solution for major political campaigns",
      features: [
        "5,000+ promotional materials",
        "50+ large format items",
        "1,000+ merchandise items",
        "Complete branding package",
        "Nationwide delivery",
        "Dedicated account manager"
      ],
      popular: false
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-secondary-50 to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-secondary-100 rounded-full">
            <Icon name="Building2" size={16} color="var(--color-secondary)" className="mr-2" />
            <span className="text-sm font-semibold text-secondary-700">Corporate Solutions</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-text-primary">
            Ready for Kenya's
            <span className="block text-secondary">2027 Elections</span>
          </h2>
          
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Comprehensive printing solutions for political parties, candidates, and campaign teams. 
            From grassroots campaigns to presidential runs, we have the capacity and expertise to 
            support your political journey.
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative mb-16">
          <Image
            src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Political campaign materials and election printing services"
            className="w-full h-64 lg:h-80 object-cover rounded-2xl shadow-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80 rounded-2xl"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white space-y-4">
              <h3 className="text-2xl lg:text-3xl font-bold">
                🇰🇪 Kenya Elections 2027
              </h3>
              <p className="text-lg opacity-90">
                Your Trusted Partner for Political Campaign Materials
              </p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {electionServices.map((service, index) => (
            <div key={index} className="bg-background rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mb-4">
                <Icon name={service.icon} size={24} color="var(--color-secondary)" />
              </div>
              
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                {service.title}
              </h3>
              
              <p className="text-text-secondary text-sm mb-4">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-text-secondary">
                    <Icon name="Check" size={14} color="var(--color-success)" className="mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Pricing Packages */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-heading font-bold text-text-primary mb-4">
              Election Campaign Packages
            </h3>
            <p className="text-text-secondary">
              Choose the perfect package for your campaign size and budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {corporatePackages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-background rounded-2xl p-8 shadow-lg ${
                  pkg.popular ? 'ring-2 ring-secondary transform scale-105' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-secondary text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h4 className="text-xl font-bold text-text-primary mb-2">{pkg.name}</h4>
                  <div className="text-3xl font-bold text-secondary mb-2">
                    KES {parseInt(pkg.price).toLocaleString()}
                  </div>
                  <p className="text-text-secondary text-sm">{pkg.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Icon name="Check" size={16} color="var(--color-success)" className="mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-text-secondary">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button
                  variant={pkg.popular ? "primary" : "outline"}
                  fullWidth
                  onClick={handleGetQuote}
                >
                  Get This Package
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-background rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-heading font-bold text-text-primary mb-6">
                Why Political Parties Choose Luna Graphics
              </h3>
              
              <div className="space-y-6">
                {[
                  {
                    icon: "Clock",
                    title: "Fast Turnaround",
                    description: "We understand campaign timelines are tight. Rush orders available 24/7."
                  },
                  {
                    icon: "Shield",
                    title: "Confidentiality Assured",
                    description: "Your campaign materials and strategies are handled with complete discretion."
                  },
                  {
                    icon: "Award",
                    title: "Election Experience",
                    description: "We've supported campaigns since 2013, understanding Kenya's political landscape."
                  },
                  {
                    icon: "Truck",
                    title: "Nationwide Delivery",
                    description: "From Mombasa to Kisumu, we deliver campaign materials across Kenya."
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={benefit.icon} size={20} color="var(--color-primary)" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary mb-1">{benefit.title}</h4>
                      <p className="text-text-secondary text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <Image
                src={whyChooseUsImage} 
                alt="Political campaign printing and election materials"
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
              
              {/* Stats Overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-background/95 backdrop-blur-sm rounded-lg p-4">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-lg font-bold text-primary">50+</div>
                    <div className="text-xs text-text-secondary">Campaigns Supported</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-primary">1M+</div>
                    <div className="text-xs text-text-secondary">Materials Printed</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-primary">47</div>
                    <div className="text-xs text-text-secondary">Counties Reached</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-text-primary mb-4">
            Ready to Launch Your 2027 Campaign?
          </h3>
          <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
            Don't wait until the last minute. Start planning your campaign materials now and 
            ensure your message reaches every corner of Kenya.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              iconName="Phone"
              iconPosition="left"
              onClick={handleGetQuote}
            >
              Schedule Consultation
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              iconName="ArrowRight"
              iconPosition="right"
              onClick={handleLearnMore}
            >
              View All Corporate Services
            </Button>
            
            <Button
              variant="success"
              size="lg"
              iconName="MessageCircle"
              iconPosition="left"
              onClick={() => {
                const phoneNumber = '+254791159618';
                const message = 'Hello! I would like to discuss printing solutions for the 2027 Kenya elections. Please provide more information about your campaign packages.';
                const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
              }}
              className="bg-accent hover:bg-accent-600"
            >
              WhatsApp Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateServices;
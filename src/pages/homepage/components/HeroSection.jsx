import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon'; // Added Icon import for consistency

// 1. IMPORT YOUR NEW HERO IMAGE
// The path goes up three levels to get from this component's folder back to 'src'
import heroSectionImage from '../../../assets/homepage-hero (2).png'; // <-- IMPORTANT: Replace with your actual filename

const HeroSection = () => {
  const navigate = useNavigate();

  const handleGetQuote = () => {
    navigate('/contact');
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '254791159618';
    const message = 'Hello! I would like to inquire about your printing services.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary-50 via-background to-secondary-50 pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 kenyan-pattern opacity-30"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-accent-100 rounded-full">
                <span className="text-sm font-semibold text-accent-700">
                  🇰🇪 Nairobi's Premier Print Shop | Quality Printing
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-text-primary leading-tight">
                Professional Printing
                <span className="block text-primary">Solutions</span>
                <span className="block text-secondary">for Kenya</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-text-secondary leading-relaxed max-w-2xl">
                As a leading print shop in Nairobi, we deliver high-quality printing services 
                with cutting-edge technology. Trusted by businesses across Nairobi for over a decade.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: 'Clock', text: '24-Hour Turnaround' },
                { icon: 'Award', text: 'Premium Quality' },
                { icon: 'Truck', text: 'Free Delivery in Nairobi' },
                { icon: 'Shield', text: '100% Satisfaction Guarantee' }
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                    {/* Using AppIcon for consistency */}
                    <Icon name={feature.icon} size={16} color="var(--color-primary)" />
                  </div>
                  <span className="text-sm font-medium text-text-secondary">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                size="lg"
                iconName="FileText"
                iconPosition="left"
                onClick={handleGetQuote}
                className="flex-1 sm:flex-none"
              >
                Get Free Quote
              </Button>
              <Button
                variant="success"
                size="lg"
                iconName="MessageCircle"
                iconPosition="left"
                onClick={handleWhatsAppClick}
                className="flex-1 sm:flex-none bg-accent hover:bg-accent-600"
              >
                WhatsApp Us
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-text-secondary">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary">10K+</div>
                <div className="text-sm text-text-secondary">Projects Done</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary">10+</div>
                <div className="text-sm text-text-secondary">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              {/* 2. USE THE IMPORTED VARIABLE IN THE SRC PROP */}
              <Image
                src={heroSectionImage}
                alt="Professional printing equipment and services at Luna Graphics"
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              
              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 bg-background rounded-lg shadow-lg p-4 border border-border">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-success-100 rounded-full flex items-center justify-center">
                    <span className="text-success text-sm font-bold">4.9</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-text-primary">Google Rating</div>
                    <div className="flex text-yellow-400">
                      {'★'.repeat(5)}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-background rounded-lg shadow-lg p-4 border border-border">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="text-primary text-sm font-bold">24h</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-text-primary">Fast Delivery</div>
                    <div className="text-xs text-text-secondary">Within Nairobi</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl transform rotate-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
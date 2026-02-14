import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const HeroSection = () => {
  // 1. NEW HANDLER for the "Get Corporate Quote" button
  // This function opens WhatsApp with a pre-filled message.
  const handleCorporateQuoteWhatsApp = () => {
    const phoneNumber = '254791159618'; // Use number without '+'
    const message = 'Hello! I would like to inquire about your corporate printing services.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  // 2. NEW HANDLER for the "Schedule Consultation" button
  // This function tells the browser to open the phone dialer.
  const handlePhoneCall = () => {
    const phoneNumber = '+254791159618'; // For 'tel:', the '+' is standard
    window.open(`tel:${phoneNumber}`, '_self');
  };

  return (
    <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 kenyan-pattern opacity-10"></div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-secondary/20 backdrop-blur-sm rounded-full px-4 py-2 border border-secondary/30">
              <Icon name="Building2" size={16} color="var(--color-secondary)" />
              <span className="text-sm font-semibold text-secondary">Corporate Solutions</span>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-heading font-bold leading-tight">
                Powering Kenya's
                <span className="block text-secondary">2027 Elections</span>
              </h1>
              <p className="text-xl text-primary-100 leading-relaxed">
                Professional printing solutions for political campaigns, corporate events, and large-scale business operations across Nairobi and beyond.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: 'Clock', text: 'Fast Turnaround' },
                { icon: 'Shield', text: 'Quality Guaranteed' },
                { icon: 'Truck', text: 'Nairobi Delivery' },
                { icon: 'Users', text: 'Dedicated Support' }
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center">
                    <Icon name={feature.icon} size={16} color="var(--color-secondary)" />
                  </div>
                  <span className="text-primary-100 font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="secondary"
                size="lg"
                iconName="FileText"
                iconPosition="left"
                // 3. UPDATED onClick to use the new WhatsApp handler
                onClick={handleCorporateQuoteWhatsApp}
                className="bg-secondary text-primary hover:bg-secondary-600"
              >
                Get Corporate Quote
              </Button>
              <Button
                variant="accent"
                size="lg"
                iconName="Phone"
                iconPosition="left"
                // 4. UPDATED onClick to use the new phone call handler
                onClick={handlePhoneCall}
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Schedule Consultation
              </Button>
            </div>

            {/* Election Timeline Alert */}
            <div className="bg-warning/20 backdrop-blur-sm border border-warning/30 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <Icon name="Calendar" size={20} color="var(--color-warning)" />
                <div>
                  <h3 className="font-semibold text-warning">2027 Election Preparation</h3>
                  <p className="text-sm text-primary-100 mt-1">
                    Start your campaign materials early. Book your printing slots now for guaranteed delivery before campaign season.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="lg:pl-8">
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: '500+', label: 'Corporate Clients', icon: 'Building2' },
                { number: '50+', label: 'Political Campaigns', icon: 'Vote' },
                { number: '1M+', label: 'Items Printed', icon: 'Printer' },
                { number: '24/7', label: 'Support Available', icon: 'Headphones' }
              ].map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={stat.icon} size={24} color="var(--color-secondary)" />
                  </div>
                  <div className="text-3xl font-heading font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-primary-200 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
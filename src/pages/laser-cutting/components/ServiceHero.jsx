import React from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ServiceHero = ({ service, onGetQuote, onWhatsAppChat }) => {
  return (
    <div className="relative bg-gradient-to-br from-primary-800 to-primary-900 overflow-hidden">
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute inset-0 kenyan-pattern opacity-10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary/20 text-secondary-300 text-sm font-medium mb-4">
              {service.category}
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
              {service.title}
            </h1>
            
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              {service.description}
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              {service.keyFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2 bg-white/10 rounded-lg px-3 py-2">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-300">Starting from</p>
                  <p className="text-2xl font-bold text-secondary">
                    KES {service.startingPrice.toLocaleString()}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-300">Turnaround</p>
                  <p className="text-lg font-semibold">{service.turnaround}</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="secondary"
                size="lg"
                onClick={onGetQuote}
                className="flex-1 sm:flex-none"
              >
                Get Free Quote
              </Button>
              <Button
                variant="accent"
                size="lg"
                iconName="MessageCircle"
                iconPosition="left"
                onClick={onWhatsAppChat}
                className="flex-1 sm:flex-none border-white text-white hover:bg-white hover:text-primary"
              >
                WhatsApp Chat
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={service.heroImage}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-secondary rounded-full flex items-center justify-center shadow-lg">
              <span className="text-2xl font-bold text-white">24/7</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceHero;
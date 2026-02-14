import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import { services } from '../../../data/serviceData';


import { corporateEquipment } from '../../../data/corporateEquipmentData';

const EquipmentCapabilities = () => {
  
const pageData = services['t-shirt-printing']; 

  if (!pageData) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Service Not Found</h1>
          <p>The data for 't-shirt-printing' could not be found. Please check the key in serviceData.js.</p>
        </div>
      </div>
    );
  }
  
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
            Industrial Equipment Capabilities
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            State-of-the-art machinery ensuring high-quality output for large-scale corporate and political printing projects
          </p>
        </div>

        {/* Equipment Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {corporateEquipment.map((item, index) => (
            <div key={index} className="bg-surface-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
               
              {/* Equipment Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-heading font-bold">{item.name}</h3>
                  <p className="text-sm opacity-90">{item.model}</p>
                </div>
              </div>

              {/* Equipment Details */}
              <div className="p-8">
                {/* Capabilities */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-text-primary mb-4 flex items-center">
                    <Icon name="Settings" size={20} className="mr-2 text-primary" />
                    Key Capabilities
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {item.capabilities.map((capability, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <Icon name="Check" size={16} className="text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-text-secondary">{capability}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical Specifications */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-text-primary mb-4 flex items-center">
                    <Icon name="Zap" size={20} className="mr-2 text-secondary" />
                    Technical Specifications
                  </h4>
                  <div className="grid grid-cols-1 gap-3">
                    {Object.entries(item.specifications).map(([spec, value], idx) => (
                      <div key={idx} className="flex justify-between items-center py-2 border-b border-surface-200 last:border-b-0">
                        <span className="text-sm font-medium text-text-secondary">{spec}</span>
                        <span className="text-sm font-semibold text-text-primary">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Applications */}
                <div>
                  <h4 className="text-lg font-semibold text-text-primary mb-4 flex items-center">
                    <Icon name="Target" size={20} className="mr-2 text-accent" />
                    Applications
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item.applications.map((app, idx) => (
                      <span key={idx} className="bg-primary-100 text-primary text-xs px-3 py-1 rounded-full font-medium">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Production Capacity Summary */}
        <div className="mt-16 bg-gradient-to-r from-primary to-primary-700 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-heading font-bold mb-4">Production Capacity</h3>
            <p className="text-primary-100 text-lg">
              Our industrial-grade equipment ensures we can handle large-scale orders with consistent quality
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { metric: '5,000+', label: 'Posters per day', icon: 'FileImage' },
              { metric: '1,000+', label: 'T-shirts per day', icon: 'Shirt' },
              { metric: '200+', label: 'Banners per day', icon: 'Flag' },
              { metric: '24/7', label: 'Production capability', icon: 'Clock' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={stat.icon} size={28} color="white" />
                </div>
                <div className="text-3xl font-heading font-bold mb-2">{stat.metric}</div>
                <div className="text-primary-200 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EquipmentCapabilities;
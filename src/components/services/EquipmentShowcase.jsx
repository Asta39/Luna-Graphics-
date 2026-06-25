import React from 'react';
import Image from '../AppImage';
import Icon from '../AppIcon';

const EquipmentShowcase = ({ equipment }) => {
  return (
    <div className="bg-surface-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-4">
            Our Professional Equipment
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            State-of-the-art machinery ensuring precision, quality, and efficiency in every project we deliver.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {equipment.map((machine, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={machine.image}
                  alt={machine.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <div className="bg-secondary text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {machine.status}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold text-primary mb-2">
                  {machine.name}
                </h3>
                <p className="text-text-secondary mb-4 text-sm leading-relaxed">
                  {machine.description}
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-text-primary text-sm">Key Capabilities:</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {machine.capabilities.map((capability, capIndex) => (
                      <div key={capIndex} className="flex items-center space-x-2">
                        <Icon name="Check" size={14} color="var(--color-accent)" />
                        <span className="text-sm text-text-secondary">{capability}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-border">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-text-secondary">Max Size:</span>
                    <span className="font-semibold text-text-primary">{machine.maxSize}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-white rounded-lg p-8 shadow-md max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Award" size={24} color="var(--color-primary)" />
                </div>
                <h3 className="font-heading font-bold text-primary mb-2">ISO Certified</h3>
                <p className="text-sm text-text-secondary">Quality management systems certified to international standards</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" size={24} color="var(--color-accent)" />
                </div>
                <h3 className="font-heading font-bold text-primary mb-2">Quality Assured</h3>
                <p className="text-sm text-text-secondary">Every project undergoes rigorous quality control processes</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Clock" size={24} color="var(--color-secondary)" />
                </div>
                <h3 className="font-heading font-bold text-primary mb-2">Fast Turnaround</h3>
                <p className="text-sm text-text-secondary">Efficient production processes for quick project completion</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EquipmentShowcase;
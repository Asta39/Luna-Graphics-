import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const EquipmentShowcase = ({ equipment }) => {
  return (
    <div className="bg-surface-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold text-primary mb-4">
            Our CNC Equipment
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            State-of-the-art CNC machinery ensures precision cutting and exceptional quality for all your fabrication needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {equipment.map((machine, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-border overflow-hidden hover:shadow-md transition-shadow duration-300">
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={machine.image}
                  alt={machine.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <div className="bg-accent text-white px-2 py-1 rounded-full text-xs font-medium">
                    {machine.status}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold text-text-primary mb-2">
                  {machine.name}
                </h3>
                <p className="text-text-secondary mb-4">
                  {machine.description}
                </p>
                
                <div className="bg-primary-50 rounded-lg p-4 mb-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="Maximize" size={16} color="var(--color-primary)" />
                    <span className="text-sm font-medium text-primary">Max Size:</span>
                    <span className="text-sm text-text-primary">{machine.maxSize}</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-text-primary mb-2">Key Capabilities:</h4>
                  {machine.capabilities.map((capability, capIndex) => (
                    <div key={capIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                      <span className="text-sm text-text-secondary">{capability}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EquipmentShowcase;
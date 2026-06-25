import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { machines } from '../../../data/machineShowcaseData'; // 1. Import your new data

const MachineShowcase = () => {
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate(); // Initialize navigate

  // 2. The old, hardcoded 'machines' array is now DELETED from this file.

  const activeMachine = machines[activeTab];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-secondary-100 rounded-full">
            <span className="text-sm font-semibold text-secondary-700">Our Equipment</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-text-primary">
            State-of-the-Art
            <span className="block text-secondary">Printing Technology</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            We invest in the latest printing technology to deliver exceptional quality and precision. 
            Our advanced equipment ensures your projects meet the highest professional standards.
          </p>
        </div>

        {/* Machine Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {/* 3. Map over the imported 'machines' data */}
          {machines.map((machine, index) => (
            <button
              key={machine.id}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                activeTab === index
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-surface-100 text-text-secondary hover:bg-surface-200'
              }`}
            >
              {machine.category}
            </button>
          ))}
        </div>

        {/* Machine Details */}
        <div className="bg-surface-50 rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Machine Image */}
            <div className="relative">
              <Image
                src={activeMachine.image} // This will now use the correct hero image
                alt={activeMachine.name}
                className="w-full h-80 lg:h-96 object-cover rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl"></div>
              <div className="absolute bottom-4 left-4 bg-background/95 backdrop-blur-sm rounded-lg p-3">
                <div className="text-sm font-semibold text-text-primary">{activeMachine.name}</div>
                <div className="text-xs text-text-secondary">{activeMachine.category}</div>
              </div>
            </div>

            {/* Machine Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-heading font-bold text-text-primary mb-2">
                  {activeMachine.name}
                </h3>
                <p className="text-text-secondary">{activeMachine.category}</p>
              </div>

              {/* Specifications */}
              <div>
                <h4 className="text-lg font-semibold text-text-primary mb-4 flex items-center">
                  <Icon name="Settings" size={20} className="mr-2" />
                  Technical Specifications
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeMachine.specifications.map((spec, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <Icon name="Check" size={16} color="var(--color-primary)" className="mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-text-secondary">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Capabilities */}
              <div>
                <h4 className="text-lg font-semibold text-text-primary mb-4 flex items-center">
                  <Icon name="Zap" size={20} className="mr-2" />
                  Key Capabilities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeMachine.capabilities.map((capability, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <Icon name="Star" size={16} color="var(--color-secondary)" className="mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-text-secondary">{capability}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applications */}
              <div>
                <h4 className="text-lg font-semibold text-text-primary mb-4 flex items-center">
                  <Icon name="Target" size={20} className="mr-2" />
                  Perfect For
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeMachine.applications.map((app, index) => (
                    <span key={index} className="px-3 py-1 bg-accent-100 text-accent-700 rounded-full text-sm font-medium">
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="primary"
                  iconName="MessageCircle"
                  iconPosition="left"
                  onClick={() => {
                    const phoneNumber = '254791159618';
                    const message = `Hello! I'm interested in services using your ${activeMachine.name}. Please provide more details.`;
                    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                    window.open(whatsappUrl, '_blank');
                  }}
                >
                  Inquire About This Service
                </Button>
                <Button
                  variant="outline"
                  iconName="Eye"
                  iconPosition="left"
                  onClick={() => navigate('/gallery')} // Use navigate
                >
                  View Sample Work
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MachineShowcase;
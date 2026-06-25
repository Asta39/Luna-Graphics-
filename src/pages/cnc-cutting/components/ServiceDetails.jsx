import React from 'react';
import Icon from '../../../components/AppIcon';

const ServiceDetails = ({ service }) => {
  return (
    <div className="bg-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-heading font-bold text-primary mb-6">
                Service Overview
              </h2>
              <div className="text-text-secondary leading-relaxed space-y-4">
                {service.detailedDescription.split('\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
            
            {/* Technical Specifications */}
            <div className="mt-12">
              <h3 className="text-2xl font-heading font-bold text-primary mb-6">
                Technical Specifications
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {service.specifications.map((spec, index) => (
                  <div key={index} className="bg-surface-50 rounded-lg p-6 border border-border">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                        <Icon name={spec.icon} size={20} color="var(--color-primary)" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-text-primary mb-2">{spec.title}</h4>
                        <p className="text-sm text-text-secondary">{spec.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Materials & Options */}
            <div className="mt-12">
              <h3 className="text-2xl font-heading font-bold text-primary mb-6">
                Available Materials & Options
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {service.materials.map((material, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 border border-border hover:shadow-md transition-shadow duration-200">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-accent rounded-full"></div>
                      <span className="font-medium text-text-primary">{material}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              {/* Quick Info */}
              <div className="bg-primary-50 rounded-lg p-6 border border-primary-200">
                <h3 className="text-lg font-heading font-bold text-primary mb-4">
                  Quick Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-text-secondary">Minimum Order</span>
                    <span className="font-semibold text-text-primary">{service.minimumOrder}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-text-secondary">Production Time</span>
                    <span className="font-semibold text-text-primary">{service.turnaround}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-text-secondary">Rush Orders</span>
                    <span className="font-semibold text-accent">Available</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-text-secondary">Delivery</span>
                    <span className="font-semibold text-text-primary">Nairobi & Suburbs</span>
                  </div>
                </div>
              </div>
              
              {/* Contact Card */}
              <div className="bg-white rounded-lg p-6 border border-border shadow-sm">
                <h3 className="text-lg font-heading font-bold text-primary mb-4">
                  Need Help?
                </h3>
                <p className="text-sm text-text-secondary mb-4">
                  Our CNC cutting experts are ready to assist you with your fabrication requirements.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Icon name="Phone" size={16} color="var(--color-accent)" />
                    <span className="text-sm font-medium">+254 791 159 618</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Mail" size={16} color="var(--color-accent)" />
                    <span className="text-sm font-medium">info.lunagraphics@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Clock" size={16} color="var(--color-accent)" />
                    <span className="text-sm font-medium">Mon-Fri: 8AM-6PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
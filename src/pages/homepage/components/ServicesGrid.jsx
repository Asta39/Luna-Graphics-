// src/pages/homepage/components/ServicesGrid.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import ServiceCard from './ServiceCard'; // Make sure this path is correct for your project
import { homepageServices } from '../../../data/homepageServicesData'; // 1. IMPORT your central homepage services data

const ServicesGrid = () => {
  const navigate = useNavigate();

  // 2. The old, local, hardcoded 'services' array has been COMPLETELY DELETED.
  // We will now use 'homepageServices' which is imported from our central data file.

  return (
    <section className="py-16 lg:py-24 bg-surface-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full">
            <span className="text-sm font-semibold text-primary">Our Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-text-primary">
            Professional Printing
            <span className="block text-primary">Solutions</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            From concept to completion, we offer comprehensive printing services with state-of-the-art 
            equipment and expert craftsmanship. Every project is handled with precision and care.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 3. Map over the CORRECT, imported 'homepageServices' data */}
          {/* This data is guaranteed to include the 'path' and correct 'heroImage' for every service */}
          {homepageServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-text-secondary mb-6">
            Don't see what you're looking for? We offer custom solutions for unique printing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/contact')} // Use navigate for consistency
              className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-600 transition-colors"
            >
              Request Custom Quote
            </button>
            <button
              onClick={() => {
                const phoneNumber = '254791159618';
                const message = 'Hello! I would like to discuss custom printing solutions for my business.';
                const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
              }}
              className="px-8 py-3 border border-accent text-accent rounded-lg font-semibold hover:bg-accent hover:text-white transition-colors"
            >
              Chat with Expert
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
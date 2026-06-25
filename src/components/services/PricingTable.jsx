import React, { useState, useEffect } from 'react';
import Button from '../ui/Button';
import Icon from '../AppIcon';

// === MODAL COMPONENT (Self-contained for this file) ===
// This component handles capturing user info for a quote request.
const QuoteModal = ({ isOpen, onClose, onSubmit, quoteDetails }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setFormData({ name: '', email: '', phone: '' });
      setIsSubmitting(false);
    }
  }, [isOpen]);

  if (!isOpen || !quoteDetails) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    onSubmit(formData);
  };

  const modalTitle = `Quote for: ${quoteDetails.package}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm">
      <div className="bg-white rounded-lg shadow-2xl p-6 sm:p-8 w-11/12 max-w-md m-4 transform transition-all">
        <div className="flex justify-between items-start">
          <h2 className="text-2xl font-bold font-heading text-primary">{modalTitle}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-3xl leading-none">×</button>
        </div>
        
        <div className="mt-4 p-4 bg-gray-50 border border-gray-200 rounded-md">
          <p className="font-semibold text-gray-800">Package: <span className="text-secondary">{quoteDetails.package}</span></p>
          <p className="text-sm text-gray-600">Please provide your contact details to proceed.</p>
        </div>
        
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input type="tel" name="phone" id="phone" required value={formData.phone} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" />
          </div>
          <div className="flex justify-end space-x-4 pt-4">
            <button type="button" onClick={onClose} className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200">Cancel</button>
            <button type="submit" disabled={isSubmitting} className="px-6 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:bg-gray-400">
              {isSubmitting ? 'Submitting...' : 'Get Quote via WhatsApp'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};


// === UPDATED PRICING TABLE COMPONENT ===
const PricingTable = ({ pricingPackages }) => { // onGetQuote prop is no longer needed
  // --- NEW STATE FOR MODAL ---
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentQuote, setCurrentQuote] = useState(null);

  // --- NEW FUNCTION TO HANDLE OPENING THE MODAL ---
  const handleGetQuote = (pkg) => {
    setCurrentQuote({
      package: pkg.name
    });
    setIsModalOpen(true);
  };

  // --- NEW FUNCTION TO HANDLE MODAL SUBMISSION ---
  const handleQuoteSubmit = (formData) => {
    const phoneNumber = '254791159618';
    const { name, email, phone } = formData;

    let message = `*📝 New Package Quote Request 📝*\n\n`;
    
    message += `*PACKAGE SELECTED:*\n`;
    message += `*${currentQuote.package}*\n\n`;
    
    message += `--------------------\n\n`;
    
    message += `*CLIENT DETAILS:*\n`;
    message += `*Name:* ${name}\n`;
    message += `*Email:* ${email}\n`;
    message += `*Phone:* ${phone}\n\n`;
    
    message += `Please provide a quote for the selected package. Thank you!`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    setTimeout(() => {
      setIsModalOpen(false);
    }, 500);
  };

  return (
    <>
      <div className="bg-surface-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-4">
              Transparent Pricing
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Choose the package that best fits your needs. All prices are in Kenyan Shillings (KES) and include VAT.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingPackages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-xl shadow-lg overflow-hidden ${
                  pkg.popular ? 'ring-2 ring-secondary transform scale-105' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-secondary text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-heading font-bold text-primary mb-2">
                      {pkg.name}
                    </h3>
                    <p className="text-text-secondary text-sm mb-4">
                      {pkg.description}
                    </p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-3xl font-bold text-primary">
                        KES {pkg.price.toLocaleString()}
                      </span>
                      <span className="text-text-secondary ml-2">/{pkg.unit}</span>
                    </div>
                    {pkg.originalPrice && (
                      <div className="text-center mt-2">
                        <span className="text-text-muted line-through text-sm">
                          KES {pkg.originalPrice.toLocaleString()}
                        </span>
                        <span className="text-success ml-2 text-sm font-semibold">
                          Save {Math.round(((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100)}%
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-5 h-5 bg-accent-100 rounded-full flex items-center justify-center mt-0.5">
                          <Icon name="Check" size={12} color="var(--color-accent)" />
                        </div>
                        <span className="text-sm text-text-secondary">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-3">
                    <Button
                      variant={pkg.popular ? "secondary" : "primary"}
                      size="md"
                      onClick={() => handleGetQuote(pkg)} // Use the internal handler
                      fullWidth
                    >
                      Get Quote
                    </Button>
                    
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-4 text-xs text-text-muted">
                        <div className="flex items-center space-x-1">
                          <Icon name="Clock" size={12} />
                          <span>{pkg.turnaround}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Icon name="Truck" size={12} />
                          <span>Free Delivery</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <div className="bg-white rounded-lg p-8 shadow-md max-w-4xl mx-auto">
              <h3 className="text-xl font-heading font-bold text-primary mb-4">
                Volume Discounts Available
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent mb-2">5%</div>
                  <div className="text-sm text-text-secondary">Orders above KES 50,000</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent mb-2">10%</div>
                  <div className="text-sm text-text-secondary">Orders above KES 100,000</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent mb-2">15%</div>
                  <div className="text-sm text-text-secondary">Orders above KES 200,000</div>
                </div>
              </div>
              <p className="text-sm text-text-muted mt-4">
                * Discounts apply automatically at checkout. Contact us for custom enterprise pricing.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Render the modal here */}
      <QuoteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleQuoteSubmit}
        quoteDetails={currentQuote}
      />
    </>
  );
};

export default PricingTable;
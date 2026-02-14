import React, { useState, useEffect } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

// === NEW COMPONENT: Quote Modal (for this pricing table) ===
const QuoteModal = ({ isOpen, onClose, onSubmit, quoteDetails }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Reset form when modal opens
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

  const modalTitle = quoteDetails.package 
    ? `Get Quote for ${quoteDetails.package}`
    : 'Request a Custom Quote';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm">
      <div className="bg-white rounded-lg shadow-2xl p-6 sm:p-8 w-11/12 max-w-md m-4 transform transition-all">
        <div className="flex justify-between items-start">
          <h2 className="text-2xl font-bold font-heading text-primary">{modalTitle}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-3xl leading-none">×</button>
        </div>
        
        <div className="mt-4 p-4 bg-gray-50 border border-gray-200 rounded-md">
          <p className="text-sm text-gray-600">You are requesting a quote for:</p>
          <p className="font-semibold text-gray-800">{quoteDetails.service}</p>
          {quoteDetails.package && (
            <p className="font-semibold text-gray-800">Package: <span className="text-secondary">{quoteDetails.package}</span></p>
          )}
        </div>
        
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text" name="name" id="name" required value={formData.name} onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email" name="email" id="email" required value={formData.email} onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel" name="phone" id="phone" required value={formData.phone} onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
            />
          </div>
          <div className="flex justify-end space-x-4 pt-4">
            <button type="button" onClick={onClose} className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200">
              Cancel
            </button>
            <button type="submit" disabled={isSubmitting} className="px-6 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:bg-gray-400">
              {isSubmitting ? 'Submitting...' : 'Submit on WhatsApp'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};


// === UPDATED PRICING TABLE COMPONENT ===
const PricingTable = ({ pricingPackages }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentQuote, setCurrentQuote] = useState(null);

  // This function opens the modal and sets the quote details
  const handleGetQuote = (pkg = null) => {
    setCurrentQuote({
      service: "CNC Cutting", // Service is fixed for this pricing table
      package: pkg?.name, // Will be the package name or null for a custom quote
    });
    setIsModalOpen(true);
  };

  // This function formats the data and opens WhatsApp
  const handleQuoteSubmit = (formData) => {
    const phoneNumber = '254791159618';
    const { name, email, phone } = formData;

    // --- Professionally styled WhatsApp message ---
    let message = `*🔥 New CNC Cutting Quote Request 🔥*\n\n`;
    
    message += `*CLIENT DETAILS:*\n`;
    message += `*Name:* ${name}\n`;
    message += `*Email:* ${email}\n`;
    message += `*Phone:* ${phone}\n\n`;
    
    message += `--------------------\n\n`;
    
    message += `*QUOTE DETAILS:*\n`;
    message += `*Service:* ${currentQuote.service}\n`;
    message += `*Package:* ${currentQuote.package || 'Custom Quote Request'}\n\n`;
    
    message += `Please provide a quote based on these details. Thank you!`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    // Close the modal after submission
    setTimeout(() => {
        setIsModalOpen(false);
    }, 500);
  };

  return (
    <>
      <div className="bg-surface-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-primary mb-4">
              CNC Cutting Pricing
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Transparent pricing for precision CNC cutting services. Choose the package that best fits your project requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingPackages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-xl shadow-sm border-2 ${
                  pkg.popular ? 'border-primary' : 'border-border'
                } overflow-hidden flex flex-col`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-primary text-white text-center py-2 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                
                <div className={`p-6 ${pkg.popular ? 'pt-12' : ''} flex flex-col flex-grow`}>
                  <h3 className="text-xl font-heading font-bold text-text-primary mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-text-secondary mb-6">
                    {pkg.description}
                  </p>
                  
                  <div className="mb-6">
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold text-primary">
                        KES {pkg.price.toLocaleString()}
                      </span>
                      <span className="text-text-secondary ml-2">/ {pkg.unit}</span>
                    </div>
                    {pkg.originalPrice && (
                      <div className="flex items-center mt-1">
                        <span className="text-text-secondary line-through mr-2">
                          KES {pkg.originalPrice.toLocaleString()}
                        </span>
                        <span className="bg-accent text-white px-2 py-1 rounded-full text-xs font-medium">
                          Save KES {(pkg.originalPrice - pkg.price).toLocaleString()}
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex items-center space-x-2 mb-6 p-3 bg-primary-50 rounded-lg">
                    <Icon name="Clock" size={16} color="var(--color-primary)" />
                    <span className="text-sm font-medium text-primary">
                      Delivery: {pkg.turnaround}
                    </span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Icon name="Check" size={16} color="var(--color-accent)" className="mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-text-secondary">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-auto">
                    <Button
                      variant={pkg.popular ? "primary" : "outline"}
                      size="lg"
                      onClick={() => handleGetQuote(pkg)} // Use the internal handler
                      className="w-full"
                    >
                      Get Quote
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-text-secondary mb-4">
              Need a custom quote for your specific requirements?
            </p>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => handleGetQuote()} // Use the internal handler without arguments
            >
              Request Custom Quote
            </Button>
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
import React, { useState } from 'react';
import Icon from '../AppIcon';
import Button from '../ui/Button';
import Input from '../ui/Input';

const ContactForm = ({ serviceName }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: serviceName || '',
    projectDetails: '',
    timeline: '',
    budget: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const serviceOptions = [
    'Large Format Printing',
    'Digital Printing',
    'UV Printing',
    'CNC Cutting',
    'Laser Cutting',
    'T-shirt Printing',
    'Custom Merchandise',
    'Binding & Finishing'
  ];

  const timelineOptions = [
    'Rush (24-48 hours)',
    'Standard (3-5 days)',
    'Extended (1-2 weeks)',
    'Flexible timing'
  ];

  const budgetRanges = [
    'Under KES 10,000',
    'KES 10,000 - 50,000',
    'KES 50,000 - 100,000',
    'KES 100,000 - 500,000',
    'Above KES 500,000'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // --- UPDATED SUBMIT HANDLER FOR WHATSAPP ---
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const phoneNumber = '254791159618'; // Your WhatsApp number

    const fieldLabels = {
        name: 'Full Name',
        email: 'Email',
        phone: 'Phone',
        company: 'Company',
        service: 'Service Required',
        projectDetails: 'Project Details',
        timeline: 'Timeline',
        budget: 'Budget Range'
    };

    let messageBody = `*📄 New General Quote Request 📄*\n\n`;

    // Loop through all form data and add it to the message if it exists
    for (const key in formData) {
        const label = fieldLabels[key];
        const value = formData[key];

        if (value && label) { // Only add fields that have a value
            messageBody += `*${label}:* ${value}\n`;
        }
    }
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(messageBody)}`;
    window.open(whatsappUrl, '_blank');

    setIsSubmitting(false);
    setSubmitStatus('success');

    // Optional: Reset form after submission
    setFormData({
      name: '', email: '', phone: '', company: '',
      service: serviceName || '', projectDetails: '',
      timeline: '', budget: ''
    });
  };

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-6">
              Get Your Free Quote
            </h2>
            <p className="text-lg text-text-secondary mb-8 leading-relaxed">
              Ready to bring your project to life? Fill out the form and our printing experts will get back to you within 2 hours with a detailed quote.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Icon name="Clock" size={20} color="var(--color-primary)" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-primary mb-2">Quick Response</h3>
                  <p className="text-text-secondary text-sm">
                    We respond to all inquiries within 2 hours during business hours (8AM-6PM, Mon-Fri).
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center">
                  <Icon name="Calculator" size={20} color="var(--color-accent)" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-primary mb-2">Accurate Pricing</h3>
                  <p className="text-text-secondary text-sm">
                    Detailed quotes with transparent pricing, no hidden fees, and volume discounts available.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center">
                  <Icon name="Users" size={20} color="var(--color-secondary)" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-primary mb-2">Expert Consultation</h3>
                  <p className="text-text-secondary text-sm">
                    Our team provides professional advice on materials, sizing, and design optimization.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-surface-50 rounded-lg border border-border">
              <h3 className="font-heading font-semibold text-primary mb-4">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={16} color="var(--color-accent)" />
                  <span className="text-sm">+254 791 159 618</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={16} color="var(--color-accent)" />
                  <span className="text-sm">info.lunagraphics@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" size={16} color="var(--color-accent)" />
                  <span className="text-sm">Nairobi, Kenya</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-surface-50 rounded-xl p-8">
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-success-50 border border-success-200 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Icon name="CheckCircle" size={20} color="var(--color-success)" />
                  <span className="text-success font-semibold">Message Ready!</span>
                </div>
                <p className="text-success-700 text-sm mt-2">
                  Your quote request is ready. Please press 'Send' in the new WhatsApp tab that opened.
                </p>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-error-50 border border-error-200 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Icon name="AlertCircle" size={20} color="var(--color-error)" />
                  <span className="text-error font-semibold">Something went wrong!</span>
                </div>
                <p className="text-error-700 text-sm mt-2">
                  There was an error preparing your message. Please try again or contact us directly.
                </p>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-text-primary mb-2">
                    Full Name *
                  </label>
                  <Input
                    type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Enter your full name" required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-text-primary mb-2">
                    Email Address *
                  </label>
                  <Input
                    type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Enter your email" required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-text-primary mb-2">
                    Phone Number *
                  </label>
                  <Input
                    type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="+254 791 159 618" required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-text-primary mb-2">
                    Company (Optional)
                  </label>
                  <Input
                    type="text" name="company" value={formData.company} onChange={handleInputChange} placeholder="Your company name"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-text-primary mb-2">
                  Service Required *
                </label>
                <select
                  name="service" value={formData.service} onChange={handleInputChange} required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  {serviceOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-text-primary mb-2">
                  Project Details *
                </label>
                <textarea
                  name="projectDetails" value={formData.projectDetails} onChange={handleInputChange}
                  placeholder="Describe your project requirements, dimensions, quantities, materials, etc." required rows={4}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-text-primary mb-2">
                    Timeline
                  </label>
                  <select
                    name="timeline" value={formData.timeline} onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select timeline</option>
                    {timelineOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-text-primary mb-2">
                    Budget Range
                  </label>
                  <select
                    name="budget" value={formData.budget} onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select budget range</option>
                    {budgetRanges.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <Button
                type="submit" variant="primary" size="lg" disabled={isSubmitting} fullWidth iconName="Send" iconPosition="right"
              >
                {isSubmitting ? 'Preparing Message...' : 'Get Quote via WhatsApp'}
              </Button>
              
              <p className="text-xs text-text-muted text-center">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
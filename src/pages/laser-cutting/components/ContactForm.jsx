import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Icon from '../../../components/AppIcon';

const ContactForm = ({ serviceName }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    material: '',
    quantity: '',
    dimensions: '',
    complexity: '',
    timeline: '',
    message: '',
    hasVectorFile: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // --- UPDATED SUBMIT HANDLER FOR WHATSAPP ---
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const phoneNumber = '254791159618'; // Your WhatsApp number without '+'

    // A mapping of form field keys to human-readable labels for the message
    const fieldLabels = {
      name: 'Full Name',
      email: 'Email Address',
      phone: 'Phone Number',
      company: 'Company',
      projectType: 'Project Type',
      material: 'Material',
      quantity: 'Quantity',
      dimensions: 'Dimensions',
      complexity: 'Design Complexity',
      timeline: 'Timeline',
      message: 'Project Details',
      hasVectorFile: 'Vector File Ready'
    };
    
    // Build the professionally styled message string
    let messageBody = `*🔥 New ${serviceName || 'Laser Cutting'} Quote Request 🔥*\n\n`;
    
    messageBody += `*CLIENT DETAILS:*\n`;
    // Add client details only if they exist
    if(formData.name) messageBody += `*Name:* ${formData.name}\n`;
    if(formData.email) messageBody += `*Email:* ${formData.email}\n`;
    if(formData.phone) messageBody += `*Phone:* ${formData.phone}\n`;
    if(formData.company) messageBody += `*Company:* ${formData.company}\n`;
    
    messageBody += `\n*PROJECT SPECIFICATIONS:*\n`;
    // Loop through the rest of the form data
    for (const key in formData) {
      if (['name', 'email', 'phone', 'company'].includes(key)) continue; // Skip already added fields
      
      const label = fieldLabels[key];
      let value = formData[key];

      // Skip empty fields, but include the checkbox even if it's false
      if ((!value && typeof value !== 'boolean') || !label) {
        continue;
      }

      // Format boolean value to 'Yes' or 'No'
      if (typeof value === 'boolean') {
        value = value ? 'Yes' : 'No';
      }
      
      messageBody += `*${label}:* ${value}\n`;
    }
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(messageBody)}`;
    window.open(whatsappUrl, '_blank');

    setIsSubmitting(false);
    setSubmitStatus('success');
  };

  return (
    <div className="bg-primary-900 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold text-white mb-4">
            Get Your {serviceName || 'Laser Cutting'} Quote
          </h2>
          <p className="text-lg text-gray-200">
            Share your design requirements and we'll provide a detailed quote for your laser cutting project within 24 hours.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-xl p-8">
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-center">
                <Icon name="CheckCircle" size={20} color="green" />
                <p className="ml-2 text-green-800">
                  {/* --- UPDATED SUCCESS MESSAGE --- */}
                  Your quote is ready! Please press 'Send' in the new WhatsApp tab that opened.
                </p>
              </div>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex items-center">
                <Icon name="AlertCircle" size={20} color="red" />
                <p className="ml-2 text-red-800">
                  There was an error preparing your request. Please try again or contact us directly.
                </p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Full Name *
                </label>
                <Input
                  type="text" name="name" value={formData.name} onChange={handleInputChange} required placeholder="Your full name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Email Address *
                </label>
                <Input
                  type="email" name="email" value={formData.email} onChange={handleInputChange} required placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Phone Number *
                </label>
                <Input
                  type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required placeholder="+254 700 000 000"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Company (Optional)
                </label>
                <Input
                  type="text" name="company" value={formData.company} onChange={handleInputChange} placeholder="Your company name"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Project Type *
                </label>
                <select
                  name="projectType" value={formData.projectType} onChange={handleInputChange} required
                  className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Select project type</option>
                  <option value="jewelry">Jewelry & Accessories</option>
                  <option value="decorative">Decorative Panels</option>
                  <option value="signage">Signage & Displays</option>
                  <option value="textiles">Textile Cutting</option>
                  <option value="stencils">Stencils & Templates</option>
                  <option value="art">Art & Crafts</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Material *
                </label>
                <select
                  name="material" value={formData.material} onChange={handleInputChange} required
                  className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Select material</option>
                  <option value="wood">Wood/Plywood</option>
                  <option value="acrylic">Acrylic</option>
                  <option value="leather">Leather</option>
                  <option value="fabric">Fabric/Textiles</option>
                  <option value="cardboard">Cardboard/Paper</option>
                  <option value="foam">Foam Core</option>
                  <option value="rubber">Rubber Sheets</option>
                  <option value="other">Other Material</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Quantity *
                </label>
                <Input
                  type="number" name="quantity" value={formData.quantity} onChange={handleInputChange} required min="1" placeholder="Number of pieces"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Dimensions
                </label>
                <Input
                  type="text" name="dimensions" value={formData.dimensions} onChange={handleInputChange} placeholder="L x W (in mm or cm)"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Design Complexity
                </label>
                <select
                  name="complexity" value={formData.complexity} onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Select complexity</option>
                  <option value="simple">Simple shapes</option>
                  <option value="moderate">Moderate detail</option>
                  <option value="intricate">Intricate patterns</option>
                  <option value="ultra-fine">Ultra-fine details</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                Timeline *
              </label>
              <select
                name="timeline" value={formData.timeline} onChange={handleInputChange} required
                className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="">Select timeline</option>
                <option value="rush">Rush (24-48 hours)</option>
                <option value="standard">Standard (2-3 days)</option>
                <option value="flexible">Flexible (1 week)</option>
                <option value="planning">Still planning</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                Project Details
              </label>
              <textarea
                name="message" value={formData.message} onChange={handleInputChange} rows={4}
                className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Please describe your project requirements, design details, or any special specifications..."
              />
            </div>

            <div className="flex items-center space-x-3">
              <input
                type="checkbox" id="hasVectorFile" name="hasVectorFile" checked={formData.hasVectorFile} onChange={handleInputChange}
                className="w-4 h-4 text-primary border-border rounded focus:ring-primary"
              />
              <label htmlFor="hasVectorFile" className="text-sm text-text-secondary">
                I have vector files (AI, SVG, DXF, PDF) ready for this project
              </label>
            </div>

            <Button
              type="submit" variant="primary" size="lg" disabled={isSubmitting} className="w-full"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Preparing Message...
                </>
              ) : (
                'Get Quote via WhatsApp'
              )}
            </Button>
          </form>

          <div className="mt-8 pt-8 border-t border-border">
            <div className="text-center">
              <p className="text-text-secondary mb-4">
                Prefer to speak directly? Contact our laser cutting specialists:
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+254791159618"
                  className="flex items-center justify-center space-x-2 text-primary hover:text-primary-600 transition-colors duration-200"
                >
                  <Icon name="Phone" size={16} />
                  <span className="font-medium">+254 791 159 618</span>
                </a>
                <a
                  href="mailto:laser@halocreatives.co.ke"
                  className="flex items-center justify-center space-x-2 text-primary hover:text-primary-600 transition-colors duration-200"
                >
                  <Icon name="Mail" size={16} />
                  <span className="font-medium">info.lunagraphics@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
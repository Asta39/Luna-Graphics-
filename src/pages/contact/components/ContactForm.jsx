import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Icon from '../../../components/AppIcon';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: '',
    urgency: 'normal'
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const services = [
    { value: '', label: 'Select a Service' },
    { value: 'large-format', label: 'Large Format Printing' },
    { value: 'plotting', label: 'Plotting Services' },
    { value: 'uv-printing', label: 'UV Printing' },
    { value: 'cnc-cutting', label: 'CNC Cutting' },
    { value: 'laser-cutting', label: 'Laser Cutting' },
    { value: 'tshirt-printing', label: 'T-shirt Printing' },
    { value: 'corporate', label: 'Corporate Solutions' },
    { value: 'other', label: 'Other Services' }
  ];

  const projectTypes = {
    'large-format': ['Banners', 'Billboards', 'Vehicle Wraps', 'Window Graphics', 'Trade Show Displays'],
    'plotting': ['Architectural Plans', 'Engineering Drawings', 'Maps', 'Technical Diagrams'],
    'uv-printing': ['Acrylic Prints', 'Metal Prints', 'Glass Prints', 'Wood Prints'],
    'cnc-cutting': ['Signage', 'Architectural Elements', 'Custom Shapes', 'Prototypes'],
    'laser-cutting': ['Precision Parts', 'Decorative Items', 'Stencils', 'Custom Designs'],
    'tshirt-printing': ['Custom T-shirts', 'Uniforms', 'Promotional Wear', 'Event Merchandise'],
    'corporate': ['Business Cards', 'Letterheads', 'Brochures', 'Annual Reports'],
    'other': ['Custom Project', 'Multiple Services', 'Consultation Needed']
  };

  const budgetRanges = [
    { value: '', label: 'Select Budget Range' },
    { value: 'under-10k', label: 'Under KES 10,000' },
    { value: '10k-50k', label: 'KES 10,000 - 50,000' },
    { value: '50k-100k', label: 'KES 50,000 - 100,000' },
    { value: '100k-500k', label: 'KES 100,000 - 500,000' },
    { value: 'over-500k', label: 'Over KES 500,000' },
    { value: 'discuss', label: 'Prefer to Discuss' }
  ];

  const timelineOptions = [
    { value: '', label: 'Select Timeline' },
    { value: 'urgent', label: 'Urgent (1-2 days)' },
    { value: 'rush', label: 'Rush (3-5 days)' },
    { value: 'standard', label: 'Standard (1-2 weeks)' },
    { value: 'flexible', label: 'Flexible (2+ weeks)' }
  ];

  const validatePhone = (phone) => {
    const kenyanPhoneRegex = /^(\+254|0)[17]\d{8}$/;
    return kenyanPhoneRegex.test(phone.replace(/\s/g, ''));
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear specific error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }

    // Reset project type when service changes
    if (name === 'service') {
      setFormData(prev => ({
        ...prev,
        projectType: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid Kenyan phone number (+254 or 07/01)';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    const recipientNumber = '+254791159618';

    const messageBody = `
*New Project Inquiry*

*Name:* ${formData.name}
*Company:* ${formData.company || 'N/A'}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
---
*Service:* ${formData.service}
*Project Type:* ${formData.projectType || 'N/A'}
*Budget:* ${formData.budget || 'N/A'}
*Timeline:* ${formData.timeline || 'N/A'}
*Urgency:* ${formData.urgency}
---
*Message:*
${formData.message}
    `;

    const encodedMessage = encodeURIComponent(messageBody);

    const whatsappUrl = `https://wa.me/${recipientNumber.replace('+', '')}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');

    submitSuccess(true);
    setFormData({
      name: '', email: '', phone:'', company:'', service:'',
      projectType:'', budget:'', timeline:'', message:'',
      urgency: 'normal'
    });
    setTimeout(() => {
      setSubmitSuccess(false);
    }, 8000);

    

    
  };

  if (submitSuccess) {
    return (
      <div className="bg-background rounded-lg shadow-lg p-8 text-center">
        <div className="w-16 h-16 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="CheckCircle" size={32} color="var(--color-success)" />
        </div>
        <h3 className="text-xl font-heading font-semibold text-text-primary mb-2">
          Message Sent Successfully!
        </h3>
        <p className="text-text-secondary mb-4">
          Thank you for your inquiry. Our team will review your request and respond within 2-4 hours during business hours.
        </p>
        <p className="text-sm text-text-muted mb-6">
          For urgent requests, please call us directly or use WhatsApp for immediate assistance.
        </p>
        <Button
          variant="primary"
          onClick={() => setSubmitSuccess(false)}
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-background rounded-lg shadow-lg p-6 lg:p-8">
      <div className="mb-6">
        <h2 className="text-2xl font-heading font-semibold text-text-primary mb-2">
          Get Your Quote
        </h2>
        <p className="text-text-secondary">
          Tell us about your project and we'll provide a detailed quote within 24 hours.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-text-primary mb-2">
              Full Name *
            </label>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              className={errors.name ? 'border-error' : ''}
            />
            {errors.name && (
              <p className="text-error text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-text-primary mb-2">
              Company (Optional)
            </label>
            <Input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              placeholder="Your company name"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-text-primary mb-2">
              Email Address *
            </label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="your.email@example.com"
              className={errors.email ? 'border-error' : ''}
            />
            {errors.email && (
              <p className="text-error text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-text-primary mb-2">
              Phone Number *
            </label>
            <Input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="+254 700 000 000"
              className={errors.phone ? 'border-error' : ''}
            />
            {errors.phone && (
              <p className="text-error text-sm mt-1">{errors.phone}</p>
            )}
          </div>
        </div>

        {/* Service Selection */}
        <div>
          <label className="block text-sm font-semibold text-text-primary mb-2">
            Service Required *
          </label>
          <select
            name="service"
            value={formData.service}
            onChange={handleInputChange}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
              errors.service ? 'border-error' : 'border-border'
            }`}
          >
            {services.map(service => (
              <option key={service.value} value={service.value}>
                {service.label}
              </option>
            ))}
          </select>
          {errors.service && (
            <p className="text-error text-sm mt-1">{errors.service}</p>
          )}
        </div>

        {/* Conditional Project Type */}
        {formData.service && projectTypes[formData.service] && (
          <div>
            <label className="block text-sm font-semibold text-text-primary mb-2">
              Project Type
            </label>
            <select
              name="projectType"
              value={formData.projectType}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="">Select project type</option>
              {projectTypes[formData.service].map(type => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Budget and Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-text-primary mb-2">
              Budget Range
            </label>
            <select
              name="budget"
              value={formData.budget}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              {budgetRanges.map(range => (
                <option key={range.value} value={range.value}>
                  {range.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-text-primary mb-2">
              Timeline
            </label>
            <select
              name="timeline"
              value={formData.timeline}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              {timelineOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Urgency Level */}
        <div>
          <label className="block text-sm font-semibold text-text-primary mb-2">
            Urgency Level
          </label>
          <div className="flex flex-wrap gap-4">
            {[
              { value: 'normal', label: 'Normal', color: 'text-text-secondary' },
              { value: 'urgent', label: 'Urgent', color: 'text-warning' },
              { value: 'emergency', label: 'Emergency', color: 'text-error' }
            ].map(urgency => (
              <label key={urgency.value} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="urgency"
                  value={urgency.value}
                  checked={formData.urgency === urgency.value}
                  onChange={handleInputChange}
                  className="text-primary focus:ring-primary"
                />
                <span className={`text-sm font-medium ${urgency.color}`}>
                  {urgency.label}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-semibold text-text-primary mb-2">
            Project Details *
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={5}
            placeholder="Please describe your project requirements, specifications, quantities, and any special instructions..."
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-vertical ${
              errors.message ? 'border-error' : 'border-border'
            }`}
          />
          {errors.message && (
            <p className="text-error text-sm mt-1">{errors.message}</p>
          )}
          <p className="text-xs text-text-muted mt-1">
            Minimum 10 characters required
          </p>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            disabled={isSubmitting}
            loading={isSubmitting}
            fullWidth
            iconName={isSubmitting ? undefined : "Send"}
            iconPosition="right"
          >
            {isSubmitting ? 'Sending Message...' : 'Send Message'}
          </Button>
          
          <p className="text-xs text-text-muted text-center mt-3">
            By submitting this form, you agree to our terms of service and privacy policy.
            We'll respond within 2-4 hours during business hours.
          </p>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
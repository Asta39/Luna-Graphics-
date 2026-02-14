import React, { useState } from 'react';
import emailjs from '@emailjs/browser'; // Import EmailJS
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Icon from '../../../components/AppIcon';

const CorporateQuoteForm = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    serviceCategory: '',
    projectType: '',
    quantity: '',
    budget: '',
    timeline: '',
    deliveryLocation: '',
    additionalRequirements: '',
    urgentOrder: false,
    installationRequired: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const serviceCategories = [
    { value: 'election-campaign', label: 'Election Campaign Materials' },
    { value: 'corporate-branding', label: 'Corporate Branding' },
    { value: 'event-exhibition', label: 'Events & Exhibitions' },
    { value: 'large-format', label: 'Large Format Printing' },
    { value: 'merchandise', label: 'Custom Merchandise' },
    { value: 'signage', label: 'Signage & Displays' }
  ];

  const projectTypes = [
    { value: 'new-project', label: 'New Project' },
    { value: 'rebranding', label: 'Rebranding Initiative' },
    { value: 'campaign-launch', label: 'Campaign Launch' },
    { value: 'event-materials', label: 'Event Materials' },
    { value: 'ongoing-support', label: 'Ongoing Support' },
    { value: 'rush-order', label: 'Rush Order' }
  ];

  const budgetRanges = [
    { value: 'under-100k', label: 'Under KES 100,000' },
    { value: '100k-500k', label: 'KES 100,000 - 500,000' },
    { value: '500k-1m', label: 'KES 500,000 - 1,000,000' },
    { value: '1m-5m', label: 'KES 1,000,000 - 5,000,000' },
    { value: 'over-5m', label: 'Over KES 5,000,000' },
    { value: 'discuss', label: 'Prefer to Discuss' }
  ];

  const timelineOptions = [
    { value: 'urgent', label: 'Urgent (1-3 days)' },
    { value: 'week', label: 'Within 1 week' },
    { value: 'month', label: 'Within 1 month' },
    { value: 'quarter', label: 'Within 3 months' },
    { value: 'flexible', label: 'Flexible timeline' }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Find the readable labels for dropdowns to make the email look clean
    const serviceLabel = serviceCategories.find(c => c.value === formData.serviceCategory)?.label || formData.serviceCategory;
    const projectLabel = projectTypes.find(t => t.value === formData.projectType)?.label || formData.projectType;
    const budgetLabel = budgetRanges.find(r => r.value === formData.budget)?.label || formData.budget;
    const timelineLabel = timelineOptions.find(o => o.value === formData.timeline)?.label || formData.timeline;
    
    // This object maps your form data to the variables in your EmailJS template
    const templateParams = {
      companyName: formData.companyName,
      contactPerson: formData.contactPerson,
      email: formData.email,
      phone: formData.phone,
      serviceCategory: serviceLabel,
      projectType: projectLabel,
      quantity: formData.quantity || 'Not specified',
      budget: budgetLabel || 'Not specified',
      timeline: timelineLabel,
      deliveryLocation: formData.deliveryLocation || 'Not specified',
      additionalRequirements: formData.additionalRequirements || 'No additional requirements provided.',
      urgentOrder: formData.urgentOrder ? 'Yes' : 'No',
      installationRequired: formData.installationRequired ? 'Yes' : 'No',
    };

    emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  templateParams,
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setSubmitStatus('success');
      // Reset form on success
      setFormData({
        companyName: '', contactPerson: '', email: '', phone: '',
        serviceCategory: '', projectType: '', quantity: '', budget: '',
        timeline: '', deliveryLocation: '', additionalRequirements: '',
        urgentOrder: false, installationRequired: false
      });
    })
    .catch((err) => {
      console.error('FAILED...', err);
      setSubmitStatus('error');
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-accent-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
            Request Corporate Quote
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Get a detailed quote tailored to your corporate or political campaign requirements
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Form Header */}
          <div className="bg-gradient-to-r from-primary to-primary-700 p-8 text-white">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <Icon name="FileText" size={24} color="white" />
              </div>
              <div>
                <h3 className="text-2xl font-heading font-bold">Corporate Quote Request</h3>
                <p className="text-primary-100">Fill out the details below for a customized quote</p>
              </div>
            </div>
          </div>

          {/* Form Content */}
          <form onSubmit={handleSubmit} className="p-8 space-y-8">
            {/* Company Information */}
            <div>
              <h4 className="text-xl font-semibold text-text-primary mb-6 flex items-center">
                <Icon name="Building2" size={20} className="mr-3 text-primary" />
                Company Information
              </h4>
              <div className="grid lg:grid-cols-2 gap-6">
                <Input
                  type="text"
                  name="companyName"
                  placeholder="Company/Organization Name"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                />
                <Input
                  type="text"
                  name="contactPerson"
                  placeholder="Contact Person Name"
                  value={formData.contactPerson}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Business Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                />
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number (+254...)"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                />
              </div>
            </div>

            {/* Project Details */}
            <div>
              <h4 className="text-xl font-semibold text-text-primary mb-6 flex items-center">
                <Icon name="Briefcase" size={20} className="mr-3 text-secondary" />
                Project Details
              </h4>
              <div className="grid lg:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">
                    Service Category *
                  </label>
                  <select
                    name="serviceCategory"
                    value={formData.serviceCategory}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-surface-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select Service Category</option>
                    {serviceCategories.map(category => (
                      <option key={category.value} value={category.value}>
                        {category.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">
                    Project Type *
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-surface-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select Project Type</option>
                    {projectTypes.map(type => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>
                <Input
                  type="text"
                  name="quantity"
                  placeholder="Estimated Quantity (e.g., 1000 posters, 50 banners)"
                  value={formData.quantity}
                  onChange={handleInputChange}
                  className="w-full"
                />
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">
                    Budget Range
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-surface-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select Budget Range</option>
                    {budgetRanges.map(range => (
                      <option key={range.value} value={range.value}>
                        {range.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Timeline & Delivery */}
            <div>
              <h4 className="text-xl font-semibold text-text-primary mb-6 flex items-center">
                <Icon name="Clock" size={20} className="mr-3 text-accent" />
                Timeline & Delivery
              </h4>
              <div className="grid lg:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">
                    Required Timeline *
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-surface-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select Timeline</option>
                    {timelineOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                <Input
                  type="text"
                  name="deliveryLocation"
                  placeholder="Delivery Location (City/County)"
                  value={formData.deliveryLocation}
                  onChange={handleInputChange}
                  className="w-full"
                />
              </div>
            </div>

            {/* Additional Requirements */}
            <div>
              <h4 className="text-xl font-semibold text-text-primary mb-6 flex items-center">
                <Icon name="Settings" size={20} className="mr-3 text-warning" />
                Additional Requirements
              </h4>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">
                    Special Requirements or Notes
                  </label>
                  <textarea
                    name="additionalRequirements"
                    value={formData.additionalRequirements}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Please describe any specific requirements, design preferences, material specifications, or other details..."
                    className="w-full px-4 py-3 border border-surface-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  />
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="urgentOrder"
                      checked={formData.urgentOrder}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-primary border-surface-300 rounded focus:ring-primary"
                    />
                    <span className="text-sm text-text-secondary">
                      This is an urgent order (rush charges may apply)
                    </span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="installationRequired"
                      checked={formData.installationRequired}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-primary border-surface-300 rounded focus:ring-primary"
                    />
                    <span className="text-sm text-text-secondary">
                      Installation services required
                    </span>
                  </label>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6 border-t border-surface-200">
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-success-50 border border-success-200 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Icon name="CheckCircle" size={20} className="text-success" />
                    <div>
                      <h5 className="font-semibold text-success">Quote Request Submitted!</h5>
                      <p className="text-sm text-success-700">
                        We've received your request and will send a detailed quote within 24 hours.
                      </p>
                    </div>
                  </div>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-error-50 border border-error-200 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Icon name="AlertCircle" size={20} className="text-error" />
                    <div>
                      <h5 className="font-semibold text-error">Submission Failed</h5>
                      <p className="text-sm text-error-700">
                        There was an issue sending your request. Please try again or contact us directly.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  loading={isSubmitting}
                  iconName="Send"
                  iconPosition="right"
                  className="flex-1"
                >
                  {isSubmitting ? 'Submitting Request...' : 'Submit Quote Request'}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  iconName="Phone"
                  iconPosition="left"
                  onClick={() => window.open('tel:+254791159618')}
                >
                  Call Now
                </Button>
              </div>
              
              <p className="text-sm text-text-secondary text-center mt-4">
                By submitting this form, you agree to our terms of service and privacy policy. 
                We'll contact you within 24 hours with a detailed quote.
              </p>
            </div>
          </form>
        </div>

        {/* Contact Information */}
        <div className="mt-12 grid lg:grid-cols-3 gap-8">
          {[
            {
              icon: 'Phone',
              title: 'Call Us',
              content: '+254 791 159 618',
              action: 'tel:+254791159618'
            },
            {
              icon: 'Mail',
              title: 'Email Us',
              content: 'info.lunagraphics@gmail.com',
              action: 'mailto:info.lunagraphics@gmail.com'
            },
            {
              icon: 'MessageCircle',
              title: 'WhatsApp',
              content: 'Quick Response',
              action: 'https://wa.me/254791159618'
            }
          ].map((contact, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name={contact.icon} size={24} color="var(--color-primary)" />
              </div>
              <h4 className="font-semibold text-text-primary mb-2">{contact.title}</h4>
              <p className="text-text-secondary mb-4">{contact.content}</p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open(contact.action)}
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                Contact Now
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CorporateQuoteForm;
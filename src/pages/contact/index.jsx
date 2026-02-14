import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import ContactForm from './components/ContactForm';
import ContactInfo from './components/ContactInfo';
import LocationMap from './components/LocationMap';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
  const handleEmergencyContact = () => {
    const message = 'URGENT: I need immediate assistance with my printing project.';
    window.open(`https://wa.me/254791159618?text=${encodeURIComponent(message)}`, '_blank');
  };

  const quickContactMethods = [
    {
      icon: 'Phone',
      title: 'Call Us',
      subtitle: '+254 791 159 618',
      description: 'Speak directly with our team',
      action: () => window.open('tel:+254791159618', '_self'),
      color: 'bg-success-100 text-success'
    },
    {
      icon: 'MessageCircle',
      title: 'WhatsApp',
      subtitle: 'Instant Response',
      description: 'Quick quotes and support',
      action: () => {
        const message = 'Hello! I would like to inquire about your printing services.';
        window.open(`https://wa.me/254791159618?text=${encodeURIComponent(message)}`, '_blank');
      },
      color: 'bg-accent-100 text-accent'
    },
    {
      icon: 'Mail',
      title: 'Email',
      subtitle: 'info.lunagraphics@gmail.com',
      description: 'Detailed project discussions',
      action: () => window.open('mailto:info.lunagraphics@gmail.com', '_self'),
      color: 'bg-primary-100 text-primary'
    },
    {
      icon: 'MapPin',
      title: 'Visit Us',
      subtitle: 'Kweria Road, CBD',
      description: 'See our work in person',
      action: () => window.open('https://maps.google.com/?q=-1.280259582752351,36.8226641036011', '_blank'),
      color: 'bg-secondary-100 text-secondary'
    }
  ];

  return (
    <div className="min-h-screen bg-surface-50">
      <Helmet>
        <title>Contact Us - Luna Graphics | Professional Printing Services in Nairobi</title>
        <meta name="description" content="Get in touch with Luna Graphics for professional printing services in Nairobi. Call +254 700 000 000, WhatsApp, or visit our CBD location for quotes and consultations." />
        <meta name="keywords" content="contact luna graphics, printing services nairobi, print shop contact, nairobi printing company, professional printing quotes" />
        <meta property="og:title" content="Contact Luna Graphics - Professional Printing Services" />
        <meta property="og:description" content="Contact Luna Graphics for all your printing needs. Located in Nairobi CBD with multiple contact options including phone, WhatsApp, and email." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://lunagraphics.co.ke/contact-page" />
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-primary to-accent text-white relative overflow-hidden">
        <div className="absolute inset-0 kenyan-pattern opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Get In Touch
            </h1>
            <p className="text-xl text-primary-100 mb-6">
              Ready to bring your ideas to life? Contact our expert team for professional printing solutions tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                iconName="Phone"
                iconPosition="left"
                onClick={() => window.open('tel:+254791159618', '_self')}
              >
                Call Now
              </Button>
              <Button
                variant="accent"
                size="lg"
                iconName="MessageCircle"
                iconPosition="left"
                onClick={() => {
                  const message = 'Hello! I would like to get a quote for my printing project.';
                  window.open(`https://wa.me/254791159618?text=${encodeURIComponent(message)}`, '_blank');
                }}
                className="border-white text-white"
              >
                WhatsApp Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Methods */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-heading font-semibold text-text-primary mb-3">
              Multiple Ways to Reach Us
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Choose your preferred method of communication. We're here to help with all your printing needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {quickContactMethods.map((method, index) => (
              <button
                key={index}
                onClick={method.action}
                className="p-6 bg-background rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-left group"
              >
                <div className={`w-12 h-12 ${method.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                  <Icon name={method.icon} size={24} />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-1">
                  {method.title}
                </h3>
                <p className="text-text-primary font-medium text-sm mb-1">
                  {method.subtitle}
                </p>
                <p className="text-text-muted text-xs">
                  {method.description}
                </p>
              </button>
            ))}
          </div>

          {/* Emergency Contact Banner */}
          <div className="bg-gradient-to-r from-error to-warning rounded-lg p-6 text-white text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Icon name="AlertCircle" size={24} />
              <h3 className="text-xl font-heading font-semibold">
                Need Urgent Printing?
              </h3>
            </div>
            <p className="text-error-50 mb-4">
              For same-day or emergency printing services, contact us immediately via phone or WhatsApp.
            </p>
            <Button
              variant="secondary"
              size="lg"
              iconName="Zap"
              iconPosition="left"
              onClick={handleEmergencyContact}
            >
              Emergency Contact
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-surface-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-1">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>

      {/* Location Map */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-heading font-semibold text-text-primary mb-3">
              Visit Our Studio
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Located in the heart of Nairobi CBD, our modern printing facility is easily accessible by public transport and car.
            </p>
          </div>
          
          <LocationMap />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-surface-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-heading font-semibold text-text-primary mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-text-secondary">
              Quick answers to common questions about our services and processes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: "What's your typical turnaround time?",
                answer: "Standard orders: 3-5 business days. Rush orders: 24-48 hours. Same-day service available for urgent projects."
              },
              {
                question: "Do you offer delivery services?",
                answer: "Yes! Free delivery within Nairobi CBD for orders over KES 10,000. Delivery charges apply for other areas."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept cash, M-Pesa, bank transfers, and major credit cards (Visa/Mastercard)."
              },
              {
                question: "Can I see samples before placing an order?",
                answer: "Absolutely! Visit our showroom to see material samples and previous work examples."
              },
              {
                question: "Do you provide design services?",
                answer: "No, our in-house design team only tweaks already made designs in terms of resizing, etc for printing."
              },
              {
                question: "What file formats do you accept?",
                answer: "We accept PDF, AI, EPS, PSD, JPG, PNG, and most common design file formats."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-background rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {faq.question}
                </h3>
                <p className="text-text-secondary text-sm">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-12 bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-primary-100 mb-6">
            Join hundreds of satisfied customers who trust Halo Creatives for their printing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              size="lg"
              iconName="FileText"
              iconPosition="left"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Get Quote Now
            </Button>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
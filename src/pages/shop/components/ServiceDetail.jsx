// src/pages/shop/components/ServiceDetail.jsx
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, CheckCircle, MessageCircle, Phone } from 'lucide-react';
import { services, getWhatsAppLink } from '../../../data/services.js';
import Header from 'components/ui/Header.jsx';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  
  const service = services.find(s => s.id === serviceId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Not Found</h2>
          <button
            onClick={() => navigate('/shop')}
            className="text-green-600 hover:text-green-700 font-medium"
          >
            Return to Shop
          </button>
        </div>
      </div>
    );
  }

  const whatsappLink = getWhatsAppLink(service.name);

  return (
    <div className="min-h-screen bg-white pt-18">
        <Header />
      {/* Header */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </button>
          <h1 className="text-4xl font-bold text-gray-900">{service.name}</h1>
          <p className="mt-2 text-xl text-gray-600">{service.shortDescription}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">About This Service</h2>
              <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                {service.fullDescription}
              </p>
            </section>

            {/* Features */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Key Features</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Applications */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Common Applications</h2>
              <div className="flex flex-wrap gap-3">
                {service.applications.map((app, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium"
                  >
                    {app}
                  </span>
                ))}
              </div>
            </section>

            {/* Materials */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Materials We Work With</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {service.materials.map((material, index) => (
                  <div
                    key={index}
                    className="px-4 py-3 bg-gray-50 rounded-lg text-gray-700 text-center text-sm"
                  >
                    {material}
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* CTA Card */}
              <div className="bg-green-600 rounded-xl p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">Ready to get started?</h3>
                <p className="text-green-100 mb-6 text-sm">
                  Get a personalized quote for your {service.name.toLowerCase()} project. We typically respond within 2 hours during business hours.
                </p>
                
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-white text-green-600 font-semibold py-3 px-6 rounded-lg hover:bg-green-50 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Chat on WhatsApp</span>
                </a>
                
                <div className="mt-4 flex items-center justify-center gap-2 text-sm text-green-100">
                  <Phone className="w-4 h-4" />
                  <span>+254 791 159 618</span>
                </div>
              </div>

              {/* Quick Info */}
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-500">Typical Turnaround</p>
                    <p className="font-semibold text-gray-900">{service.turnaround}</p>
                  </div>
                </div>
                
                <div className="border-t pt-4">
                  <p className="text-sm text-gray-500 mb-2">Have questions?</p>
                  <p className="text-sm text-gray-700">
                    Our team is available Monday-Saturday, 8am-6pm to discuss your project requirements.
                  </p>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="bg-white border rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-4">Why Choose Us</h4>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Premium quality guaranteed</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Fast turnaround times</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Competitive pricing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Expert design assistance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Delivery available</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
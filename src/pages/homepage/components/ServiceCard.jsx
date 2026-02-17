import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ServiceCard = ({ service }) => {
  const navigate = useNavigate();

  // --- MODIFIED FUNCTION ---
  // This function now reads the destination path from the 'service' prop.
  const handleLearnMore = () => {
    // We check if service.path exists to avoid errors
    if (service.path) {
      navigate(`/services${service.path}`);
    } else {
      // Log an error if the path is missing in the data, which helps debugging.
      console.error(`Error: No path defined for service "${service.name}".`);
    }
  };

  const handleQuickInquiry = () => {
    const phoneNumber = '254791159618'; // Using the number without '+' is safer for the wa.me link
    const message = `Hello! I would like to inquire about ${service.name} services. Please provide more details and pricing.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="group bg-background rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-border hover:border-primary/20">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={service.image}
          alt={service.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        
        {/* Price Badge */}
        <div className="absolute top-4 right-4 bg-secondary text-white px-3 py-1 rounded-full text-sm font-semibold">
          From KES {service.startingPrice.toLocaleString()}
        </div>
        
        {/* Popular Badge */}
        {service.isPopular && (
          <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-full text-xs font-semibold">
            Most Popular
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
              <Icon name={service.icon} size={20} color="var(--color-primary)" />
            </div>
            <div>
              <h3 className="text-lg font-heading font-semibold text-text-primary group-hover:text-primary transition-colors">
                {service.name}
              </h3>
              <div className="flex items-center space-x-2 text-sm text-text-secondary">
                <Icon name="Clock" size={14} />
                <span>{service.turnaround}</span>
              </div>
            </div>
          </div>
        </div>

        <p className="text-text-secondary text-sm leading-relaxed">
          {service.description}
        </p>

        {/* Features */}
        <div className="space-y-2">
          {service.features.slice(0, 3).map((feature, index) => (
            <div key={index} className="flex items-center space-x-2">
              <Icon name="Check" size={14} color="var(--color-success)" />
              <span className="text-sm text-text-secondary">{feature}</span>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border">
          <Button
            variant="primary"
            size="sm"
            iconName="ArrowRight"
            iconPosition="right"
            onClick={handleLearnMore} // This onClick now calls the updated function
            className="flex-1"
          >
            Learn More
          </Button>
          <Button
            variant="outline"
            size="sm"
            iconName="MessageCircle"
            iconPosition="left"
            onClick={handleQuickInquiry}
            className="flex-1 text-accent border-accent hover:bg-accent hover:text-white"
          >
            Quick Inquiry
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
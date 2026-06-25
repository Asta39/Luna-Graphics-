import React from 'react';
import { useNavigate } from 'react-router-dom'; // 1. Import useNavigate for navigation
import Image from '../AppImage';
import Icon from '../AppIcon';
import Button from '../ui/Button';

// 2. The onServiceClick prop is removed, as the component handles its own navigation
const RelatedServices = ({ relatedServices }) => {
  const navigate = useNavigate(); // 3. Initialize the navigate function

  // 4. Create an internal handler to navigate to the correct path
  const handleNavigation = (path) => {
    // Check if a path is provided to avoid errors
    if (path) {
      navigate(path);
      window.scrollTo(0, 0); // A good practice to scroll to the top of the new page
    } else {
      console.error("Navigation error: No path provided for this service.");
    }
  };

  return (
    <div className="bg-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-4">
            Related Services
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Complement your project with our comprehensive range of fabrication and printing services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* We map over the services data to create a detailed card for each one */}
          {Array.isArray(relatedServices) && relatedServices.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col"
            >
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {service.category}
                  </div>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-heading font-bold text-primary mb-2">
                  {service.title}
                </h3>
                <p className="text-text-secondary text-sm mb-4 leading-relaxed flex-grow">
                  {service.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-sm text-text-muted">
                    <div className="flex items-center space-x-1">
                      <Icon name="Clock" size={14} />
                      <span>{service.turnaround}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="DollarSign" size={14} />
                      <span>From KES {service.startingPrice.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.slice(0, 3).map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="bg-surface-100 text-text-secondary px-2 py-1 rounded text-xs"
                    >
                      {feature}
                    </span>
                  ))}
                  {service.features.length > 3 && (
                    <span className="bg-surface-100 text-text-secondary px-2 py-1 rounded text-xs">
                      +{service.features.length - 3} more
                    </span>
                  )}
                </div>
                
                <Button
                  variant="outline"
                  size="sm"
                  // 5. Use the internal handler, passing the service's unique path
                  onClick={() => handleNavigation(service.path)}
                  iconName="ArrowRight"
                  iconPosition="right"
                  fullWidth
                  className="border-primary text-primary hover:bg-primary hover:text-white mt-auto"
                >
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        {/* This "View All Services" section can be kept if desired */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-primary to-accent rounded-lg p-8 text-white">
            <h3 className="text-2xl font-heading font-bold mb-4">
              Need Multiple Services?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Bundle your printing needs and save up to 20% on your total order.
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedServices;
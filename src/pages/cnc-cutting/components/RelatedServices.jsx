import React from 'react';
import { useNavigate } from 'react-router-dom'; // 1. Import useNavigate
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon'; // It's good practice to import Icon if used indirectly

const RelatedServices = ({ relatedServices }) => {
  const navigate = useNavigate(); // 2. Initialize the navigate function

  // 3. Create an internal handler for navigation
  const handleNavigation = (path) => {
    // Check if a path is provided to avoid errors
    if (path) {
      navigate(path);
      window.scrollTo(0, 0); // Scroll to top on new page load
    } else {
      console.error("Navigation error: No path was provided for this service.");
    }
  };

  return (
    <div className="bg-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold text-primary mb-4">
            Related Services
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Complement your project with our comprehensive range of fabrication and printing services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Array.isArray(relatedServices) && relatedServices.map((service, index) => (
            <div
              key={service.path || index} // Use a more stable key like path if available
              className="bg-white rounded-xl shadow-sm border border-border overflow-hidden hover:shadow-md transition-shadow duration-300 cursor-pointer"
              // 4. Update the main div's onClick to use the new handler
              onClick={() => handleNavigation(service.path)}
            >
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                    {service.category}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold text-text-primary mb-2">
                  {service.title}
                </h3>
                <p className="text-text-secondary mb-4">
                  {service.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-sm text-text-secondary">Starting from</span>
                    <div className="text-lg font-bold text-primary">
                      KES {service.startingPrice.toLocaleString()}
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-text-secondary">Turnaround</span>
                    <div className="text-sm font-semibold text-text-primary">
                      {service.turnaround}
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="bg-primary-50 text-primary px-2 py-1 rounded-full text-xs font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={(e) => {
                    // Stop propagation is still important here to prevent the div's onClick from firing too
                    e.stopPropagation(); 
                    // 5. Update the button's onClick to use the new handler as well
                    handleNavigation(service.path);
                  }}
                  className="w-full"
                >
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedServices;
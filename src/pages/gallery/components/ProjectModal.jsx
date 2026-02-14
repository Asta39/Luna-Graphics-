import React, { useEffect, useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProjectModal = ({ 
  project, 
  isOpen, 
  onClose, 
  onNext, 
  onPrevious, 
  currentIndex, 
  totalProjects,
  onRequestQuote 
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setImageLoaded(false);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          onPrevious();
          break;
        case 'ArrowRight':
          onNext();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNext, onPrevious]);

  if (!isOpen || !project) return null;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  const getServiceIcon = (serviceType) => {
    const iconMap = {
      'large-format': 'Maximize2',
      'uv-printing': 'Printer',
      'cnc-cutting': 'Scissors',
      'laser-cutting': 'Zap',
      't-shirt': 'Shirt',
      'plotting': 'PenTool'
    };
    return iconMap[serviceType] || 'Image';
  };

  const specifications = [
    { label: 'Service Type', value: project.serviceType.replace('-', ' '), icon: 'Settings' },
    { label: 'Material', value: project.material, icon: 'Package' },
    { label: 'Industry', value: project.industry, icon: 'Building2' },
    { label: 'Project Scale', value: project.scale, icon: 'BarChart3' },
    { label: 'Turnaround Time', value: project.turnaroundTime, icon: 'Clock' },
    { label: 'Completed Date', value: formatDate(project.completedDate), icon: 'Calendar' }
  ];

  return (
    <div className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-background rounded-lg max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border bg-surface-50">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
              <Icon name={getServiceIcon(project.serviceType)} size={16} color="var(--color-primary)" />
            </div>
            <div>
              <h2 className="text-lg font-heading font-semibold text-text-primary">
                {project.title}
              </h2>
              <p className="text-sm text-text-secondary">
                Project {currentIndex + 1} of {totalProjects}
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            {/* Navigation Buttons */}
            <button
              onClick={onPrevious}
              disabled={currentIndex === 0}
              className="p-2 rounded-md hover:bg-surface-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            >
              <Icon name="ChevronLeft" size={20} color="var(--color-text-secondary)" />
            </button>
            
            <button
              onClick={onNext}
              disabled={currentIndex === totalProjects - 1}
              className="p-2 rounded-md hover:bg-surface-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            >
              <Icon name="ChevronRight" size={20} color="var(--color-text-secondary)" />
            </button>
            
            <div className="w-px h-6 bg-border mx-2" />
            
            <button
              onClick={onClose}
              className="p-2 rounded-md hover:bg-surface-100 transition-colors duration-200"
            >
              <Icon name="X" size={20} color="var(--color-text-secondary)" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row max-h-[calc(90vh-80px)]">
          {/* Image Section */}
          <div className="lg:w-2/3 relative bg-surface-100 flex items-center justify-center">
            <div className="relative w-full h-full min-h-[300px] lg:min-h-[500px]">
              {!imageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="animate-spin">
                    <Icon name="Loader2" size={32} color="var(--color-text-secondary)" />
                  </div>
                </div>
              )}
              
              <Image
                src={project.image}
                alt={project.title}
                className={`w-full h-full object-contain transition-opacity duration-300 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => setImageLoaded(true)}
              />
            </div>
          </div>

          {/* Details Section */}
          <div className="lg:w-1/3 p-6 overflow-y-auto">
            <div className="space-y-6">
              {/* Description */}
              <div>
                <h3 className="text-base font-heading font-semibold text-text-primary mb-2">
                  Project Description
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Specifications */}
              <div>
                <h3 className="text-base font-heading font-semibold text-text-primary mb-3">
                  Project Specifications
                </h3>
                <div className="space-y-3">
                  {specifications.map((spec, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-surface-100 rounded-md flex items-center justify-center flex-shrink-0">
                        <Icon name={spec.icon} size={14} color="var(--color-text-secondary)" />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs text-text-secondary">{spec.label}</div>
                        <div className="text-sm font-medium text-text-primary capitalize">
                          {spec.value}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Client Information */}
              {project.client && (
                <div>
                  <h3 className="text-base font-heading font-semibold text-text-primary mb-2">
                    Client
                  </h3>
                  <div className="flex items-center space-x-3 p-3 bg-surface-50 rounded-md">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                      <Icon name="Building2" size={16} color="var(--color-primary)" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-text-primary">
                        {project.client}
                      </div>
                      <div className="text-xs text-text-secondary capitalize">
                        {project.industry} Industry
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Testimonial */}
              {project.testimonial && (
                <div>
                  <h3 className="text-base font-heading font-semibold text-text-primary mb-2">
                    Client Feedback
                  </h3>
                  <div className="bg-surface-50 rounded-md p-4">
                    <div className="flex items-start space-x-2 mb-2">
                      <Icon name="Quote" size={16} color="var(--color-primary)" />
                      <p className="text-sm text-text-secondary italic leading-relaxed">
                        {project.testimonial.content}
                      </p>
                    </div>
                    <div className="text-xs text-text-secondary text-right">
                      — {project.testimonial.author}
                    </div>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="space-y-3 pt-4 border-t border-border">
                <Button
                  variant="primary"
                  size="md"
                  iconName="MessageSquare"
                  iconPosition="left"
                  onClick={() => onRequestQuote(project)}
                  fullWidth
                >
                  Request Similar Quote
                </Button>
                
                <Button
                  variant="outline"
                  size="md"
                  iconName="MessageCircle"
                  iconPosition="left"
                  onClick={() => {
                    const message = `Hi! I'm interested in a project similar to "${project.title}". Can you provide more details?`;
                    const whatsappUrl = `https://wa.me/+254700000000?text=${encodeURIComponent(message)}`;
                    window.open(whatsappUrl, '_blank');
                  }}
                  fullWidth
                >
                  WhatsApp Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
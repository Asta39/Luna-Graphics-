import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const ProjectCard = ({ project, onClick, index }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
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

  const getIndustryColor = (industry) => {
    const colorMap = {
      'corporate': 'bg-blue-100 text-blue-800',
      'events': 'bg-purple-100 text-purple-800',
      'retail': 'bg-green-100 text-green-800',
      'education': 'bg-yellow-100 text-yellow-800',
      'healthcare': 'bg-red-100 text-red-800',
      'hospitality': 'bg-indigo-100 text-indigo-800'
    };
    return colorMap[industry] || 'bg-surface-200 text-text-secondary';
  };

  return (
    <div 
      className="group cursor-pointer bg-background rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
      onClick={() => onClick(project, index)}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-surface-100">
        <Image
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
            <div className="bg-white rounded-full p-3 shadow-lg">
              <Icon name="Eye" size={24} color="var(--color-primary)" />
            </div>
          </div>
        </div>

        {/* Service Type Badge */}
        <div className="absolute top-3 left-3">
          <div className="flex items-center space-x-1 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
            <Icon name={getServiceIcon(project.serviceType)} size={14} color="var(--color-primary)" />
            <span className="text-xs font-medium text-primary capitalize">
              {project.serviceType.replace('-', ' ')}
            </span>
          </div>
        </div>

        {/* Industry Badge */}
        <div className="absolute top-3 right-3">
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${getIndustryColor(project.industry)}`}>
            {project.industry}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-base font-heading font-semibold text-text-primary line-clamp-2 group-hover:text-primary transition-colors duration-200">
            {project.title}
          </h3>
        </div>

        <p className="text-sm text-text-secondary line-clamp-2 mb-3">
          {project.description}
        </p>

        {/* Project Details */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs text-text-secondary">
            <div className="flex items-center space-x-1">
              <Icon name="Calendar" size={12} />
              <span>{formatDate(project.completedDate)}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="Clock" size={12} />
              <span>{project.turnaroundTime}</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center space-x-1 text-text-secondary">
              <Icon name="Package" size={12} />
              <span className="capitalize">{project.material}</span>
            </div>
            <div className="flex items-center space-x-1 text-text-secondary">
              <Icon name="BarChart3" size={12} />
              <span className="capitalize">{project.scale}</span>
            </div>
          </div>
        </div>

        {/* Client Info */}
        {project.client && (
          <div className="mt-3 pt-3 border-t border-border">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center">
                <Icon name="Building2" size={12} color="var(--color-primary)" />
              </div>
              <span className="text-xs font-medium text-text-primary">{project.client}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
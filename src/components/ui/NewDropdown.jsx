import React from 'react';
import Icon from '../AppIcon';

const NavDropdown = ({ 
  items, 
  isOpen, 
  onClose, 
  onItemClick, 
  trackEvent 
}) => {
  if (!isOpen) return null;

  const handleItemClick = (item) => {
    // Track analytics if tracking function provided
    if (trackEvent) {
      trackEvent('dropdown_click', {
        category: 'Navigation',
        label: item.label
      });
    }

    // Handle download vs navigation
    if (item.isDownload) {
      // Track download
      if (trackEvent) {
        trackEvent('download', {
          category: 'Resources',
          label: 'Company Profile PDF'
        });
      }
      
      // Open in new tab
      window.open(item.path, '_blank');
      onClose();
    } else {
      onItemClick(item.path);
    }
  };

  return (
    <div className="absolute top-full left-0 mt-2 w-80 bg-background rounded-2xl shadow-xl border border-border z-50 animate-slide-down overflow-hidden">
      <div className="p-2">
        {items.map((item, index) => (
          <button
            key={item.label}
            className={`flex items-start space-x-3 w-full p-3 rounded-xl transition-all duration-200 text-left group ${
              item.isDownload 
                ? 'hover:bg-green-50' 
                : 'hover:bg-surface-100'
            } ${index !== items.length - 1 ? 'mb-1' : ''}`}
            onClick={() => handleItemClick(item)}
          >
            {/* Icon Container */}
            <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
              item.isDownload 
                ? 'bg-green-100 group-hover:bg-green-200' 
                : 'bg-primary-100 group-hover:bg-primary-200'
            }`}>
              <Icon 
                name={item.icon} 
                size={18} 
                color={item.isDownload ? 'var(--color-green-600)' : 'var(--color-primary)'} 
              />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <span className={`text-sm font-semibold ${
                  item.isDownload 
                    ? 'text-green-700 group-hover:text-green-800' 
                    : 'text-text-primary group-hover:text-primary'
                }`}>
                  {item.label}
                </span>
                
                {/* Download Badge */}
                {item.isDownload && (
                  <span className="flex items-center text-xs text-green-600 bg-green-100 px-2 py-0.5 rounded-full">
                    <Icon name="Download" size={12} className="mr-1" />
                    PDF
                  </span>
                )}
              </div>
              
              {/* Description */}
              {item.description && (
                <p className="text-xs text-text-secondary mt-1 line-clamp-2">
                  {item.description}
                </p>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default NavDropdown;
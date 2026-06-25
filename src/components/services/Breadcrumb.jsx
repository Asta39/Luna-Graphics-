import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../AppIcon';

const Breadcrumb = ({ items }) => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    if (path) {
      navigate(path);
    }
  };

  return (
    <div className="bg-surface-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center space-x-2 text-sm">
          {items.map((item, index) => (
            <React.Fragment key={index}>
              {index > 0 && (
                <Icon name="ChevronRight" size={14} color="var(--color-text-muted)" />
              )}
              {item.path ? (
                <button
                  onClick={() => handleNavigation(item.path)}
                  className="text-text-secondary hover:text-primary transition-colors duration-200 font-medium"
                >
                  {item.label}
                </button>
              ) : (
                <span className="text-text-primary font-semibold">
                  {item.label}
                </span>
              )}
            </React.Fragment>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Breadcrumb;
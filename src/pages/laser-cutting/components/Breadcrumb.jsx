import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const Breadcrumb = ({ items }) => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    if (path) {
      navigate(path);
    }
  };

  return (
    <div className="bg-surface-50 py-4 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-4">
            {items.map((item, index) => (
              <li key={index}>
                <div className="flex items-center">
                  {index > 0 && (
                    <Icon name="ChevronRight" size={16} color="var(--color-text-secondary)" className="mr-4" />
                  )}
                  {item.path ? (
                    <button
                      onClick={() => handleNavigate(item.path)}
                      className="text-text-secondary hover:text-primary transition-colors duration-200 text-sm font-medium"
                    >
                      {item.label}
                    </button>
                  ) : (
                    <span className="text-text-primary text-sm font-medium" aria-current="page">
                      {item.label}
                    </span>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default Breadcrumb;
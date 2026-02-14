import React from 'react';
import Icon from '../../../components/AppIcon';

const FilterChips = ({ 
  filters, 
  activeFilters, 
  onFilterToggle, 
  onClearAll,
  isMobile 
}) => {
  const filterCategories = [
    {
      id: 'service',
      label: 'Service Type',
      options: [
        { value: 'large-format', label: 'Large Format' },
        { value: 'uv-printing', label: 'UV Printing' },
        { value: 'cnc-cutting', label: 'CNC Cutting' },
        { value: 'laser-cutting', label: 'Laser Cutting' },
        { value: 't-shirt', label: 'T-shirt Printing' },
        { value: 'plotting', label: 'Plotting' }
      ]
    },
    
    
    
  ];

  const activeFilterCount = activeFilters.length;

  return (
      <div className={`bg-background border-b border-border ${!isMobile ? 'sticky top-16 z-50' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Filter Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <Icon name="Filter" size={20} color="var(--color-primary)" />
            <h3 className="text-lg font-heading font-semibold text-text-primary">
              Filter Projects
            </h3>
            {activeFilterCount > 0 && (
              <span className="bg-primary text-primary-foreground text-xs font-semibold px-2 py-1 rounded-full">
                {activeFilterCount}
              </span>
            )}
          </div>
          {activeFilterCount > 0 && (
            <button
              onClick={onClearAll}
              className="flex items-center space-x-1 text-sm text-text-secondary hover:text-error transition-colors duration-200"
            >
              <Icon name="X" size={16} />
              <span>Clear All</span>
            </button>
          )}
        </div>

        {/* Filter Categories */}
        <div className={`space-y-4 ${isMobile ? 'block' : 'grid grid-cols-2 lg:grid-cols-4 gap-6'}`}>
          {filterCategories.map((category) => (
            <div key={category.id} className="space-y-2">
              <h4 className="text-sm font-semibold text-text-primary">
                {category.label}
              </h4>
              <div className={`flex flex-wrap gap-2 ${isMobile ? 'overflow-x-auto pb-2' : ''}`}>
                {category.options.map((option) => {
                  const isActive = activeFilters.some(
                    filter => filter.category === category.id && filter.value === option.value
                  );
                  
                  return (
                    <button
                      key={option.value}
                      onClick={() => onFilterToggle(category.id, option.value, option.label)}
                      className={`flex-shrink-0 px-3 py-1.5 text-xs font-medium rounded-full border transition-all duration-200 ${
                        isActive
                          ? 'bg-primary text-primary-foreground border-primary shadow-sm'
                          : 'bg-surface-50 text-text-secondary border-border hover:bg-surface-100 hover:text-text-primary'
                      }`}
                    >
                      {option.label}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Active Filters Display */}
        {activeFilterCount > 0 && (
          <div className="mt-4 pt-4 border-t border-border">
            <div className="flex items-center space-x-2 mb-2">
              <Icon name="Tag" size={16} color="var(--color-text-secondary)" />
              <span className="text-sm font-medium text-text-secondary">Active Filters:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {activeFilters.map((filter, index) => (
                <div
                  key={`${filter.category}-${filter.value}-${index}`}
                  className="flex items-center space-x-1 bg-primary-100 text-primary px-2 py-1 rounded-md text-xs"
                >
                  <span>{filter.label}</span>
                  <button
                    onClick={() => onFilterToggle(filter.category, filter.value, filter.label)}
                    className="hover:bg-primary-200 rounded-full p-0.5 transition-colors duration-200"
                  >
                    <Icon name="X" size={12} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterChips;
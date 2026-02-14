import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';

const SearchBar = ({ onSearch, searchTerm, totalResults }) => {
  const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    setLocalSearchTerm(searchTerm);
  }, [searchTerm]);

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      if (localSearchTerm !== searchTerm) {
        setIsSearching(true);
        onSearch(localSearchTerm);
        setTimeout(() => setIsSearching(false), 300);
      }
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [localSearchTerm, searchTerm, onSearch]);

  const handleClear = () => {
    setLocalSearchTerm('');
    onSearch('');
  };

  return (
    <div className="bg-surface-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              {isSearching ? (
                <div className="animate-spin">
                  <Icon name="Loader2" size={20} color="var(--color-text-secondary)" />
                </div>
              ) : (
                <Icon name="Search" size={20} color="var(--color-text-secondary)" />
              )}
            </div>
            
            <Input
              type="search"
              placeholder="Search projects by name, description, or client..."
              value={localSearchTerm}
              onChange={(e) => setLocalSearchTerm(e.target.value)}
              className="pl-10 pr-12 py-3 text-base border-border focus:border-primary focus:ring-1 focus:ring-primary"
            />
            
            {localSearchTerm && (
              <button
                onClick={handleClear}
                className="absolute inset-y-0 right-0 pr-3 flex items-center hover:bg-surface-100 rounded-r-md transition-colors duration-200"
              >
                <Icon name="X" size={20} color="var(--color-text-secondary)" />
              </button>
            )}
          </div>
          
          {/* Search Results Info */}
          {(searchTerm || totalResults !== undefined) && (
            <div className="mt-3 text-center">
              <p className="text-sm text-text-secondary">
                {searchTerm ? (
                  <>
                    Found <span className="font-semibold text-text-primary">{totalResults}</span> projects
                    {searchTerm && (
                      <>
                        {' '}matching "<span className="font-semibold text-primary">{searchTerm}</span>"
                      </>
                    )}
                  </>
                ) : (
                  <>
                    Showing <span className="font-semibold text-text-primary">{totalResults}</span> projects
                  </>
                )}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
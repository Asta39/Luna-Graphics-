import React, { useState, useRef } from 'react';
import Icon from '../AppIcon';
import NavDropdown from './NavDropdown';
import useClickOutside from '../../hooks/useClickOutside';

const ResourcesMenu = ({ onNavigate, trackEvent }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  // Close when clicking outside
  useClickOutside([dropdownRef, buttonRef], () => setIsOpen(false));

  const resourcesItems = [
    {
      label: 'Case Studies',
      path: '/case-studies',
      icon: 'Briefcase',
      description: 'See our successful projects and client stories'
    },
    {
      label: 'Blog & Articles',
      path: '/blog',
      icon: 'BookOpen',
      description: 'Printing tips, industry insights, and guides'
    },
    {
      label: 'Company Profile',
      path: '/company-profile.pdf',
      icon: 'FileText',
      description: 'Download our complete company profile (PDF)',
      isDownload: true
    },
    {
      label: 'FAQ',
      path: '/faq',
      icon: 'HelpCircle',
      description: 'Common questions answered'
    }
  ];

  const handleNavigate = (path) => {
    onNavigate(path);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        ref={buttonRef}
        className={`flex items-center space-x-1 px-3 py-2 text-sm font-semibold transition-colors duration-200 ${
          isOpen 
            ? 'text-primary' 
            : 'text-text-secondary hover:text-primary'
        }`}
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
      >
        <span>Resources</span>
        <Icon 
          name="ChevronDown" 
          size={16} 
          className={`transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Dropdown */}
      <div onMouseLeave={() => setIsOpen(false)}>
        <NavDropdown
          items={resourcesItems}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          onItemClick={handleNavigate}
          trackEvent={trackEvent}
        />
      </div>
    </div>
  );
};

export default ResourcesMenu;
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';
import ResourcesMenu from './ResourcesMenu';
import useClickOutside from '../../hooks/useClickOutside';

// 1. IMPORT YOUR LOGO IMAGE
import logoImage from '../../assets/luna-logo2.png';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Refs for click-outside detection
  const servicesDropdownRef = useRef(null);
  const servicesButtonRef = useRef(null);
  const resourcesDropdownRef = useRef(null);
  const resourcesButtonRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Close dropdowns when clicking outside
  useClickOutside(
    [servicesDropdownRef, servicesButtonRef],
    () => setServicesDropdownOpen(false)
  );

  useClickOutside(
    [resourcesDropdownRef, resourcesButtonRef],
    () => setResourcesDropdownOpen(false)
  );

  useClickOutside(
    [mobileMenuRef],
    () => setMobileMenuOpen(false)
  );

  // Analytics tracking helper
  const trackEvent = useCallback((eventName, params) => {
    if (window.gtag) {
      window.gtag('event', eventName, params);
    }
  }, []);

  const navigationItems = [
    { label: 'Home', path: '/', icon: 'Home' },
    {
      label: 'Services',
      path: '/services',
      icon: 'Settings',
      hasDropdown: true,
      dropdownItems: [
        {
          label: 'Large Format Printing',
          path: '/services/service-detail-page',
          icon: 'Printer',
          description: 'Banners, posters, and signage'
        },
        {
          label: 'CNC Cutting',
          path: '/services/cnc-cutting-services-page',
          icon: 'Monitor',
          description: 'Acrylic Signages, Wood Engraving, Metal Cutting'
        },
        {
          label: 'Laser Cutting',
          path: '/services/laser-cutting-services-page',
          icon: 'FileText',
          description: 'Acrylic cutting, Wood engraving, Custom Design'
        },
        {
          label: 'Custom Merchandise',
          path: '/services/t-shirt-printing-services-page',
          icon: 'ShoppingBag',
          description: 'T-shirts, mugs, promotional items'
        },
        {
          label: 'Plotting Services',
          path: '/services/plotting-services-page',
          icon: 'BookOpen',
          description: 'Posters, Banners, Technical drawings'
        },
        {
          label: 'UV Printing',
          path: '/services/uv-printing-services-page',
          icon: 'Palette',
          description: 'Acrylic wall art, Nameplates, and custom prints'
        }
      ]
    },
    { label: 'Corporate Solutions', path: '/corporate-services-page', icon: 'Building2' },
    { label: 'Gallery', path: '/gallery', icon: 'Image' },
    { label: 'Our Team', path: '/team', icon: 'Users' },
    { label: 'Contact', path: '/contact', icon: 'Phone' }
  ];

  // Resources items for mobile menu
  const resourcesItems = [
    {
      label: 'Case Studies',
      path: '/case-studies',
      icon: 'Briefcase',
      description: 'See our successful projects'
    },
    {
      label: 'Blog & Articles',
      path: '/blog',
      icon: 'BookOpen',
      description: 'Printing tips and insights'
    },
    {
      label: 'Company Profile',
      path: '/company-profile.pdf',
      icon: 'FileText',
      description: 'Download PDF',
      isDownload: true
    },
    {
      label: 'FAQ',
      path: '/faq',
      icon: 'HelpCircle',
      description: 'Common questions'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (path) => {
    // Track navigation
    trackEvent('navigation', {
      category: 'Header',
      label: path
    });

    navigate(path);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setResourcesDropdownOpen(false);
  };

  const handleWhatsAppClick = () => {
    // Track WhatsApp click
    trackEvent('contact_click', {
      category: 'Header',
      label: 'WhatsApp'
    });

    const phoneNumber = '254791159618';
    const message = 'Hello! I would like to inquire about your printing services.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  const Logo = () => (
    <div className="flex items-center space-x-3">
      <img 
        src={logoImage} 
        alt="Luna Graphics Logo" 
        className="w-12 h-12 rounded-lg object-cover" 
      />
      <div className="flex flex-col">
        <span className="text-xl font-heading font-bold text-primary">Luna</span>
        <span className="text-sm font-heading font-semibold text-secondary">Graphics</span>
      </div>
    </div>
  );

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-md' 
          : 'bg-background'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex-shrink-0 cursor-pointer"
            onClick={() => handleNavigation('/')}
          >
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navigationItems.map((item) => (
              <div 
                key={item.label} 
                className="relative"
                ref={item.hasDropdown ? servicesDropdownRef : null}
              >
                {item.hasDropdown ? (
                  <button
                    ref={servicesButtonRef}
                    className={`flex items-center space-x-1 px-3 py-2 text-sm font-semibold transition-colors duration-200 ${
                      location.pathname.includes('/services') 
                        ? 'text-primary border-b-2 border-primary' 
                        : 'text-text-secondary hover:text-primary'
                    }`}
                    onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                  >
                    <span>{item.label}</span>
                    <Icon 
                      name="ChevronDown" 
                      size={16} 
                      className={`transition-transform duration-200 ${
                        servicesDropdownOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                ) : (
                  <button
                    className={`px-3 py-2 text-sm font-semibold transition-colors duration-200 ${
                      isActivePath(item.path)
                        ? 'text-primary border-b-2 border-primary' 
                        : 'text-text-secondary hover:text-primary'
                    }`}
                    onClick={() => handleNavigation(item.path)}
                  >
                    {item.label}
                  </button>
                )}

                {/* Services Dropdown */}
                {item.hasDropdown && servicesDropdownOpen && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-80 bg-background rounded-2xl shadow-xl border border-border z-50 animate-slide-down overflow-hidden"
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <div className="p-2">
                      {item.dropdownItems.map((dropdownItem, index) => (
                        <button
                          key={dropdownItem.label}
                          className={`flex items-start space-x-3 w-full p-3 rounded-xl hover:bg-surface-100 transition-all duration-200 text-left ${
                            index !== item.dropdownItems.length - 1 ? 'mb-1' : ''
                          }`}
                          onClick={() => handleNavigation(dropdownItem.path)}
                        >
                          <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                            <Icon name={dropdownItem.icon} size={18} color="var(--color-primary)" />
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-semibold text-text-primary">
                              {dropdownItem.label}
                            </div>
                            <div className="text-xs text-text-secondary mt-1">
                              {dropdownItem.description}
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Resources Dropdown */}
            <div className="relative" ref={resourcesDropdownRef}>
              <button
                ref={resourcesButtonRef}
                className={`flex items-center space-x-1 px-3 py-2 text-sm font-semibold transition-colors duration-200 ${
                  location.pathname === '/case-studies' || 
                  location.pathname === '/blog' || 
                  location.pathname === '/faq'
                    ? 'text-primary border-b-2 border-primary' 
                    : 'text-text-secondary hover:text-primary'
                }`}
                onClick={() => setResourcesDropdownOpen(!resourcesDropdownOpen)}
                onMouseEnter={() => setResourcesDropdownOpen(true)}
              >
                <span>Resources</span>
                <Icon 
                  name="ChevronDown" 
                  size={16} 
                  className={`transition-transform duration-200 ${
                    resourcesDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Resources Dropdown */}
              {resourcesDropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-80 bg-background rounded-2xl shadow-xl border border-border z-50 animate-slide-down overflow-hidden"
                  onMouseLeave={() => setResourcesDropdownOpen(false)}
                >
                  <div className="p-2">
                    {resourcesItems.map((item, index) => (
                      <button
                        key={item.label}
                        className={`flex items-start space-x-3 w-full p-3 rounded-xl transition-all duration-200 text-left group ${
                          item.isDownload 
                            ? 'hover:bg-green-50' 
                            : 'hover:bg-surface-100'
                        } ${index !== resourcesItems.length - 1 ? 'mb-1' : ''}`}
                        onClick={() => {
                          if (item.isDownload) {
                            trackEvent('download', {
                              category: 'Resources',
                              label: 'Company Profile PDF'
                            });
                            window.open(item.path, '_blank');
                            setResourcesDropdownOpen(false);
                          } else {
                            handleNavigation(item.path);
                          }
                        }}
                      >
                        <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${
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
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className={`text-sm font-semibold ${
                              item.isDownload 
                                ? 'text-green-700 group-hover:text-green-800' 
                                : 'text-text-primary group-hover:text-primary'
                            }`}>
                              {item.label}
                            </span>
                            {item.isDownload && (
                              <span className="flex items-center text-xs text-green-600 bg-green-100 px-2 py-0.5 rounded-full">
                                <Icon name="Download" size={12} className="mr-1" />
                                PDF
                              </span>
                            )}
                          </div>
                          <div className="text-xs text-text-secondary mt-1">
                            {item.description}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button
              variant="outline"
              size="sm"
              iconName="MessageCircle"
              iconPosition="left"
              onClick={handleWhatsAppClick}
              className="text-accent border-accent hover:bg-accent hover:text-white"
            >
              WhatsApp
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={() => handleNavigation('/contact')}
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              className="p-2 rounded-md text-text-secondary hover:text-primary hover:bg-surface-100 transition-colors duration-200"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-16 z-40 bg-background/95 backdrop-blur-md overflow-y-auto">
          <div 
            ref={mobileMenuRef}
            className="bg-background border-t border-border shadow-lg min-h-full"
          >
            <div className="px-4 py-6 space-y-2">
              {/* Main Navigation */}
              {navigationItems.map((item) => (
                <div key={item.label} className="border-b border-border/50 last:border-0 pb-2 last:pb-0">
                  {item.hasDropdown ? (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between px-3 py-2">
                        <span className="text-base font-semibold text-text-primary">
                          {item.label}
                        </span>
                      </div>
                      <div className="pl-4 space-y-1">
                        {item.dropdownItems.map((dropdownItem) => (
                          <button
                            key={dropdownItem.label}
                            className="flex items-center space-x-3 w-full p-3 rounded-xl hover:bg-surface-100 transition-colors duration-200 text-left"
                            onClick={() => handleNavigation(dropdownItem.path)}
                          >
                            <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                              <Icon name={dropdownItem.icon} size={16} color="var(--color-primary)" />
                            </div>
                            <div className="flex-1">
                              <div className="text-sm font-semibold text-text-primary">
                                {dropdownItem.label}
                              </div>
                              <div className="text-xs text-text-secondary">
                                {dropdownItem.description}
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <button
                      className={`flex items-center space-x-3 w-full p-3 rounded-xl transition-colors duration-200 text-left ${
                        isActivePath(item.path)
                          ? 'bg-primary-50 text-primary' 
                          : 'text-text-secondary hover:bg-surface-100 hover:text-primary'
                      }`}
                      onClick={() => handleNavigation(item.path)}
                    >
                      <Icon name={item.icon} size={20} />
                      <span className="text-base font-medium">{item.label}</span>
                    </button>
                  )}
                </div>
              ))}

              {/* Resources Section (Mobile) */}
              <div className="border-b border-border/50 pb-2">
                <div className="flex items-center justify-between px-3 py-2">
                  <span className="text-base font-semibold text-text-primary">
                    Resources
                  </span>
                </div>
                <div className="pl-4 space-y-1">
                  {resourcesItems.map((item) => (
                    <button
                      key={item.label}
                      className={`flex items-center space-x-3 w-full p-3 rounded-xl transition-colors duration-200 text-left ${
                        item.isDownload 
                          ? 'hover:bg-green-50' 
                          : 'hover:bg-surface-100'
                      }`}
                      onClick={() => {
                        if (item.isDownload) {
                          trackEvent('download', {
                            category: 'Resources',
                            label: 'Company Profile PDF'
                          });
                          window.open(item.path, '_blank');
                        } else {
                          handleNavigation(item.path);
                        }
                      }}
                    >
                      <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${
                        item.isDownload ? 'bg-green-100' : 'bg-primary-100'
                      }`}>
                        <Icon 
                          name={item.icon} 
                          size={16} 
                          color={item.isDownload ? 'var(--color-green-600)' : 'var(--color-primary)'} 
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className={`text-sm font-semibold ${
                            item.isDownload ? 'text-green-700' : 'text-text-primary'
                          }`}>
                            {item.label}
                          </span>
                          {item.isDownload && (
                            <Icon name="Download" size={14} className="text-green-600" />
                          )}
                        </div>
                        <div className="text-xs text-text-secondary">
                          {item.description}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile Actions */}
              <div className="pt-4 space-y-3">
                <Button
                  variant="outline"
                  size="md"
                  iconName="MessageCircle"
                  iconPosition="left"
                  onClick={handleWhatsAppClick}
                  className="w-full text-accent border-accent hover:bg-accent hover:text-white"
                  fullWidth
                >
                  WhatsApp Us
                </Button>
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => handleNavigation('/contact')}
                  fullWidth
                >
                  Get Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
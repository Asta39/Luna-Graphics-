import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';
import useClickOutside from '../../hooks/useClickOutside';

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
  const resourcesDropdownRef = useRef(null);
  const mobileMenuButtonRef = useRef(null);
  const mobileMenuContainerRef = useRef(null); // NEW: Ref for the mobile menu itself

  // Close dropdowns when clicking outside (desktop only)
  useClickOutside([servicesDropdownRef], () => {
    if (window.innerWidth >= 1024) {
      setServicesDropdownOpen(false);
    }
  });
  
  useClickOutside([resourcesDropdownRef], () => {
    if (window.innerWidth >= 1024) {
      setResourcesDropdownOpen(false);
    }
  });

  // FIXED: Close mobile menu when clicking OUTSIDE both the button AND the menu container
  useClickOutside([mobileMenuButtonRef, mobileMenuContainerRef], () => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  });

  // Close other dropdown when opening one
  const toggleServices = () => {
    setServicesDropdownOpen(prev => !prev);
    setResourcesDropdownOpen(false);
  };

  const toggleResources = () => {
    setResourcesDropdownOpen(prev => !prev);
    setServicesDropdownOpen(false);
  };

  // Close mobile menu and dropdowns on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setResourcesDropdownOpen(false);
  }, [location.pathname]);

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
          path: '/services/large-format',
          icon: 'Printer',
          description: 'Banners, posters, and signage'
        },
        {
          label: 'CNC Cutting',
          path: '/services/cnc-cutting',
          icon: 'Monitor',
          description: 'Acrylic Signages, Wood Engraving, Metal Cutting'
        },
        {
          label: 'Laser Cutting',
          path: '/services/laser-cutting',
          icon: 'FileText',
          description: 'Acrylic cutting, Wood engraving, Custom Design'
        },
        {
          label: 'Custom Merchandise',
          path: '/services/t-shirt-printing',
          icon: 'ShoppingBag',
          description: 'T-shirts, mugs, promotional items'
        },
        {
          label: 'Plotting Services',
          path: '/services/plotting',
          icon: 'BookOpen',
          description: 'Posters, Banners, Technical drawings'
        },
        {
          label: 'UV Printing',
          path: '/services/uv-printing',
          icon: 'Palette',
          description: 'Acrylic wall art, Nameplates, and custom prints'
        }
      ]
    },
    { label: 'Corporate Solutions', path: '/corporate-services', icon: 'Building2' },
    { label: 'Gallery', path: '/gallery', icon: 'Image' },
    { label: 'Our Team', path: '/team', icon: 'Users' },
    { label: 'Contact', path: '/contact', icon: 'Phone' }
  ];

  // Resources items
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

  // Scroll handler for header styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns on scroll (desktop only)
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 1024) {
        setServicesDropdownOpen(false);
        setResourcesDropdownOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleNavigation = (path) => {
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
    <>
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
                <div key={item.label} className="relative">
                  {item.hasDropdown ? (
                    <div ref={servicesDropdownRef}>
                      <button
                        className={`flex items-center space-x-1 px-3 py-2 text-sm font-semibold transition-colors duration-200 ${
                          location.pathname.includes('/services') 
                            ? 'text-primary border-b-2 border-primary' 
                            : 'text-text-secondary hover:text-primary'
                        }`}
                        onClick={toggleServices}
                        onMouseEnter={() => {
                          if (window.innerWidth >= 1024) {
                            setServicesDropdownOpen(true);
                            setResourcesDropdownOpen(false);
                          }
                        }}
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

                      {/* Desktop Services Dropdown */}
                      {servicesDropdownOpen && (
                        <div 
                          className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden animate-fade-in"
                          style={{ zIndex: 9999 }}
                          onMouseLeave={() => setServicesDropdownOpen(false)}
                        >
                          <div className="p-2">
                            {item.dropdownItems.map((dropdownItem, index) => (
                              <button
                                key={dropdownItem.label}
                                className={`flex items-start space-x-3 w-full p-3 rounded-lg hover:bg-gray-50 transition-all duration-200 text-left ${
                                  index !== item.dropdownItems.length - 1 ? 'mb-1' : ''
                                }`}
                                onClick={() => handleNavigation(dropdownItem.path)}
                              >
                                <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                                  <Icon name={dropdownItem.icon} size={18} color="var(--color-primary)" />
                                </div>
                                <div className="flex-1">
                                  <div className="text-sm font-semibold text-gray-900">
                                    {dropdownItem.label}
                                  </div>
                                  <div className="text-xs text-gray-500 mt-1">
                                    {dropdownItem.description}
                                  </div>
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
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
                </div>
              ))}

              {/* Desktop Resources Dropdown */}
              <div className="relative" ref={resourcesDropdownRef}>
                <button
                  className={`flex items-center space-x-1 px-3 py-2 text-sm font-semibold transition-colors duration-200 ${
                    ['/case-studies', '/blog', '/faq'].some(path => location.pathname === path)
                      ? 'text-primary border-b-2 border-primary' 
                      : 'text-text-secondary hover:text-primary'
                  }`}
                  onClick={toggleResources}
                  onMouseEnter={() => {
                    if (window.innerWidth >= 1024) {
                      setResourcesDropdownOpen(true);
                      setServicesDropdownOpen(false);
                    }
                  }}
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

                {resourcesDropdownOpen && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden animate-fade-in"
                    style={{ zIndex: 9999 }}
                    onMouseLeave={() => setResourcesDropdownOpen(false)}
                  >
                    <div className="p-2">
                      {resourcesItems.map((item, index) => (
                        <button
                          key={item.label}
                          className={`flex items-start space-x-3 w-full p-3 rounded-lg transition-all duration-200 text-left group ${
                            item.isDownload ? 'hover:bg-green-50' : 'hover:bg-gray-50'
                          } ${index !== resourcesItems.length - 1 ? 'mb-1' : ''}`}
                          onClick={() => {
                            if (item.isDownload) {
                              trackEvent('download', { category: 'Resources', label: 'Company Profile PDF' });
                              window.open(item.path, '_blank');
                              setResourcesDropdownOpen(false);
                            } else {
                              handleNavigation(item.path);
                            }
                          }}
                        >
                          <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${
                            item.isDownload ? 'bg-green-100 group-hover:bg-green-200' : 'bg-primary-100 group-hover:bg-primary-200'
                          }`}>
                            <Icon name={item.icon} size={18} color={item.isDownload ? 'var(--color-green-600)' : 'var(--color-primary)'} />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <span className={`text-sm font-semibold ${item.isDownload ? 'text-green-700' : 'text-gray-900'}`}>
                                {item.label}
                              </span>
                              {item.isDownload && (
                                <span className="flex items-center text-xs text-green-600 bg-green-100 px-2 py-0.5 rounded-full">
                                  <Icon name="Download" size={12} className="mr-1" />
                                  PDF
                                </span>
                              )}
                            </div>
                            <div className="text-xs text-gray-500 mt-1">{item.description}</div>
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
            <div className="lg:hidden" ref={mobileMenuButtonRef}>
              <button
                className="p-2 rounded-md text-text-secondary hover:text-primary hover:bg-surface-100 transition-colors duration-200"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
              >
                <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE MENU - Full screen overlay with ref */}
      {mobileMenuOpen && (
        <div 
          ref={mobileMenuContainerRef} // NEW: Added ref here
          className="lg:hidden fixed inset-0 z-40 bg-white"
          style={{ top: '64px' }}
        >
          <div className="h-full overflow-y-auto bg-white">
            <div className="px-4 py-4 space-y-2 pb-32">
              {/* Main Navigation */}
              {navigationItems.map((item) => (
                <div key={item.label} className="border-b border-gray-100 last:border-0 pb-2 last:pb-0">
                  {item.hasDropdown ? (
                    <div className="space-y-2">
                      {/* Services Toggle */}
                      <button 
                        className="flex items-center justify-between w-full px-3 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                        onClick={toggleServices}
                        aria-expanded={servicesDropdownOpen}
                      >
                        <span className="text-base font-semibold text-gray-900">{item.label}</span>
                        <Icon 
                          name="ChevronDown" 
                          size={20} 
                          className={`text-gray-400 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`}
                        />
                      </button>
                      
                      {/* Services Submenu - Accordion style */}
                      {servicesDropdownOpen && (
                        <div className="pl-4 space-y-1 animate-slide-down">
                          {item.dropdownItems.map((dropdownItem) => (
                            <button
                              key={dropdownItem.label}
                              className="flex items-center space-x-3 w-full p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-left"
                              onClick={() => handleNavigation(dropdownItem.path)}
                            >
                              <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                                <Icon name={dropdownItem.icon} size={16} color="var(--color-primary)" />
                              </div>
                              <div className="flex-1">
                                <div className="text-sm font-semibold text-gray-900">{dropdownItem.label}</div>
                                <div className="text-xs text-gray-500">{dropdownItem.description}</div>
                              </div>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <button
                      className={`flex items-center space-x-3 w-full p-3 rounded-lg transition-colors duration-200 text-left ${
                        isActivePath(item.path) ? 'bg-primary-50 text-primary' : 'text-gray-600 hover:bg-gray-50'
                      }`}
                      onClick={() => handleNavigation(item.path)}
                    >
                      <Icon name={item.icon} size={20} />
                      <span className="text-base font-medium">{item.label}</span>
                    </button>
                  )}
                </div>
              ))}

              {/* Resources Section - Mobile Accordion */}
              <div className="border-b border-gray-100 pb-2">
                <button 
                  className="flex items-center justify-between w-full px-3 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                  onClick={toggleResources}
                  aria-expanded={resourcesDropdownOpen}
                >
                  <span className="text-base font-semibold text-gray-900">Resources</span>
                  <Icon 
                    name="ChevronDown" 
                    size={20} 
                    className={`text-gray-400 transition-transform duration-200 ${resourcesDropdownOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                
                {resourcesDropdownOpen && (
                  <div className="pl-4 space-y-1 animate-slide-down">
                    {resourcesItems.map((item) => (
                      <button
                        key={item.label}
                        className={`flex items-center space-x-3 w-full p-3 rounded-lg transition-colors duration-200 text-left ${
                          item.isDownload ? 'hover:bg-green-50' : 'hover:bg-gray-50'
                        }`}
                        onClick={() => {
                          if (item.isDownload) {
                            trackEvent('download', { category: 'Resources', label: 'Company Profile PDF' });
                            window.open(item.path, '_blank');
                          } else {
                            handleNavigation(item.path);
                          }
                        }}
                      >
                        <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${
                          item.isDownload ? 'bg-green-100' : 'bg-primary-100'
                        }`}>
                          <Icon name={item.icon} size={16} color={item.isDownload ? 'var(--color-green-600)' : 'var(--color-primary)'} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className={`text-sm font-semibold ${item.isDownload ? 'text-green-700' : 'text-gray-900'}`}>
                              {item.label}
                            </span>
                            {item.isDownload && <Icon name="Download" size={14} className="text-green-600" />}
                          </div>
                          <div className="text-xs text-gray-500">{item.description}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Mobile Actions - Fixed at bottom INSIDE the menu container */}
          <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4 space-y-3">
            <Button
              variant="outline"
              size="md"
              iconName="MessageCircle"
              iconPosition="left"
              onClick={handleWhatsAppClick}
              className="w-full text-accent border-accent hover:bg-accent hover:text-white"
            >
              WhatsApp Us
            </Button>
            <Button
              variant="primary"
              size="md"
              onClick={() => handleNavigation('/contact')}
              className="w-full"
            >
              Get Quote
            </Button>
          </div>
        </div>
      )}

    </>
  );
};

export default Header;
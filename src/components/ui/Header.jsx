import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';
import useClickOutside from '../../hooks/useClickOutside';
import { useCart } from '../../context/CartContext';
import logoImage from '../../assets/luna-logo2.png';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);
  const [corporateDropdownOpen, setCorporateDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const [careersDropdownOpen, setCareersDropdownOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const location = useLocation();
  const navigate = useNavigate();
  const { getCartCount, getCartTotal } = useCart();
  
  const cartCount = getCartCount();
  const cartTotal = getCartTotal();

  // Format price helper
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-KE', {
      style: 'currency',
      currency: 'KES',
      minimumFractionDigits: 0
    }).format(price);
  };

  // Refs for click-outside detection
  const servicesDropdownRef = useRef(null);
  const shopDropdownRef = useRef(null);
  const corporateDropdownRef = useRef(null);
  const resourcesDropdownRef = useRef(null);
  const careersDropdownRef = useRef(null);
  const mobileMenuButtonRef = useRef(null);
  const mobileMenuContainerRef = useRef(null);
  const megaMenuRef = useRef(null);

  // Close dropdowns when clicking outside (desktop only)
  useClickOutside([servicesDropdownRef], () => {
    if (window.innerWidth >= 1024) setServicesDropdownOpen(false);
  });

  useClickOutside([shopDropdownRef], () => {
    if (window.innerWidth >= 1024) setShopDropdownOpen(false);
  });

  useClickOutside([corporateDropdownRef], () => {
    if (window.innerWidth >= 1024) setCorporateDropdownOpen(false);
  });

  useClickOutside([resourcesDropdownRef], () => {
    if (window.innerWidth >= 1024) setResourcesDropdownOpen(false);
  });

  useClickOutside([careersDropdownRef], () => {
    if (window.innerWidth >= 1024) setCareersDropdownOpen(false);
  });

  useClickOutside([megaMenuRef], () => {
    if (window.innerWidth >= 1024) setMegaMenuOpen(false);
  });

  // Close mobile menu when clicking outside
  useClickOutside([mobileMenuButtonRef, mobileMenuContainerRef], () => {
    if (mobileMenuOpen) setMobileMenuOpen(false);
  });

  // Close all dropdowns
  const closeAllDropdowns = () => {
    setServicesDropdownOpen(false);
    setShopDropdownOpen(false);
    setCorporateDropdownOpen(false);
    setResourcesDropdownOpen(false);
    setCareersDropdownOpen(false);
    setMegaMenuOpen(false);
  };

  const toggleServices = () => {
    setServicesDropdownOpen(prev => !prev);
    setShopDropdownOpen(false);
    setCorporateDropdownOpen(false);
    setResourcesDropdownOpen(false);
    setCareersDropdownOpen(false);
  };

  const toggleShop = () => {
    if (!shopDropdownOpen) {
      navigate('/');
    }
    setShopDropdownOpen(prev => !prev);
    setServicesDropdownOpen(false);
    setCorporateDropdownOpen(false);
    setResourcesDropdownOpen(false);
    setCareersDropdownOpen(false);
  };

  const toggleCorporate = () => {
    setCorporateDropdownOpen(prev => !prev);
    setServicesDropdownOpen(false);
    setShopDropdownOpen(false);
    setResourcesDropdownOpen(false);
    setCareersDropdownOpen(false);
  };

  const toggleResources = () => {
    setResourcesDropdownOpen(prev => !prev);
    setServicesDropdownOpen(false);
    setShopDropdownOpen(false);
    setCorporateDropdownOpen(false);
    setCareersDropdownOpen(false);
  };

  const toggleCareers = () => {
    setCareersDropdownOpen(prev => !prev);
    setServicesDropdownOpen(false);
    setShopDropdownOpen(false);
    setCorporateDropdownOpen(false);
    setResourcesDropdownOpen(false);
  };

  // Close mobile menu and dropdowns on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    closeAllDropdowns();
  }, [location.pathname]);

  // Analytics tracking helper
  const trackEvent = useCallback((eventName, params) => {
    if (window.gtag) {
      window.gtag('event', eventName, params);
    }
  }, []);

  // Handle search - FIXED
const handleSearch = (e) => {
  e.preventDefault();
  if (searchQuery.trim()) {
    const searchTerm = searchQuery.trim();
    // Always navigate to /shop with search param
    navigate(`/shop?search=${encodeURIComponent(searchTerm)}`);
    
    // Clear search input
    setSearchQuery('');
  }
};

  // Shop categories
  const shopCategories = [
    {
      label: 'All Products',
      path: '/',
      icon: 'Grid',
      description: 'Browse all printing products & services'
    },
    {
      label: 'Banners & Displays',
      path: '/shop/category/banners',
      icon: 'Image',
      description: 'Roll-up, pull-up, and backdrop banners'
    },
    {
      label: 'Signage',
      path: '/shop/category/signage',
      icon: 'Signpost',
      description: 'Acrylic, metal, and LED signs'
    },
    {
      label: 'Corporate Materials',
      path: '/shop/category/corporate',
      icon: 'Briefcase',
      description: 'Business cards, brochures, stationery'
    },
    {
      label: 'Event Materials',
      path: '/shop/category/events',
      icon: 'Calendar',
      description: 'Backdrops, table covers, programs'
    },
    {
      label: 'Branded Merchandise',
      path: '/shop/category/merchandise',
      icon: 'Gift',
      description: 'Apparel, mugs, pens, bags'
    },
    {
      label: 'Large Format',
      path: '/shop/category/large-format',
      icon: 'Maximize',
      description: 'Posters, billboards, wall graphics'
    }
  ];

  // Services dropdown items
  const servicesItems = [
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
      description: 'Acrylic Signages, Wood Engraving'
    },
    {
      label: 'Laser Cutting',
      path: '/services/laser-cutting',
      icon: 'FileText',
      description: 'Acrylic cutting, Custom Design'
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
      description: 'Posters, Technical drawings'
    },
    {
      label: 'UV Printing',
      path: '/services/uv-printing',
      icon: 'Palette',
      description: 'Acrylic wall art, Nameplates'
    },
    {
      label: 'DTF Printing',
      path: '/services/dtf-printing',
      icon: 'Layers',
      description: 'Direct to film, no minimum order'
    },
    {
      label: 'Sublimation Printing',
      path: '/services/sublimation-printing',
      icon: 'Droplets',
      description: 'Mugs, jerseys, corporate gifts'
    },
    {
      label: 'Digital Printing',
      path: '/services/digital-printing',
      icon: 'FileText',
      description: 'Flyers, brochures, business cards'
    }
  ];

  // Corporate Branding dropdown items
  const corporateItems = [
    {
      label: 'Corporate Solutions',
      path: '/corporate-services',
      icon: 'Building2',
      description: 'Comprehensive B2B printing solutions'
    },
    {
      label: 'Political Branding',
      path: 'https://lunapolitics.co.ke  ',
      icon: 'Flag',
      description: 'Campaign materials & election solutions',
      isExternal: true
    },
    {
      label: 'Events & Exhibitions',
      path: '/corporate/events-exhibitions',
      icon: 'Calendar',
      description: 'Trade shows & event branding'
    },
    {
      label: 'Corporate Branding',
      path: '/corporate/corporate-branding',
      icon: 'Briefcase',
      description: 'Office branding & identity'
    }
  ];

  // Careers dropdown items
  const careersItems = [
    {
      label: 'About',
      path: '/about',
      icon: 'Info',
      description: 'Our story and mission'
    },
    {
      label: 'Our Team',
      path: '/team',
      icon: 'Users',
      description: 'Meet the experts'
    },
    {
      label: 'Jobs',
      path: '/careers',
      icon: 'Briefcase',
      description: 'Join our team'
    }
  ];

  // Resources items
  const resourcesItems = [
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
      if (window.innerWidth >= 1024) closeAllDropdowns();
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
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const handleNavigation = (path, isExternal = false) => {
    trackEvent('navigation', { category: 'Header', label: path });

    if (isExternal) {
      window.open(path, '_blank');
    } else {
      navigate(path);
    }
    
    setMobileMenuOpen(false);
    closeAllDropdowns();
  };

  const handleWhatsAppClick = () => {
    trackEvent('contact_click', { category: 'Header', label: 'WhatsApp' });

    const phoneNumber = '254791159618';
    const message = 'Hello! I would like to inquire about your printing services.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  const isShopActive = () => {
    return location.pathname === '/' || location.pathname.includes('/shop');
  };

  const isCareersActive = () => {
    return ['/about', '/team'].includes(location.pathname);
  };

  const isCorporateActive = () => {
    return location.pathname.includes('/corporate');
  };

  const Logo = () => (
    <div className="flex items-center space-x-3 mr-8">
      <img 
        src={logoImage} 
        alt="Luna Graphics Logo" 
        className="w-12 h-12 rounded-lg object-cover" 
      />
      <div className="flex flex-col">
        <span className="text-xl font-heading font-bold text-emerald-600">Luna</span>
        <span className="text-sm font-heading font-semibold text-gray-700">Graphics</span>
      </div>
    </div>
  );

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-md' 
            : 'bg-white'
        }`}
      >
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div 
              className="flex-shrink-0 cursor-pointer"
              onClick={() => handleNavigation('/')}
            >
              <Logo />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1" ref={megaMenuRef}>
              <button
                className={`px-3 py-2 text-sm font-semibold transition-colors duration-200 ${
                  isActivePath('/') ? 'text-emerald-600 border-b-2 border-emerald-600' : 'text-gray-600 hover:text-emerald-600'
                }`}
                onClick={() => handleNavigation('/')}
              >
                Home
              </button>

              {/* Single mega menu trigger */}
              <button
                className={`flex items-center gap-1 px-3 py-2 text-sm font-semibold transition-colors duration-200 ${
                  megaMenuOpen ? 'text-emerald-600' : 'text-gray-600 hover:text-emerald-600'
                }`}
                onClick={() => setMegaMenuOpen(o => !o)}
              >
                <span>Explore</span>
                <Icon name="ChevronDown" size={16} className={`transition-transform duration-200 ${megaMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              <button
                className={`px-3 py-2 text-sm font-semibold transition-colors duration-200 ${
                  isActivePath('/contact') ? 'text-emerald-600 border-b-2 border-emerald-600' : 'text-gray-600 hover:text-emerald-600'
                }`}
                onClick={() => handleNavigation('/contact')}
              >
                Contact
              </button>

              {/* Mega Menu Panel */}
              {megaMenuOpen && (
                <div
                  className="fixed left-0 right-0 top-16 bg-white shadow-2xl border-t border-gray-100 z-50"
                  onMouseLeave={() => setMegaMenuOpen(false)}
                >
                  <div className="max-w-screen-2xl mx-auto px-8 py-8 grid grid-cols-5 gap-8">

                    {/* Shop */}
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-7 h-7 bg-emerald-100 rounded-lg flex items-center justify-center">
                          <Icon name="ShoppingBag" size={14} className="text-emerald-600" />
                        </div>
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Shop</span>
                      </div>
                      <div className="space-y-1">
                        {shopCategories.map(item => (
                          <button key={item.label} onClick={() => handleNavigation(item.path)}
                            className="flex items-center gap-2.5 w-full p-2 rounded-lg hover:bg-emerald-50 text-left group transition-colors">
                            <Icon name={item.icon} size={15} className="text-emerald-500 flex-shrink-0" />
                            <div>
                              <div className="text-sm font-medium text-gray-800 group-hover:text-emerald-700">{item.label}</div>
                              <div className="text-xs text-gray-400 leading-tight">{item.description}</div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Services */}
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-7 h-7 bg-emerald-100 rounded-lg flex items-center justify-center">
                          <Icon name="Settings" size={14} className="text-emerald-600" />
                        </div>
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Services</span>
                      </div>
                      <div className="space-y-1">
                        {servicesItems.map(item => (
                          <button key={item.label} onClick={() => handleNavigation(item.path)}
                            className="flex items-center gap-2.5 w-full p-2 rounded-lg hover:bg-emerald-50 text-left group transition-colors">
                            <Icon name={item.icon} size={15} className="text-emerald-500 flex-shrink-0" />
                            <div>
                              <div className="text-sm font-medium text-gray-800 group-hover:text-emerald-700">{item.label}</div>
                              <div className="text-xs text-gray-400 leading-tight">{item.description}</div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Corporate */}
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-7 h-7 bg-emerald-100 rounded-lg flex items-center justify-center">
                          <Icon name="Building2" size={14} className="text-emerald-600" />
                        </div>
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Corporate</span>
                      </div>
                      <div className="space-y-1">
                        {corporateItems.map(item => (
                          <button key={item.label} onClick={() => handleNavigation(item.path, item.isExternal)}
                            className="flex items-center gap-2.5 w-full p-2 rounded-lg hover:bg-emerald-50 text-left group transition-colors">
                            <Icon name={item.icon} size={15} className="text-emerald-500 flex-shrink-0" />
                            <div className="flex-1">
                              <div className="flex items-center gap-1">
                                <span className="text-sm font-medium text-gray-800 group-hover:text-emerald-700">{item.label}</span>
                                {item.isExternal && <Icon name="ExternalLink" size={11} className="text-gray-400" />}
                              </div>
                              <div className="text-xs text-gray-400 leading-tight">{item.description}</div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Company */}
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-7 h-7 bg-emerald-100 rounded-lg flex items-center justify-center">
                          <Icon name="Users" size={14} className="text-emerald-600" />
                        </div>
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Company</span>
                      </div>
                      <div className="space-y-1">
                        {careersItems.map(item => (
                          <button key={item.label} onClick={() => handleNavigation(item.path, item.isExternal)}
                            className="flex items-center gap-2.5 w-full p-2 rounded-lg hover:bg-emerald-50 text-left group transition-colors">
                            <Icon name={item.icon} size={15} className="text-emerald-500 flex-shrink-0" />
                            <div>
                              <div className="text-sm font-medium text-gray-800 group-hover:text-emerald-700">{item.label}</div>
                              <div className="text-xs text-gray-400 leading-tight">{item.description}</div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Resources + CTA */}
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-7 h-7 bg-emerald-100 rounded-lg flex items-center justify-center">
                          <Icon name="BookOpen" size={14} className="text-emerald-600" />
                        </div>
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Resources</span>
                      </div>
                      <div className="space-y-1 mb-6">
                        {resourcesItems.map(item => (
                          <button key={item.label}
                            onClick={() => {
                              if (item.isDownload) { window.open(item.path, '_blank'); setMegaMenuOpen(false); }
                              else handleNavigation(item.path);
                            }}
                            className="flex items-center gap-2.5 w-full p-2 rounded-lg hover:bg-emerald-50 text-left group transition-colors">
                            <Icon name={item.icon} size={15} className="text-emerald-500 flex-shrink-0" />
                            <div className="flex-1">
                              <div className="flex items-center gap-1">
                                <span className="text-sm font-medium text-gray-800 group-hover:text-emerald-700">{item.label}</span>
                                {item.isDownload && <Icon name="Download" size={11} className="text-gray-400" />}
                              </div>
                              <div className="text-xs text-gray-400 leading-tight">{item.description}</div>
                            </div>
                          </button>
                        ))}
                      </div>
                      {/* CTA */}
                      <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-100">
                        <p className="text-xs font-semibold text-emerald-800 mb-1">Need a quote?</p>
                        <p className="text-xs text-emerald-600 mb-3">Get a custom print quote in minutes.</p>
                        <button
                          onClick={() => handleNavigation('/contact')}
                          className="w-full py-2 bg-emerald-600 text-white text-xs font-semibold rounded-lg hover:bg-emerald-700 transition-colors"
                        >
                          Get a Quote
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              )}
            </nav>

            {/* Search Bar - Desktop */}
            <div className="hidden lg:flex items-center flex-1 max-w-md mx-auto">
              <form onSubmit={handleSearch} className="w-full relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-4 pr-12 py-2 rounded-lg border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all text-sm"
                />
                <button 
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-emerald-600 transition-colors"
                >
                  <Icon name="Search" size={18} />
                </button>
              </form>
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-3">
              <Button
                variant="outline"
                size="sm"
                iconName="MessageCircle"
                iconPosition="left"
                onClick={handleWhatsAppClick}
                className="text-emerald-600 border-emerald-600 hover:bg-emerald-50"
              >
                WhatsApp
              </Button>
              
              {/* Cart Button */}
              <button
                onClick={() => navigate('/cart')}
                className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Shopping cart"
              >
                <Icon name="ShoppingCart" size={22} className="text-gray-700" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-emerald-600 text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {cartCount > 99 ? '99+' : cartCount}
                  </span>
                )}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-2">
              {/* Mobile Cart Icon */}
              <button
                onClick={() => navigate('/cart')}
                className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Shopping cart"
              >
                <Icon name="ShoppingCart" size={22} className="text-gray-700" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-emerald-600 text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {cartCount > 99 ? '99+' : cartCount}
                  </span>
                )}
              </button>
              
              <button
                ref={mobileMenuButtonRef}
                className="p-2 rounded-md text-gray-600 hover:text-emerald-600 hover:bg-gray-100 transition-colors duration-200"
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

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div 
          ref={mobileMenuContainerRef}
          className="lg:hidden fixed inset-0 z-40 bg-white"
          style={{ top: '64px' }}
        >
          <div className="h-full overflow-y-auto bg-white">
            <div className="px-4 py-4 space-y-2 pb-40">
              
              {/* Search - Mobile */}
              <div className="mb-4">
                <form onSubmit={handleSearch} className="relative">
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-4 pr-12 py-3 rounded-lg border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none"
                  />
                  <button 
                    type="submit"
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-gray-400"
                  >
                    <Icon name="Search" size={20} />
                  </button>
                </form>
              </div>

              {/* Cart Button - Mobile */}
              <button
                onClick={() => {
                  navigate('/cart');
                  setMobileMenuOpen(false);
                }}
                className="flex items-center justify-between w-full p-4 rounded-xl bg-emerald-50 border border-emerald-100 mb-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                    <Icon name="ShoppingCart" size={20} className="text-white" />
                  </div>
                  <div className="text-left">
                    <span className="font-semibold text-gray-900">Shopping Cart</span>
                    <p className="text-sm text-gray-500">{cartCount} {cartCount === 1 ? 'item' : 'items'}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-emerald-600">
                    {cartCount > 0 ? formatPrice(cartTotal) : 'Ksh 0'}
                  </span>
                  <Icon name="ChevronRight" size={20} className="text-gray-400" />
                </div>
              </button>

              {/* Home */}
              <button
                className={`flex items-center space-x-3 w-full p-3 rounded-lg transition-colors duration-200 text-left border-b border-gray-100 ${
                  isActivePath('/') ? 'bg-emerald-50 text-emerald-600' : 'text-gray-600 hover:bg-gray-50'
                }`}
                onClick={() => handleNavigation('/')}
              >
                <Icon name="Home" size={20} />
                <span className="text-base font-medium">Home</span>
              </button>

              {/* Shop Section - Mobile */}
              <div className="border-b border-gray-100 pb-2">
                <button 
                  className="flex items-center justify-between w-full px-3 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                  onClick={toggleShop}
                  aria-expanded={shopDropdownOpen}
                >
                  <div className="flex items-center space-x-3">
                    <Icon name="ShoppingBag" size={20} className="text-gray-600" />
                    <span className="text-base font-semibold text-gray-900">Shop</span>
                  </div>
                  <Icon 
                    name="ChevronDown" 
                    size={20} 
                    className={`text-gray-400 transition-transform duration-200 ${shopDropdownOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                
                {shopDropdownOpen && (
                  <div className="pl-4 space-y-1 animate-slide-down">
                    {shopCategories.map((item) => (
                      <button
                        key={item.label}
                        className="flex items-center space-x-3 w-full p-3 rounded-lg hover:bg-emerald-50 transition-colors duration-200 text-left"
                        onClick={() => handleNavigation(item.path)}
                      >
                        <div className="flex-shrink-0 w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                          <Icon name={item.icon} size={16} className="text-emerald-600" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-semibold text-gray-900">{item.label}</div>
                          <div className="text-xs text-gray-500">{item.description}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Services Section - Mobile */}
              <div className="border-b border-gray-100 pb-2">
                <button 
                  className="flex items-center justify-between w-full px-3 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                  onClick={toggleServices}
                  aria-expanded={servicesDropdownOpen}
                >
                  <div className="flex items-center space-x-3">
                    <Icon name="Settings" size={20} className="text-gray-600" />
                    <span className="text-base font-semibold text-gray-900">Services</span>
                  </div>
                  <Icon 
                    name="ChevronDown" 
                    size={20} 
                    className={`text-gray-400 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                
                {servicesDropdownOpen && (
                  <div className="pl-4 space-y-1 animate-slide-down">
                    {servicesItems.map((item) => (
                      <button
                        key={item.label}
                        className="flex items-center space-x-3 w-full p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-left"
                        onClick={() => handleNavigation(item.path)}
                      >
                        <div className="flex-shrink-0 w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                          <Icon name={item.icon} size={16} className="text-emerald-600" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-semibold text-gray-900">{item.label}</div>
                          <div className="text-xs text-gray-500">{item.description}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Corporate Section - Mobile - WITH ICON */}
              <div className="border-b border-gray-100 pb-2">
                <button 
                  className="flex items-center justify-between w-full px-3 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                  onClick={toggleCorporate}
                  aria-expanded={corporateDropdownOpen}
                >
                  <div className="flex items-center space-x-3">
                    <Icon name="Building2" size={20} className="text-gray-600" />
                    <span className="text-base font-semibold text-gray-900">Corporate</span>
                  </div>
                  <Icon 
                    name="ChevronDown" 
                    size={20} 
                    className={`text-gray-400 transition-transform duration-200 ${corporateDropdownOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                
                {corporateDropdownOpen && (
                  <div className="pl-4 space-y-1 animate-slide-down">
                    {corporateItems.map((item) => (
                      <button
                        key={item.label}
                        className="flex items-center space-x-3 w-full p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-left"
                        onClick={() => handleNavigation(item.path, item.isExternal)}
                      >
                        <div className="flex-shrink-0 w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                          <Icon name={item.icon} size={16} className="text-emerald-600" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-semibold text-gray-900">{item.label}</span>
                            {item.isExternal && <Icon name="ExternalLink" size={14} className="text-gray-400" />}
                          </div>
                          <div className="text-xs text-gray-500">{item.description}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Careers Section - Mobile - WITH ICON */}
              <div className="border-b border-gray-100 pb-2">
                <button 
                  className="flex items-center justify-between w-full px-3 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                  onClick={toggleCareers}
                  aria-expanded={careersDropdownOpen}
                >
                  <div className="flex items-center space-x-3">
                    <Icon name="Users" size={20} className="text-gray-600" />
                    <span className="text-base font-semibold text-gray-900">Careers</span>
                  </div>
                  <Icon 
                    name="ChevronDown" 
                    size={20} 
                    className={`text-gray-400 transition-transform duration-200 ${careersDropdownOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                
                {careersDropdownOpen && (
                  <div className="pl-4 space-y-1 animate-slide-down">
                    {careersItems.map((item) => (
                      <button
                        key={item.label}
                        className="flex items-center space-x-3 w-full p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-left"
                        onClick={() => handleNavigation(item.path, item.isExternal)}
                      >
                        <div className="flex-shrink-0 w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                          <Icon name={item.icon} size={16} className="text-emerald-600" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-semibold text-gray-900">{item.label}</span>
                            {item.isExternal && <Icon name="ExternalLink" size={14} className="text-gray-400" />}
                          </div>
                          <div className="text-xs text-gray-500">{item.description}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Resources Section - Mobile - WITH ICON */}
              <div className="border-b border-gray-100 pb-2">
                <button 
                  className="flex items-center justify-between w-full px-3 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                  onClick={toggleResources}
                  aria-expanded={resourcesDropdownOpen}
                >
                  <div className="flex items-center space-x-3">
                    <Icon name="BookOpen" size={20} className="text-gray-600" />
                    <span className="text-base font-semibold text-gray-900">Resources</span>
                  </div>
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
                          item.isDownload ? 'bg-green-100' : 'bg-emerald-100'
                        }`}>
                          <Icon name={item.icon} size={16} className={item.isDownload ? 'text-green-600' : 'text-emerald-600'} />
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

              {/* Contact */}
              <button
                className={`flex items-center space-x-3 w-full p-3 rounded-lg transition-colors duration-200 text-left border-b border-gray-100 ${
                  isActivePath('/contact') ? 'bg-emerald-50 text-emerald-600' : 'text-gray-600 hover:bg-gray-50'
                }`}
                onClick={() => handleNavigation('/contact')}
              >
                <Icon name="Phone" size={20} />
                <span className="text-base font-medium">Contact</span>
              </button>
            </div>
          </div>

          {/* Mobile Actions */}
          <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4 space-y-3">
            {/* Cart Quick Access */}
            <button
              onClick={() => {
                navigate('/cart');
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 p-3 bg-emerald-50 text-emerald-700 rounded-lg font-medium"
            >
              <Icon name="ShoppingCart" size={20} />
              <span>View Cart ({cartCount})</span>
              {cartCount > 0 && (
                <span className="text-sm">- {formatPrice(cartTotal)}</span>
              )}
            </button>
            
            <Button
              variant="outline"
              size="md"
              iconName="MessageCircle"
              iconPosition="left"
              onClick={handleWhatsAppClick}
              className="w-full text-emerald-600 border-emerald-600 hover:bg-emerald-50"
            >
              WhatsApp Us
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
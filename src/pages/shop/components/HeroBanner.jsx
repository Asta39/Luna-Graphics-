import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

// Demo images for the carousel (replace with your actual images)
const heroSlides = [
  {
    id: 1,
    image: '/products/9.jpg',
    title: 'Events & Exhibitions',
    subtitle: 'Event booths & exhibitions merch',
    price: 'Upon Inquiry',
    badge: 'Featured',
    link: '/corporate/events-exhibitions' // Editable link
  },
  {
    id: 2,
    image: '/products/34.jpg',
    title: 'Corporate Branding',
    subtitle: 'Business Cards, Stationery',
    price: 'Upon Inquiry',
    badge: 'Popular',
    link: '/corporate-services' // Editable link
  },
  {
    id: 3,
    image: '/products/85.jpg',
    title: 'Large Format Printing',
    subtitle: 'Posters, Billboards, Backdrops',
    price: 'From KES 700',
    badge: 'Best Seller',
    link: '/services/large-format' // Editable link
  },
  {
    id: 4,
    image: '/products/55.jpg',
    title: 'Custom Merchandise',
    subtitle: 'T-Shirts, Mugs, Gifts',
    price: 'From KES 600',
    badge: 'Trending',
    link: '/shop?search=merch' // Editable link
  }
];

// Side banner images - now with editable links too
const sideBanners = [
  {
    id: 1,
    image: '/products/78.jpg',
    title: '2027 Political campaign Materials',
    subtitle: 'Campaign merch, campaign posters, campaign signs',
    link: '/corporate-services',
    badge: 'Featured'
  },
  {
    id: 2,
    image: '/products/31.jpg',
    title: 'Office Branding',
    subtitle: 'Wall Graphics & Signs',
    link: '/corporate/corporate-branding',
    badge: 'Hot'
  }
];

const HeroBanner = ({ onSearch }) => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const searchUrl = `/shop?search=${encodeURIComponent(searchQuery.trim())}`;
      window.location.href = searchUrl;
    }
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  const currentHero = heroSlides[currentSlide];

  // Handle click on main carousel
  const handleMainSlideClick = () => {
    if (currentHero.link) {
      navigate(currentHero.link);
    }
  };

  return (
    <section className="relative bg-gray-50 pt-0 mt-20">
      {/* Mobile-Only Search Bar */}
      <div className="lg:hidden bg-white border-b border-gray-200 px-4 py-3 sticky top-16 z-40">
        <form onSubmit={handleSearch} className="relative">
          <input
            type="text"
            placeholder="Search for banners, signage, business cards..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-20 py-2.5 rounded-full border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all text-sm"
          />
          <Icon 
            name="Search" 
            size={18} 
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <button 
            type="submit"
            className="absolute right-1.5 top-1/2 -translate-y-1/2 px-4 py-1.5 bg-emerald-600 text-white rounded-full text-sm font-medium hover:bg-emerald-700 transition-colors"
          >
            Search
          </button>
        </form>
      </div>

      {/* Main Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
        {/* Desktop: All same height | Mobile: Compact */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-4">
          
          {/* Main Carousel - Same height as side banners on desktop */}
          <div 
            className="lg:col-span-2 relative rounded-xl lg:rounded-2xl overflow-hidden group cursor-pointer h-[300px] sm:h-[280px] lg:h-[400px]"
            onClick={handleMainSlideClick}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                {/* Background Image */}
                <img 
                  src={currentHero.image} 
                  alt={currentHero.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent lg:from-black/70 lg:via-black/40" />
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-center p-4 sm:p-6 lg:p-10">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {/* Badge */}
                    <span className="inline-block px-2 py-0.5 lg:px-3 lg:py-1 bg-emerald-500 text-white text-[10px] lg:text-xs font-bold rounded-full mb-2 lg:mb-4 uppercase tracking-wide">
                      {currentHero.badge}
                    </span>
                    
                    {/* Title */}
                    <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-white mb-1 lg:mb-2 leading-tight">
                      {currentHero.title}
                    </h2>
                    
                    {/* Subtitle */}
                    <p className="hidden sm:block text-sm lg:text-lg text-gray-200 mb-2 lg:mb-4">
                      {currentHero.subtitle}
                    </p>
                    
                    {/* Price */}
                    <p className="text-lg lg:text-2xl font-bold text-emerald-400 mb-3 lg:mb-6">
                      {currentHero.price}
                    </p>
                    
                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-2 lg:gap-3">
                      <Button 
                        variant="primary" 
                        size="sm"
                        className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs lg:text-base px-3 lg:px-6"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(currentHero.link || '/shop');
                        }}
                      >
                        Shop Now
                      </Button>
                      <Button 
                        variant="secondary" 
                        size="sm"
                        className="border-white text-white hover:bg-white hover:text-gray-900 text-xs lg:text-base px-3 lg:px-6 hidden sm:inline-flex"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate('/contact');
                        }}
                      >
                        Get Quote
                      </Button>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={(e) => { e.stopPropagation(); prevSlide(); }}
              className="hidden lg:flex absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur rounded-full items-center justify-center text-white hover:bg-white/30 transition-colors opacity-0 group-hover:opacity-100"
            >
              <Icon name="ChevronLeft" size={24} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); nextSlide(); }}
              className="hidden lg:flex absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur rounded-full items-center justify-center text-white hover:bg-white/30 transition-colors opacity-0 group-hover:opacity-100"
            >
              <Icon name="ChevronRight" size={24} />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-2 lg:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 lg:gap-2">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => { e.stopPropagation(); goToSlide(index); }}
                  className={`h-1.5 lg:h-2 rounded-full transition-all ${
                    index === currentSlide 
                      ? 'bg-emerald-500 w-4 lg:w-6' 
                      : 'bg-white/50 hover:bg-white/80 w-1.5 lg:w-2'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Side Banners - Same height as main carousel */}
          <div className="hidden lg:flex flex-col gap-4 h-[400px]">
            {sideBanners.map((banner, index) => (
              <motion.div
                key={banner.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="relative flex-1 rounded-2xl overflow-hidden group cursor-pointer"
                onClick={() => navigate(banner.link)}
              >
                <img 
                  src={banner.image} 
                  alt={banner.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="text-emerald-400 text-xs font-bold uppercase tracking-wide mb-1 block">
                    {banner.badge}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-1">
                    {banner.title}
                  </h3>
                  <p className="text-sm text-gray-300 mb-3">
                    {banner.subtitle}
                  </p>
                  <span className="inline-flex items-center text-sm text-white font-medium group-hover:text-emerald-400 transition-colors">
                    Shop Now
                    <Icon name="ArrowRight" size={16} className="ml-1" />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-4 lg:mt-8 flex lg:grid lg:grid-cols-4 gap-3 overflow-x-auto pb-2 lg:pb-0 scrollbar-hide">
          {[
            { icon: 'Truck', text: 'Free Delivery', subtext: 'Orders over KES 5,000' },
            { icon: 'Clock', text: '24-48h Turnaround', subtext: 'Express available' },
            { icon: 'Shield', text: 'Quality Guaranteed', subtext: 'Premium materials' },
            { icon: 'Headphones', text: '24/7 Support', subtext: 'Always here to help' }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="flex items-center gap-2 lg:gap-3 p-3 lg:p-4 bg-white rounded-lg lg:rounded-xl shadow-sm flex-shrink-0 min-w-[140px] lg:min-w-0"
            >
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name={item.icon} size={16} className="lg:w-5 lg:h-5 text-emerald-600" />
              </div>
              <div className="min-w-0">
                <p className="font-semibold text-gray-900 text-xs lg:text-sm truncate">{item.text}</p>
                <p className="text-[10px] lg:text-xs text-gray-500 truncate">{item.subtext}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
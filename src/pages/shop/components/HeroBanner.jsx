import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const heroSlides = [
  {
    id: 1,
    image: '/banners/banner-large-format.webp',
    link: '/services/large-format',
  },
  {
    id: 2,
    image: '/banners/banner-october.webp',
    link: '/shop',
  },
  {
    id: 3,
    image: '/banners/banner-customer-service.webp',
    link: '/contact',
  },
];

const sideBanners = [
  {
    id: 1,
    image: '/banners/banner-large-format.webp',
    link: '/services/large-format',
  },
  {
    id: 2,
    image: '/banners/banner-customer-service.webp',
    link: '/contact',
  },
];

const HeroBanner = ({ onSearch }) => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;

  // Auto-advance carousel — longer on mobile so banners are readable
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, isMobile ? 10000 : 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isMobile]);

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
    <section className="relative bg-gray-50 pt-0">
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
        <div className="lg:max-w-3xl lg:mx-auto grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-4">

          {/* Main slot — carousel on mobile, static on desktop */}
          <div
            className="lg:col-span-2 relative rounded-xl lg:rounded-2xl overflow-hidden group cursor-pointer w-full"
            style={{ aspectRatio: '1 / 1' }}
            onClick={handleMainSlideClick}
          >
            {/* Mobile: animated carousel */}
            <div className="lg:hidden absolute inset-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 w-full h-full"
                >
                  <img
                    src={currentHero.image}
                    alt="Luna Graphics promotion"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Dots — mobile only */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => { e.stopPropagation(); goToSlide(index); }}
                    className={`h-1.5 rounded-full transition-all ${
                      index === currentSlide
                        ? 'bg-emerald-500 w-4'
                        : 'bg-white/50 hover:bg-white/80 w-1.5'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Desktop: static first banner */}
            <img
              src={heroSlides[0].image}
              alt="Luna Graphics promotion"
              className="hidden lg:block w-full h-full object-cover"
            />
          </div>

          {/* Side Banners - Same height as main carousel */}
          <div className="hidden lg:flex flex-col gap-4">
            {sideBanners.map((banner, index) => (
              <motion.div
                key={banner.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="relative rounded-2xl overflow-hidden group cursor-pointer w-full"
                style={{ aspectRatio: '1 / 1' }}
                onClick={() => navigate(banner.link)}
              >
                <img
                  src={banner.image}
                  alt="Luna Graphics promotion"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
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
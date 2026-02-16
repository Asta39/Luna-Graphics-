// src/shop/components/ServicesCarousel.jsx
import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Printer, Sun, FileText, Thermometer, Layers, Scissors, Zap, Truck, MapPin, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import { services, getWhatsAppLink } from '../../../data/services.js';

const iconMap = {
  Printer,
  Sun,
  FileText,
  Thermometer,
  Layers,
  Scissors,
  Zap,
  Truck,
  MapPin,
  Users
};

const ServicesCarousel = () => {
  const navigate = useNavigate();
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  // Double the services array for seamless infinite scroll
  const duplicatedServices = [...services, ...services];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    // Auto-scroll animation
    let animationId;
    let scrollSpeed = 0.5; // pixels per frame - slow and smooth

    const autoScroll = () => {
      if (!isDragging && scrollContainer) {
        scrollContainer.scrollLeft += scrollSpeed;
        
        // Reset to beginning when reaching the duplicated section
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
        
        updateArrowVisibility();
      }
      animationId = requestAnimationFrame(autoScroll);
    };

    animationId = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationId);
  }, [isDragging]);

  const updateArrowVisibility = () => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    
    setShowLeftArrow(scrollContainer.scrollLeft > 100);
    setShowRightArrow(
      scrollContainer.scrollLeft < (scrollContainer.scrollWidth - scrollContainer.clientWidth - 100)
    );
  };

  // Mouse drag handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
    scrollRef.current.style.cursor = 'grabbing';
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (scrollRef.current) {
      scrollRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    scrollRef.current.scrollLeft = scrollLeft - walk;
    updateArrowVisibility();
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      if (scrollRef.current) {
        scrollRef.current.style.cursor = 'grab';
      }
    }
  };

  // Touch handlers for mobile
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
    updateArrowVisibility();
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const scroll = (direction) => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    
    const scrollAmount = 400; // Width of card + gap
    scrollContainer.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
    
    setTimeout(updateArrowVisibility, 300);
  };

  const handleServiceClick = (serviceId) => {
    navigate(`/service/${serviceId}`);
  };

  const handleWhatsAppClick = (e, service) => {
    e.stopPropagation();
    window.open(getWhatsAppLink(service.name), '_blank');
  };

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
            <p className="mt-2 text-gray-600">Professional printing and branding solutions for your business</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => scroll('left')}
              className={`p-2 rounded-full border border-gray-300 hover:border-green-600 hover:text-green-600 transition-colors ${
                showLeftArrow ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className={`p-2 rounded-full border border-gray-300 hover:border-green-600 hover:text-green-600 transition-colors ${
                showRightArrow ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Carousel Container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-hidden cursor-grab select-none"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {duplicatedServices.map((service, index) => {
          const IconComponent = iconMap[service.icon] || Printer;
          
          return (
            <div
              key={`${service.id}-${index}`}
              onClick={() => handleServiceClick(service.id)}
              className="flex-shrink-0 w-80 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 group"
            >
              {/* Card Header with Icon */}
              <div className="h-32 bg-gradient-to-br from-green-50 to-green-100 rounded-t-lg flex items-center justify-center group-hover:from-green-100 group-hover:to-green-200 transition-colors">
                <IconComponent className="w-16 h-16 text-green-600" />
              </div>
              
              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  {service.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {service.shortDescription}
                </p>
                
                {/* Features Preview */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.features.slice(0, 2).map((feature, idx) => (
                    <span 
                      key={idx}
                      className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded"
                    >
                      {feature.split(' ').slice(0, 3).join(' ')}...
                    </span>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={(e) => handleWhatsAppClick(e, service)}
                    className="flex-1 bg-green-600 text-white text-sm font-medium py-2 px-4 rounded hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Inquire</span>
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleServiceClick(service.id);
                    }}
                    className="px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded hover:border-green-600 hover:text-green-600 transition-colors"
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Gradient Overlays for smooth fade effect */}
      <div className="relative max-w-7xl mx-auto">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none" />
      </div>
    </section>
  );
};

export default ServicesCarousel;
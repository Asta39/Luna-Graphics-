import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Icon from '../../AppIcon';

// Mock data - Replace with actual API integration when you have more reviews
// For now, manually add your 3 reviews here
const reviewsData = [
  {
    id: 1,
    author: "Sarah M.",
    rating: 5,
    date: "2024-12-15",
    text: "Exceptional quality and fast turnaround! Luna Graphics printed 500 banners for our corporate event and they were perfect. The team was professional and delivered on time. Highly recommend for any large format printing needs in Nairobi.",
    avatar: "SM",
    verified: true,
    service: "Large Format Printing"
  },
  {
    id: 2,
    author: "James Kariuki",
    rating: 5,
    date: "2025-01-08",
    text: "Best print shop in Nairobi hands down. I've used them for CNC cutting acrylic signs for my restaurant and the precision is incredible. Their UV printing on wood is also top-notch. Fair pricing and excellent customer service.",
    avatar: "JK",
    verified: true,
    service: "CNC Cutting & UV Printing"
  },
  {
    id: 3,
    author: "Campaign Manager 2027",
    rating: 5,
    date: "2025-02-20",
    text: "Luna Graphics handled our entire campaign printing needs - from posters to t-shirts to vehicle wraps. They understand the urgency of political campaigns and delivered quality materials across 5 counties. Our candidate was impressed!",
    avatar: "CM",
    verified: true,
    service: "Political Campaign Materials"
  }
];

const GoogleReviews = ({ 
  variant = 'carousel', // 'carousel', 'grid', 'badge', 'full'
  limit = 3,
  showWriteReview = true,
  className = '' 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-rotate carousel
  useEffect(() => {
    if (!isAutoPlaying || variant !== 'carousel') return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.min(reviewsData.length, limit));
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, variant, limit]);

  const renderStars = (rating) => {
    return (
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Icon
            key={i}
            name="Star"
            size={16}
            className={i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
          />
        ))}
      </div>
    );
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-KE', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  // Badge variant (compact, for footer/header)
  if (variant === 'badge') {
    return (
      <a 
        href="https://g.page/r/YOUR_GOOGLE_PLACE_ID/review" // Replace with actual link
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2 bg-white rounded-lg px-3 py-2 shadow-sm hover:shadow-md transition-shadow ${className}`}
      >
        <div className="flex items-center gap-1">
          <img 
            src="/google-icon.svg" 
            alt="Google" 
            className="w-5 h-5"
            onError={(e) => e.target.style.display = 'none'}
          />
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Icon key={i} name="Star" size={12} className="fill-yellow-400" />
            ))}
          </div>
        </div>
        <span className="text-sm font-medium text-gray-700">
          5.0 ({reviewsData.length} reviews)
        </span>
      </a>
    );
  }

  // Grid variant
  if (variant === 'grid') {
    return (
      <div className={className}>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviewsData.slice(0, limit).map((review) => (
            <div 
              key={review.id}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary font-semibold">
                    {review.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{review.author}</p>
                    {review.verified && (
                      <div className="flex items-center gap-1 text-xs text-green-600">
                        <Icon name="CheckCircle" size={12} />
                        <span>Verified customer</span>
                      </div>
                    )}
                  </div>
                </div>
                <img 
                  src="/google-icon.svg" 
                  alt="Google" 
                  className="w-6 h-6 opacity-50"
                  onError={(e) => e.target.style.display = 'none'}
                />
              </div>
              
              <div className="mb-2">{renderStars(review.rating)}</div>
              <p className="text-sm text-gray-500 mb-3">{formatDate(review.date)}</p>
              
              <p className="text-gray-700 mb-3 line-clamp-4">"{review.text}"</p>
              
              {review.service && (
                <span className="inline-block text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                  {review.service}
                </span>
              )}
            </div>
          ))}
        </div>
        
        {showWriteReview && (
          <div className="text-center mt-8">
            <a
              href="https://g.page/r/YOUR_GOOGLE_PLACE_ID/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              <Icon name="Pencil" size={16} />
              Write a review on Google
            </a>
          </div>
        )}
      </div>
    );
  }

  // Carousel variant (default, for homepage)
  return (
    <div className={`relative ${className}`}>
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {reviewsData.slice(0, limit).map((review) => (
            <div 
              key={review.id}
              className="w-full flex-shrink-0 px-4"
            >
              <div className="max-w-2xl mx-auto bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-gray-100 text-center">
                {/* Google Logo */}
                <div className="flex justify-center mb-6">
                  <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full">
                    <img 
                      src="/google-icon.svg" 
                      alt="Google" 
                      className="w-5 h-5"
                      onError={(e) => e.target.style.display = 'none'}
                    />
                    <span className="text-sm text-gray-600">Google Review</span>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex justify-center mb-4">
                  {renderStars(review.rating)}
                </div>

                {/* Quote */}
                <blockquote className="text-lg md:text-xl text-gray-700 mb-6 italic">
                  "{review.text}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center justify-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary font-bold text-lg">
                    {review.avatar}
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-gray-900">{review.author}</p>
                    <p className="text-sm text-gray-500">{formatDate(review.date)}</p>
                    {review.verified && (
                      <div className="flex items-center gap-1 text-xs text-green-600 mt-0.5">
                        <Icon name="CheckCircle" size={10} />
                        <span>Verified</span>
                      </div>
                    )}
                  </div>
                </div>

                {review.service && (
                  <span className="inline-block mt-4 text-sm bg-primary-50 text-primary px-3 py-1 rounded-full">
                    {review.service}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {reviewsData.slice(0, limit).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              index === currentIndex ? 'bg-primary' : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to review ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => setCurrentIndex((prev) => (prev - 1 + reviewsData.length) % reviewsData.length)}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
        aria-label="Previous review"
      >
        <Icon name="ChevronLeft" size={20} className="text-gray-600" />
      </button>
      <button
        onClick={() => setCurrentIndex((prev) => (prev + 1) % reviewsData.length)}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
        aria-label="Next review"
      >
        <Icon name="ChevronRight" size={20} className="text-gray-600" />
      </button>

      {/* Write Review CTA */}
      {showWriteReview && (
        <div className="text-center mt-8">
          <p className="text-gray-600 mb-2">Had a great experience with us?</p>
          <a
            href="https://g.page/r/YOUR_GOOGLE_PLACE_ID/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white border-2 border-primary text-primary px-6 py-2 rounded-full font-medium hover:bg-primary hover:text-white transition-colors"
          >
            <Icon name="Star" size={18} />
            Leave a Google Review
          </a>
        </div>
      )}
    </div>
  );
};

export default GoogleReviews;
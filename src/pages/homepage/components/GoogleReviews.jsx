import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import { reviews, reviewStats } from '../../../data/reviewsData'; // Auto-generated data

const GoogleReviews = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const navigate = useNavigate();

  // Auto-rotate reviews every 5 seconds
  useEffect(() => {
    if (reviews.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handlePrevious = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleNext = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={16}
        className={index < Math.floor(rating) ? "text-yellow-400 fill-current" : "text-gray-300"}
      />
    ));
  };

  // Handle case where no reviews exist
  if (!reviews || reviews.length === 0) {
    return (
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-500">Reviews loading...</p>
        </div>
      </section>
    );
  }

  const currentReviewData = reviews[currentReview];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary-50 to-accent-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-success-100 rounded-full">
            <Icon name="Star" size={16} className="mr-2 text-success-600" />
            <span className="text-sm font-semibold text-success-700">Google Reviews</span>
            {reviewStats.note && (
              <span className="ml-2 text-xs text-orange-600">(Live Data)</span>
            )}
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-text-primary">
            What Our Clients
            <span className="block text-primary">Say About Us</span>
          </h2>
          
          <div className="flex items-center justify-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="flex">
                {renderStars(reviewStats.averageRating)}
              </div>
              <span className="text-lg font-semibold text-text-primary">
                {reviewStats.averageRating}
              </span>
            </div>
            <div className="w-px h-6 bg-border"></div>
            <span className="text-text-secondary">
              Based on {reviewStats.totalReviews}+ Google Reviews
            </span>
          </div>
          
          {/* Last Updated (subtle) */}
          <p className="text-xs text-gray-400">
            Last updated: {new Date(reviewStats.lastUpdated).toLocaleDateString('en-KE')}
          </p>
        </div>

        {/* Reviews Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-background rounded-2xl shadow-lg p-8 lg:p-12 min-h-[350px] flex flex-col justify-center">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                {renderStars(currentReviewData.rating)}
              </div>
              
              <blockquote className="text-lg lg:text-xl text-text-primary leading-relaxed mb-6 line-clamp-4">
                "{currentReviewData.review}"
              </blockquote>
              
              <div className="flex items-center justify-center space-x-4">
                <Image
                  src={currentReviewData.avatar}
                  alt={currentReviewData.name}
                  className="w-12 h-12 rounded-full object-cover bg-gray-100"
                  onError={(e) => {
                    e.target.src = '/assets/team-member-placeholder.jpg';
                  }}
                />
                <div className="text-left">
                  <div className="font-semibold text-text-primary">
                    {currentReviewData.name}
                  </div>
                  <div className="text-sm text-text-secondary">
                    {currentReviewData.relativeTime || currentReviewData.date}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center space-x-4 mt-auto">
              <button 
                onClick={handlePrevious} 
                className="w-10 h-10 bg-surface-100 hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition-colors duration-200"
                aria-label="Previous review"
              >
                <Icon name="ChevronLeft" size={20} />
              </button>
              
              <div className="flex space-x-2">
                {reviews.map((_, index) => (
                  <button 
                    key={index} 
                    onClick={() => setCurrentReview(index)} 
                    className={`w-2 h-2 rounded-full transition-colors duration-200 ${ 
                      index === currentReview ? 'bg-primary' : 'bg-surface-300' 
                    }`}
                    aria-label={`Go to review ${index + 1}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={handleNext} 
                className="w-10 h-10 bg-surface-100 hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition-colors duration-200"
                aria-label="Next review"
              >
                <Icon name="ChevronRight" size={20} />
              </button>
            </div>
          </div>

          {/* Google Badge */}
          <div className="absolute -top-4 -right-4 bg-background rounded-lg shadow-lg p-4 border border-border hidden sm:block">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">G</span>
              </div>
              <div>
                <div className="text-sm font-semibold text-text-primary">Google</div>
                <div className="text-xs text-text-secondary">Verified Reviews</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-text-secondary mb-6">
            Join hundreds of satisfied customers who trust Luna Graphics for their printing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/contact-page')}
              className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-600 transition-colors"
            >
              Start Your Project
            </button>
            <button
              onClick={() => window.open('https://www.google.com/search?q=Luna+Graphics+LTD+reviews', '_blank')}
              className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
            >
              Read All Reviews
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
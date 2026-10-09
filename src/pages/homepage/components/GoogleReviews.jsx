import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const REVIEWS = [
  {
    id: 1,
    name: 'Sarah Kimani',
    rating: 5,
    review: 'Excellent printing quality and fast turnaround! Luna Graphics handled our corporate rebrand perfectly. Highly recommend their UV printing services.',
    date: 'Jan 2024',
    service: 'Corporate Branding',
  },
  {
    id: 2,
    name: 'James Ochieng',
    rating: 5,
    review: 'Best political campaign materials in Nairobi. They delivered 10,000 banners across 5 counties in just one week. Professional and reliable!',
    date: 'Dec 2023',
    service: 'Political Campaign',
  },
  {
    id: 3,
    name: 'Wanjiku Mwangi',
    rating: 5,
    review: 'Our exhibition stand at KICC looked amazing thanks to Luna Graphics. Great attention to detail and installation was seamless.',
    date: 'Nov 2023',
    service: 'Exhibition Branding',
  },
  {
    id: 4,
    name: 'David Mutua',
    rating: 5,
    review: 'Fast, professional, and the quality exceeded expectations. Our company branded fleet looks incredible. Will definitely use them again.',
    date: 'Oct 2023',
    service: 'Vehicle Branding',
  },
  {
    id: 5,
    name: 'Amina Hassan',
    rating: 5,
    review: 'Luna Graphics did our restaurant menu and signage. The colours are vibrant and the material is top quality. Customers always ask who did our branding!',
    date: 'Sep 2023',
    service: 'Restaurant Branding',
  },
];

const STATS = { averageRating: 4.9, totalReviews: 150 };

const renderStars = (rating) =>
  Array.from({ length: 5 }, (_, i) => (
    <Icon
      key={i}
      name="Star"
      size={16}
      className={i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
    />
  ));

const GoogleReviews = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    const t = setInterval(() => setCurrent((p) => (p + 1) % REVIEWS.length), 6000);
    return () => clearInterval(t);
  }, []);

  const review = REVIEWS[current];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary-50 to-accent-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          {/* Google Reviews Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-3 bg-white rounded-2xl shadow-md border border-gray-100">
            {/* Google G logo */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <div className="text-left">
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-bold text-gray-900">{STATS.averageRating}</span>
                <div className="flex">{renderStars(5)}</div>
              </div>
              <div className="text-xs text-gray-500">{STATS.totalReviews}+ Google Reviews</div>
            </div>
            {/* "Highly Rated" pill */}
            <span className="ml-2 px-2 py-0.5 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
              Highly Rated
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-text-primary">
            What Our Clients
            <span className="block text-primary">Say About Us</span>
          </h2>
        </div>

        {/* Review Card */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 min-h-[320px] flex flex-col justify-between">
            <div className="text-center">
              <div className="flex justify-center mb-4">{renderStars(review.rating)}</div>
              <blockquote className="text-lg lg:text-xl text-text-primary leading-relaxed mb-6">
                "{review.review}"
              </blockquote>
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-sm">
                  {review.name.charAt(0)}
                </div>
                <div className="text-left">
                  <div className="font-semibold text-text-primary">{review.name}</div>
                  <div className="text-sm text-text-secondary">{review.service} · {review.date}</div>
                </div>
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {REVIEWS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all ${i === current ? 'bg-primary w-4' : 'bg-gray-300 w-1.5'}`}
                  aria-label={`Review ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Floating Google badge */}
          <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg px-3 py-2 border border-gray-100 hidden sm:flex items-center gap-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <div>
              <div className="text-xs font-semibold text-gray-800">Google</div>
              <div className="text-[10px] text-gray-500">Verified</div>
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
              onClick={() => navigate('/contact')}
              className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-600 transition-colors"
            >
              Start Your Project
            </button>
            <button
              onClick={() => window.open('https://www.google.com/search?q=Luna+Graphics+LTD+Nairobi+reviews', '_blank')}
              className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
            >
              Read All Reviews on Google
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default GoogleReviews;

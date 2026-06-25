import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false
  });
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('lunaCookieConsent');
    if (!consent) {
      // Delay showing banner for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      // Apply saved preferences
      const savedPrefs = JSON.parse(consent);
      setPreferences(savedPrefs);
      applyPreferences(savedPrefs);
    }
  }, []);

  const applyPreferences = (prefs) => {
    // Apply Google Analytics only if analytics is true
    if (prefs.analytics) {
      window.gtag && window.gtag('consent', 'update', {
        'analytics_storage': 'granted'
      });
      // Enable GA tracking
      window[`ga-disable-G-XK78CKXKG2`] = false;
    } else {
      // Disable GA tracking
      window.gtag && window.gtag('consent', 'update', {
        'analytics_storage': 'denied'
      });
      window[`ga-disable-G-XK78CKXKG2`] = true;
    }

    // Apply marketing cookies if enabled (future proofing)
    if (prefs.marketing) {
      window.gtag && window.gtag('consent', 'update', {
        'ad_storage': 'granted',
        'ad_user_data': 'granted',
        'ad_personalization': 'granted'
      });
    } else {
      window.gtag && window.gtag('consent', 'update', {
        'ad_storage': 'denied',
        'ad_user_data': 'denied',
        'ad_personalization': 'denied'
      });
    }
  };

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true
    };
    localStorage.setItem('lunaCookieConsent', JSON.stringify(allAccepted));
    setPreferences(allAccepted);
    applyPreferences(allAccepted);
    setIsVisible(false);
  };

  const handleAcceptNecessary = () => {
    const necessaryOnly = {
      necessary: true,
      analytics: false,
      marketing: false
    };
    localStorage.setItem('lunaCookieConsent', JSON.stringify(necessaryOnly));
    setPreferences(necessaryOnly);
    applyPreferences(necessaryOnly);
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('lunaCookieConsent', JSON.stringify(preferences));
    applyPreferences(preferences);
    setShowPreferences(false);
    setIsVisible(false);
  };

  const togglePreference = (key) => {
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6">
      <div className="max-w-4xl mx-auto">
        {!showPreferences ? (
          // Main Banner - Pill Style
          <div className="bg-gray-900/95 backdrop-blur-md text-white rounded-full shadow-2xl border border-gray-700/50 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 animate-slide-up">
            
            {/* Icon + Text */}
            <div className="flex items-center gap-3 flex-1">
              <div className="bg-green-500/20 p-2 rounded-full flex-shrink-0">
                <svg 
                  className="w-5 h-5 text-green-400" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" 
                  />
                </svg>
              </div>
              <p className="text-sm text-gray-200 leading-relaxed">
                We use cookies to enhance your experience. 
                <button 
                  onClick={() => setShowPreferences(true)}
                  className="text-green-400 hover:text-green-300 underline ml-1 transition-colors"
                >
                  Customize
                </button>
                {' '}or read our{' '}
                <button 
                  onClick={() => {
                    setIsVisible(false);
                    navigate('/privacy-policy');
                  }}
                  className="text-green-400 hover:text-green-300 underline transition-colors"
                >
                  Privacy Policy
                </button>.
              </p>
            </div>

            {/* Action Buttons - Pill Style */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <button
                onClick={handleAcceptNecessary}
                className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white border border-gray-600 hover:border-gray-500 rounded-full transition-all duration-200 hover:bg-gray-800"
              >
                Necessary Only
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-5 py-2 text-sm font-medium text-gray-900 bg-green-400 hover:bg-green-300 rounded-full transition-all duration-200 shadow-lg hover:shadow-green-400/25"
              >
                Accept All
              </button>
            </div>
          </div>
        ) : (
          // Preferences Modal - Card Style
          <div className="bg-gray-900/95 backdrop-blur-md text-white rounded-2xl shadow-2xl border border-gray-700/50 p-6 animate-slide-up">
            
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Cookie Preferences</h3>
                <p className="text-sm text-gray-400">Customize how we use cookies on our site</p>
              </div>
              <button
                onClick={() => setShowPreferences(false)}
                className="p-2 hover:bg-gray-800 rounded-full transition-colors"
              >
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Cookie Options */}
            <div className="space-y-4 mb-6">
              
              {/* Necessary - Always On */}
              <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-xl border border-gray-700/50">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium text-white">Necessary</span>
                    <span className="px-2 py-0.5 text-xs font-medium bg-green-500/20 text-green-400 rounded-full">Required</span>
                  </div>
                  <p className="text-sm text-gray-400">Essential for the website to function properly. Cannot be disabled.</p>
                </div>
                <div className="relative">
                  <input 
                    type="checkbox" 
                    checked={preferences.necessary}
                    disabled
                    className="sr-only"
                  />
                  <div className="w-12 h-6 bg-green-500 rounded-full cursor-not-allowed opacity-50"></div>
                  <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm transform translate-x-6"></div>
                </div>
              </div>

              {/* Analytics */}
              <div className="flex items-center justify-between p-4 bg-gray-800/30 rounded-xl border border-gray-700/30 hover:border-gray-600/50 transition-colors">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium text-white">Analytics</span>
                    <span className="px-2 py-0.5 text-xs font-medium bg-blue-500/20 text-blue-400 rounded-full">Google Analytics</span>
                  </div>
                  <p className="text-sm text-gray-400">Helps us understand how visitors interact with our website.</p>
                </div>
                <button
                  onClick={() => togglePreference('analytics')}
                  className={`relative w-12 h-6 rounded-full transition-colors duration-200 ${preferences.analytics ? 'bg-green-500' : 'bg-gray-600'}`}
                >
                  <span className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm transition-transform duration-200 ${preferences.analytics ? 'translate-x-6' : 'translate-x-0'}`}></span>
                </button>
              </div>

              {/* Marketing - Future Proofing */}
              <div className="flex items-center justify-between p-4 bg-gray-800/30 rounded-xl border border-gray-700/30 hover:border-gray-600/50 transition-colors">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium text-white">Marketing</span>
                    <span className="px-2 py-0.5 text-xs font-medium bg-purple-500/20 text-purple-400 rounded-full">Optional</span>
                  </div>
                  <p className="text-sm text-gray-400">Used to deliver personalized advertisements (currently not in use).</p>
                </div>
                <button
                  onClick={() => togglePreference('marketing')}
                  className={`relative w-12 h-6 rounded-full transition-colors duration-200 ${preferences.marketing ? 'bg-green-500' : 'bg-gray-600'}`}
                >
                  <span className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm transition-transform duration-200 ${preferences.marketing ? 'translate-x-6' : 'translate-x-0'}`}></span>
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
              <button
                onClick={handleAcceptNecessary}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Reject Optional
              </button>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowPreferences(false)}
                  className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white border border-gray-600 hover:border-gray-500 rounded-full transition-all"
                >
                  Back
                </button>
                <button
                  onClick={handleSavePreferences}
                  className="px-5 py-2 text-sm font-medium text-gray-900 bg-green-400 hover:bg-green-300 rounded-full transition-all shadow-lg hover:shadow-green-400/25"
                >
                  Save Preferences
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookieBanner;
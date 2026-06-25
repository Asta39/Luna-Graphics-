import React, { useState } from 'react';

const CookieSettingsButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const openCookieSettings = () => {
    // Clear consent to reopen banner
    localStorage.removeItem('lunaCookieConsent');
    window.location.reload();
  };

  return (
    <button
      onClick={openCookieSettings}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed bottom-4 left-4 z-40 bg-gray-900/80 backdrop-blur-sm text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition-all duration-300 group"
      aria-label="Cookie Settings"
    >
      <svg 
        className="w-5 h-5" 
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
      
      {/* Tooltip */}
      <span className={`
        absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded 
        whitespace-nowrap transition-all duration-200
        ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2 pointer-events-none'}
      `}>
        Cookie Settings
      </span>
    </button>
  );
};

export default CookieSettingsButton;
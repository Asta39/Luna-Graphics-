// src/components/ui/WhatsAppChat.jsx
import React, { useState, useEffect } from 'react';
import { X, Send, Clock } from 'lucide-react';
import logo from '../../assets/luna-logo.png';


const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  const phoneNumber = "+254791159618";
  const brandName = "Luna Graphics";
  const tagline = "Online";
  
  // Prefilled message
  const prefilledMessage = "Hi Luna Graphics! I'm interested in your printing services and would like to get a quote.";
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(prefilledMessage)}`;

  // Smooth entrance animation on mount
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleChatOpen = () => {
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* Main Widget Container */}
      <div 
        className={`wa-bubble fixed bottom-[max(1rem,env(safe-area-inset-bottom))] left-4 sm:bottom-6 sm:left-6 z-50 flex flex-col items-start transition-all duration-500 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        
        {/* Chat Popup - Only shows when toggled */}
        {isOpen && (
<div className="materialize-up mb-3 bg-white rounded-3xl shadow-[0_24px_48px_-12px_rgba(0,0,0,0.25)] overflow-hidden w-[min(20rem,calc(100vw-2rem))] border border-black/[0.06]">            {/* Header */}
            <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {/* Company Logo Placeholder - Replace with your actual logo */}
                  <div className="relative">
<img 
  src={logo} 
  alt="Luna Graphics" 
  className="w-12 h-12 rounded-full object-cover border-2 border-white/30 bg-white/10"
/>                    {/* Online Indicator */}
                    <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-emerald-300 border-2 border-emerald-500 rounded-full"></div>
                  </div>
                  
                  <div>
                    <h3 className="text-white font-semibold text-sm leading-tight">{brandName}</h3>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <div className="w-1.5 h-1.5 bg-emerald-200 rounded-full"></div>
                      <span className="text-emerald-100 text-xs font-medium">{tagline}</span>
                    </div>
                  </div>
                </div>
                
                <button 
                  onClick={() => setIsOpen(false)}
                  aria-label="Close chat"
                  className="press w-9 h-9 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 rounded-full"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Chat Body */}
            <div className="bg-gray-50 p-4 min-h-[120px] flex flex-col justify-end">
              <div className="bg-white rounded-2xl rounded-tl-sm p-3 shadow-sm border border-gray-100 max-w-[85%]">
                <p className="text-gray-700 text-sm leading-relaxed">
                  Hello! 👋 Welcome to <span className="font-semibold text-emerald-600">{brandName}</span>. How can we help you with your printing needs today?
                </p>
                <div className="flex items-center gap-1 mt-2 text-gray-400 text-xs">
                  <Clock size={12} />
                  <span>Just now</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="p-4 bg-white border-t border-gray-100">
              <button
                onClick={handleChatOpen}
                className="press w-full h-12 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl flex items-center justify-center gap-2 group"
              >
                <span>Start Chat</span>
                <Send size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <p className="text-center text-gray-400 text-xs mt-3">
                Typically replies in minutes
              </p>
            </div>
          </div>
        )}

        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close chat' : 'Chat with Luna Graphics on WhatsApp'}
          aria-expanded={isOpen}
          className={`press relative w-14 h-14 rounded-full flex items-center justify-center text-white shadow-[0_12px_28px_-8px_rgba(5,67,58,0.6)] ring-2 ring-white ${isOpen ? 'bg-gray-800 hover:bg-gray-900' : 'bg-[#05433a]'}`}
        >
          {!isOpen && (
            <>
              <img src={logo} alt="" className="w-full h-full rounded-full object-cover" />
              <span className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 bg-emerald-600 border-2 border-white rounded-full" aria-hidden="true" />
            </>
          )}

          {/* Icon when open */}
          {isOpen && (
            <X size={24} />
          )}

          
        </button>
      </div>

      {/* Backdrop for mobile - closes widget when clicking outside */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default WhatsAppChat;
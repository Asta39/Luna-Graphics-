// src/components/ui/WhatsAppChat.jsx
import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Send, Clock } from 'lucide-react';
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
        className={`fixed bottom-6 left-6 z-50 flex flex-col items-end transition-all duration-500 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        
        {/* Chat Popup - Only shows when toggled */}
        {isOpen && (
<div className="mb-4 bg-white rounded-2xl shadow-2xl overflow-hidden w-80 border border-gray-100 animate-in slide-in-from-bottom-5 fade-in duration-300 items-start">            {/* Header */}
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
                    <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-emerald-300 border-2 border-emerald-500 rounded-full animate-pulse"></div>
                  </div>
                  
                  <div>
                    <h3 className="text-white font-semibold text-sm leading-tight">{brandName}</h3>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <div className="w-1.5 h-1.5 bg-emerald-200 rounded-full animate-pulse"></div>
                      <span className="text-emerald-100 text-xs font-medium">{tagline}</span>
                    </div>
                  </div>
                </div>
                
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-white hover:bg-white/10 rounded-full p-1.5 transition-all duration-200"
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
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5 group"
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
          className={`group relative flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white pl-4 pr-2 py-2 rounded-full shadow-2xl shadow-emerald-500/30 transition-all duration-300 hover:scale-110 hover:shadow-emerald-500/50 ${isOpen ? 'bg-gray-700 hover:bg-gray-800 shadow-gray-500/30 hover:shadow-gray-500/50' : ''}`}
        >
          {/* Compact View when closed */}
          {!isOpen && (
            <>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <img 
  src={logo} 
  alt="Luna Graphics" 
  className="w-8 h-8 rounded-full object-cover"
/>
                  <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-300 border-2 border-emerald-500 rounded-full"></div>
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-xs font-medium text-emerald-100">Luna Graphics</span>
                  <span className="text-sm font-semibold">Need help? Chat with us</span>
                </div>
              </div>
              <div className="bg-white/20 rounded-full p-2 ml-1">
                <MessageCircle size={20} className="fill-current" />
              </div>
            </>
          )}
          
          {/* Icon when open */}
          {isOpen && (
            <div className="p-2">
              <X size={24} />
            </div>
          )}

          
        </button>
      </div>

      {/* Backdrop for mobile - closes widget when clicking outside */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default WhatsAppChat;
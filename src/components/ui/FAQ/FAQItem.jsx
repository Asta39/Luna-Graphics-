import React, { useState, useRef, useEffect } from 'react';
import Icon from '../../AppIcon';

const FAQItem = ({ question, answer, isOpen, onToggle, index }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        className="flex items-center justify-between w-full py-4 px-2 text-left hover:bg-gray-50 transition-colors rounded-lg"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
      >
        <span className="text-base font-medium text-gray-900 pr-4">
          {question}
        </span>
        <span className="flex-shrink-0">
          <Icon 
            name={isOpen ? "Minus" : "Plus"} 
            size={20} 
            className={`text-primary transition-transform duration-200 ${isOpen ? 'rotate-0' : ''}`}
          />
        </span>
      </button>
      
      <div
        id={`faq-answer-${index}`}
        ref={contentRef}
        style={{ height: `${height}px` }}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        aria-hidden={!isOpen}
      >
        <div className="pb-4 px-2">
          <p className="text-gray-600 leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQItem;
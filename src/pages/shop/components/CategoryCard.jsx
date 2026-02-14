import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const CategoryCard = ({ category, isActive, onClick, variant = 'card' }) => {
  
  // Pill/Chip variant (horizontal scroll)
  if (variant === 'pill') {
    return (
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onClick}
        className={`flex-shrink-0 flex items-center gap-2 px-5 py-3 rounded-full font-medium transition-all whitespace-nowrap ${
          isActive 
            ? 'bg-emerald-600 text-white shadow-md' 
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        <Icon name={category.icon} size={18} />
        <span>{category.name}</span>
        <span className={`text-xs px-2 py-0.5 rounded-full ${
          isActive ? 'bg-white/20' : 'bg-gray-200'
        }`}>
          {category.count}
        </span>
        {isActive && (
          <motion.div 
            layoutId="activePill"
            className="absolute inset-0 border-2 border-emerald-600 rounded-full"
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )}
      </motion.button>
    );
  }

  // Card/Grid variant (default)
  return (
    <motion.button
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`relative overflow-hidden rounded-xl p-4 transition-all duration-300 text-left w-full ${
        isActive 
          ? 'bg-emerald-600 text-white shadow-lg' 
          : 'bg-white text-gray-700 hover:shadow-md border border-gray-200'
      }`}
    >
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-3 ${
        isActive ? 'bg-white/20' : 'bg-emerald-100'
      }`}>
        <Icon 
          name={category.icon} 
          size={24} 
          className={isActive ? 'text-white' : 'text-emerald-600'} 
        />
      </div>
      <h3 className="font-semibold text-sm mb-1 line-clamp-1">{category.name}</h3>
      <p className={`text-xs ${isActive ? 'text-emerald-100' : 'text-gray-500'}`}>
        {category.count} products
      </p>
      
      {isActive && (
        <div className="absolute top-3 right-3">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
        </div>
      )}
    </motion.button>
  );
};

export default CategoryCard;
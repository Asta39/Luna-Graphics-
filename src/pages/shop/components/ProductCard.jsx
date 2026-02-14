import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProductCard = ({ product, onInquire, viewMode = 'grid' }) => {
  const navigate = useNavigate();

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-KE', {
      style: 'currency',
      currency: 'KES',
      minimumFractionDigits: 0
    }).format(price);
  };

  const handleCardClick = () => {
    navigate(`/shop/product/${product.id}`);
  };

  const handleInquireClick = (e) => {
    e.stopPropagation();
    onInquire(product);
  };

  if (viewMode === 'list') {
    return (
      <motion.div 
        layout
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row cursor-pointer"
        onClick={handleCardClick}
      >
        {/* Fixed size image container */}
        <div className="relative w-full sm:w-48 h-48 flex-shrink-0 bg-gray-100 overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {product.discount && (
            <div className="absolute top-2 left-2 px-2 py-1 bg-red-500 text-white text-xs font-bold rounded">
              {product.discount}
            </div>
          )}
        </div>
        
        <div className="flex-1 p-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-emerald-600 font-semibold uppercase">{product.subcategory}</span>
              <div className="flex items-center text-amber-400">
                <Icon name="Star" size={14} className="fill-current" />
                <span className="text-xs ml-1 text-gray-600">{product.rating}</span>
              </div>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-emerald-600 transition-colors">
              {product.name}
            </h3>
            <p className="text-sm text-gray-500 line-clamp-2 mb-2">{product.description}</p>
          </div>
          
          <div className="flex items-center justify-between mt-4">
            <div>
              <span className="text-xl font-bold text-emerald-600">{formatPrice(product.price)}</span>
              {product.oldPrice && (
                <span className="text-sm text-gray-400 line-through ml-2">{formatPrice(product.oldPrice)}</span>
              )}
              <span className="text-xs text-gray-500 block">/{product.priceUnit}</span>
            </div>
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                size="sm"
                onClick={(e) => e.stopPropagation()}
              >
                View
              </Button>
              <Button 
                variant="primary" 
                size="sm" 
                className="bg-emerald-600 hover:bg-emerald-700"
                onClick={handleInquireClick}
              >
                Inquire
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  // GRID VIEW - Strict fixed heights
  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
      onClick={handleCardClick}
      style={{ height: '420px' }} // Fixed total card height
    >
      {/* Image container - fixed height */}
      <div className="relative h-48 bg-gray-100 overflow-hidden flex-shrink-0">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Badges */}
        {product.discount && (
          <div className="absolute top-3 left-3 px-2 py-1 bg-red-500 text-white text-xs font-bold rounded">
            {product.discount}
          </div>
        )}
        
        {product.badge && !product.discount && (
          <div className={`absolute top-3 left-3 px-3 py-1 text-white text-xs font-bold rounded-full ${
            product.badge === 'Hot' ? 'bg-red-500' :
            product.badge === 'New' ? 'bg-blue-500' :
            product.badge === 'Deal' ? 'bg-amber-500' :
            product.badge === 'Premium' ? 'bg-purple-500' :
            'bg-emerald-500'
          }`}>
            {product.badge}
          </div>
        )}

        {/* Quick action buttons */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <button 
            className="w-9 h-9 bg-white rounded-full shadow-md flex items-center justify-center text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <Icon name="Heart" size={16} />
          </button>
        </div>

        {/* Quick inquiry button */}
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <Button 
            variant="primary" 
            size="sm" 
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
            onClick={handleInquireClick}
          >
            Quick Inquiry
          </Button>
        </div>
      </div>
      
      {/* Content container - fixed height with flex */}
      <div className="p-4 flex flex-col flex-grow" style={{ height: '228px' }}>
        {/* Category and rating - fixed height */}
        <div className="flex items-center justify-between mb-2 h-5">
          <span className="text-xs text-emerald-600 font-semibold uppercase tracking-wide truncate max-w-[60%]">
            {product.subcategory}
          </span>
          <div className="flex items-center text-amber-400 flex-shrink-0">
            <Icon name="Star" size={14} className="fill-current" />
            <span className="text-xs ml-1 text-gray-600">{product.rating}</span>
          </div>
        </div>
        
        {/* Title - fixed 2 lines height */}
        <h3 
          className="font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-emerald-600 transition-colors text-sm leading-snug"
          style={{ height: '40px' }}
        >
          {product.name}
        </h3>
        
        {/* Price - fixed height */}
        <div className="flex items-baseline gap-2 mb-3 h-6">
          <span className="text-lg font-bold text-emerald-600">{formatPrice(product.price)}</span>
          {product.oldPrice && (
            <span className="text-sm text-gray-400 line-through">{formatPrice(product.oldPrice)}</span>
          )}
        </div>
        
        {/* Description - fixed 2 lines */}
        <p 
          className="text-xs text-gray-500 line-clamp-2 mb-3 flex-grow"
          style={{ height: '32px' }}
        >
          {product.description}
        </p>
        
        {/* Footer - always at bottom */}
        <div className="flex items-center justify-between text-xs text-gray-500 pt-3 border-t border-gray-100 mt-auto h-8">
          <span>Min: {product.minOrder}</span>
          <span className={`${product.stock < 10 ? 'text-red-500 font-medium' : 'text-emerald-600'}`}>
            {product.stock < 10 ? `Only ${product.stock} left` : 'In Stock'}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
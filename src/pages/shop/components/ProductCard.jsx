import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { useCart } from '../../../context/CartContext';

const ProductCard = ({ product, onInquire, viewMode = 'grid' }) => {
  const navigate = useNavigate();
  const { addItem } = useCart();

  // Get the first image from images array, or fallback to image property
  const productImage = product.images && product.images.length > 0 
    ? product.images[0] 
    : product.image;

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

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addItem(product, product.minOrder);
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
            src={productImage} 
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              e.target.src = '/images/placeholder-product.jpg';
            }}
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
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/shop/product/${product.id}`);
                }}
              >
                View
              </Button>
              <Button 
                variant="primary" 
                size="sm" 
                className="bg-emerald-600 hover:bg-emerald-700"
                onClick={handleAddToCart}
              >
                <Icon name="Plus" size={16} className="mr-1" />
                Add
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
      style={{ height: '420px' }}
    >
      {/* Image container - fixed height */}
      <div className="relative h-48 bg-gray-100 overflow-hidden flex-shrink-0">
        <img 
          src={productImage} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            e.target.src = '/images/placeholder-product.jpg';
          }}
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

        {/* Quick action buttons on hover */}
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex gap-2">
          <Button 
            variant="primary" 
            size="sm" 
            className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white"
            onClick={handleAddToCart}
          >
            <Icon name="ShoppingCart" size={16} className="mr-1" />
            Add
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            className="bg-white border-white text-gray-900 hover:bg-gray-100"
            onClick={handleInquireClick}
          >
            Inquire
          </Button>
        </div>
      </div>
      
      {/* Content container */}
      <div className="p-4 flex flex-col flex-grow">
        {/* Category and rating */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-emerald-600 font-semibold uppercase tracking-wide truncate max-w-[60%]">
            {product.subcategory}
          </span>
          <div className="flex items-center text-amber-400 flex-shrink-0">
            <Icon name="Star" size={14} className="fill-current" />
            <span className="text-xs ml-1 text-gray-600">{product.rating}</span>
          </div>
        </div>
        
        {/* Title */}
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-emerald-600 transition-colors text-sm leading-snug min-h-[40px]">
          {product.name}
        </h3>
        
        {/* Price */}
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-lg font-bold text-emerald-600">{formatPrice(product.price)}</span>
          {product.oldPrice && (
            <span className="text-sm text-gray-400 line-through">{formatPrice(product.oldPrice)}</span>
          )}
        </div>
        
        {/* Description */}
        <p className="text-xs text-gray-500 line-clamp-2 mb-3 flex-grow">
          {product.description}
        </p>
        
        {/* Footer with Add to Cart */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100 mt-auto">
          <span className="text-xs text-gray-500">Min: {product.minOrder}</span>
          <Button 
            variant="primary" 
            size="sm"
            className="bg-emerald-600 hover:bg-emerald-700"
            onClick={handleAddToCart}
          >
            <Icon name="Plus" size={16} className="mr-1" />
            Add
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
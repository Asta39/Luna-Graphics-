import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import { useCart } from '../../../context/CartContext';

const ProductCard = ({ product, onInquire, viewMode = 'grid' }) => {
  const navigate = useNavigate();
  const { addItem, canAddToCart, formatPrice } = useCart();

  // Get the first image from images array, or fallback to image property
  const productImage = product.images && product.images.length > 0 
    ? product.images[0] 
    : product.image;

  const handleCardClick = () => {
    navigate(`/shop/product/${product.id}`);
  };

  const handleInquireClick = (e) => {
    e.stopPropagation();
    onInquire(product);
  };

  const [added, setAdded] = useState(false);
  useEffect(() => {
    if (!added) return;
    const t = setTimeout(() => setAdded(false), 1400);
    return () => clearTimeout(t);
  }, [added]);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    const success = addItem(product, product.minOrder);
    if (success) {
      setAdded(true);
    } else {
      onInquire(product);
    }
  };

  // Check if product has valid price
  const hasPrice = canAddToCart(product);
  const displayPrice = formatPrice(product.price);

  if (viewMode === 'list') {
    const listBadge = hasPrice ? (product.discount || product.badge) : null;
    return (
      <motion.div
        layout
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileTap={{ scale: 0.99 }}
        transition={{ type: 'spring', bounce: 0, duration: 0.35 }}
        className="group relative bg-white rounded-2xl overflow-hidden cursor-pointer flex items-stretch"
        onClick={handleCardClick}
      >
        <div className="relative w-28 sm:w-40 flex-shrink-0 self-stretch bg-gray-50 overflow-hidden" style={{ minHeight: '7rem' }}>
          <img
            src={productImage}
            alt={product.name}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            onError={(e) => {
              e.target.src = '/images/placeholder-product.jpg';
            }}
          />
          {listBadge && (
            <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-white/85 backdrop-blur-md text-[10px] font-semibold text-gray-900 shadow-sm">
              {listBadge}
            </span>
          )}
        </div>

        <div className="flex-1 min-w-0 p-3 sm:p-4 flex flex-col">
          <p className="text-xs text-gray-500 truncate">{product.subcategory}</p>
          <h3 className="mt-0.5 text-sm sm:text-base font-semibold text-gray-900 leading-snug line-clamp-2">
            {product.name}
          </h3>
          <div className="hidden sm:block mt-1"><p className="text-sm text-gray-500 line-clamp-2">{product.description}</p></div>

          <div className="mt-auto pt-3 flex items-end justify-between gap-3">
            <div className="min-w-0">
              {hasPrice ? (
                <>
                  <p className="text-base sm:text-lg font-semibold text-gray-900 tracking-tight leading-none">{displayPrice}</p>
                  <p className="mt-1 text-[11px] text-gray-500 truncate">
                    {product.oldPrice ? <span className="line-through mr-1">{formatPrice(product.oldPrice)}</span> : null}
                    {product.priceUnit === 'each' ? 'each' : product.priceUnit ? `per ${product.priceUnit}` : ''}
                  </p>
                </>
              ) : (
                <p className="text-sm font-medium text-gray-500">Price on request</p>
              )}
            </div>
            {hasPrice ? (
              <button
                type="button"
                onClick={handleAddToCart}
                aria-label={added ? `${product.name} added to cart` : `Add ${product.name} to cart`}
                className={`press flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center text-white ${
                  added ? 'bg-gray-900' : 'bg-emerald-600 hover:bg-emerald-700'
                }`}
              >
                <Icon name={added ? 'Check' : 'Plus'} size={20} />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleInquireClick}
                aria-label={`Ask for a quote on ${product.name}`}
                className="press flex-shrink-0 h-11 px-4 rounded-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-900 text-sm font-semibold"
              >
                Quote
              </button>
            )}
          </div>
        </div>
      </motion.div>
    );
  }

  // GRID VIEW
  const badgeText = hasPrice ? (product.discount || product.badge) : null;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', bounce: 0, duration: 0.35 }}
      className="group relative bg-white rounded-2xl overflow-hidden cursor-pointer flex flex-col h-full"
      onClick={handleCardClick}
    >
      <div className="relative flex-shrink-0 bg-gray-50 overflow-hidden" style={{ aspectRatio: '1 / 1' }}>
        <img
          src={productImage}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          onError={(e) => {
            e.target.src = '/images/placeholder-product.jpg';
          }}
        />
        {badgeText && (
          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/85 backdrop-blur-md text-[11px] font-semibold text-gray-900 shadow-sm">
            {badgeText}
          </span>
        )}
      </div>

      <div className="flex flex-col flex-1 p-3 sm:p-4">
        <p className="text-xs text-gray-500 truncate">{product.subcategory}</p>
        <h3 className="mt-0.5 text-sm sm:text-[15px] font-semibold text-gray-900 leading-snug line-clamp-2 min-h-[2.6em]">
          {product.name}
        </h3>

        <div className="mt-auto pt-3 flex items-end justify-between gap-2">
          <div className="min-w-0">
            {hasPrice ? (
              <>
                <p className="text-base sm:text-lg font-semibold text-gray-900 tracking-tight leading-none">
                  {displayPrice}
                </p>
                <p className="mt-1 text-[11px] text-gray-500 truncate">
                  {product.oldPrice ? (
                    <span className="line-through mr-1">{formatPrice(product.oldPrice)}</span>
                  ) : null}
                  {product.priceUnit === 'each' ? 'each' : product.priceUnit ? `per ${product.priceUnit}` : ''}
                </p>
              </>
            ) : (
              <p className="text-sm font-medium text-gray-500 leading-tight">Price on request</p>
            )}
          </div>

          {hasPrice ? (
            <button
              type="button"
              onClick={handleAddToCart}
              aria-label={added ? `${product.name} added to cart` : `Add ${product.name} to cart`}
              className={`press flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center text-white ${
                added ? 'bg-gray-900' : 'bg-emerald-600 hover:bg-emerald-700'
              }`}
            >
              <Icon name={added ? 'Check' : 'Plus'} size={20} />
            </button>
          ) : (
            <button
              type="button"
              onClick={handleInquireClick}
              aria-label={`Ask for a quote on ${product.name}`}
              className="press flex-shrink-0 h-11 px-4 rounded-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-900 text-sm font-semibold"
            >
              Quote
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
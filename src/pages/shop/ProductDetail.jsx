import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import SEO from '../../components/SEO';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import { getProductById, products } from '../../data/products';
import { useCart } from '../../context/CartContext';
import Header from '../../components/ui/Header';
import Footer from '../homepage/components/Footer';
import ProductCard from './components/ProductCard';
import NotFound from '../NotFound';

// EmailJS Configuration - REPLACE WITH YOUR CREDENTIALS
const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_b1lp7ef',
  TEMPLATE_ID: 'template_5qy4nwm',
  PUBLIC_KEY: 'kiEUK4XklpodvcXo-'
};

// Helper functions for price handling
const hasValidPrice = (price) => {
  return typeof price === 'number' && !isNaN(price) && price > 0;
};

const isInquireProduct = (price) => {
  if (typeof price === 'string') {
    const lower = price.toLowerCase();
    return lower === 'inquire' || lower === 'inquiry' || lower === 'contact for price' || lower === 'contact us';
  }
  return false;
};

const formatPrice = (price) => {
  if (isInquireProduct(price)) {
    return 'Inquire';
  }
  if (!hasValidPrice(price)) {
    return 'Inquire';
  }
  return new Intl.NumberFormat('en-KE', {
    style: 'currency',
    currency: 'KES',
    minimumFractionDigits: 0
  }).format(price);
};

// ✅ FIXED: WhatsApp number formatter
const formatWhatsAppNumber = (phone) => {
  if (!phone) return '254791159618'; // Fallback to your number
  
  // Remove all non-digit characters
  let cleaned = phone.replace(/\D/g, '');
  
  // Remove leading + if present
  if (cleaned.startsWith('+')) {
    cleaned = cleaned.substring(1);
  }
  
  // Handle Kenyan numbers
  if (cleaned.startsWith('0')) {
    // Convert 07XX or 01XX to 2547XX or 2541XX
    cleaned = '254' + cleaned.substring(1);
  }
  
  // If it doesn't start with 254, assume it's a local number and add 254
  if (!cleaned.startsWith('254')) {
    cleaned = '254' + cleaned;
  }
  
  return cleaned;
};

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { addItem, canAddToCart } = useCart();
  
  const product = getProductById(productId);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    if (product) {
      setQuantity(product.minOrder || 1);
      setSelectedImage(0);
    }
    window.scrollTo(0, 0);
  }, [productId, product]);

  useEffect(() => {
    document.body.dataset.buyBar = '';
    return () => { delete document.body.dataset.buyBar; };
  }, []);

  if (!product) {
    return (
      <>
        <SEO title="Product Not Found" robots="noindex, nofollow" />
        <NotFound />
      </>
    );
  }

  const relatedProducts = product.relatedProducts 
    ? product.relatedProducts.map(id => getProductById(id)).filter(Boolean)
    : products
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 4);

  // Check if this product has a valid price or is inquire-only
  const hasPrice = hasValidPrice(product.price);
  const isInquireOnly = isInquireProduct(product.price);

  // ✅ FIXED: WhatsApp handler with number formatting
  const handleWhatsApp = () => {
    const message = `Hello! I'm interested in ${product.name} (ID: ${product.id}). ${hasPrice ? `Quantity: ${quantity}.` : 'Please provide pricing information.'}`;
    const whatsappUrl = `https://wa.me/${formatWhatsAppNumber('254791159618')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleAddToCart = () => {
    if (!hasPrice) {
      // If no price, open inquiry instead
      setIsInquiryOpen(true);
      return;
    }
    
    const success = addItem(product, quantity);
    if (success) {
      setAddedToCart(true);
      setTimeout(() => setAddedToCart(false), 2000);
    }
  };


  const productImages = product.images || [product.image];

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <SEO 
        title={`${product.name} | Luna Graphics Kenya`}
        description={product.description || `Buy ${product.name} at Luna Graphics. Professional printing and branding solutions in Nairobi.`}
        canonical={`/shop/product/${product.id}`}
        ogImage={product.image || (product.images && product.images[0])}
        type="website"
        keywords={`${product.name}, ${product.subcategory}, ${product.category}, printing Kenya, branding Nairobi, custom printing Nairobi, Luna Graphics shop`}
        robots="index, follow"
        geo={{
          region: "KE-30",
          placename: "Nairobi",
          position: "-1.280302;36.822639"
        }}
        schemaData={{
          "@context": "https://schema.org/",
          "@type": "Product",
          "name": product.name,
          "image": [
            product.image,
            ...(product.images || [])
          ].filter(Boolean).map((img) => img.startsWith('http') ? img : `https://lunagraphics.co.ke${img}`),
          "description": product.description,
          "sku": product.id,
          "brand": {
            "@type": "Brand",
            "name": "Luna Graphics"
          },
          ...(hasValidPrice(product.price) ? {
            "offers": {
              "@type": "Offer",
              "url": `https://lunagraphics.co.ke/shop/product/${product.id}`,
              "priceCurrency": "KES",
              "price": product.price,
              "availability": product.stock > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
              "itemCondition": "https://schema.org/NewCondition"
            }
          } : {})
        }}
      />
      <Header/>

      <main className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 lg:pb-16">
        {/* Back link: where am I, how do I get out */}
        <nav aria-label="Breadcrumb" className="py-4 flex items-center gap-1.5 text-sm text-gray-500 min-w-0">
          <button onClick={() => navigate('/')} className="press inline-flex items-center gap-1 text-emerald-700 font-medium hover:text-emerald-800">
            <Icon name="ChevronLeft" size={16} />
            Shop
          </button>
          <span aria-hidden="true">/</span>
          <button
            onClick={() => navigate(`/shop?category=${product.category}`)}
            className="hover:text-gray-900 capitalize truncate"
          >
            {product.subcategory || product.category}
          </button>
        </nav>

        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-14 items-start">
          {/* Gallery */}
          <div className="lg:sticky lg:top-24">
            <div className="relative bg-white card-surface rounded-3xl overflow-hidden" style={{ aspectRatio: '1 / 1' }}>
              <AnimatePresence mode="wait" initial={false}>
                <motion.img
                  key={selectedImage}
                  src={productImages[selectedImage]}
                  alt={product.name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => { e.target.src = '/images/placeholder-product.jpg'; }}
                />
              </AnimatePresence>
              {(hasPrice ? (product.discount ? `${product.discount} off` : product.badge) : null) && (
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/85 backdrop-blur-md text-xs font-semibold text-gray-900 shadow-sm">
                  {product.discount ? `${product.discount} off` : product.badge}
                </span>
              )}
            </div>

            {productImages.length > 1 && (
              <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
                {productImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    aria-label={`Show photo ${idx + 1}`}
                    aria-current={selectedImage === idx}
                    className={`press flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden bg-white transition-shadow ${
                      selectedImage === idx ? 'shadow-[0_0_0_2px_#111827]' : 'shadow-[inset_0_0_0_0.5px_rgba(16,24,40,0.12)] opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Buy column */}
          <div className="lg:sticky lg:top-24">
            <p className="text-sm text-gray-500">{product.subcategory}</p>
            <h1 className="mt-1 text-3xl sm:text-4xl font-semibold text-gray-900">{product.name}</h1>
            <p className="mt-3 text-[17px] leading-relaxed text-gray-600">{product.description}</p>

            <div className="mt-6">
              {hasPrice ? (
                <div className="flex items-baseline gap-3 flex-wrap">
                  <span className="text-3xl font-semibold tracking-tight text-gray-900">{formatPrice(product.price)}</span>
                  {product.oldPrice && (
                    <span className="text-lg text-gray-400 line-through">{formatPrice(product.oldPrice)}</span>
                  )}
                  <span className="text-sm text-gray-500">{product.priceUnit === 'each' ? 'each' : `per ${product.priceUnit}`}</span>
                </div>
              ) : (
                <div>
                  <p className="text-2xl font-semibold text-gray-900">Price on request</p>
                  <p className="mt-1 text-sm text-gray-500">Priced to your size, material and quantity. We usually reply within minutes.</p>
                </div>
              )}
            </div>

            {hasPrice && (
              <div className="mt-6 flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-900">Quantity</p>
                  {product.minOrder > 1 && (
                    <p className="text-xs text-gray-500">Minimum {product.minOrder}</p>
                  )}
                </div>
                <div className="flex items-center rounded-full bg-gray-100 p-1">
                  <button
                    onClick={() => setQuantity(Math.max(product.minOrder || 1, quantity - 1))}
                    disabled={quantity <= (product.minOrder || 1)}
                    aria-label="Decrease quantity"
                    className="press w-11 h-11 rounded-full flex items-center justify-center text-gray-900 hover:bg-white disabled:text-gray-300 disabled:hover:bg-transparent"
                  >
                    <Icon name="Minus" size={18} />
                  </button>
                  <span className="w-12 text-center text-base font-semibold tabular-nums" aria-live="polite">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    aria-label="Increase quantity"
                    className="press w-11 h-11 rounded-full flex items-center justify-center text-gray-900 hover:bg-white"
                  >
                    <Icon name="Plus" size={18} />
                  </button>
                </div>
              </div>
            )}

            {/* Actions (desktop and tablet; phones use the bar at the bottom) */}
            <div className="mt-6 hidden sm:flex flex-col gap-3">
              {hasPrice ? (
                <button
                  onClick={handleAddToCart}
                  className={`press h-14 rounded-full font-semibold text-white flex items-center justify-center gap-2 ${
                    addedToCart ? 'bg-gray-900' : 'bg-emerald-600 hover:bg-emerald-700'
                  }`}
                >
                  <Icon name={addedToCart ? 'Check' : 'ShoppingCart'} size={20} />
                  {addedToCart ? 'Added to cart' : `Add to cart · ${formatPrice(product.price * quantity)}`}
                </button>
              ) : (
                <button
                  onClick={() => setIsInquiryOpen(true)}
                  className="press h-14 rounded-full font-semibold text-white bg-emerald-600 hover:bg-emerald-700 flex items-center justify-center gap-2"
                >
                  <Icon name="Send" size={20} />
                  Request a quote
                </button>
              )}
              <button
                onClick={handleWhatsApp}
                className="press h-14 rounded-full font-semibold text-gray-900 bg-gray-100 hover:bg-gray-200 flex items-center justify-center gap-2"
              >
                <Icon name="MessageCircle" size={20} />
                Ask on WhatsApp
              </button>
            </div>

            {hasPrice && (
              <button
                onClick={() => setIsInquiryOpen(true)}
                className="mt-4 text-sm font-medium text-emerald-700 hover:text-emerald-800"
              >
                Need a custom size or bulk price? Send a request
              </button>
            )}

            {/* Key facts */}
            <ul className="mt-8 bg-white card-surface rounded-2xl divide-y divide-black/[0.06]">
              <li className="flex items-center gap-3 px-4 py-3.5">
                <Icon name="Clock" size={20} className="text-gray-400" />
                <span className="text-sm text-gray-600">Ready in</span>
                <span className="ml-auto text-sm font-medium text-gray-900">{product.turnaround}</span>
              </li>
              <li className="flex items-center gap-3 px-4 py-3.5">
                <Icon name="Truck" size={20} className="text-gray-400" />
                <span className="text-sm text-gray-600">Delivery</span>
                <span className="ml-auto text-sm font-medium text-gray-900 text-right">Free in Nairobi CBD over KES 5,000</span>
              </li>
              {typeof product.stock === 'number' && (
                <li className="flex items-center gap-3 px-4 py-3.5">
                  <Icon name="Package" size={20} className="text-gray-400" />
                  <span className="text-sm text-gray-600">Availability</span>
                  <span className={`ml-auto text-sm font-medium ${product.stock < 10 ? 'text-amber-700' : 'text-gray-900'}`}>
                    {product.stock < 10 ? `Only ${product.stock} left` : 'In stock'}
                  </span>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Details: heading on top, two cards side by side on wide screens */}
        <section className="mt-14 lg:mt-20">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">Details</h2>
          <div className="mt-6 grid lg:grid-cols-2 gap-6 items-start">
            <div className="bg-white card-surface rounded-3xl divide-y divide-black/[0.06]">
            {(product.longDescription || product.description) && (
              <div className="p-6 sm:p-8">
                <h3 className="text-lg font-semibold text-gray-900">Overview</h3>
                <p className="mt-3 text-gray-600 leading-relaxed whitespace-pre-line">{product.longDescription || product.description}</p>
              </div>
            )}

            {product.features?.length > 0 && (
              <div className="p-6 sm:p-8">
                <h3 className="text-lg font-semibold text-gray-900">Highlights</h3>
                <ul className="mt-4 space-y-3">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-600">
                      <Icon name="Check" size={18} className="mt-0.5 flex-shrink-0 text-emerald-600" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            </div>
            <div className="bg-white card-surface rounded-3xl divide-y divide-black/[0.06]">
            <div className="p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-gray-900">Specifications</h3>
              <dl className="mt-4 divide-y divide-black/[0.06]">
                {[
                  ...Object.entries(product.specifications || {}),
                  ['Turnaround', product.turnaround],
                  ['Minimum order', `${product.minOrder} ${product.priceUnit}`],
                  ['Pricing', hasPrice ? `${formatPrice(product.price)} ${product.priceUnit === 'each' ? 'each' : `per ${product.priceUnit}`}` : 'On request'],
                ].map(([key, value]) => (
                  <div key={key} className="py-3 grid grid-cols-[40%_1fr] gap-4 text-sm">
                    <dt className="text-gray-500">{key}</dt>
                    <dd className="text-gray-900">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-gray-900">Delivery and returns</h3>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>Free delivery within Nairobi CBD on orders over KES 5,000.</li>
                <li>Same-day delivery for urgent orders, for an extra fee.</li>
                <li>Nationwide shipping through trusted couriers.</li>
              </ul>
              <p className="mt-4 text-gray-600">
                If there's a printing or material defect, tell us within 7 days for a free reprint or refund. Custom designs can't be returned unless they're defective.
              </p>
            </div>
            </div>
          </div>
        </section>

        {relatedProducts.length > 0 && (
          <section className="mt-14 lg:mt-20">
            <div className="flex items-end justify-between mb-6">
              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">You might also like</h2>
              <button onClick={() => navigate('/')} className="text-sm font-medium text-emerald-700 hover:text-emerald-800">
                See all
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {relatedProducts.map((item) => (
                <ProductCard
                  key={item.id}
                  product={item}
                  onInquire={(p) => navigate(`/shop/product/${p.id}`)}
                />
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />

      {/* Phone buy bar: the main action stays in reach */}
      <div className="sm:hidden fixed bottom-0 inset-x-0 z-40 material-bar border-t border-black/[0.06] px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        <div className="flex items-center gap-3">
          <div className="min-w-0 flex-1">
            {hasPrice ? (
              <>
                <p className="text-lg font-semibold text-gray-900 leading-tight tabular-nums">{formatPrice(product.price * quantity)}</p>
                <p className="text-xs text-gray-500">{quantity} × {formatPrice(product.price)}</p>
              </>
            ) : (
              <p className="text-sm font-semibold text-gray-900">Price on request</p>
            )}
          </div>
          <button
            onClick={handleWhatsApp}
            aria-label="Ask on WhatsApp"
            className="press w-12 h-12 flex-shrink-0 rounded-full bg-gray-100 flex items-center justify-center text-gray-900"
          >
            <Icon name="MessageCircle" size={22} />
          </button>
          <button
            onClick={hasPrice ? handleAddToCart : () => setIsInquiryOpen(true)}
            className={`press h-12 px-6 flex-shrink-0 rounded-full font-semibold text-white ${
              addedToCart ? 'bg-gray-900' : 'bg-emerald-600'
            }`}
          >
            {hasPrice ? (addedToCart ? 'Added' : 'Add to cart') : 'Get a quote'}
          </button>
        </div>
      </div>

      {/* Modern Inquiry Modal - FIXED EmailJS & WhatsApp */}
      <InquiryModal 
        isOpen={isInquiryOpen} 
        onClose={() => setIsInquiryOpen(false)} 
        product={product}
        initialQuantity={quantity}
      />
    </div>
  );
};

// Modern Inquiry Modal Component - FIXED to actually send emails and format WhatsApp
const InquiryModal = ({ isOpen, onClose, product, initialQuantity = 1 }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    quantity: initialQuantity.toString(),
    message: '',
    productName: '',
    productId: ''
  });

  useEffect(() => {
    if (product) {
      setFormData(prev => ({
        ...prev,
        productName: product.name || '',
        productId: product.id || '',
        quantity: initialQuantity.toString()
      }));
    }
  }, [product, initialQuantity]);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitStatus(null);

  try {
    const now = new Date();
    const timestamp = now.toLocaleString('en-KE', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      formatted_phone: formatWhatsAppNumber(formData.phone),
      message: formData.message || 'No additional message provided',
      product_name: formData.productName,
      product_id: formData.productId,
      reply_to: formData.email,
      timestamp: timestamp,
      preferred_contact: 'email',
      cart_total: formatPrice(product.price * parseInt(formData.quantity)),
      item_count: '1',
      quantity: formData.quantity,
      // Hide cart section for single product inquiry
      cart_section_display: 'none',
      cart_items_html: ''
    };

    const result = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams,
      EMAILJS_CONFIG.PUBLIC_KEY
    );

    setSubmitStatus('success');
    
    setTimeout(() => {
      onClose();
      setTimeout(() => {
        setSubmitStatus(null);
        setFormData({
          name: '',
          email: '',
          phone: '',
          quantity: '1',
          message: '',
          productName: product?.name || '',
          productId: product?.id || ''
        });
      }, 300);
    }, 2000);
    
  } catch (error) {
    console.error('EmailJS Error:', error);
    setSubmitStatus('error');
  } finally {
    setIsSubmitting(false);
  }
};

  // ✅ FIXED: WhatsApp handler with number formatting
  const handleWhatsApp = () => {
    const message = `Hello Luna Graphics! 

I'm interested in:
📦 Product: ${product?.name}
🆔 ID: ${product?.id}

Name: ${formData.name || 'Not provided'}
Phone: ${formData.phone || 'Not provided'}
Email: ${formData.email || 'Not provided'}
Quantity: ${formData.quantity}

Message: ${formData.message || 'No additional message'}`;

    const whatsappUrl = `https://wa.me/${formatWhatsAppNumber(formData.phone || '254791159618')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div 
        key="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
      >
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden max-h-[90vh] overflow-y-auto"
        >
          {/* Header */}
          <div className="bg-emerald-600 px-6 py-4 flex items-center justify-between sticky top-0 z-10">
            <div>
              <h3 className="text-lg font-semibold text-white">Product Inquiry</h3>
              <p className="text-emerald-100 text-sm truncate max-w-[200px] sm:max-w-xs">
                {formData.productName || 'General Inquiry'}
              </p>
            </div>
            <button 
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors flex-shrink-0"
              type="button"
            >
              <Icon name="X" size={20} />
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            {submitStatus === 'success' ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <Icon name="CheckCircle" size={32} className="text-emerald-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Inquiry Sent!</h4>
                <p className="text-gray-600">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="hidden" name="product_name" value={formData.productName} />
                <input type="hidden" name="product_id" value={formData.productId} />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                      placeholder="07XX XXX XXX or 2547XX XXX XXX"
                    />
                    <p className="text-xs text-gray-500 mt-1">We'll format this automatically for WhatsApp</p>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Quantity Needed</label>
                  <select
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all bg-white"
                  >
                    <option value="1">1 unit</option>
                    <option value="5">5 units</option>
                    <option value="10">10 units</option>
                    <option value="25">25 units</option>
                    <option value="50">50+ units</option>
                    <option value="100">100+ units</option>
                    <option value="custom">Custom amount</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all resize-none"
                    placeholder="Any specific requirements, deadline, or questions..."
                  />
                </div>

                {submitStatus === 'error' && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg flex items-start gap-2 text-red-600 text-sm">
                    <Icon name="AlertCircle" size={18} className="flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Failed to send email</p>
                      <p>Please try WhatsApp or call us directly.</p>
                    </div>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Button
                    type="button"
                    variant="outline"
                    className="flex-1 border-emerald-200 text-emerald-700 hover:bg-emerald-50"
                    onClick={handleWhatsApp}
                  >
                    <Icon name="MessageCircle" size={18} className="mr-2" />
                    WhatsApp
                  </Button>
                  <Button
                    type="submit"
                    variant="primary"
                    className="flex-1 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <>
                        <Icon name="Send" size={18} className="mr-2" />
                        Send Inquiry
                      </>
                    )}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProductDetail;

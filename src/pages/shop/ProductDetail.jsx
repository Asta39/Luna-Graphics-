import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Helmet } from 'react-helmet-async';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import { getProductById, products } from '../../data/products';
import { useCart } from '../../context/CartContext';
import Header from '../../components/ui/Header';

// EmailJS Configuration - REPLACE WITH YOUR CREDENTIALS
const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_b1lp7ef',
  TEMPLATE_ID: 'template_5qy4nwm',
  PUBLIC_KEY: 'kiEUK4XklpodvcXo-'
};

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();
  
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    const found = getProductById(productId);
    if (found) {
      setProduct(found);
      setQuantity(found.minOrder);
      setSelectedImage(0);
      window.scrollTo(0, 0);
    } else {
      navigate('/shop');
    }
  }, [productId, navigate]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600" />
      </div>
    );
  }

  const relatedProducts = product.relatedProducts 
    ? product.relatedProducts.map(id => getProductById(id)).filter(Boolean)
    : products
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 4);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-KE', {
      style: 'currency',
      currency: 'KES',
      minimumFractionDigits: 0
    }).format(price);
  };

  const handleWhatsApp = () => {
    const message = `Hello! I'm interested in ${product.name} (ID: ${product.id}). Quantity: ${quantity}. Please provide more information.`;
    const whatsappUrl = `https://wa.me/254791159618?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleAddToCart = () => {
    addItem(product, quantity);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const tabs = [
    { id: 'description', label: 'Description' },
    { id: 'specifications', label: 'Specifications' },
    { id: 'features', label: 'Features' },
    { id: 'shipping', label: 'Shipping & Returns' }
  ];

  const productImages = product.images || [product.image];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <Helmet>
        <title>{`${product.name} | Luna Graphics Kenya`}</title>
        <meta name="description" content={product.description} />
      </Helmet>
      <Header/>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center text-sm text-gray-500">
            <button onClick={() => navigate('/')} className="hover:text-emerald-600 transition-colors">Home</button>
            <Icon name="ChevronRight" size={16} className="mx-2" />
            <button onClick={() => navigate('/shop')} className="hover:text-emerald-600 transition-colors">Shop</button>
            <Icon name="ChevronRight" size={16} className="mx-2" />
            <button 
              onClick={() => navigate(`/shop?category=${product.category}`)} 
              className="hover:text-emerald-600 transition-colors capitalize"
            >
              {product.category}
            </button>
            <Icon name="ChevronRight" size={16} className="mx-2" />
            <span className="text-gray-900 font-medium truncate max-w-xs">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Main Product Section */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-4"
            >
              <div className="relative aspect-square bg-gray-100 rounded-2xl overflow-hidden border border-gray-200">
                <img 
                  src={productImages[selectedImage]} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {product.discount && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-red-500 text-white font-bold rounded-full">
                    {product.discount} OFF
                  </div>
                )}
                {product.badge && !product.discount && (
                  <div className={`absolute top-4 left-4 px-3 py-1 text-white font-bold rounded-full ${
                    product.badge === 'Hot' ? 'bg-red-500' :
                    product.badge === 'New' ? 'bg-blue-500' :
                    product.badge === 'Premium' ? 'bg-purple-500' :
                    'bg-emerald-500'
                  }`}>
                    {product.badge}
                  </div>
                )}
                <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-gray-600 hover:text-red-500 transition-colors">
                  <Icon name="Heart" size={20} />
                </button>
              </div>
              
              {productImages.length > 1 && (
                <div className="grid grid-cols-4 gap-3">
                  {productImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                        selectedImage === idx ? 'border-emerald-600 ring-2 ring-emerald-100' : 'border-gray-200 hover:border-emerald-300'
                      }`}
                    >
                      <img src={img} alt={`${product.name} ${idx + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Product Info */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-full">
                    {product.subcategory}
                  </span>
                  <div className="flex items-center text-amber-400">
                    <Icon name="Star" size={16} className="fill-current" />
                    <span className="ml-1 text-sm text-gray-600">{product.rating} ({product.reviews} reviews)</span>
                  </div>
                </div>
                
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
                
                <p className="text-gray-600 text-lg leading-relaxed">{product.description}</p>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-4 py-4 border-y border-gray-100">
                <span className="text-4xl font-bold text-emerald-600">{formatPrice(product.price)}</span>
                {product.oldPrice && (
                  <span className="text-2xl text-gray-400 line-through">{formatPrice(product.oldPrice)}</span>
                )}
                <span className="text-gray-500">per {product.priceUnit}</span>
              </div>

              {/* Key Info */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2 text-gray-600">
                  <Icon name="Package" size={18} className="text-emerald-600" />
                  <span>Min Order: <strong>{product.minOrder} {product.priceUnit}</strong></span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Icon name="Clock" size={18} className="text-emerald-600" />
                  <span>Turnaround: <strong>{product.turnaround}</strong></span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Icon name="CheckCircle" size={18} className="text-emerald-600" />
                  <span>Stock: <strong className={product.stock < 10 ? 'text-red-500' : 'text-emerald-600'}>
                    {product.stock < 10 ? `Only ${product.stock} left` : 'Available'}
                  </strong></span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Icon name="Truck" size={18} className="text-emerald-600" />
                  <span>Free Nairobi Delivery</span>
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center gap-4">
                <span className="font-medium text-gray-700">Quantity:</span>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button 
                    onClick={() => setQuantity(Math.max(product.minOrder, quantity - 1))}
                    className="px-4 py-2 hover:bg-gray-100 transition-colors"
                  >
                    <Icon name="Minus" size={16} />
                  </button>
                  <span className="px-4 py-2 font-semibold min-w-[3rem] text-center">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 hover:bg-gray-100 transition-colors"
                  >
                    <Icon name="Plus" size={16} />
                  </button>
                </div>
                <span className="text-sm text-gray-500">{product.priceUnit}</span>
              </div>

              {/* Total Price */}
              <div className="bg-emerald-50 rounded-xl p-4 flex items-center justify-between">
                <span className="text-gray-700 font-medium">Total Estimate:</span>
                <span className="text-2xl font-bold text-emerald-600">{formatPrice(product.price * quantity)}</span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  variant="primary" 
                  size="lg" 
                  className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-lg"
                  onClick={() => setIsInquiryOpen(true)}
                >
                  <Icon name="Send" size={20} className="mr-2" />
                  Send Inquiry
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="flex-1 border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                  onClick={handleWhatsApp}
                >
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  WhatsApp
                </Button>
              </div>

              {/* Add to Cart Button */}
              <div className="pt-4 border-t border-gray-100">
                <Button 
                  variant="primary" 
                  size="lg"
                  className={`w-full sm:w-auto mx-auto block px-12 py-4 text-lg font-semibold transition-all ${
                    addedToCart 
                      ? 'bg-green-500 hover:bg-green-600' 
                      : 'bg-gray-900 hover:bg-gray-800'
                  }`}
                  onClick={handleAddToCart}
                >
                  {addedToCart ? (
                    <span className="flex items-center">
                      <Icon name="Check" size={20} className="mr-2" />
                      Added to Cart!
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Icon name="ShoppingCart" size={20} className="mr-2" />
                      Add to Cart
                    </span>
                  )}
                </Button>
                <p className="text-center text-sm text-gray-500 mt-2">
                  Free delivery in Nairobi • {product.turnaround} turnaround
                </p>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
                <div className="text-center">
                  <Icon name="ShieldCheck" size={24} className="mx-auto text-emerald-600 mb-1" />
                  <span className="text-xs text-gray-600">Quality Guaranteed</span>
                </div>
                <div className="text-center">
                  <Icon name="RefreshCw" size={24} className="mx-auto text-emerald-600 mb-1" />
                  <span className="text-xs text-gray-600">7-Day Returns</span>
                </div>
                <div className="text-center">
                  <Icon name="HeadphonesIcon" size={24} className="mx-auto text-emerald-600 mb-1" />
                  <span className="text-xs text-gray-600">24/7 Support</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="flex border-b border-gray-200 overflow-x-auto">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-4 font-medium text-sm whitespace-nowrap transition-colors relative ${
                    activeTab === tab.id ? 'text-emerald-600' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <motion.div 
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-600" 
                    />
                  )}
                </button>
              ))}
            </div>

            <div className="p-6 md:p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  {activeTab === 'description' && (
                    <div className="prose max-w-none text-gray-600 leading-relaxed">
                      <div className="whitespace-pre-line text-lg">
                        {product.longDescription || product.description}
                      </div>
                    </div>
                  )}

                  {activeTab === 'specifications' && (
                    <div className="overflow-hidden rounded-lg border border-gray-200">
                      <table className="w-full text-left">
                        <tbody className="divide-y divide-gray-200">
                          {Object.entries(product.specifications || {}).map(([key, value], idx) => (
                            <tr key={key} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                              <td className="px-6 py-4 font-medium text-gray-900 w-1/3">{key}</td>
                              <td className="px-6 py-4 text-gray-600">{value}</td>
                            </tr>
                          ))}
                          <tr className="bg-white">
                            <td className="px-6 py-4 font-medium text-gray-900">Turnaround Time</td>
                            <td className="px-6 py-4 text-gray-600">{product.turnaround}</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="px-6 py-4 font-medium text-gray-900">Minimum Order</td>
                            <td className="px-6 py-4 text-gray-600">{product.minOrder} {product.priceUnit}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}

                  {activeTab === 'features' && (
                    <ul className="space-y-3">
                      {product.features?.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Icon name="Check" size={14} className="text-emerald-600" />
                          </div>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {activeTab === 'shipping' && (
                    <div className="space-y-6 text-gray-600">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Delivery Options</h4>
                        <ul className="space-y-2">
                          <li className="flex items-center gap-2">
                            <Icon name="Truck" size={18} className="text-emerald-600" />
                            <span><strong>Free Delivery</strong> within Nairobi CBD for orders over KES 5,000</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Icon name="MapPin" size={18} className="text-emerald-600" />
                            <span><strong>Same-day delivery</strong> available for urgent orders (additional fee)</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Icon name="Package" size={18} className="text-emerald-600" />
                            <span><strong>Nationwide shipping</strong> via trusted courier partners</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Return Policy</h4>
                        <p>We stand behind our quality. If there are any defects in printing or materials, contact us within 7 days for a free reprint or refund. Custom designs cannot be returned unless defective.</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Inquiry Form Section - Simplified */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Have Questions?</h2>
          <p className="text-gray-600 mb-6">Click the button below to send us a detailed inquiry about this product.</p>
          <Button 
            variant="primary" 
            size="lg"
            className="bg-emerald-600 hover:bg-emerald-700"
            onClick={() => setIsInquiryOpen(true)}
          >
            <Icon name="Send" size={20} className="mr-2" />
            Open Inquiry Form
          </Button>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Related Products</h2>
                <p className="text-gray-500 mt-1">You might also be interested in</p>
              </div>
              <Button variant="outline" onClick={() => navigate('/shop')}>
                View All
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {relatedProducts.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all cursor-pointer flex flex-col"
                  onClick={() => navigate(`/shop/product/${item.id}`)}
                >
                  <div className="relative h-40 bg-gray-100 overflow-hidden flex-shrink-0">
                    <img 
                      src={item.image || (item.images && item.images[0])} 
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.target.src = '/images/placeholder-product.jpg';
                      }}
                    />
                    {item.discount && (
                      <div className="absolute top-3 left-3 px-2 py-1 bg-red-500 text-white text-xs font-bold rounded">
                        {item.discount}
                      </div>
                    )}
                  </div>
                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-emerald-600 transition-colors text-sm leading-snug min-h-[40px]">
                      {item.name}
                    </h3>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-lg font-bold text-emerald-600">{formatPrice(item.price)}</span>
                      <span className="text-xs text-gray-500">/{item.priceUnit}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Modern Inquiry Modal */}
      <InquiryModal 
        isOpen={isInquiryOpen} 
        onClose={() => setIsInquiryOpen(false)} 
        product={product}
        initialQuantity={quantity}
      />
    </div>
  );
};

// Modern Inquiry Modal Component (same as shop component)
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

  let result; // Define result outside try block so it's accessible everywhere

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
      quantity: formData.quantity,
      message: formData.message || 'No additional message provided',
      product_name: formData.productName,
      product_id: formData.productId,
      reply_to: formData.email,
      timestamp: timestamp
    };

    // Assign to the outer result variable
    const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_bllp7ef',
  TEMPLATE_ID: 'template_5qy4nwm', 
  PUBLIC_KEY: 'kiEUK4XklpodvcXo-'
};

    console.log('EmailJS Success:', result);
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
    // Log result here only if it was defined (it might be undefined if error happened before assignment)
    console.log('Result status:', result); 
    setSubmitStatus('error');
  } finally {
    setIsSubmitting(false);
  }
};

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

    const whatsappUrl = `https://wa.me/254791159618?text=${encodeURIComponent(message)}`;
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
                <div className="w-16 h-16 mx-auto bg-emerald-100 rounded-full flex items-center justify-center mb-4">
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
                      placeholder="07XX XXX XXX"
                    />
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
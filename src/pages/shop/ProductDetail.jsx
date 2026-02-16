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



const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const formRef = useRef();
  
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState(null);

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

  const handleDirectInquiry = async (e) => {
    e.preventDefault();
    setSubmitStatus('sending');

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          product_name: product.name,
          product_id: product.id,
          quantity: quantity,
          ...formData
        },
        'YOUR_PUBLIC_KEY'
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const tabs = [
    { id: 'description', label: 'Description' },
    { id: 'specifications', label: 'Specifications' },
    { id: 'features', label: 'Features' },
    { id: 'shipping', label: 'Shipping & Returns' }
  ];

  // Use product images or fallback to single image
  const productImages = product.images || [product.image];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <Helmet>
        <title>{`${product.name} | Luna Graphics Kenya`}</title>
        <meta name="description" content={product.description} />
      </Helmet>.
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
              
              {/* Thumbnail Grid */}
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

              {/* Add to Cart Button - CENTERED */}
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
            {/* Tab Headers */}
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

            {/* Tab Content */}
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

      {/* Quick Inquiry Form */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Quick Inquiry</h2>
            <p className="text-gray-600">Have questions? Send us a message and we will respond within 24 hours.</p>
          </div>

          {submitStatus === 'success' ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center"
            >
              <div className="w-16 h-16 mx-auto bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <Icon name="CheckCircle" size={32} className="text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Inquiry Sent Successfully!</h3>
              <p className="text-gray-600">Thank you for your interest. Our team will contact you shortly.</p>
              <Button 
                variant="outline" 
                className="mt-4" 
                onClick={() => setSubmitStatus(null)}
              >
                Send Another
              </Button>
            </motion.div>
          ) : (
            <form ref={formRef} onSubmit={handleDirectInquiry} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                    placeholder="07XX XXX XXX"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-red-600">
                  <Icon name="AlertCircle" size={20} />
                  <span>Failed to send inquiry. Please try WhatsApp instead.</span>
                </div>
              )}

              <div className="flex gap-3">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="flex-1 bg-emerald-600 hover:bg-emerald-700"
                  disabled={submitStatus === 'sending'}
                >
                  {submitStatus === 'sending' ? (
                    <span className="flex items-center justify-center">
                      <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <>
                      <Icon name="Send" size={20} className="mr-2" />
                      Send Inquiry
                    </>
                  )}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  onClick={handleWhatsApp}
                >
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  WhatsApp
                </Button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Related Products */}
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
            {/* Fixed height image container - 160px height */}
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
    </div>
  );
};

export default ProductDetail;
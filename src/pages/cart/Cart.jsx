import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Helmet } from 'react-helmet-async';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import { useCart } from '../../context/CartContext';
import Header from '../../components/ui/Header';

const Cart = () => {
  const navigate = useNavigate();
  const { items, removeItem, updateQuantity, clearCart, getCartTotal } = useCart();
  const formRef = useRef();
  
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutMethod, setCheckoutMethod] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState(null);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-KE', {
      style: 'currency',
      currency: 'KES',
      minimumFractionDigits: 0
    }).format(price);
  };

  const handleQuantityChange = (cartId, newQuantity, minOrder) => {
    if (newQuantity >= minOrder) {
      updateQuantity(cartId, newQuantity);
    }
  };

  const generateOrderSummary = () => {
    const subtotal = getCartTotal();
    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
    
    let summary = `🛒 *LUNA GRAPHICS - ORDER INQUIRY*\n\n`;
    summary += `*Items (${itemCount}):*\n`;
    summary += `─────────────────────\n`;
    
    items.forEach((item, index) => {
      const itemTotal = item.price * item.quantity;
      summary += `${index + 1}. ${item.name}\n`;
      summary += `   Qty: ${item.quantity} ${item.priceUnit} × ${formatPrice(item.price)}\n`;
      summary += `   Subtotal: ${formatPrice(itemTotal)}\n\n`;
    });
    
    summary += `─────────────────────\n`;
    summary += `*TOTAL: ${formatPrice(subtotal)}*\n\n`;
    
    if (formData.name) summary += `*Name:* ${formData.name}\n`;
    if (formData.phone) summary += `*Phone:* ${formData.phone}\n`;
    if (formData.email) summary += `*Email:* ${formData.email}\n`;
    if (formData.message) summary += `*Notes:* ${formData.message}\n`;
    
    return summary;
  };

  const handleWhatsAppCheckout = () => {
    const message = generateOrderSummary();
    const whatsappUrl = `https://wa.me/254791159618?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setIsCheckingOut(false);
  };

  const handleEmailCheckout = async (e) => {
    e.preventDefault();
    setSubmitStatus('sending');

    try {
      const orderDetails = items.map(item => ({
        name: item.name,
        quantity: item.quantity,
        unit: item.priceUnit,
        price: formatPrice(item.price),
        total: formatPrice(item.price * item.quantity)
      }));

      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          customer_name: formData.name,
          customer_email: formData.email,
          customer_phone: formData.phone,
          customer_message: formData.message,
          order_items: JSON.stringify(orderDetails),
          order_total: formatPrice(getCartTotal()),
          item_count: items.length.toString(),
          order_summary: generateOrderSummary()
        },
        'YOUR_PUBLIC_KEY'
      );

      setSubmitStatus('success');
      setTimeout(() => {
        clearCart();
        setIsCheckingOut(false);
        setSubmitStatus(null);
        setFormData({ name: '', email: '', phone: '', message: '' });
      }, 2000);
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

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 pb-12">
        <Helmet>
          <title>Shopping Cart | Luna Graphics Kenya</title>
          <meta name="description" content="Your shopping cart at Luna Graphics Kenya" />
        </Helmet>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-sm border border-gray-200 p-12 text-center"
          >
            <div className="w-24 h-24 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-6">
              <Icon name="ShoppingCart" size={40} className="text-gray-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Cart is Empty</h2>
            <p className="text-gray-500 mb-6">Looks like you have not added any products yet.</p>
            <Button 
              variant="primary" 
              onClick={() => navigate('/shop')}
              className="bg-emerald-600 hover:bg-emerald-700"
            >
              Continue Shopping
            </Button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <Helmet>
        <title>{`Shopping Cart (${items.length}) | Luna Graphics Kenya`}</title>
        <meta name="description" content="Your shopping cart at Luna Graphics Kenya" />
      </Helmet>
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            <AnimatePresence>
              {items.map((item) => (
                <motion.div
                  key={item.cartId}
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="bg-white rounded-xl border border-gray-200 p-4 flex gap-4 hover:shadow-md transition-shadow"
                >
                  {/* Product Image */}
                  <div 
                    className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0 cursor-pointer"
                    onClick={() => navigate(`/shop/product/${item.id}`)}
                  >
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 
                          className="font-semibold text-gray-900 hover:text-emerald-600 transition-colors cursor-pointer line-clamp-2"
                          onClick={() => navigate(`/shop/product/${item.id}`)}
                        >
                          {item.name}
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">{item.category}</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.cartId)}
                        className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                        aria-label="Remove item"
                      >
                        <Icon name="Trash2" size={18} />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center border border-gray-300 rounded-lg">
                        <button
                          onClick={() => handleQuantityChange(item.cartId, item.quantity - 1, item.minOrder)}
                          className="px-3 py-1.5 hover:bg-gray-100 transition-colors disabled:opacity-50"
                          disabled={item.quantity <= item.minOrder}
                        >
                          <Icon name="Minus" size={14} />
                        </button>
                        <span className="px-3 py-1.5 font-medium min-w-[3rem] text-center text-sm">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => handleQuantityChange(item.cartId, item.quantity + 1, item.minOrder)}
                          className="px-3 py-1.5 hover:bg-gray-100 transition-colors"
                        >
                          <Icon name="Plus" size={14} />
                        </button>
                      </div>

                      <div className="text-right">
                        <p className="font-bold text-emerald-600">
                          {formatPrice(item.price * item.quantity)}
                        </p>
                        <p className="text-xs text-gray-500">
                          {formatPrice(item.price)}/{item.priceUnit}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            <button
              onClick={clearCart}
              className="text-sm text-red-500 hover:text-red-600 font-medium flex items-center gap-1"
            >
              <Icon name="Trash2" size={14} />
              Clear Cart
            </button>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl border border-gray-200 p-6 sticky top-24">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Items ({items.length})</span>
                  <span className="font-medium">{formatPrice(getCartTotal())}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Delivery</span>
                  <span className="text-emerald-600 font-medium">Free (Nairobi)</span>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-gray-900">Total</span>
                  <span className="text-2xl font-bold text-emerald-600">
                    {formatPrice(getCartTotal())}
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full bg-emerald-600 hover:bg-emerald-700"
                  onClick={() => {
                    setCheckoutMethod('whatsapp');
                    setIsCheckingOut(true);
                  }}
                >
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Checkout via WhatsApp
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                  onClick={() => {
                    setCheckoutMethod('email');
                    setIsCheckingOut(true);
                  }}
                >
                  <Icon name="Mail" size={20} className="mr-2" />
                  Checkout via Email
                </Button>
                
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full"
                  onClick={() => navigate('/shop')}
                >
                  Continue Shopping
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Checkout Modal */}
      {isCheckingOut && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsCheckingOut(false)}
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="bg-emerald-600 px-6 py-4 flex items-center justify-between sticky top-0">
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {checkoutMethod === 'whatsapp' ? 'WhatsApp Checkout' : 'Email Checkout'}
                </h3>
                <p className="text-emerald-100 text-sm">{items.length} items - {formatPrice(getCartTotal())}</p>
              </div>
              <button 
                onClick={() => setIsCheckingOut(false)}
                className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30"
              >
                <Icon name="X" size={20} />
              </button>
            </div>

            <div className="p-6">
              <div className="bg-gray-50 rounded-lg p-4 mb-6 max-h-40 overflow-y-auto">
                <h4 className="font-medium text-gray-900 mb-2 text-sm">Order Preview:</h4>
                {items.map((item, idx) => (
                  <div key={item.cartId} className="flex justify-between text-sm py-1 border-b border-gray-200 last:border-0">
                    <span className="text-gray-600 truncate flex-1">{idx + 1}. {item.name}</span>
                    <span className="font-medium ml-2">{formatPrice(item.price * item.quantity)}</span>
                  </div>
                ))}
                <div className="flex justify-between font-bold text-emerald-600 pt-2 mt-2 border-t border-gray-300">
                  <span>Total</span>
                  <span>{formatPrice(getCartTotal())}</span>
                </div>
              </div>

              {checkoutMethod === 'whatsapp' ? (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name (Optional)</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
                    <textarea
                      name="message"
                      rows="3"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none resize-none"
                      placeholder="Any special requirements..."
                    />
                  </div>
                  <Button
                    variant="primary"
                    size="lg"
                    className="w-full bg-emerald-600 hover:bg-emerald-700"
                    onClick={handleWhatsAppCheckout}
                  >
                    <Icon name="MessageCircle" size={20} className="mr-2" />
                    Open WhatsApp & Send Order
                  </Button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleEmailCheckout} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"
                      placeholder="your@email.com"
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"
                      placeholder="07XX XXX XXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                      name="message"
                      rows="3"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none resize-none"
                      placeholder="Additional requirements..."
                    />
                  </div>

                  {submitStatus === 'error' && (
                    <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm flex items-center gap-2">
                      <Icon name="AlertCircle" size={16} />
                      Failed to send. Please try WhatsApp.
                    </div>
                  )}

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full bg-emerald-600 hover:bg-emerald-700"
                    disabled={submitStatus === 'sending'}
                  >
                    {submitStatus === 'sending' ? (
                      <span className="flex items-center justify-center">
                        <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
                        Sending...
                      </span>
                    ) : submitStatus === 'success' ? (
                      <span className="flex items-center justify-center">
                        <Icon name="CheckCircle" size={20} className="mr-2" />
                        Sent Successfully!
                      </span>
                    ) : (
                      <>
                        <Icon name="Send" size={20} className="mr-2" />
                        Send Order via Email
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Cart;
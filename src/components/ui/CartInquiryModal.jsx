import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import { useCart } from '../../context/CartContext';

// EmailJS Configuration
const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_b1lp7ef',
  TEMPLATE_ID: 'template_5qy4nwm',
  PUBLIC_KEY: 'kiEUK4XklpodvcXo-'
};

// WhatsApp number formatter
const formatWhatsAppNumber = (phone) => {
  if (!phone) return '254791159618';
  
  let cleaned = phone.replace(/\D/g, '');
  
  if (cleaned.startsWith('+')) {
    cleaned = cleaned.substring(1);
  }
  
  if (cleaned.startsWith('0')) {
    cleaned = '254' + cleaned.substring(1);
  }
  
  if (!cleaned.startsWith('254')) {
    cleaned = '254' + cleaned;
  }
  
  return cleaned;
};

const CartInquiryModal = ({ isOpen, onClose }) => {
  const { items, getCartTotal, formatPrice, clearCart } = useCart();
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [inquiryType, setInquiryType] = useState('all');
  const [selectedItems, setSelectedItems] = useState([]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    preferredContact: 'email'
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const toggleItemSelection = (cartId) => {
    setSelectedItems(prev => 
      prev.includes(cartId) 
        ? prev.filter(id => id !== cartId)
        : [...prev, cartId]
    );
  };

  const getInquiryItems = () => {
    if (inquiryType === 'all') return items;
    return items.filter(item => selectedItems.includes(item.cartId));
  };

  const getInquiryTotal = () => {
    const inquiryItems = getInquiryItems();
    return inquiryItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const generateCartSummary = () => {
    const inquiryItems = getInquiryItems();
    let summary = '🛒 CART INQUIRY\n\n';
    
    inquiryItems.forEach((item, index) => {
      summary += `${index + 1}. ${item.name}\n`;
      summary += `   Quantity: ${item.quantity} ${item.priceUnit || 'units'}\n`;
      summary += `   Price: ${formatPrice(item.price)} each\n`;
      summary += `   Subtotal: ${formatPrice(item.price * item.quantity)}\n\n`;
    });
    
    summary += `📊 TOTAL: ${formatPrice(getInquiryTotal())}\n`;
    summary += `📦 Total Items: ${inquiryItems.reduce((sum, item) => sum + item.quantity, 0)}`;
    
    return summary;
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  if (getInquiryItems().length === 0) return;
  
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

    const inquiryItems = getInquiryItems();
    
    // Generate HTML for cart items
    const cartItemsHtml = inquiryItems.map(item => `
      <div class="cart-item">
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-meta">Qty: ${item.quantity} ${item.priceUnit || 'units'} × ${formatPrice(item.price)}</div>
        </div>
        <div class="cart-item-price">${formatPrice(item.price * item.quantity)}</div>
      </div>
    `).join('');

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      formatted_phone: formatWhatsAppNumber(formData.phone),
      message: formData.message || 'No additional message provided',
      product_name: inquiryItems.length > 1 ? `Cart Inquiry (${inquiryItems.length} items)` : inquiryItems[0].name,
      product_id: inquiryItems.length > 1 ? 'CART-' + Date.now().toString().slice(-6) : inquiryItems[0].id,
      reply_to: formData.email,
      timestamp: timestamp,
      preferred_contact: formData.preferredContact,
      cart_total: formatPrice(getInquiryTotal()),
      item_count: inquiryItems.length.toString(),
      quantity: inquiryItems.reduce((sum, item) => sum + item.quantity, 0).toString(),
      // Control visibility of cart section
      cart_section_display: inquiryItems.length > 1 ? 'block' : 'none',
      // Pre-rendered HTML for cart items
      cart_items_html: inquiryItems.length > 1 ? cartItemsHtml : ''
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
      clearCart();
      setTimeout(() => {
        setSubmitStatus(null);
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          preferredContact: 'email'
        });
        setSelectedItems([]);
        setInquiryType('all');
      }, 300);
    }, 2000);
    
  } catch (error) {
    console.error('EmailJS Error:', error);
    setSubmitStatus('error');
  } finally {
    setIsSubmitting(false);
  }
};

  const handleWhatsApp = () => {
    const inquiryItems = getInquiryItems();
    if (inquiryItems.length === 0) return;
    
    const cartSummary = generateCartSummary();
    
    const message = `Hello Luna Graphics!

${cartSummary}

👤 Customer Details:
Name: ${formData.name || 'Not provided'}
Phone: ${formData.phone || 'Not provided'}
Email: ${formData.email || 'Not provided'}
Preferred Contact: ${formData.preferredContact}

💬 Message:
${formData.message || 'No additional message'}`;

    const whatsappUrl = `https://wa.me/${formatWhatsAppNumber(formData.phone || '254791159618')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  if (!isOpen) return null;

  const inquiryItems = getInquiryItems();

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
      >
        <div 
          className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          onClick={onClose}
        />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          className="relative bg-[#fffef9] rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col"
        >
          {/* Header */}
          <div className="relative bg-gradient-to-br from-emerald-800 via-emerald-700 to-teal-700 px-8 py-8 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-20 bg-white/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-emerald-400/20 rounded-full blur-3xl" />
            
            <div className="relative z-10 text-center">
              <h2 className="font-serif italic text-3xl text-emerald-50 mb-2">Cart Inquiry</h2>
              <p className="text-emerald-200 text-xs uppercase tracking-[0.3em] font-medium">
                {items.length} {items.length === 1 ? 'Item' : 'Items'} Ready for Quote
              </p>
            </div>
            
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <Icon name="X" size={20} />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-8">
            {submitStatus === 'success' ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 mx-auto bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                  <Icon name="CheckCircle" size={40} className="text-emerald-600" />
                </div>
                <h3 className="font-serif italic text-2xl text-emerald-900 mb-3">Inquiry Sent!</h3>
                <p className="text-gray-600 mb-2">We'll prepare your custom quote within 24 hours.</p>
                <p className="text-sm text-gray-500">Check your email for confirmation.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Cart Summary */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-emerald-800 text-xs uppercase tracking-[0.2em] font-semibold">
                    <span>Cart Summary</span>
                    <div className="flex-1 h-px bg-gradient-to-r from-emerald-200 to-transparent" />
                  </div>
                  
                  <div className="flex gap-2 p-1 bg-emerald-50 rounded-xl">
                    <button
                      type="button"
                      onClick={() => setInquiryType('all')}
                      className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all ${
                        inquiryType === 'all' 
                          ? 'bg-white text-emerald-700 shadow-sm' 
                          : 'text-emerald-600 hover:text-emerald-800'
                      }`}
                    >
                      All Items ({items.length})
                    </button>
                    <button
                      type="button"
                      onClick={() => setInquiryType('selected')}
                      className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all ${
                        inquiryType === 'selected' 
                          ? 'bg-white text-emerald-700 shadow-sm' 
                          : 'text-emerald-600 hover:text-emerald-800'
                      }`}
                    >
                      Selected ({selectedItems.length})
                    </button>
                  </div>

                  <div className="space-y-3 max-h-48 overflow-y-auto pr-2">
                    {items.map((item) => (
                      <div 
                        key={item.cartId}
                        onClick={() => inquiryType === 'selected' && toggleItemSelection(item.cartId)}
                        className={`flex items-center gap-4 p-4 rounded-xl border transition-all ${
                          inquiryType === 'selected' && selectedItems.includes(item.cartId)
                            ? 'bg-emerald-50 border-emerald-300'
                            : inquiryType === 'selected'
                            ? 'bg-white border-gray-200 hover:border-emerald-200'
                            : 'bg-emerald-50/50 border-emerald-100'
                        } ${inquiryType === 'all' ? 'cursor-default' : 'cursor-pointer'}`}
                      >
                        {inquiryType === 'selected' && (
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                            selectedItems.includes(item.cartId) 
                              ? 'bg-emerald-600 border-emerald-600' 
                              : 'border-gray-300'
                          }`}>
                            {selectedItems.includes(item.cartId) && (
                              <Icon name="Check" size={12} className="text-white" />
                            )}
                          </div>
                        )}
                        
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-12 h-12 rounded-lg object-cover bg-gray-100"
                          onError={(e) => { e.target.src = '/images/placeholder-product.jpg'; }}
                        />
                        
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-gray-900 truncate text-sm">{item.name}</h4>
                          <p className="text-xs text-gray-500">
                            {item.quantity} × {formatPrice(item.price)}
                          </p>
                        </div>
                        
                        <div className="text-right">
                          <p className="font-semibold text-emerald-700 text-sm">
                            {formatPrice(item.price * item.quantity)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t-2 border-emerald-100">
                    <span className="text-gray-600 font-medium">Estimated Total</span>
                    <span className="font-serif italic text-2xl text-emerald-800">
                      {formatPrice(getInquiryTotal())}
                    </span>
                  </div>
                </div>

                {/* Contact Details */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-emerald-800 text-xs uppercase tracking-[0.2em] font-semibold">
                    <span>Your Details</span>
                    <div className="flex-1 h-px bg-gradient-to-r from-emerald-200 to-transparent" />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-medium text-gray-600 uppercase tracking-wider">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all text-sm"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-xs font-medium text-gray-600 uppercase tracking-wider">
                        Phone <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all text-sm"
                        placeholder="07XX XXX XXX"
                      />
                      <p className="text-xs text-gray-400">We'll format this for WhatsApp automatically</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-medium text-gray-600 uppercase tracking-wider">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all text-sm"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-medium text-gray-600 uppercase tracking-wider">
                      Preferred Contact Method
                    </label>
                    <div className="flex gap-3">
                      {['email', 'whatsapp', 'phone'].map((method) => (
                        <button
                          key={method}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, preferredContact: method }))}
                          className={`flex-1 py-3 px-4 rounded-xl border text-sm font-medium capitalize transition-all ${
                            formData.preferredContact === method
                              ? 'bg-emerald-600 text-white border-emerald-600'
                              : 'bg-white text-gray-600 border-gray-200 hover:border-emerald-300'
                          }`}
                        >
                          {method}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-emerald-800 text-xs uppercase tracking-[0.2em] font-semibold">
                    <span>Message</span>
                    <div className="flex-1 h-px bg-gradient-to-r from-emerald-200 to-transparent" />
                  </div>
                  <textarea
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-emerald-50/50 border border-emerald-100 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all resize-none text-sm"
                    placeholder="Any specific requirements, deadlines, or questions about your order..."
                  />
                </div>

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-100 rounded-xl flex items-start gap-3 text-red-600 text-sm">
                    <Icon name="AlertCircle" size={18} className="flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Failed to send inquiry</p>
                      <p>Please try WhatsApp or call us directly.</p>
                    </div>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    className="flex-1 border-emerald-200 text-emerald-700 hover:bg-emerald-50 py-4 rounded-xl"
                    onClick={handleWhatsApp}
                    disabled={inquiryItems.length === 0}
                  >
                    <Icon name="MessageCircle" size={18} className="mr-2" />
                    WhatsApp Quote
                  </Button>
                  <Button
                    type="submit"
                    variant="primary"
                    className="flex-1 bg-emerald-700 hover:bg-emerald-800 text-white py-4 rounded-xl disabled:opacity-50"
                    disabled={isSubmitting || inquiryItems.length === 0}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
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

export default CartInquiryModal;
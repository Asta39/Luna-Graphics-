import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import SEO from '../../components/SEO';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import { useCart } from '../../context/CartContext';
import Header from '../../components/ui/Header';
import Footer from '../homepage/components/Footer';
import { getProductById } from '../../data/products';
import CartInquiryModal from '../../components/ui/CartInquiryModal';

const Cart = () => {
  const navigate = useNavigate();
  const { items, addItem, removeItem, updateQuantity, clearCart, getCartTotal } = useCart();
  const [lastRemoved, setLastRemoved] = useState(null);

  useEffect(() => {
    if (!lastRemoved) return;
    const t = setTimeout(() => setLastRemoved(null), 5000);
    return () => clearTimeout(t);
  }, [lastRemoved]);

  useEffect(() => {
    document.body.dataset.buyBar = '';
    return () => { delete document.body.dataset.buyBar; };
  }, []);
  const formRef = useRef();
  
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutMethod, setCheckoutMethod] = useState(null);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false); // Added for CartInquiryModal
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState(null);

  const getCartItemImage = (item) => {
    if (item.image) return item.image;
    const product = getProductById(item.id);
    if (!product) return '/images/placeholder-product.jpg';
    if (product.images && product.images.length > 0) return product.images[0];
    return product.image || '/images/placeholder-product.jpg';
  };

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
        'service_b1lp7ef',
        'template_5qy4nwm',
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
        'kiEUK4XklpodvcXo-'
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

  const total = getCartTotal();
  const unitCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const freeDelivery = total >= 5000;

  const undoRemove = () => {
    if (!lastRemoved) return;
    lastRemoved.forEach((item) => {
      const product = getProductById(item.id);
      if (product) addItem(product, item.quantity);
    });
    setLastRemoved(null);
  };

  const removeWithUndo = (item) => {
    removeItem(item.cartId);
    setLastRemoved([item]);
  };

  const clearWithUndo = () => {
    setLastRemoved(items.map((i) => ({ ...i })));
    clearCart();
  };

  const openCheckout = (method) => {
    setCheckoutMethod(method);
    setIsCheckingOut(true);
  };

  const undoBar = lastRemoved && (
    <div className={`materialize-up fixed left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 whitespace-nowrap rounded-full bg-gray-900 text-white pl-5 pr-2 py-2 shadow-lg ${
      items.length ? 'bottom-[calc(6.5rem+env(safe-area-inset-bottom))] sm:bottom-8' : 'bottom-[max(1.5rem,env(safe-area-inset-bottom))]'
    }`}>
      <span className="text-sm">
        {lastRemoved.length === 1 ? 'Item removed' : `${lastRemoved.length} items removed`}
      </span>
      <button onClick={undoRemove} className="press h-9 px-4 rounded-full bg-white/15 hover:bg-white/25 text-sm font-semibold">
        Undo
      </button>
    </div>
  );

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 pt-16">
      <SEO
        title={items.length ? `Shopping Cart (${items.length}) | Luna Graphics Kenya` : 'Shopping Cart | Luna Graphics Kenya'}
        description="Review your selected printing and branding products and send your order on WhatsApp or by email."
        keywords="printing shopping cart, checkout Nairobi, custom order summary, Luna Graphics checkout"
        type="website"
        robots="noindex, follow"
        geo={{ region: "KE-30", placename: "Nairobi", position: "-1.280302;36.822639" }}
      />
        <Header />
        <main className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-md mx-auto text-center">
            <Icon name="ShoppingCart" size={48} className="mx-auto text-gray-300" />
            <h1 className="mt-6 text-2xl sm:text-3xl font-semibold text-gray-900">Your cart is empty</h1>
            <p className="mt-2 text-gray-500">Banners, signage, apparel and more, printed in Nairobi.</p>
            <button
              onClick={() => navigate('/')}
              className="press mt-8 h-12 px-8 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold"
            >
              Browse products
            </button>
          </div>
        </main>
        {undoBar}
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <SEO
        title={items.length ? `Shopping Cart (${items.length}) | Luna Graphics Kenya` : 'Shopping Cart | Luna Graphics Kenya'}
        description="Review your selected printing and branding products and send your order on WhatsApp or by email."
        keywords="printing shopping cart, checkout Nairobi, custom order summary, Luna Graphics checkout"
        type="website"
        robots="noindex, follow"
        geo={{ region: "KE-30", placename: "Nairobi", position: "-1.280302;36.822639" }}
      />
      <Header />

      <main className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-40 sm:pb-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900">Your cart</h1>
            <p className="mt-1 text-gray-500">{items.length} {items.length === 1 ? 'product' : 'products'} · {formatPrice(total)}</p>
          </div>
          <button onClick={() => navigate('/')} className="text-sm font-medium text-emerald-700 hover:text-emerald-800 whitespace-nowrap">
            Keep shopping
          </button>
        </div>

        <div className="mt-8 grid lg:grid-cols-[1fr_380px] gap-8 items-start">
          {/* Items as one grouped list */}
          <div>
            <ul className="bg-white card-surface rounded-3xl divide-y divide-black/[0.06]">
              <AnimatePresence initial={false}>
                {items.map((item) => (
                  <motion.li
                    key={item.cartId}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ type: 'spring', bounce: 0, duration: 0.35 }}
                    className="flex gap-4 p-4 sm:p-5 overflow-hidden"
                  >
                    <button
                      onClick={() => navigate(`/shop/product/${item.id}`)}
                      className="w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 rounded-2xl overflow-hidden bg-gray-50"
                      aria-label={`View ${item.name}`}
                    >
                      <img
                        src={getCartItemImage(item)}
                        alt=""
                        className="w-full h-full object-cover"
                        onError={(e) => { e.target.src = '/images/placeholder-product.jpg'; }}
                      />
                    </button>

                    <div className="flex-1 min-w-0 flex flex-col">
                      <div className="flex items-start justify-between gap-3">
                        <button
                          onClick={() => navigate(`/shop/product/${item.id}`)}
                          className="text-left font-semibold text-gray-900 leading-snug line-clamp-2 hover:text-emerald-700"
                        >
                          {item.name}
                        </button>
                        <p className="font-semibold text-gray-900 tabular-nums whitespace-nowrap">{formatPrice(item.price * item.quantity)}</p>
                      </div>
                      <p className="mt-0.5 text-xs text-gray-500">
                        {formatPrice(item.price)} {item.priceUnit === 'each' ? 'each' : `per ${item.priceUnit}`}
                      </p>

                      <div className="mt-auto pt-3 flex items-center justify-between">
                        <div className="flex items-center rounded-full bg-gray-100 p-0.5">
                          <button
                            onClick={() => handleQuantityChange(item.cartId, item.quantity - 1, item.minOrder)}
                            disabled={item.quantity <= item.minOrder}
                            aria-label={`Decrease quantity of ${item.name}`}
                            className="press w-10 h-10 rounded-full flex items-center justify-center text-gray-900 hover:bg-white disabled:text-gray-300 disabled:hover:bg-transparent"
                          >
                            <Icon name="Minus" size={16} />
                          </button>
                          <span className="w-9 text-center text-sm font-semibold tabular-nums" aria-live="polite">{item.quantity}</span>
                          <button
                            onClick={() => handleQuantityChange(item.cartId, item.quantity + 1, item.minOrder)}
                            aria-label={`Increase quantity of ${item.name}`}
                            className="press w-10 h-10 rounded-full flex items-center justify-center text-gray-900 hover:bg-white"
                          >
                            <Icon name="Plus" size={16} />
                          </button>
                        </div>
                        <button
                          onClick={() => removeWithUndo(item)}
                          className="text-sm font-medium text-gray-500 hover:text-red-600 px-2 py-2"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </motion.li>
                ))}
              </AnimatePresence>
            </ul>

            <button onClick={clearWithUndo} className="mt-4 text-sm font-medium text-gray-500 hover:text-red-600">
              Remove all
            </button>
          </div>

          {/* Summary */}
          <aside className="lg:sticky lg:top-24">
            <div className="bg-white card-surface rounded-3xl p-6">
              <h2 className="text-lg font-semibold text-gray-900">Summary</h2>
              <dl className="mt-4 space-y-3 text-sm">
                <div className="flex justify-between">
                  <dt className="text-gray-500">Subtotal ({unitCount} {unitCount === 1 ? 'unit' : 'units'})</dt>
                  <dd className="text-gray-900 tabular-nums">{formatPrice(total)}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-gray-500">Delivery</dt>
                  <dd className="text-gray-900 text-right">
                    {freeDelivery ? 'Free in Nairobi CBD' : 'Confirmed with your order'}
                  </dd>
                </div>
              </dl>
              {!freeDelivery && (
                <p className="mt-2 text-xs text-gray-500">
                  Add {formatPrice(5000 - total)} more for free delivery in Nairobi CBD.
                </p>
              )}
              <div className="mt-5 pt-5 border-t border-black/[0.06] flex items-baseline justify-between">
                <span className="font-semibold text-gray-900">Total</span>
                <span className="text-2xl font-semibold tracking-tight text-gray-900 tabular-nums">{formatPrice(total)}</span>
              </div>

              <div className="mt-6 hidden sm:flex flex-col gap-3">
                <button
                  onClick={() => openCheckout('whatsapp')}
                  className="press h-14 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold flex items-center justify-center gap-2"
                >
                  <Icon name="MessageCircle" size={20} />
                  Send order on WhatsApp
                </button>
                <button
                  onClick={() => openCheckout('email')}
                  className="press h-14 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold flex items-center justify-center gap-2"
                >
                  <Icon name="Mail" size={20} />
                  Send by email
                </button>
              </div>
              <p className="mt-4 text-xs text-gray-500 leading-relaxed">
                Nothing is charged here. We confirm price, artwork and delivery with you before printing.
              </p>
            </div>

            <button
              onClick={() => setIsInquiryOpen(true)}
              className="mt-4 w-full text-center text-sm font-medium text-emerald-700 hover:text-emerald-800"
            >
              Need a custom size or bulk price? Request a quote
            </button>
          </aside>
        </div>
      </main>

      <Footer />

      {/* Phone checkout bar */}
      <div className="sm:hidden fixed bottom-0 inset-x-0 z-40 material-bar border-t border-black/[0.06] px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        <div className="flex items-center gap-3">
          <div className="min-w-0 flex-1">
            <p className="text-lg font-semibold text-gray-900 leading-tight tabular-nums">{formatPrice(total)}</p>
            <button onClick={() => openCheckout('email')} className="text-xs font-medium text-emerald-700">Send by email instead</button>
          </div>
          <button
            onClick={() => openCheckout('whatsapp')}
            className="press h-12 px-5 flex-shrink-0 rounded-full bg-emerald-600 text-white font-semibold flex items-center gap-2"
          >
            <Icon name="MessageCircle" size={18} />
            Send order
          </button>
        </div>
      </div>

      {undoBar}

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

      {/* NEW: Cart Inquiry Modal */}
      <CartInquiryModal 
        isOpen={isInquiryOpen} 
        onClose={() => setIsInquiryOpen(false)} 
      />
    </div>
  );
};

export default Cart;
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import Header from 'components/ui/Header';
import { products, categories, getPopularProducts, getNewArrivals, getDeals, searchProducts } from '../../data/products';

// Components
import HeroBanner from './components/HeroBanner';
import TrustBadges from './components/TrustBadges';
import CategoryCard from './components/CategoryCard';
import ProductCard from './components/ProductCard';
import InquiryModal from './components/InquiryModal';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'

  const searchTerm = searchParams.get('search') || '';

  useEffect(() => {
    if (searchTerm) {
      setSearchQuery(searchTerm);
    }
  }, [searchTerm]);

  const filteredProducts = searchQuery 
    ? searchProducts(searchQuery)
    : activeCategory === 'all' 
      ? products 
      : products.filter(p => p.category === activeCategory);

  const popularProducts = getPopularProducts();
  const newArrivals = getNewArrivals();
  const deals = getDeals();

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    setSearchQuery('');
    setSearchParams({});
  };

  const openInquiry = (product) => {
    setSelectedProduct(product);
    setIsInquiryOpen(true);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-KE', {
      style: 'currency',
      currency: 'KES',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Shop Printing Products | Luna Graphics Kenya</title>
        <meta name="description" content="Browse banners, signage, corporate materials, and branded merchandise. Quality printing in Nairobi, Kenya." />
      </Helmet>
      <Header/>

      <HeroBanner />
      <TrustBadges />
      {/* Category Navigation - Clean Horizontal Pills */}
      <section className="py-6 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide snap-x">
            <button
              onClick={() => handleCategoryChange('all')}
              className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all snap-start ${
                activeCategory === 'all'
                  ? 'bg-emerald-600 text-white shadow-md' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Icon name="LayoutGrid" size={16} />
              <span>All Products</span>
              <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                activeCategory === 'all' ? 'bg-white/20' : 'bg-gray-200'
              }`}>
                {products.length}
              </span>
            </button>

            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all snap-start ${
                  activeCategory === category.id
                    ? 'bg-emerald-600 text-white shadow-md' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Icon name={category.icon} size={16} />
                <span className="whitespace-nowrap">{category.name}</span>
                <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                  activeCategory === category.id ? 'bg-white/20' : 'bg-gray-200'
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Deals Section */}
{!searchQuery && activeCategory === 'all' && deals.length > 0 && (
  <section className="py-12 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
            <Icon name="Zap" size={20} className="text-red-600" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Deal of the Day</h2>
            <p className="text-sm text-gray-500">Limited time offers</p>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-2 text-sm text-gray-600 bg-gray-100 px-4 py-2 rounded-full">
          <Icon name="Clock" size={16} />
          <span>Ends in 2 days</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {deals.slice(0, 2).map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gradient-to-r from-gray-50 to-white rounded-2xl border border-gray-200 p-6 flex gap-6 hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => navigate(`/shop/product/${product.id}`)}
          >
            {/* Fixed size image - 128x128px */}
            <div className="relative w-32 h-32 flex-shrink-0 bg-white rounded-xl overflow-hidden border border-gray-100">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              <div className="absolute top-2 left-2 px-2 py-1 bg-red-500 text-white text-xs font-bold rounded">
                {product.discount}
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-lg text-gray-900 mb-2 truncate">{product.name}</h3>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-2xl font-bold text-emerald-600">{formatPrice(product.price)}</span>
                <span className="text-lg text-gray-400 line-through">{formatPrice(product.oldPrice)}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                <div 
                  className="bg-red-500 h-2 rounded-full" 
                  style={{ width: `${(product.sold / (product.sold + product.stock)) * 100}%` }}
                />
              </div>
              <p className="text-xs text-gray-500 mb-3">Sold: {product.sold} / Available: {product.stock}</p>
              <Button 
                variant="primary" 
                size="sm" 
                className="bg-emerald-600 hover:bg-emerald-700"
                onClick={(e) => {
                  e.stopPropagation();
                  openInquiry(product);
                }}
              >
                Inquire Now
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)}

      {/* Main Products Grid */}
<section id="products-grid" className="py-12 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Header */}
    <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">
          {searchQuery ? `Search: "${searchQuery}"` : 
           activeCategory === 'all' ? 'All Products' : 
           categories.find(c => c.id === activeCategory)?.name}
        </h2>
        <p className="text-gray-500 mt-1">{filteredProducts.length} products found</p>
      </div>
      
      <div className="flex items-center gap-4">
        {/* View Toggle */}
        <div className="flex bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded-md transition-all ${viewMode === 'grid' ? 'bg-white shadow-sm text-emerald-600' : 'text-gray-500'}`}
          >
            <Icon name="Grid3X3" size={20} />
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-2 rounded-md transition-all ${viewMode === 'list' ? 'bg-white shadow-sm text-emerald-600' : 'text-gray-500'}`}
          >
            <Icon name="List" size={20} />
          </button>
        </div>

        {searchQuery && (
          <Button variant="outline" size="sm" onClick={() => {setSearchQuery(''); setSearchParams({});}}>
            Clear Search
          </Button>
        )}
      </div>
    </div>

    {/* Products - Consistent Grid */}
    {filteredProducts.length > 0 ? (
      <div className={`grid gap-6 ${
        viewMode === 'grid' 
          ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4' 
          : 'grid-cols-1'
      }`}>
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            viewMode={viewMode}
            onInquire={openInquiry}
          />
        ))}
      </div>
    ) : (
      <div className="text-center py-16 bg-white rounded-2xl border border-gray-200">
        <div className="w-20 h-20 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
          <Icon name="Search" size={32} className="text-gray-400" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">No products found</h3>
        <p className="text-gray-500 mb-4">Try adjusting your search or category filter</p>
        <Button variant="outline" onClick={() => handleCategoryChange('all')}>
          View All Products
        </Button>
      </div>
    )}
  </div>
</section>

      {/* New Arrivals */}
      {!searchQuery && activeCategory === 'all' && (
        <section className="py-12 bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">New Arrivals</h2>
                <p className="text-gray-500">Check out our latest products</p>
              </div>
              <Button variant="outline" size="sm">View All</Button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {newArrivals.map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onInquire={openInquiry}
                  onQuickView={(p) => console.log('Quick view:', p)}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="py-16 bg-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Can't Find What You Need?</h2>
          <p className="text-emerald-100 mb-8 text-lg">Get a custom quote for your specific printing requirements</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="primary" 
              size="lg"
              className="bg-white text-emerald-600 hover:bg-emerald-50"
              onClick={() => window.open('https://wa.me/254791159618', '_blank')}
            >
              <Icon name="MessageCircle" size={20} className="mr-2" />
              WhatsApp Us
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white/10"
            >
              Request Custom Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Inquiry Modal */}
      <InquiryModal 
        isOpen={isInquiryOpen} 
        onClose={() => setIsInquiryOpen(false)} 
        product={selectedProduct}
      />
    </div>
  );
};

export default Shop;
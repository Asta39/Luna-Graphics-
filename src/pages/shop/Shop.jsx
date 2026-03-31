import React, { useState, useEffect, useCallback } from 'react';
import SEO from '../../components/SEO';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import Header from '../../components/ui/Header';
import { products, categories, getPopularProducts, getNewArrivals, getDeals, getPaginatedProducts } from '../../data/products';

// Components
import HeroBanner from './components/HeroBanner';
import ProductCard from './components/ProductCard';
import InquiryModal from './components/InquiryModal';
import Pagination from '../../components/ui/Pagination';
import ServicesCarousel from './components/ServicesCarousel';

const Shop = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [viewMode, setViewMode] = useState('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedData, setPaginatedData] = useState({
    items: [],
    total: 0,
    totalPages: 1,
    currentPage: 1
  });
  const [isLoading, setIsLoading] = useState(false);
  
  const PRODUCTS_PER_PAGE = 12;

  // CRITICAL FIX: Read URL params on mount and when they change
  useEffect(() => {
    const urlSearch = searchParams.get('search') || '';
    const urlCategory = searchParams.get('category') || 'all';
    
    console.log('Shop.jsx - URL params:', { urlSearch, urlCategory });
    
    setSearchQuery(urlSearch);
    setActiveCategory(urlCategory);
    setCurrentPage(1); // Reset to page 1 when filters change
  }, [searchParams]);

  // Apply filters whenever dependencies change
  useEffect(() => {
    setIsLoading(true);
    
    const filters = {
      category: activeCategory,
      search: searchQuery
    };
    
    console.log('Applying filters:', filters);
    
    // Small delay to show loading state
    setTimeout(() => {
      try {
        const data = getPaginatedProducts(currentPage, PRODUCTS_PER_PAGE, filters);
        console.log('Filtered results:', data);
        setPaginatedData(data);
      } catch (error) {
        console.error('Error filtering products:', error);
      }
      setIsLoading(false);
    }, 100);
  }, [currentPage, activeCategory, searchQuery]);

  const popularProducts = getPopularProducts();
  const newArrivals = getNewArrivals();
  const deals = getDeals();

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    setCurrentPage(1);
    
    // Update URL params
    const newParams = new URLSearchParams(searchParams);
    if (categoryId === 'all') {
      newParams.delete('category');
    } else {
      newParams.set('category', categoryId);
    }
    // Preserve search if exists
    if (searchQuery) {
      newParams.set('search', searchQuery);
    }
    setSearchParams(newParams);
  };

  const handleHeroSearch = useCallback((query) => {
    console.log('Hero search callback:', query);
    // URL update is handled by HeroBanner navigation, just need to sync state
    setSearchQuery(query);
    setCurrentPage(1);
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    document.getElementById('products-grid')?.scrollIntoView({ behavior: 'smooth' });
  };

  const openInquiry = (product) => {
    setSelectedProduct(product);
    setIsInquiryOpen(true);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setActiveCategory('all');
    setCurrentPage(1);
    setSearchParams({});
  };

  const formatPrice = (price) => {
    if (price === 'inquire' || price === 'inquiry' || price === 'Contact for price') {
      return 'Contact for price';
    }
    return new Intl.NumberFormat('en-KE', {
      style: 'currency',
      currency: 'KES',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-0">
      <SEO 
        title={searchQuery ? `Search: ${searchQuery} | Luna Graphics` : activeCategory !== 'all' ? `${categories.find(c => c.id === activeCategory)?.name || 'Products'} | Luna Graphics` : "Shop Premium Printing & Branding Services | Luna Graphics"}
        description={searchQuery ? `Looking for ${searchQuery}? Browse our selection of professional printing and branding products at Luna Graphics Nairobi.` : "Browse professional banners, signage, corporate materials, and branded merchandise. High-quality offset and digital printing in Nairobi, Kenya."}
        canonical={activeCategory === 'all' && !searchQuery ? "https://lunagraphics.co.ke/shop" : `https://lunagraphics.co.ke/shop?category=${activeCategory}${searchQuery ? `&search=${searchQuery}` : ''}`}
        type="website"
        keywords="print shop Nairobi, business cards Nairobi, banner printing Kenya, brand identity, marketing materials, corporate gifts Nairobi, offset printing, digital printing Kenya"
        robots="index, follow"
        geo={{
          region: "KE-30",
          placename: "Nairobi",
          position: "-1.2921;36.8219"
        }}
        schemaData={[
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": searchQuery ? `Search Results for ${searchQuery}` : activeCategory !== 'all' ? categories.find(c => c.id === activeCategory)?.name : "Luna Graphics Shop",
            "description": "Premium collection of printing and branding products in Nairobi, Kenya.",
            "url": "https://lunagraphics.co.ke/shop",
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": paginatedData.items.map((prod, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "url": `https://lunagraphics.co.ke/shop/product/${prod.id}`
              }))
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://lunagraphics.co.ke/" },
              { "@type": "ListItem", "position": 2, "name": "Shop", "item": "https://lunagraphics.co.ke/shop" }
            ]
          }
        ]}
      />
      
      <Header />

      <HeroBanner onSearch={handleHeroSearch} />
      
      {/* Category Navigation */}
      <section className="py-4 lg:py-6 bg-white border-b border-gray-200 sticky top-16 lg:top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Active Search Indicator */}
          {searchQuery && (
            <div className="mb-4 flex items-center gap-2 text-sm animate-fade-in">
              <span className="text-gray-600">Searching for:</span>
              <span className="font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">"{searchQuery}"</span>
              <button 
                onClick={clearSearch}
                className="text-gray-400 hover:text-red-500 ml-2 p-1 hover:bg-red-50 rounded-full transition-colors"
              >
                <Icon name="X" size={16} />
              </button>
            </div>
          )}
          
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide snap-x">
            <button
              onClick={() => handleCategoryChange('all')}
              className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all snap-start ${
                activeCategory === 'all' && !searchQuery
                  ? 'bg-emerald-600 text-white shadow-md' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Icon name="LayoutGrid" size={16} />
              <span>All Products</span>
              <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                activeCategory === 'all' && !searchQuery ? 'bg-white/20' : 'bg-gray-200'
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
        <section className="py-8 lg:py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <Icon name="Zap" size={20} className="text-red-600" />
                </div>
                <div>
                  <h2 className="text-xl lg:text-2xl font-bold text-gray-900">Deal of the Day</h2>
                  <p className="text-sm text-gray-500">Limited time offers</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {deals.slice(0, 2).map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-r from-gray-50 to-white rounded-2xl border border-gray-200 p-4 flex gap-4 hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => navigate(`/shop/product/${product.id}`)}
                >
                  <div className="relative w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 bg-white rounded-xl overflow-hidden border border-gray-100">
                    <img src={product.images?.[0] || product.image} alt={product.name} className="w-full h-full object-cover" />
                    <div className="absolute top-2 left-2 px-2 py-1 bg-red-500 text-white text-xs font-bold rounded">
                      {product.discount}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-base text-gray-900 mb-2 truncate">{product.name}</h3>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-lg sm:text-xl font-bold text-emerald-600">{formatPrice(product.price)}</span>
                      <span className="text-sm text-gray-400 line-through">{formatPrice(product.oldPrice)}</span>
                    </div>
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
      <section id="products-grid" className="py-8 lg:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
            <div>
              <h2 className="text-xl lg:text-2xl font-bold text-gray-900">
                {searchQuery ? `Search Results for "${searchQuery}"` : 
                 activeCategory === 'all' ? 'All Products' : 
                 categories.find(c => c.id === activeCategory)?.name}
              </h2>
              <p className="text-gray-500 mt-1 text-sm">
                {isLoading ? 'Searching...' : `${paginatedData.total} products found`}
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              {/* View Toggle */}
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-all ${viewMode === 'grid' ? 'bg-white shadow-sm text-emerald-600' : 'text-gray-500'}`}
                >
                  <Icon name="Grid3X3" size={18} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-all ${viewMode === 'list' ? 'bg-white shadow-sm text-emerald-600' : 'text-gray-500'}`}
                >
                  <Icon name="List" size={18} />
                </button>
              </div>

              {(searchQuery || activeCategory !== 'all') && (
                <Button variant="outline" size="sm" onClick={clearSearch}>
                  Clear Filters
                </Button>
              )}
            </div>
          </div>

          {/* Products Grid */}
          {isLoading ? (
            <div className="flex items-center justify-center py-20">
              <div className="animate-spin w-8 h-8 border-2 border-emerald-600 border-t-transparent rounded-full"></div>
            </div>
          ) : paginatedData.items.length > 0 ? (
            <>
              <div className={`grid gap-4 ${
                viewMode === 'grid' 
                  ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4' 
                  : 'grid-cols-1'
              }`}>
                {paginatedData.items.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    viewMode={viewMode}
                    onInquire={openInquiry}
                  />
                ))}
              </div>

              {/* Pagination */}
              {paginatedData.totalPages > 1 && (
                <Pagination 
                  currentPage={paginatedData.currentPage}
                  totalPages={paginatedData.totalPages}
                  onPageChange={handlePageChange}
                />
              )}
            </>
          ) : (
            <div className="text-center py-16 bg-white rounded-2xl border border-gray-200">
              <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <Icon name="Search" size={28} className="text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-500 mb-4 text-sm">
                {searchQuery 
                  ? `No results for "${searchQuery}". Try different keywords.` 
                  : 'No products in this category.'}
              </p>
              <div className="flex gap-3 justify-center">
                {searchQuery && (
                  <Button variant="outline" size="sm" onClick={clearSearch}>
                    Clear Search
                  </Button>
                )}
                <Button variant="primary" size="sm" onClick={() => handleCategoryChange('all')}>
                  View All Products
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Services Carousel */}
      <ServicesCarousel />

      {/* New Arrivals */}
      {!searchQuery && activeCategory === 'all' && (
        <section className="py-8 lg:py-12 bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl lg:text-2xl font-bold text-gray-900">New Arrivals</h2>
                <p className="text-gray-500 text-sm">Check out our latest products</p>
              </div>
              <Button variant="outline" size="sm">View All</Button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {newArrivals.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onInquire={openInquiry}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="py-12 lg:py-16 bg-emerald-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">Can't Find What You Need?</h2>
          <p className="text-emerald-100 mb-6 text-base lg:text-lg">Get a custom quote for your specific printing requirements</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button 
              variant="primary" 
              size="lg"
              className="bg-emerald-100 text-emerald-600 hover:bg-emerald-50"
              onClick={() => window.open('https://wa.me/254791159618', '_blank')}
            >
              <Icon name="MessageCircle" size={20} className="mr-2" />
              WhatsApp Us
            </Button>
            <Button 
              variant="secondary" 
              size="lg"
              className="border-white text-white hover:bg-white/10"
              onClick={() => navigate('/contact')}
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
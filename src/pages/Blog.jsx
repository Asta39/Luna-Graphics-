import React, { useState, useMemo, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Icon from '../components/AppIcon';
import BlogCard from '../components/blog/BlogCard';
import Header from '../components/ui/Header';

import { blogPosts, blogCategories, searchPosts, generateBlogListingSchema } from '../data/blogData';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [maxVisiblePages, setMaxVisiblePages] = useState(6); // Default to 6 for desktop
  
  const postsPerPage = 6;

  // Handle responsive max visible pages
  useEffect(() => {
    const handleResize = () => {
      // Mobile: show 5 pages, Tablet/Desktop: show 6 pages
      if (window.innerWidth < 640) { // sm breakpoint
        setMaxVisiblePages(5);
      } else {
        setMaxVisiblePages(6);
      }
    };

    // Set initial value
    handleResize();

    // Listen for resize
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Filter posts based on search and category
  const filteredPosts = useMemo(() => {
    let posts = blogPosts;

    if (selectedCategory !== 'all') {
      posts = posts.filter(post => post.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      posts = searchPosts(searchQuery);
    }

    return posts.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedDate));
  }, [searchQuery, selectedCategory]);

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    setCurrentPage(1);
  };

  // Fixed sliding window pagination - smooth carousel behavior
  const getVisiblePages = () => {
    // Use half of maxVisible for the "center" position calculation
    const centerOffset = Math.floor(maxVisiblePages / 2); // 3 for 6 pages, 2 for 5 pages
    
    if (totalPages <= maxVisiblePages) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    let start;
    
    // Adjust breakpoints based on visible page count
    const slideThreshold = centerOffset + 2; // 5 for 6 pages, 4 for 5 pages
    
    if (currentPage <= slideThreshold) {
      // First phase: fixed at start
      start = 1;
    } else if (currentPage >= totalPages - (centerOffset - 1)) {
      // Near end: show last pages
      start = totalPages - (maxVisiblePages - 1);
    } else {
      // Middle: slide so currentPage stays centered-ish
      start = currentPage - centerOffset;
    }
    
    // Ensure bounds
    start = Math.max(1, start);
    start = Math.min(start, totalPages - (maxVisiblePages - 1));
    
    return Array.from({ length: maxVisiblePages }, (_, i) => start + i);
  };

  const visiblePages = getVisiblePages();
  const showStartEllipsis = visiblePages[0] > 1;
  const showEndEllipsis = visiblePages[visiblePages.length - 1] < totalPages;

  return (
    <div className="min-h-screen bg-gray-50 pt-18">
      <Helmet>
        <title>Blog | Printing Tips & Branding Insights | Luna Graphics Nairobi</title>
        <meta name="description" content="Expert printing tips, political campaign guides, corporate branding insights, and large format printing advice from Kenya's leading printing company." />
        <script type="application/ld+json">
          {JSON.stringify(generateBlogListingSchema())}
        </script>
      </Helmet>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Luna Graphics Blog
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Expert insights on printing, branding, and visual communication for Kenyan businesses and campaigns.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="sticky top-0 z-40 bg-white shadow-sm border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Icon name="Search" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={handleSearch}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <Icon name="X" size={18} />
                </button>
              )}
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 justify-center">
              <button
                onClick={() => handleCategoryChange('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === 'all'
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All Topics
              </button>
              {blogCategories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === cat.id
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <Icon name="FileX" size={48} className="mx-auto text-gray-300 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-500">Try adjusting your search or category filter.</p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                className="mt-4 text-primary hover:underline"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <>
              <div className="mb-6 text-sm text-gray-500">
                Showing {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {paginatedPosts.map(post => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>

              {/* Dynamic Pagination - Responsive */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-1 sm:gap-2 mt-12">
                  {/* Previous Button */}
                  <button
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="p-1.5 sm:p-2 rounded-lg border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-all duration-200 hover:scale-105 active:scale-95"
                  >
                    <Icon name="ChevronLeft" size={18} className="sm:w-5 sm:h-5" />
                  </button>

                  {/* First Page + Start Ellipsis */}
                  {showStartEllipsis && (
                    <>
                      <button
                        onClick={() => setCurrentPage(1)}
                        className="w-8 h-8 sm:w-10 sm:h-10 text-sm sm:text-base rounded-lg font-medium border border-gray-300 hover:bg-gray-50 transition-all duration-200 hover:scale-105"
                      >
                        1
                      </button>
                      <span className="px-1 sm:px-2 text-gray-400 select-none">...</span>
                    </>
                  )}

                  {/* Visible Page Numbers */}
                  <div className="flex gap-1 sm:gap-2">
                    {visiblePages.map((page, index) => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`
                          w-8 h-8 sm:w-10 sm:h-10 text-sm sm:text-base rounded-lg font-medium transition-all duration-300 ease-out
                          transform hover:scale-110 active:scale-95
                          ${currentPage === page
                            ? 'bg-primary text-white shadow-lg scale-105'
                            : 'bg-white border border-gray-300 hover:bg-gray-50 hover:border-gray-400 text-gray-700'
                          }
                        `}
                        style={{
                          animation: `slideIn 0.3s ease-out ${index * 0.05}s both`,
                        }}
                      >
                        {page}
                      </button>
                    ))}
                  </div>

                  {/* End Ellipsis + Last Page */}
                  {showEndEllipsis && (
                    <>
                      <span className="px-1 sm:px-2 text-gray-400 select-none">...</span>
                      <button
                        onClick={() => setCurrentPage(totalPages)}
                        className="w-8 h-8 sm:w-10 sm:h-10 text-sm sm:text-base rounded-lg font-medium border border-gray-300 hover:bg-gray-50 transition-all duration-200 hover:scale-105"
                      >
                        {totalPages}
                      </button>
                    </>
                  )}

                  {/* Next Button */}
                  <button
                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="p-1.5 sm:p-2 rounded-lg border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-all duration-200 hover:scale-105 active:scale-95"
                  >
                    <Icon name="ChevronRight" size={18} className="sm:w-5 sm:h-5" />
                  </button>
                </div>
              )}

              {/* Page Info */}
              {totalPages > 1 && (
                <div className="text-center mt-4 text-sm text-gray-500">
                  Page {currentPage} of {totalPages}
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Add CSS for slide animation */}
      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-8px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help With Your Project?</h2>
          <p className="text-gray-300 mb-8">
            Our experts are ready to bring your vision to life. Get a free consultation and quote today.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary hover:bg-primary-600 rounded-lg font-semibold transition-colors"
          >
            Start Your Project
            <Icon name="ArrowRight" size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Blog;
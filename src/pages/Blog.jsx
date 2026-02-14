import React, { useState, useMemo } from 'react';
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
  const postsPerPage = 6;

  // Filter posts based on search and category
  const filteredPosts = useMemo(() => {
    let posts = blogPosts;

    if (selectedCategory !== 'all') {
      posts = posts.filter(post => post.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      posts = searchPosts(searchQuery);
    }

    return posts.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
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
    const maxVisible = 10;
    
    if (totalPages <= maxVisible) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    // Keep window at start (1-10) until page 7, then slide
    // At page 8, show 1-10 (page 8 is at position 8)
    // At page 9, show 2-11 (page 9 is at position 8)
    // This keeps the active page in the right half of the window for smooth sliding
    
    let start;
    
    if (currentPage <= 7) {
      // First phase: fixed at 1-10
      start = 1;
    } else if (currentPage >= totalPages - 2) {
      // Near end: show last 10 pages
      start = totalPages - 9;
    } else {
      // Middle: slide so currentPage is at position 8 (index 7)
      // When on page 8, start is 1 (shows 1-10, 8 is at pos 8)
      // When on page 9, start is 2 (shows 2-11, 9 is at pos 8)
      // When on page 10, start is 3 (shows 3-12, 10 is at pos 8)
      start = currentPage - 7;
    }
    
    // Ensure start doesn't go below 1
    start = Math.max(1, start);
    // Ensure start doesn't go too high
    start = Math.min(start, totalPages - 9);
    
    return Array.from({ length: maxVisible }, (_, i) => start + i);
  };

  const visiblePages = getVisiblePages();
  const showStartEllipsis = visiblePages[0] > 1;
  const showEndEllipsis = visiblePages[visiblePages.length - 1] < totalPages;

  return (
    <div className="min-h-screen bg-gray-50">
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

              {/* Dynamic Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 mt-12">
                  {/* Previous Button */}
                  <button
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="p-2 rounded-lg border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-all duration-200 hover:scale-105 active:scale-95"
                  >
                    <Icon name="ChevronLeft" size={20} />
                  </button>

                  {/* First Page + Start Ellipsis */}
                  {showStartEllipsis && (
                    <>
                      <button
                        onClick={() => setCurrentPage(1)}
                        className="w-10 h-10 rounded-lg font-medium border border-gray-300 hover:bg-gray-50 transition-all duration-200 hover:scale-105"
                      >
                        1
                      </button>
                      <span className="px-2 text-gray-400 select-none">...</span>
                    </>
                  )}

                  {/* Visible Page Numbers - Clean styling without outer borders */}
                  <div className="flex gap-2">
                    {visiblePages.map((page, index) => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`
                          w-10 h-10 rounded-lg font-medium transition-all duration-300 ease-out
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
                      <span className="px-2 text-gray-400 select-none">...</span>
                      <button
                        onClick={() => setCurrentPage(totalPages)}
                        className="w-10 h-10 rounded-lg font-medium border border-gray-300 hover:bg-gray-50 transition-all duration-200 hover:scale-105"
                      >
                        {totalPages}
                      </button>
                    </>
                  )}

                  {/* Next Button */}
                  <button
                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="p-2 rounded-lg border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-all duration-200 hover:scale-105 active:scale-95"
                  >
                    <Icon name="ChevronRight" size={20} />
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
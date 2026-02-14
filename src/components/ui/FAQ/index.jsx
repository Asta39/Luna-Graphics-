import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import Icon from '../../AppIcon';
import FAQItem from './FAQItem';
import { faqCategories, generateFAQSchema } from '../../../data/faqData';

const FAQ = ({ 
  showTitle = true, 
  showSearch = true, 
  showCategories = true,
  limit = null, // Limit number of questions (for homepage preview)
  className = '' 
}) => {
  const [openItems, setOpenItems] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  // Generate unique IDs for all questions
  const allQuestions = useMemo(() => {
    let id = 0;
    return faqCategories.flatMap(category => 
      category.questions.map(q => ({
        ...q,
        categoryId: category.id,
        categoryTitle: category.title,
        globalId: id++
      }))
    );
  }, []);

  // Filter questions based on search and category
  const filteredQuestions = useMemo(() => {
    let questions = allQuestions;

    if (activeCategory !== 'all') {
      questions = questions.filter(q => q.categoryId === activeCategory);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      questions = questions.filter(q => 
        q.question.toLowerCase().includes(query) ||
        q.answer.toLowerCase().includes(query)
      );
    }

    if (limit) {
      questions = questions.slice(0, limit);
    }

    return questions;
  }, [allQuestions, activeCategory, searchQuery, limit]);

  const toggleItem = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const expandAll = () => {
    const allOpen = {};
    filteredQuestions.forEach(q => {
      allOpen[q.globalId] = true;
    });
    setOpenItems(allOpen);
  };

  const collapseAll = () => {
    setOpenItems({});
  };

  const clearSearch = () => {
    setSearchQuery('');
    setActiveCategory('all');
  };

  return (
    <div className={className}>
      {/* Structured Data for SEO */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(generateFAQSchema())}
        </script>
      </Helmet>

      {showTitle && (
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about our printing services. Can't find your answer? 
            <button className="text-primary hover:underline ml-1" onClick={() => window.location.href = '/contact'}>
              Contact us directly
            </button>.
          </p>
        </div>
      )}

      {/* Search Bar */}
      {showSearch && (
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Icon 
              name="Search" 
              size={20} 
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-10 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            {searchQuery && (
              <button
                onClick={clearSearch}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <Icon name="X" size={18} />
              </button>
            )}
          </div>
        </div>
      )}

      {/* Category Tabs */}
      {showCategories && !searchQuery && (
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === 'all'
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All Questions
          </button>
          {faqCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2 ${
                activeCategory === cat.id
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Icon name={cat.icon} size={16} />
              {cat.title}
            </button>
          ))}
        </div>
      )}

      {/* Expand/Collapse Controls */}
      {filteredQuestions.length > 3 && (
        <div className="flex justify-end gap-2 mb-4">
          <button
            onClick={expandAll}
            className="text-sm text-primary hover:underline"
          >
            Expand All
          </button>
          <span className="text-gray-300">|</span>
          <button
            onClick={collapseAll}
            className="text-sm text-primary hover:underline"
          >
            Collapse All
          </button>
        </div>
      )}

      {/* FAQ Items */}
      <div className="space-y-2">
        {filteredQuestions.length === 0 ? (
          <div className="text-center py-12">
            <Icon name="HelpCircle" size={48} className="mx-auto text-gray-300 mb-4" />
            <p className="text-gray-500">No questions found matching your search.</p>
            <button
              onClick={clearSearch}
              className="mt-2 text-primary hover:underline"
            >
              Clear search
            </button>
          </div>
        ) : (
          filteredQuestions.map((q) => (
            <FAQItem
              key={q.globalId}
              question={q.question}
              answer={q.answer}
              isOpen={!!openItems[q.globalId]}
              onToggle={() => toggleItem(q.globalId)}
              index={q.globalId}
            />
          ))
        )}
      </div>

      {/* Results count */}
      {searchQuery && (
        <p className="text-center text-sm text-gray-500 mt-4">
          Showing {filteredQuestions.length} of {allQuestions.length} questions
        </p>
      )}
    </div>
  );
};

export default FAQ;
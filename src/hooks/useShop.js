import { useState, useEffect, useCallback } from 'react';
import { searchProducts, getProductsByCategory } from '../data/products';

export const useShop = (initialCategory = 'all') => {
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const filterProducts = useCallback(() => {
    setIsLoading(true);
    
    setTimeout(() => {
      let results;
      
      if (searchQuery) {
        results = searchProducts(searchQuery);
      } else if (activeCategory === 'all') {
        results = products; // You'll need to import products or pass as param
      } else {
        results = getProductsByCategory(activeCategory);
      }
      
      setFilteredProducts(results);
      setIsLoading(false);
    }, 300);
  }, [activeCategory, searchQuery]);

  useEffect(() => {
    filterProducts();
  }, [filterProducts]);

  const clearFilters = () => {
    setActiveCategory('all');
    setSearchQuery('');
  };

  return {
    activeCategory,
    setActiveCategory,
    searchQuery,
    setSearchQuery,
    filteredProducts,
    isLoading,
    clearFilters
  };
};
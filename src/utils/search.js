// Search utility for fuzzy matching
export const searchProducts = (products, query) => {
  if (!query || query.trim() === '') return products;
  
  const searchTerm = query.toLowerCase().trim();
  const searchWords = searchTerm.split(/\s+/); // Split by spaces for multi-word search
  
  return products.filter(product => {
    // Combine all searchable fields
    const searchableText = [
      product.name,
      product.description,
      product.category,
      product.subcategory,
      product.tags?.join(' '),
      product.material,
      product.size,
      product.color
    ].filter(Boolean).join(' ').toLowerCase();
    
    // Check if all search words are found in the product
    return searchWords.every(word => searchableText.includes(word));
  });
};

// Extract search params from URL
export const getSearchQuery = () => {
  const params = new URLSearchParams(window.location.search);
  return params.get('search') || '';
};
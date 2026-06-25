import React, { createContext, useContext, useReducer, useEffect, useState } from 'react';

const CartContext = createContext();

const CART_STORAGE_KEY = 'luna_graphics_cart';

// Helper to check if product has valid price
const hasValidPrice = (price) => {
  return typeof price === 'number' && !isNaN(price) && price > 0;
};

// Helper to check if product is inquire-only
const isInquireProduct = (price) => {
  if (typeof price === 'string') {
    const lower = price.toLowerCase();
    return lower === 'inquire' || lower === 'inquiry' || lower === 'contact for price' || lower === 'contact us';
  }
  return false;
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      // Don't add inquire products to cart
      if (isInquireProduct(action.payload.price)) {
        console.warn('Cannot add inquire products to cart');
        return state;
      }

      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item
          )
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, cartId: Date.now().toString() }]
      };
    }
    
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => item.cartId !== action.payload)
      };
    
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map(item =>
          item.cartId === action.payload.cartId
            ? { ...item, quantity: Math.max(item.minOrder, action.payload.quantity) }
            : item
        )
      };
    
    case 'CLEAR_CART':
      return { items: [] };
    
    case 'LOAD_CART':
      // Filter out any inquire products that might have been saved previously
      const validItems = (action.payload || []).filter(item => hasValidPrice(item.price));
      return { items: validItems };
    
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });
  const [isLoaded, setIsLoaded] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem(CART_STORAGE_KEY);
      if (savedCart) {
        const parsed = JSON.parse(savedCart);
        if (Array.isArray(parsed)) {
          dispatch({ type: 'LOAD_CART', payload: parsed });
        }
      }
    } catch (e) {
      console.error('Failed to load cart:', e);
    }
    setIsLoaded(true);
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state.items));
      } catch (e) {
        console.error('Failed to save cart:', e);
      }
    }
  }, [state.items, isLoaded]);

  const addItem = (product, quantity = 1) => {
    // Check if product is inquire-only
    if (isInquireProduct(product.price)) {
      console.warn('Cannot add inquire products to cart:', product.name);
      return false; // Return false to indicate failure
    }

    const productImage = product.images && product.images.length > 0
      ? product.images[0]
      : product.image;

    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: productImage,
        category: product.category,
        subcategory: product.subcategory,
        quantity: Math.max(product.minOrder || 1, quantity),
        minOrder: product.minOrder || 1,
        priceUnit: product.priceUnit || 'each'
      }
    });
    return true; // Return true to indicate success
  };

  const removeItem = (cartId) => {
    dispatch({ type: 'REMOVE_ITEM', payload: cartId });
  };

  const updateQuantity = (cartId, quantity) => {
    const item = state.items.find(i => i.cartId === cartId);
    if (item) {
      dispatch({ 
        type: 'UPDATE_QUANTITY', 
        payload: { cartId, quantity: Math.max(item.minOrder, quantity) } 
      });
    }
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  // Total unique items in cart (not sum of quantities)
  const getCartCount = () => {
    return state.items.length;
  };

  // Sum of all quantities
  const getTotalItems = () => {
    return state.items.reduce((total, item) => total + item.quantity, 0);
  };

  // FIXED: Only sum items with valid prices, exclude inquire products
  const getCartTotal = () => {
    return state.items.reduce((total, item) => {
      if (hasValidPrice(item.price)) {
        return total + (item.price * item.quantity);
      }
      return total;
    }, 0);
  };

  // Helper to check if a product can be added to cart
  const canAddToCart = (product) => {
    return hasValidPrice(product.price);
  };

  // Format price helper that handles inquire products
  const formatPrice = (price) => {
    if (isInquireProduct(price)) {
      return 'Inquire';
    }
    if (!hasValidPrice(price)) {
      return 'Inquire';
    }
    return new Intl.NumberFormat('en-KE', {
      style: 'currency',
      currency: 'KES',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <CartContext.Provider value={{
      items: state.items,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      getCartCount,
      getTotalItems,
      getCartTotal,
      canAddToCart,
      formatPrice,
      isInquireProduct,
      hasValidPrice
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
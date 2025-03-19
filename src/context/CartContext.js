// src/context/CartContext.js
'use client';
import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Add or update item in cart with quantity change
  const addToCart = (product, quantityChange = 1) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        // Update quantity for existing item
        const newQuantity = existingItem.quantity + quantityChange;
        if (newQuantity <= 0) {
          // Remove item if quantity becomes 0 or negative
          return prevCart.filter((item) => item.id !== product.id);
        }
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: newQuantity } : item
        );
      } else if (quantityChange > 0) {
        // Add new item with initial quantity
        return [...prevCart, { ...product, quantity: quantityChange }];
      }
      return prevCart; // No change if quantityChange <= 0 for new item
    });
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
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
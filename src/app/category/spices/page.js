// src/app/category/spices/page.js
'use client';
import { useState } from 'react';
import { useCart } from '../../../context/CartContext';
import SpicesGrid from '../../../components/SpicesGrid';
import Navbar from '../../../components/Navbar';
import products from '../../../data/products'; // Import centralized product data

export default function SpicesPage() {
  const { addToCart } = useCart();

  // Filter products for Spices category
  const [filteredProducts, setFilteredProducts] = useState(
    products.filter((product) => product.category === 'Spices')
  );

  return (
    <div className="min-h-screen bg-green-50">
      
      <div className="p-4">
        <SpicesGrid products={filteredProducts} addToCart={addToCart} />
      </div>
    </div>
  );
}
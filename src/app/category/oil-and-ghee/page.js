// src/app/category/oil-and-ghee/page.js
'use client';
import { useState } from 'react';
import { useCart } from '../../../context/CartContext';
import OilAndGheeGrid from '../../../components/OilAndGheeGrid';
import Navbar from '../../../components/Navbar';
import products from '../../../data/products'; // Import centralized product data

export default function OilAndGheePage() {
  const { addToCart } = useCart();

  // Filter products for Oil-and-Ghee category
  const [filteredProducts, setFilteredProducts] = useState(
    products.filter((product) => product.category === 'oil-and-ghee')
  );

  // Debug: Log the filtered products
  console.log('Filtered Oil-and-Ghee Products:', filteredProducts);

  return (
    <div className="min-h-screen bg-green-50">
      
      <div className="p-4">
        <OilAndGheeGrid products={filteredProducts} addToCart={addToCart} />
      </div>
    </div>
  );
}
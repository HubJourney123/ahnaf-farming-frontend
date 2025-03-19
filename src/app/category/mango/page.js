// src/app/category/mango/page.js
'use client';
import { useState } from 'react';
import { useCart } from '../../../context/CartContext';
import MangoGrid from '../../../components/MangoGrid';
import Navbar from '../../../components/Navbar';
import products from '../../../data/products'; // Import the centralized product data

export default function MangoPage() {
  const { addToCart } = useCart();

  // Filter products from the centralized data source
  const [filteredProducts, setFilteredProducts] = useState(
    products.filter((product) => product.category === 'Mango')
  );

  return (
    <div className="min-h-screen bg-green-50">
      
      <div className="p-4">
        <MangoGrid products={filteredProducts} addToCart={addToCart} />
      </div>
    </div>
  );
}
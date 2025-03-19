// src/app/category/molasses/page.js
'use client';
import { useState } from 'react';
import { useCart } from '../../../context/CartContext';
import MolassesGrid from '../../../components/MolassesGrid';
import Navbar from '../../../components/Navbar';
import products from '../../../data/products'; // Import centralized product data

export default function MolassesPage() {
  const { addToCart } = useCart();

  // Filter products for Molasses category
  const [filteredProducts, setFilteredProducts] = useState(
    products.filter((product) => product.category === 'Molasses')
  );

  return (
    <div className="min-h-screen bg-green-50">
      
      <div className="p-4">
        <MolassesGrid products={filteredProducts} addToCart={addToCart} />
      </div>
    </div>
  );
}
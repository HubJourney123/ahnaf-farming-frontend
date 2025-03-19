// src/components/MangoGrid.js
'use client';
import { useEffect } from 'react';
import ProductCard from './ProductCard';

const MangoGrid = ({ products, addToCart, searchTerm }) => {
  const mangoProducts = products.filter((product) => product.category === 'Mango');

  // Further filter by search term if provided
  const filteredMango = searchTerm
    ? mangoProducts.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : mangoProducts;

  // Only render the section if there are matching products
  if (filteredMango.length === 0) return null;

  useEffect(() => {
    const styles = `
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      .animate-fade-in {
        animation: fadeIn 1s ease-in-out;
      }
    `;
    if (!document.querySelector('#mango-grid-styles')) {
      const styleSheet = document.createElement('style');
      styleSheet.id = 'mango-grid-styles';
      styleSheet.textContent = styles;
      document.head.appendChild(styleSheet);
    }
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <section className="py-12 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-10 animate-fade-in">
          মৌসুমী আম (Mango)
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredMango.map((product) => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MangoGrid;
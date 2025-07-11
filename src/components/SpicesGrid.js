'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import ProductCard from './ProductCard';

const SpicesGrid = ({ products, addToCart, searchTerm }) => {
  // Filter products by Spices category
  const spicesProducts = products.filter((product) => product.category === 'Spices');

  // Further filter by search term if provided
  const filteredSpices = searchTerm
    ? spicesProducts.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : spicesProducts;

  useEffect(() => {
    if (document.querySelector("#spices-grid-styles")) return; // Prevent duplicate styles

    const styles = `
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      .animate-fade-in {
        animation: fadeIn 1s ease-in-out;
      }
    `;
    
    const styleSheet = document.createElement("style");
    styleSheet.id = "spices-grid-styles";
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);
  }, []);

  // Only render if there are matching products
  if (filteredSpices.length === 0) return null;

  return (
    <section className="py-12 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-10 animate-fade-in">
          মশলা পণ্যসমূহ (Spices Products)
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredSpices.map((product) => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpicesGrid;

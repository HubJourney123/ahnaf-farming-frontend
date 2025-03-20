'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import ProductCard from './ProductCard';

const OilAndGheeGrid = ({ products, addToCart, searchTerm }) => {
  // Filter products by Oil and Ghee category
  const oilAndGheeProducts = products.filter((product) => product.category === 'oil-and-ghee');

  // Further filter by search term if provided
  const filteredOilAndGhee = searchTerm
    ? oilAndGheeProducts.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : oilAndGheeProducts;

  useEffect(() => {
    if (document.querySelector("#oil-and-ghee-grid-styles")) return; // Prevent duplicate styles

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
    styleSheet.id = "oil-and-ghee-grid-styles";
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);
  }, []);

  // Only render if there are matching products
  if (filteredOilAndGhee.length === 0) return null;

  return (
    <section className="py-12 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-10 animate-fade-in">
          সরিষার তেল ও ঘি পণ্যসমূহ (Mustard Oil & Ghee Products)
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredOilAndGhee.map((product) => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OilAndGheeGrid;

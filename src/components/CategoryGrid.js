// src/components/CategoryGrid.js
'use client';

import { useEffect, useState } from 'react'; // Added useState for touch state
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const CategoryGrid = ({ searchTerm }) => {
  const categories = [
    { name: 'গুড় (Molasses)', url: '/category/molasses', image: '/images/molasses.png' },
    { name: 'সরিষার তেল (Mustard Oil)', url: '/category/oil-and-ghee', image: '/images/mustard-oil.png' },
    { name: 'ঘি (Ghee)', url: '/category/oil-and-ghee', image: '/images/ghee.png' },
    { name: 'গুঁড়া মসলা (Spices Powder)', url: '/category/spices', image: '/images/spices.png' },
    { name: 'আম (Mango)', url: '/category/mango', image: '/images/mango.png' },
  ];

  // State to track which card is being touched
  const [touchedIndex, setTouchedIndex] = useState(null);

  useEffect(() => {
    if (document.querySelector("#category-grid-styles")) return;

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
    styleSheet.id = "category-grid-styles";
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  if (searchTerm !== '') return null;

  return (
    <section className="py-3 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-10 animate-fade-in">
          Explore Our Categories
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {categories.map((category, index) => (
            <Link
              key={index}
              href={category.url}
              className={`group relative block overflow-hidden rounded-xl shadow-lg transition-all duration-300 transform ${
                touchedIndex === index ? '-translate-y-2 shadow-xl' : 'hover:shadow-xl hover:-translate-y-2'
              } bg-white`}
              onTouchStart={() => setTouchedIndex(index)} // Start touch
              onTouchEnd={() => setTouchedIndex(null)}   // End touch
              onTouchCancel={() => setTouchedIndex(null)} // Handle touch cancel (e.g., swipe away)
            >
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.name}
                  width={300}
                  height={200}
                  className={`w-full h-full object-cover transition-transform duration-300 ${
                    touchedIndex === index ? 'scale-110' : 'group-hover:scale-110'
                  }`}
                />
                <div
                  className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${
                    touchedIndex === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`}
                >
                  <span className="text-white text-xl font-semibold tracking-wide">
                    {category.name}
                  </span>
                </div>
              </div>
              <div
                className={`absolute bottom-4 right-4 bg-amber-600 text-white p-2 rounded-full transition-colors duration-300 ${
                  touchedIndex === index ? 'bg-amber-700' : 'hover:bg-amber-700'
                }`}
              >
                <ArrowRight size={24} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
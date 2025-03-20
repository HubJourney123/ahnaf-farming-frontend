'use client';

import { useEffect } from 'react';
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
              className="group relative block overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white"
            >
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.name}
                  width={300}
                  height={200}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-xl font-semibold tracking-wide">
                    {category.name}
                  </span>
                </div>
              </div>
              <div className="absolute bottom-4 right-4 bg-amber-600 text-white p-2 rounded-full hover:bg-amber-700 transition-colors duration-300">
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
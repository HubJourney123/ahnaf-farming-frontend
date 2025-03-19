'use client';
// pages/SearchPage.js (or wherever you want to place it)
import { useState } from 'react';
import Link from 'next/link';

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Sample product data (replace with your actual data)
  const products = [
    { id: 1, name: 'গুড় (Molasses)', category: 'Molasses', price: 150, image: '/images/molasses.png' },
    { id: 2, name: 'সরিষার তেল (Mustard Oil)', category: 'Mustard Oil', price: 200, image: '/images/mustard-oil.png' },
    { id: 3, name: 'ঘি (Ghee)', category: 'Ghee', price: 500, image: '/images/ghee.png' },
    { id: 4, name: 'গুঁড়া মসলা (Spices Powder)', category: 'Spices Powder', price: 100, image: '/images/spices.png' },
    { id: 5, name: 'প্রিমিয়াম গুড় (Premium Molasses)', category: 'Molasses', price: 200, image: '/images/premium-molasses.png' },
  ];

  // Filter products based on search term
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-green-50 p-4">
      {/* Search Bar */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl p-3 rounded-lg border border-green-800 text-green-800 placeholder-green-600 focus:outline-none focus:ring-2 focus:ring-amber-600"
        />
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => <ProductCard key={product.id} product={product} />)
        ) : (
          <p className="text-center text-green-800 col-span-full">No products found.</p>
        )}
      </div>
    </div>
  );
};

// Product Card Component
const ProductCard = ({ product }) => {
  return (
    <Link href={`/products/${product.id}`} className="block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-green-800 font-semibold text-lg">{product.name}</h3>
          <p className="text-green-600 text-sm">{product.category}</p>
          <p className="text-amber-600 font-bold mt-2">৳ {product.price}</p>
        </div>
      </div>
    </Link>
  );
};

export default SearchPage;
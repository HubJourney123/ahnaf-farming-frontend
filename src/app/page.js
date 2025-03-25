// src/app/page.js
'use client';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import SearchBar from '../components/SearchBar';
import { useCart } from '../context/CartContext';
import CategoryGrid from '../components/CategoryGrid';
import MolassesGrid from '../components/MolassesGrid';
import SpicesGrid from '../components/SpicesGrid';
import MangoGrid from '../components/MangoGrid';
import OilAndGheeGrid from '../components/OilAndGheeGrid';
import products from '../data/products';

export default function Home() {
  const { addToCart } = useCart();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className="min-h-screen bg-green-50">
      
      <Carousel />
      <section className="p-4">
        <SearchBar onSearch={handleSearch} />
      </section>
      <section className="p-0">
        {searchTerm === '' && <CategoryGrid searchTerm={searchTerm} />}
      </section>
      <MolassesGrid products={products} addToCart={addToCart} searchTerm={searchTerm} />
      <OilAndGheeGrid products={products} addToCart={addToCart} searchTerm={searchTerm} />
      <MangoGrid products={products} addToCart={addToCart} searchTerm={searchTerm} />
      <SpicesGrid products={products} addToCart={addToCart} searchTerm={searchTerm} />
      
    </div>
  );
}

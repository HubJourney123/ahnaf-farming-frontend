'use client';
// components/SearchBar.js
import { useState } from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value); // Pass search term to parent
  };

  return (
    <div className="flex justify-center mb-8 ">
      <div className="relative w-full max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full p-3 pl-4 pr-12 rounded-lg border border-green-800 text-green-800 placeholder-green-600 focus:outline-none focus:ring-2 focus:ring-green-600"
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          <Search className="text-green-800" size={20} />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
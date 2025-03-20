// src/app/product/[id]/ClientProductPage.js
'use client';

import { useState } from 'react';
import ProductDetails from '@/components/ProductDetails';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function ClientProductPage({ product }) {
  // State to track touch on the "Back to Products" button
  const [isBackButtonTouched, setIsBackButtonTouched] = useState(false);

  return (
    <div>
      <div className="container mx-auto px-8 py-10 min-h-screen bg-green-50">
        {/* Back to Products Button with Hover and Touch Effects */}
        <Link
          href="/"
          className={`inline-flex items-center space-x-2 mb-6 px-4 py-2 rounded-lg shadow-md transition-all duration-300 transform ${
            isBackButtonTouched
              ? 'bg-amber-700 text-white scale-105 shadow-lg'
              : 'bg-amber-600 text-white hover:bg-amber-700 hover:scale-105 hover:shadow-lg'
          }`}
          onTouchStart={() => setIsBackButtonTouched(true)}
          onTouchEnd={() => setIsBackButtonTouched(false)}
          onTouchCancel={() => setIsBackButtonTouched(false)}
        >
          <ArrowLeft size={20} />
          <span>Back to Products</span>
        </Link>

        {/* Render ProductDetails with the product data */}
        <ProductDetails product={product} />
      </div>
    </div>
  );
}
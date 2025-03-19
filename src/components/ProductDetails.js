// src/components/ProductDetails.js
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, MessageCircle } from 'lucide-react';
import { useCart } from '@/context/CartContext'; // Adjust path based on your context file

const ProductDetails = ({ product }) => {
  const { addToCart } = useCart();
  const secondImage = product.image.replace('.png', '2.png'); // e.g., powdergur.png -> powdergur2.png

  return (
    <div className="flex flex-col gap-8">
      {/* Main Content: Image and Details/Buttons Side-by-Side on Large Screens */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Image Section */}
        <div className="relative w-full md:w-1/2">
          <div className="relative w-full aspect-square overflow-hidden rounded-xl shadow-lg border-4 border-green-700">
            <Image
              src={product.image}
              alt={`${product.name} - Image 1`}
              fill
              className="object-cover transition-opacity duration-300"
              style={{ opacity: 1 }}
            />
            <Image
              src={secondImage}
              alt={`${product.name} - Image 2`}
              fill
              className="object-cover absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </div>

        {/* Product Details and Buttons */}
        <div className="w-full md:w-1/2 flex flex-col items-center text-center md:items-start md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">{product.name}</h1>
          <p className="text-green-600 text-lg mb-4">{product.category}</p>
          <p className="text-amber-600 text-2xl font-bold mb-6 whitespace-nowrap">
            ৳ {product.price}
            {(() => {
              switch (product.category) {
                case 'Molasses':
                  return '/kg';
                case 'Mango':
                  return '/প্রতি মণ';
                case 'Spices':
                  return '/pack';
                case 'oil-and-ghee':
                  return product.name.includes('ঘি') || product.name.includes('ghee') ? '/kg' : '/5 litre';
                default:
                  return '/kg';
              }
            })()}
          </p>

          {/* Buttons */}
          <div className="w-full max-w-md flex flex-col gap-4">
            <button
              onClick={() => addToCart(product)}
              className="w-full bg-amber-600 text-white py-3 rounded-lg font-semibold hover:bg-amber-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-center space-x-2">
                <ShoppingCart size={20} />
                <span>Add to Cart</span>
              </div>
            </button>
            <Link
              href="/cart"
              className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 text-center"
            >
              Go to Cart
            </Link>
            <a
              href="https://wa.me/+8801753388992"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 flex items-center justify-center space-x-2"
            >
              <MessageCircle size={20} />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Details Section (Below Image and Buttons) */}
      <div className="w-full text-center md:text-left">
        <p className="text-gray-700 leading-relaxed text-base md:text-lg">
          {product.details || 'No details available for this product.'}
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';

const ProductCard = ({ product, addToCart }) => {
  const originalPrice = product.price + 50; // Original price is 50 Taka more

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link href={`/product/${product.id}`}>
        <div className="cursor-pointer">
          <Image
            src={product.image}
            alt={product.name}
            width={300} // Adjust based on your design
            height={192} // Matches h-48 (12rem = 192px)
            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
          />
          <div className="p-4">
            <h3 className="text-green-800 font-semibold text-base line-clamp-2">{product.name} / {product.en}</h3>
            <p className="text-green-600 text-xs">{product.category}</p>
            <div className="mt-2 flex items-center space-x-2">
              <p className="text-amber-600 font-bold whitespace-nowrap">৳ {product.price}</p>
              <p className="text-gray-500 line-through text-sm">৳ {originalPrice}</p>
            </div>
            <p className="text-green-600 text-xs mt-1">পরিমাণ: {product.পরিমাণ}</p>
            <p className="text-green-600 text-xs mt-1">
              ডেলিভারি চার্জ:{' '}
              <span className={product.deliveryCharge === 0 ? 'text-green-700' : 'text-green-600'}>
                {product.deliveryCharge === 0 ? 'Included' : `৳ ${product.deliveryCharge}`}
              </span>
            </p>
            <p className="text-green-600 text-sm mt-1">
              <span className={product.availability === 'available' ? 'text-green-800' : 'text-red-600'}>
                {product.availability === 'available' ? 'Available' : 'Not Available'}
              </span>
            </p>
          </div>
        </div>
      </Link>
      <div className="p-4 pt-0">
        <button
          onClick={() => addToCart(product)}
          disabled={product.availability !== 'available'} // Disable if not available
          className={`w-full flex items-center justify-center space-x-2 py-2 rounded-lg transition-colors duration-300 ${
            product.availability === 'available'
              ? 'bg-green-800 text-white hover:bg-amber-600 active:bg-amber-600'
              : 'bg-gray-400 text-gray-200 cursor-not-allowed'
          }`}
        >
          <ShoppingCart size={20} />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

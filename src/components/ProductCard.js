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
            <h3 className="text-green-800 font-semibold text-lg line-clamp-2">{product.name}</h3>
            <p className="text-green-600 text-sm">{product.category}</p>
            <div className="mt-2 flex items-center space-x-2">
              <p className="text-amber-600 font-bold whitespace-nowrap">৳ {product.price}</p>
              <p className="text-gray-500 line-through text-sm">৳ {originalPrice}</p>
            </div>
            <p className="text-green-600 text-sm mt-1">পরিমাণ: {product.পরিমাণ}</p>
            <p className="text-green-600 text-sm mt-1">
              ডেলিভারি চার্জ: {product.deliveryCharge === 0 ? 'ফ্রি' : `৳ ${product.deliveryCharge}`}
            </p>
            <p className="text-green-600 text-sm mt-1">
              প্রাপ্যতা: {product.availability === 'available' ? 'উপলব্ধ' : 'অনুপলব্ধ'}
            </p>
          </div>
        </div>
      </Link>
      <div className="p-4 pt-0">
        <button
          onClick={() => addToCart(product)}
          className="w-full flex items-center justify-center space-x-2 bg-green-800 text-white py-2 rounded-lg hover:bg-amber-600 transition-colors duration-300"
        >
          <ShoppingCart size={20} />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

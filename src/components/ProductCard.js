// components/ProductCard.js
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';

const ProductCard = ({ product, addToCart }) => {
  // Determine the price unit based on category and product name
  const getPriceUnit = (category, name) => {
    switch (category) {
        case 'Molasses':
            case 'Ghee':
              return '/kg';
            case 'Mango':
              return '/প্রতি মণ';
            case 'MustardOil':
              return '/5 litre';
            case 'Spices':
              return '/pack'; // Added for Spices, adjustable as needed
            default:
              return '/kg'; // Default unit if category is unrecognized
    }
  };

  const priceUnit = getPriceUnit(product.category, product.name);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Clickable area redirects to product details page */}
      <Link href={`/product/${product.id}`}>
        <div className="cursor-pointer">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
          />
          <div className="p-4">
            <h3 className="text-green-800 font-semibold text-lg line-clamp-2">{product.name}</h3>
            <p className="text-green-600 text-sm">{product.category}</p>
            <p className="text-amber-600 font-bold mt-2 whitespace-nowrap">৳ {product.price}{priceUnit}</p>
          </div>
        </div>
      </Link>
      {/* Add to Cart Button */}
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
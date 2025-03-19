// components/ProductGrid.js
import ProductCard from './ProductCard';

const ProductGrid = ({ products, addToCart }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))
      ) : (
        <p className="text-center text-green-800 col-span-full">No products to display.</p>
      )}
    </div>
  );
};

export default ProductGrid;
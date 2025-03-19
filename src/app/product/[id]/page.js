// src/app/product/[id]/page.js
import ProductDetails from '@/components/ProductDetails';
import products from '../../../data/products';
import Navbar from '@/components/Navbar';

export default function ProductPage({ params }) {
  const { id } = params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <div className="container mx-auto px-4 py-10 text-center text-red-600">Product not found</div>;
  }

  return (
    <div>
        <Navbar />
    
     <div className="container mx-auto px-8 py-10 min-h-screen bg-green-00">
       <ProductDetails product={product} />
     </div>
    </div>
  );
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}
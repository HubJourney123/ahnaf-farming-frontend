// src/app/product/[id]/page.js
import products from '../../../data/products';
import ClientProductPage from './ClientProductPage'; // New Client Component

export default function ProductPage({ params }) {
  const { id } = params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <div className="container mx-auto px-4 py-10 text-center text-red-600">Product not found</div>;
  }

  return <ClientProductPage product={product} />;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}
// pages/cart.js
'use client';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const CartPage = () => {
  const router = useRouter();
  const { productId } = router.query; // Get productId from URL
  const [cart, setCart] = useState([]);
  const deliveryCharge = 150;

  // Sample product data (replace with your actual data source)
  const products = [
    { id: 1, name: 'গুড় (Molasses)', category: 'Molasses', price: 150, image: '/images/molasses.png' },
    { id: 2, name: 'সরিষার তেল (Mustard Oil)', category: 'Mustard Oil', price: 200, image: '/images/mustard-oil.png' },
    { id: 3, name: 'ঘি (Ghee)', category: 'Ghee', price: 500, image: '/images/ghee.png' },
    { id: 4, name: 'গুঁড়া মসলা (Spices Powder)', category: 'Spices Powder', price: 100, image: '/images/spices.png' },
    { id: 5, name: 'প্রিমিয়াম গুড় (Premium Molasses)', category: 'Molasses', price: 200, image: '/images/premium-molasses.png' },
  ];

  useEffect(() => {
    if (productId) {
      const selectedProduct = products.find((p) => p.id === parseInt(productId));
      if (selectedProduct && !cart.find((item) => item.id === selectedProduct.id)) {
        setCart([{ ...selectedProduct, quantity: 1 }]);
      }
    }
  }, [productId]);

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const grandTotal = totalPrice + deliveryCharge;

  return (
    <div className="min-h-screen bg-green-50 p-4">
      <h1 className="text-2xl text-green-800 font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-green-800">Your cart is empty.</p>
      ) : (
        <div>
          <ul className="space-y-4">
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md">
                <span className="text-green-800">{item.name} (x{item.quantity})</span>
                <span className="text-amber-600">৳ {item.price * item.quantity}</span>
              </li>
            ))}
            
          </ul>
          <div className="mt-6">
            <p className="text-green-800">Subtotal: ৳ {totalPrice}</p>
            <p className="text-green-800">Delivery Charge: ৳ {deliveryCharge}</p>
            <p className="text-amber-600 font-bold text-lg mt-2">Grand Total: ৳ {grandTotal}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
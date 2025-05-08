'use client';
import { useCart } from '../../context/CartContext';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import products from '../../data/products'; // Import products data

export default function ConfirmOrderPage() {
  const { cart, dispatch } = useCart(); // Added dispatch to potentially update cart if needed
  const router = useRouter();

  // Calculate delivery charge dynamically based on cart items
  const deliveryCharge = cart.reduce((sum, item) => {
    // Find the product in products.js to get its deliveryCharge
    const product = products.find((p) => p.id === item.id);
    // If product is found, use its deliveryCharge; otherwise, default to 0
    const itemDeliveryCharge = product ? product.deliveryCharge : 0;
    // Multiply by quantity if delivery charge is per item (adjust logic as needed)
    return sum + itemDeliveryCharge * item.quantity;
  }, 0);

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const grandTotal = totalPrice + deliveryCharge;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    detailedLocation: '',
    division: '',
    district: '',
    upazila: '',
    transactionId: '',
    yourIdentity: '',
    paidAmount: '',
    dueAmount: '',
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [countdown, setCountdown] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setCountdown(25);

    // Enrich cart items with full product data including en
    const enrichedCart = cart.map((item) => {
      const product = products.find((p) => p.id === item.id);
      return {
        ...item,
        ...product, // Merge with full product data to ensure en is included
      };
    });

    const data = {
      ...formData,
      cart: enrichedCart, // Use enriched cart with en field
      totalPrice,
      deliveryCharge,
      grandTotal,
    };

    try {
      const response = await fetch('https://ahnaf-farming-backend-gqds.onrender.com/api/send-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (result.success) {
        setSuccess(true);
      } else {
        setError(result.message || 'Failed to place the order. Please try again.');
      }
    } catch (err) {
      setError('An error occurred while placing the order. Please try again.');
    }
  };

  // Countdown effect
  useEffect(() => {
    if (countdown === null || countdown <= 0) return;

    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [countdown]);

  return (
    <div>
      <div className="min-h-screen bg-green-50 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-extrabold text-center text-green-800 mb-8">
            Confirm Your Order
          </h1>

          {!success ? (
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
              {cart.length === 0 ? (
                <p className="text-center text-green-800 text-lg">
                  No items to confirm.
                </p>
              ) : (
                <div>
                  {error && (
                    <p className="text-red-600 text-center mb-4">{error}</p>
                  )}
                  {/* Payment Instructions Box at the Top */}
                  <div className="mt-6 p-6 bg-white border border-green-200 rounded-lg shadow-sm mb-6">
                    <h3 className="text-xl font-semibold text-green-800 mb-4">
                      পেমেন্ট নির্দেশনাবলী -
                    </h3>
                    <p className="text-green-700 text-lg">
                      অনলাইন পেমেন্ট করতে নিচের নম্বরগুলো ব্যবহার করুন:
                    </p>
                    <ul className="list-none text-green-700 text-lg mt-2 space-y-2">
                      <li>বিকাশ/নগদ/রকেট (Personal) :- 01753388992 (Send Money)</li>
                    </ul>
                    <p className="text-green-700 text-lg mt-4">
                      উপরের নম্বরে টাকা পাঠিয়ে আপনার ট্রাঞ্জেকশন আইডি সাবমিট করে অর্ডার কনফার্ম করুন।
                    </p>
                    <p className="text-green-800 text-bold text-lg mt-4">
                      Minimum ২০০ টাকা অথবা ফুল পেমেন্ট অগ্রিম Send Money করা আবশ্যক
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-green-800 font-semibold mb-2">
                        নাম (Name)
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                        placeholder="আপনার নাম লিখুন"
                      />
                    </div>
                    <div>
                      <label className="block text-green-800 font-semibold mb-2">
                        ফোন নম্বর (Phone Number)
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                        placeholder="আপনার ফোন নম্বর লিখুন (e.g., 01712345678)"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-green-800 font-semibold mb-2">
                        জেলা (District)
                      </label>
                      <input
                        type="text"
                        name="district"
                        value={formData.district}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                        placeholder="আপনার জেলা লিখুন"
                      />
                    </div>
                    <div>
                      <label className="block text-green-800 font-semibold mb-2">
                        উপজেলা/থানা (Upazila or Thana)
                      </label>
                      <input
                        type="text"
                        name="upazila"
                        value={formData.upazila}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                        placeholder="আপনার উপজেলা বা থানা লিখুন"
                      />
                    </div>
                    <div>
                      <label className="block text-green-800 font-semibold mb-2">
                        বিস্তারিত লোকেশন (Detailed Location for Parcel Delivery)
                      </label>
                      <textarea
                        name="detailedLocation"
                        value={formData.detailedLocation}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 h-24 resize-none bg-white text-gray-900"
                        placeholder="আপনার বিস্তারিত ঠিকানা লিখুন (e.g., হাউস নং, রোড নং, এলাকা)"
                      />
                    </div>
                    <div>
                      <label className="block text-green-800 font-semibold mb-2">
                        পরিশোধিত পরিমাণ (Paid Amount)
                      </label>
                      <input
                        type="number"
                        name="paidAmount"
                        value={formData.paidAmount}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                        placeholder="পরিশোধিত পরিমাণ লিখুন"
                      />
                    </div>
                    <div>
                      <label className="block text-green-800 font-semibold mb-2">
                        বকেয়া পরিমাণ (Due Amount)
                      </label>
                      <input
                        type="number"
                        name="dueAmount"
                        value={formData.dueAmount}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                        placeholder="বকেয়া পরিমাণ লিখুন"
                      />
                    </div>
                    <div>
                      <label className="block text-green-800 font-semibold mb-2">
                        লেনদেন আইডি (Transaction ID)
                      </label>
                      <input
                        type="text"
                        name="transactionId"
                        value={formData.transactionId}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                        placeholder="আপনার লেনদেন আইডি লিখুন"
                      />
                    </div>
                    <div>
                      <label className="block text-green-800 font-semibold mb-2">
                        আপনার পরিচয় (Your Identity)
                      </label>
                      <input
                        type="text"
                        name="yourIdentity"
                        value={formData.yourIdentity}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                        placeholder="e.g., ME 2K05 or others"
                      />
                    </div>

                    <ul className="space-y-6 mt-6">
                      {cart.map((item) => {
                        const product = products.find((p) => p.id === item.id);
                        return (
                          <li
                            key={item.id}
                            className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-green-50 p-4 rounded-lg shadow-sm"
                          >
                            <div className="flex items-center space-x-4">
                              <Image
                                src={item.image || product.image}
                                alt={item.name}
                                width={80}
                                height={80}
                                className="object-cover rounded-lg border border-green-200"
                              />
                              <div>
                                <span className="text-green-800 font-semibold text-lg">
                                  {item.name}
                                </span>
                                <p className="text-green-600 text-sm mt-1">
                                  Quantity: {item.quantity}
                                </p>
                                <p className="text-amber-600 font-medium mt-1">
                                  ৳ {item.price * item.quantity}
                                </p>
                              </div>
                            </div>
                          </li>
                        );
                      })}
                    </ul>

                    <div className="mt-6 border-t border-green-200 pt-6">
                      <div className="flex justify-between text-green-800 text-lg">
                        <span>Subtotal:</span>
                        <span>৳ {totalPrice}</span>
                      </div>
                      <div className="flex justify-between text-green-800 text-lg mt-2">
                        <span>Shipping:</span>
                        <span>৳ {deliveryCharge}</span>
                      </div>
                      <div className="flex justify-between text-amber-600 font-bold text-xl mt-4">
                        <span>Total:</span>
                        <span>৳ {grandTotal}</span>
                      </div>

                      <button
                        type="submit"
                        className="w-full mt-6 bg-green-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors duration-300 shadow-md hover:shadow-lg"
                      >
                        Submit Order
                      </button>
                      <p className="text-green-800 text-sm mt-4 text-center">
                        Submit Order বাটন প্রেস করার পর 25 সেকেন্ড অপেক্ষা করুন। আপনার অর্ডার ইনফরমেশন পাঠানো হচ্ছে।
                        {countdown !== null && countdown > 0 && (
                          <span className="block mt-2 text-amber-600">
                            অবশিষ্ট সময়: {countdown} সেকেন্ড
                          </span>
                        )}
                      </p>
                    </div>
                  </form>
                </div>
              )}
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 text-center">
              <h2 className="text-2xl font-bold text-green-800 mb-4">
                Order Confirmation
              </h2>
              <p className="text-green-800 text-lg">
                Your order has been placed, thank you for being with Ahnaf Farming!
              </p>
              <p className="text-green-800 text-lg mt-2">
                আপনার অর্ডারটি সম্পন্ন হয়েছে, আহনাফ ফার্মিং-এর সাথে থাকার জন্য ধন্যবাদ!
              </p>
              <p className="text-green-600 text-base mt-2">
                আপনাকে পার্সেল সেটআপের আগে যোগাযোগ করা হবে বা কল করা হবে।
              </p>
              <button
                onClick={() => router.push('/')}
                className="mt-6 bg-green-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300"
              >
                Back to Home
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

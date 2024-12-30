// pages/checkout.js

import { useState } from 'react';

const CheckoutPage = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here (e.g., save to a database, send to a server)
    alert('Purchase completed!');
  };

  return (
    <div className="checkout-page max-w-6xl mx-auto py-16">
      <h2 className="text-3xl font-semibold text-center mb-8">Checkout</h2>
      <form className="checkout-form" onSubmit={handleSubmit}>
        {/* Name field */}
        <div className="mb-6">
          <label htmlFor="name" className="block text-lg font-semibold mb-2">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
        </div>

        {/* Address field */}
        <div className="mb-6">
          <label htmlFor="address" className="block text-lg font-semibold mb-2">Shipping Address</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
        </div>

        {/* Payment Method */}
        <div className="mb-6">
          <label htmlFor="payment-method" className="block text-lg font-semibold mb-2">Payment Method</label>
          <select
            id="payment-method"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          >
            <option value="">Select Payment Method</option>
            <option value="credit-card">Credit Card</option>
            <option value="paypal">PayPal</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-green-500 text-white py-3 px-8 rounded-lg text-lg hover:bg-green-400 transition"
        >
          Complete Purchase
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;

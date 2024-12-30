// pages/checkout.js

const CheckoutPage = () => {
    return (
      <div className="checkout-page max-w-6xl mx-auto py-16">
        <h2 className="text-3xl font-semibold text-center mb-8">Checkout</h2>
        <form className="checkout-form">
          {/* Add form fields like name, shipping info, etc. */}
          <button type="submit" className="bg-green-500 text-white py-3 px-8 rounded-lg text-lg hover:bg-green-400 transition">
            Complete Purchase
          </button>
        </form>
      </div>
    );
  };
  
  export default CheckoutPage;
  
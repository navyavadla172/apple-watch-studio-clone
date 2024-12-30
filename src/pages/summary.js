// pages/summary.js

import Link from 'next/link';

const SummaryPage = () => {
  return (
    <div className="summary-page max-w-6xl mx-auto py-16">
      <h2 className="text-3xl font-semibold text-center mb-8">Order Summary</h2>
      <div className="details text-lg text-gray-700 mb-8">
        <p><strong>Size:</strong> 42mm</p>
        <p><strong>Case:</strong> Aluminum</p>
        <p><strong>Band:</strong> Sport Loop</p>
        <p><strong>Color:</strong> Black Unity</p>
      </div>

      <div className="text-center">
        <Link href="/checkout" passHref>
          <a className="bg-green-500 text-white py-3 px-8 rounded-lg text-lg hover:bg-green-400 transition">
            Proceed to Checkout
          </a>
        </Link>
      </div>
    </div>
  );
};

export default SummaryPage;

// pages/product.js

import Link from 'next/link';

const ProductPage = () => {
  return (
    <div className="product-page max-w-6xl mx-auto py-16">
      <h2 className="text-3xl font-semibold text-center mb-8">Apple Watch Series 8</h2>
      <div className="flex justify-center mb-8">
        <img src="/images/watch-details.jpg" alt="Apple Watch" className="max-w-xs" />
      </div>
      <div className="product-details text-lg text-gray-700">
        <p>Explore the new Apple Watch. Customize it to fit your needs with different sizes, colors, and bands.</p>
      </div>
      <div className="text-center mt-8">
        <Link href="/watch-studio">
          <a className="bg-blue-500 text-white py-3 px-8 rounded-lg text-lg hover:bg-blue-400 transition">
            Customize Your Watch
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ProductPage;

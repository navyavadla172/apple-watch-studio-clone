// pages/index.js

import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="home-page bg-gray-100 min-h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Apple Watch Studio</h1>
      <p className="text-xl text-gray-600 mb-8">Create your perfect Apple Watch. Customize it to your style.</p>
      <Link
        href="/customization"
        className="bg-blue-500 text-white py-3 px-8 rounded-lg text-lg hover:bg-blue-400 transition"
      >
        Start Customizing
      </Link>
    </div>
  );
};

export default HomePage;

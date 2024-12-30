import Link from 'next/link';

const HomePage = () => (
  <div className="home-page flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
    <h1 className="text-4xl font-bold mb-4">Welcome to the Apple Watch Studio Clone</h1>
    <p className="text-lg mb-6">Click below to customize your Apple Watch:</p>
    <Link href="/customization">
      <button className="customize-button bg-blue-500 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-600 transition-all duration-300">
        Start Customizing
      </button>
    </Link>
  </div>
);

export default HomePage;

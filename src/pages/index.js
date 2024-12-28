import Image from 'next/image'; // For handling images in Next.js

const HomePage = () => {
  return (
    <div className="bg-gray-100">
      {/* Header */}
      <header className="w-full p-4 bg-white shadow-md">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <Image src="/images/apple-logo.png" alt="Apple Logo" width={100} height={50} />
          <nav>
            <ul className="flex space-x-8">
              <li><a href="#" className="text-gray-700 hover:text-black">Store</a></li>
              <li><a href="#" className="text-gray-700 hover:text-black">Mac</a></li>
              <li><a href="#" className="text-gray-700 hover:text-black">iPhone</a></li>
              <li><a href="#" className="text-gray-700 hover:text-black">Watch</a></li>
              <li><a href="#" className="text-gray-700 hover:text-black">AirPods</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex items-center justify-center bg-cover bg-center h-screen" style={{ backgroundImage: 'url(/images/apple-watch-hero.png)' }}>
        <div className="text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Apple Watch Series 8</h1>
          <p className="text-lg md:text-xl mb-6">A perfect companion for your everyday life.</p>
          <a href="#customization" className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-900">Shop Now</a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-200 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Health Monitoring</h3>
              <p className="text-gray-700">Track your fitness progress, monitor heart rate, and more.</p>
            </div>
            <div className="p-6 bg-gray-200 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Customizable Design</h3>
              <p className="text-gray-700">Choose your favorite band, case, and more.</p>
            </div>
            <div className="p-6 bg-gray-200 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">All-Day Battery Life</h3>
              <p className="text-gray-700">Power through your day without worrying about battery life.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-6">
        <div className="max-w-7xl mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Apple Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;

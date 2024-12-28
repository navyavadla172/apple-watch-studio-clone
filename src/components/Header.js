import { useState } from 'react';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full p-4 bg-white shadow-md">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <Image src="/images/apple-logo.png" alt="Apple Logo" width={100} height={50} />
        {/* Desktop Menu */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-8">
            <li><a href="#" className="text-gray-700 hover:text-black">Store</a></li>
            <li><a href="#" className="text-gray-700 hover:text-black">Mac</a></li>
            <li><a href="#" className="text-gray-700 hover:text-black">iPhone</a></li>
            <li><a href="#" className="text-gray-700 hover:text-black">Watch</a></li>
            <li><a href="#" className="text-gray-700 hover:text-black">AirPods</a></li>
          </ul>
        </nav>
        {/* Hamburger Button for Mobile */}
        <button className="md:hidden" onClick={toggleMenu}>
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col space-y-4 p-4">
          <li><a href="#" className="text-gray-700 hover:text-black">Store</a></li>
          <li><a href="#" className="text-gray-700 hover:text-black">Mac</a></li>
          <li><a href="#" className="text-gray-700 hover:text-black">iPhone</a></li>
          <li><a href="#" className="text-gray-700 hover:text-black">Watch</a></li>
          <li><a href="#" className="text-gray-700 hover:text-black">AirPods</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;

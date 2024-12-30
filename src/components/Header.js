import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4 px-6">
      <div className="flex justify-between items-center container mx-auto">
        <div className="text-2xl font-semibold">Apple Watch Studio</div>
        <div className="space-x-6">
          <button className="text-white hover:underline">Sign In</button>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300">
            Start Your Watch
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

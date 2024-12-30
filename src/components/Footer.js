import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <p className="text-sm mb-4">© 2024 Apple Inc. All rights reserved.</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="#" className="hover:underline text-sm">Privacy</a>
          <a href="#" className="hover:underline text-sm">Terms of Use</a>
          <a href="#" className="hover:underline text-sm">Accessibility</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

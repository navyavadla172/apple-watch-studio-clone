// src/components/Footer.js
const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 mt-10">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Apple Inc. All rights reserved.
        </p>
        <div className="mt-4">
          <a href="#" className="text-sm text-gray-400 hover:text-white mx-2">
            Privacy Policy
          </a>
          <a href="#" className="text-sm text-gray-400 hover:text-white mx-2">
            Terms of Use
          </a>
          <a href="#" className="text-sm text-gray-400 hover:text-white mx-2">
            Sales and Refunds
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// components/SizeSelection.js
import React from 'react';

const SizeSelection = ({ selectedSize, setSelectedSize }) => {
  return (
    <div>
      <h3 className="text-lg font-semibold">Select Size</h3>
      <div className="flex space-x-4 mt-2">
        <button
          onClick={() => setSelectedSize('42mm')}
          className={`p-4 rounded-md border ${selectedSize === '42mm' ? 'border-blue-500' : 'border-gray-300'}`}
        >
          42mm
        </button>
        <button
          onClick={() => setSelectedSize('46mm')}
          className={`p-4 rounded-md border ${selectedSize === '46mm' ? 'border-blue-500' : 'border-gray-300'}`}
        >
          46mm
        </button>
      </div>
    </div>
  );
};

export default SizeSelection;

import React from "react";

const SizeSelection = ({ selectedSize, onSizeChange }) => {
  return (
    <div className="size-selection">
      <h2 className="text-xl font-semibold mb-4">Select Your Size</h2>
      <div className="flex space-x-6 mt-4 justify-center">
        <button
          onClick={() => onSizeChange("42mm")}
          className={`${
            selectedSize === "42mm"
              ? "bg-blue-500 text-white border-blue-500"
              : "bg-gray-300 text-black"
          } px-6 py-3 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105`}
        >
          42mm
        </button>
        <button
          onClick={() => onSizeChange("46mm")}
          className={`${
            selectedSize === "46mm"
              ? "bg-blue-500 text-white border-blue-500"
              : "bg-gray-300 text-black"
          } px-6 py-3 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105`}
        >
          46mm
        </button>
      </div>
    </div>
  );
};

export default SizeSelection;

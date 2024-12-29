// components/SizeSelection.js
const SizeSelection = ({ selectedSize, setSelectedSize }) => {
  return (
    <div>
      <h3 className="text-lg font-semibold">Select Watch Size</h3>
      <div className="flex space-x-4 mt-2">
        <button
          className={`w-16 h-16 rounded-full ${selectedSize === "42mm" ? "bg-blue-500" : "bg-gray-800"} text-white`}
          onClick={() => setSelectedSize("42mm")}
        >
          42mm
        </button>
        <button
          className={`w-16 h-16 rounded-full ${selectedSize === "46mm" ? "bg-blue-500" : "bg-gray-800"} text-white`}
          onClick={() => setSelectedSize("46mm")}
        >
          46mm
        </button>
      </div>
    </div>
  );
};

export default SizeSelection;

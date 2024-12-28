// components/SizeSelection.js
const SizeSelection = () => {
    return (
      <div>
        <h3 className="text-lg font-semibold">Select Watch Size</h3>
        <div className="flex space-x-4 mt-2">
          <button className="w-16 h-16 rounded-full bg-gray-800 text-white">40mm</button>
          <button className="w-16 h-16 rounded-full bg-gray-800 text-white">44mm</button>
        </div>
      </div>
    );
  };
  
  export default SizeSelection;
  
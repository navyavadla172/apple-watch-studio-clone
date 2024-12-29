import { useState } from "react";

const WatchStudio = () => {
  const [selectedSize, setSelectedSize] = useState("42mm");
  const [selectedMaterial, setSelectedMaterial] = useState("Aluminum");
  const [selectedBand, setSelectedBand] = useState("Sport Band");
  const [selectedColor, setSelectedColor] = useState("Black");

  const getImagePath = (size, material, band, color) => {
    return `/images/${size}/${material}/${band}/${color}-front.png`; // Example for front view
  };

  return (
    <div className="container mx-auto p-4">
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-gray-900 text-white">
        <img src="/apple-logo.png" alt="Apple Logo" className="w-12" />
      </header>

      {/* Main Content */}
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-semibold mb-4">Customize Your Apple Watch</h1>

        {/* Watch Preview */}
        <div className="watch-preview">
          <img
            src={getImagePath(selectedSize, selectedMaterial, selectedBand, selectedColor)}
            alt="Apple Watch Preview"
            className="w-96 mb-4"
          />
        </div>

        {/* Customization Options */}
        <div className="customization-options grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Size Selection */}
          <div>
            <h2 className="text-xl font-semibold">Select Size</h2>
            <button
              className={`p-3 rounded-md border-2 ${selectedSize === "42mm" ? "bg-blue-500 text-white" : "bg-gray-100"}`}
              onClick={() => setSelectedSize("42mm")}
            >
              42mm
            </button>
            <button
              className={`p-3 rounded-md border-2 ${selectedSize === "46mm" ? "bg-blue-500 text-white" : "bg-gray-100"}`}
              onClick={() => setSelectedSize("46mm")}
            >
              46mm
            </button>
          </div>

          {/* Material Selection */}
          <div>
            <h2 className="text-xl font-semibold">Select Material</h2>
            <button
              className={`p-3 rounded-md border-2 ${selectedMaterial === "Aluminum" ? "bg-blue-500 text-white" : "bg-gray-100"}`}
              onClick={() => setSelectedMaterial("Aluminum")}
            >
              Aluminum
            </button>
            <button
              className={`p-3 rounded-md border-2 ${selectedMaterial === "Titanium" ? "bg-blue-500 text-white" : "bg-gray-100"}`}
              onClick={() => setSelectedMaterial("Titanium")}
            >
              Titanium
            </button>
          </div>

          {/* Band Selection */}
          <div>
            <h2 className="text-xl font-semibold">Select Band</h2>
            <button
              className={`p-3 rounded-md border-2 ${selectedBand === "Sport Band" ? "bg-blue-500 text-white" : "bg-gray-100"}`}
              onClick={() => setSelectedBand("Sport Band")}
            >
              Sport Band
            </button>
            <button
              className={`p-3 rounded-md border-2 ${selectedBand === "Braided Solo Loop" ? "bg-blue-500 text-white" : "bg-gray-100"}`}
              onClick={() => setSelectedBand("Braided Solo Loop")}
            >
              Braided Solo Loop
            </button>
            <button
              className={`p-3 rounded-md border-2 ${selectedBand === "Sport Loop" ? "bg-blue-500 text-white" : "bg-gray-100"}`}
              onClick={() => setSelectedBand("Sport Loop")}
            >
              Sport Loop
            </button>
            <button
              className={`p-3 rounded-md border-2 ${selectedBand === "Nike Sport Loop" ? "bg-blue-500 text-white" : "bg-gray-100"}`}
              onClick={() => setSelectedBand("Nike Sport Loop")}
            >
              Nike Sport Loop
            </button>
          </div>

          {/* Band Color Selection */}
          <div>
            <h2 className="text-xl font-semibold">Select Color</h2>
            <button
              className={`p-3 rounded-md border-2 ${selectedColor === "Black" ? "bg-blue-500 text-white" : "bg-gray-100"}`}
              onClick={() => setSelectedColor("Black")}
            >
              Black
            </button>
            <button
              className={`p-3 rounded-md border-2 ${selectedColor === "Gray" ? "bg-blue-500 text-white" : "bg-gray-100"}`}
              onClick={() => setSelectedColor("Gray")}
            >
              Gray
            </button>
            <button
              className={`p-3 rounded-md border-2 ${selectedColor === "Red" ? "bg-blue-500 text-white" : "bg-gray-100"}`}
              onClick={() => setSelectedColor("Red")}
            >
              Red
            </button>
            <button
              className={`p-3 rounded-md border-2 ${selectedColor === "Green" ? "bg-blue-500 text-white" : "bg-gray-100"}`}
              onClick={() => setSelectedColor("Green")}
            >
              Green
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchStudio;

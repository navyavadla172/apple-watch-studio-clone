// pages/customization.js
import { useState } from 'react';
import cases from '../cases.json';  // Import the case data from the cases.json file

const CustomizationPage = () => {
  const [selectedCase, setSelectedCase] = useState(null);
  const [selectedSize, setSelectedSize] = useState('42mm');  // Default size
  const [selectedMaterial, setSelectedMaterial] = useState('Aluminum');
  const [selectedBand, setSelectedBand] = useState('Sport Band');
  const [selectedColor, setSelectedColor] = useState('Black');

  // Function to get the image path based on the selected options
  const getImagePath = (size, material, band, color, caseName) => {
    return `/images/${size}/${material}/${band}/${color}/${caseName}-front.png`;  // Example for front view
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-10 px-4">
        <div className="lg:grid lg:grid-cols-2 gap-10">
          {/* Left: Watch Display */}
          <div className="flex justify-center items-center">
            <div className="relative">
              {/* Display Watch Image */}
              <img
                src={getImagePath(
                  selectedSize,
                  selectedMaterial,
                  selectedBand,
                  selectedColor,
                  selectedCase?.name  // Dynamically use the selected case name
                )}
                alt="Apple Watch"
                className="max-w-xs lg:max-w-md"
              />
            </div>
          </div>

          {/* Right: Customization Options */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Customize Your Apple Watch</h2>

            {/* Size Selection */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Select Size</h3>
              <div className="flex space-x-4">
                <button
                  className={`p-3 rounded-lg border-2 ${
                    selectedSize === '42mm' ? 'bg-blue-500 text-white' : 'bg-gray-100'
                  }`}
                  onClick={() => setSelectedSize('42mm')}
                >
                  42mm
                </button>
                <button
                  className={`p-3 rounded-lg border-2 ${
                    selectedSize === '46mm' ? 'bg-blue-500 text-white' : 'bg-gray-100'
                  }`}
                  onClick={() => setSelectedSize('46mm')}
                >
                  46mm
                </button>
              </div>
            </div>

            {/* Material Selection */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Select Material</h3>
              <div className="flex space-x-4">
                <button
                  className={`p-3 rounded-lg border-2 ${
                    selectedMaterial === 'Aluminum' ? 'bg-blue-500 text-white' : 'bg-gray-100'
                  }`}
                  onClick={() => setSelectedMaterial('Aluminum')}
                >
                  Aluminum
                </button>
                <button
                  className={`p-3 rounded-lg border-2 ${
                    selectedMaterial === 'Titanium' ? 'bg-blue-500 text-white' : 'bg-gray-100'
                  }`}
                  onClick={() => setSelectedMaterial('Titanium')}
                >
                  Titanium
                </button>
              </div>
            </div>

            {/* Band Selection */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Select Band</h3>
              <div className="flex space-x-4">
                <button
                  className={`p-3 rounded-lg border-2 ${
                    selectedBand === 'Sport Band' ? 'bg-blue-500 text-white' : 'bg-gray-100'
                  }`}
                  onClick={() => setSelectedBand('Sport Band')}
                >
                  Sport Band
                </button>
                <button
                  className={`p-3 rounded-lg border-2 ${
                    selectedBand === 'Braided Solo Loop' ? 'bg-blue-500 text-white' : 'bg-gray-100'
                  }`}
                  onClick={() => setSelectedBand('Braided Solo Loop')}
                >
                  Braided Solo Loop
                </button>
                <button
                  className={`p-3 rounded-lg border-2 ${
                    selectedBand === 'Sport Loop' ? 'bg-blue-500 text-white' : 'bg-gray-100'
                  }`}
                  onClick={() => setSelectedBand('Sport Loop')}
                >
                  Sport Loop
                </button>
                <button
                  className={`p-3 rounded-lg border-2 ${
                    selectedBand === 'Nike Sport Loop' ? 'bg-blue-500 text-white' : 'bg-gray-100'
                  }`}
                  onClick={() => setSelectedBand('Nike Sport Loop')}
                >
                  Nike Sport Loop
                </button>
              </div>
            </div>

            {/* Color Selection */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Select Color</h3>
              <div className="flex space-x-4">
                <button
                  className={`p-3 rounded-lg border-2 ${
                    selectedColor === 'Black' ? 'bg-blue-500 text-white' : 'bg-gray-100'
                  }`}
                  onClick={() => setSelectedColor('Black')}
                >
                  Black
                </button>
                <button
                  className={`p-3 rounded-lg border-2 ${
                    selectedColor === 'Gray' ? 'bg-blue-500 text-white' : 'bg-gray-100'
                  }`}
                  onClick={() => setSelectedColor('Gray')}
                >
                  Gray
                </button>
                <button
                  className={`p-3 rounded-lg border-2 ${
                    selectedColor === 'Red' ? 'bg-blue-500 text-white' : 'bg-gray-100'
                  }`}
                  onClick={() => setSelectedColor('Red')}
                >
                  Red
                </button>
                <button
                  className={`p-3 rounded-lg border-2 ${
                    selectedColor === 'Green' ? 'bg-blue-500 text-white' : 'bg-gray-100'
                  }`}
                  onClick={() => setSelectedColor('Green')}
                >
                  Green
                </button>
              </div>
            </div>

            {/* Case Selection */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Select Case</h3>
              <div className="flex space-x-4">
                {cases.map((caseOption) => (
                  <button
                    key={caseOption.id}
                    className={`p-3 rounded-lg border-2 ${
                      selectedCase?.id === caseOption.id
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100'
                    }`}
                    onClick={() => setSelectedCase(caseOption)}
                  >
                    {caseOption.name} - ${caseOption.price}
                  </button>
                ))}
              </div>
            </div>

            {/* Checkout Section */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-2">Add to Cart</h3>
              <button className="w-full p-4 bg-blue-500 text-white rounded-lg font-semibold">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomizationPage;

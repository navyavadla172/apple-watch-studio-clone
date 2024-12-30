import React, { useState } from 'react';
import CollectionSelection from '../components/CollectionSelection'; // Import CollectionSelection component

const Customization = () => {
  const [selectedSize, setSelectedSize] = useState('42mm');
  const [selectedCase, setSelectedCase] = useState('Aluminum');
  const [selectedBand, setSelectedBand] = useState('Sport Loop');
  const [selectedColor, setSelectedColor] = useState('Black Unity');
  const [selectedCollection, setSelectedCollection] = useState('Watch Series');

  // Available options
  const sizes = ['42mm', '46mm'];
  const cases = ['Aluminum', 'Titanium'];
  const bands = ['Stainless Steel', 'Sport Loop', 'Sport Band', 'FineWoven', 'Braided Solo Loop', 'Solo Loop', 'Nike Sport Loop', 'Nike Sport Band'];
  const colors = ['Black Unity', 'White', 'Silver', 'Gold', 'Space Black', 'Natural Milanese', 'Gold Milanese', 'Slate Milanese', 'Natural Link', 'Gold Link', 'Slate Link', 'Ultramarine', 'Lake Green', 'Blue Cloud', 'Ink', 'Plum', 'Pride Edition', 'Black Unity Unity Bloom', 'Stone Gray', 'Starlight', 'Denim', 'Light Blush', 'Black Magnetic', 'Dark Taupe Magnetic', 'Blackberry Magnetic', 'Midnight', 'Chartreuse', 'Magenta', 'Start Fruit', 'Black Blue', 'Startlight Pink', 'Grey Blue', 'Green Grey', 'Blue Red', 'Volt Splash', 'Magic Ember', 'Midnight Sky', 'Pure Platinum', 'Desert Stone', 'Cargo Khaki', 'Blue Flame'];

  // Update selected collection
  const handleCollectionSelect = (collection) => {
    setSelectedCollection(collection);
  };

  // Image path generator function
  const getImagePath = () => {
    // The path structure reflects the correct folder and image format
    return `/images/${selectedSize}/${selectedCase}/${selectedBand}/watch-${selectedSize}-${selectedCase}-${selectedBand}-${selectedColor}-front.png`;
  };

  return (
    <div className="customization-container mx-auto px-6 py-12 max-w-5xl">
      <div className="watch-preview mb-10">
        <h2 className="text-3xl font-semibold text-center mb-4">Apple Watch Preview</h2>
        <div className="image-wrapper flex justify-center">
          <img
            src={getImagePath()}
            alt="Apple Watch Preview"
            className="watch-image transition-transform duration-500 hover:scale-110"
            width={300}
            height={300}
          />
        </div>
      </div>

      <div className="options space-y-12">
        {/* Select Size */}
        <div className="size-selection">
          <h3 className="text-2xl font-semibold">Select Size</h3>
          <div className="grid grid-cols-2 gap-4">
            {sizes.map((size) => (
              <button
                key={size}
                className={`${
                  selectedSize === size ? 'bg-blue-500 text-white' : 'bg-gray-100'
                } py-2 px-4 rounded-lg transition duration-200 hover:bg-blue-400 focus:outline-none`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Select Case */}
        <div className="case-selection">
          <h3 className="text-2xl font-semibold">Select Case</h3>
          <div className="grid grid-cols-2 gap-4">
            {cases.map((caseType) => (
              <button
                key={caseType}
                className={`${
                  selectedCase === caseType ? 'bg-blue-500 text-white' : 'bg-gray-100'
                } py-2 px-4 rounded-lg transition duration-200 hover:bg-blue-400 focus:outline-none`}
                onClick={() => setSelectedCase(caseType)}
              >
                {caseType}
              </button>
            ))}
          </div>
        </div>

        {/* Select Band */}
        <div className="band-selection">
          <h3 className="text-2xl font-semibold">Select Band</h3>
          <div className="grid grid-cols-2 gap-4">
            {bands.map((band) => (
              <button
                key={band}
                className={`${
                  selectedBand === band ? 'bg-blue-500 text-white' : 'bg-gray-100'
                } py-2 px-4 rounded-lg transition duration-200 hover:bg-blue-400 focus:outline-none`}
                onClick={() => setSelectedBand(band)}
              >
                {band}
              </button>
            ))}
          </div>
        </div>

        {/* Select Color */}
        <div className="color-selection">
          <h3 className="text-2xl font-semibold">Select Color</h3>
          <div className="grid grid-cols-2 gap-4">
            {colors.map((color) => (
              <button
                key={color}
                className={`${
                  selectedColor === color ? 'bg-blue-500 text-white' : 'bg-gray-100'
                } py-2 px-4 rounded-lg transition duration-200 hover:bg-blue-400 focus:outline-none`}
                onClick={() => setSelectedColor(color)}
              >
                {color}
              </button>
            ))}
          </div>
        </div>

        {/* Select Collection */}
        <CollectionSelection 
          selectedCollection={selectedCollection} 
          onSelectCollection={handleCollectionSelect} 
        />
      </div>
    </div>
  );
};

export default Customization;
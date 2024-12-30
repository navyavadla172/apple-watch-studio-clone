import React, { useState } from 'react';
import Link from 'next/link';
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
    <div className="customization-page max-w-6xl mx-auto py-16">
      <h2 className="text-3xl font-semibold text-center mb-8">Customize Your Apple Watch</h2>
      <div className="flex justify-center mb-8">
        <img src={getImagePath()} alt="Apple Watch" className="max-w-xs transition-transform duration-500 hover:scale-110" />
      </div>

      <div className="options grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Select Size */}
        <div className="size-selection">
          <h3 className="text-2xl font-semibold">Select Size</h3>
          <div className="grid grid-cols-2 gap-4">
            {sizes.map((size) => (
              <button key={size} className="btn-option" onClick={() => setSelectedSize(size)}>
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
              <button key={caseType} className="btn-option" onClick={() => setSelectedCase(caseType)}>
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
              <button key={band} className="btn-option" onClick={() => setSelectedBand(band)}>
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
              <button key={color} className="btn-option" onClick={() => setSelectedColor(color)}>
                {color}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Select Collection */}
      <CollectionSelection selectedCollection={selectedCollection} onSelectCollection={setSelectedCollection} />

      {/* Checkout Button */}
      <div className="text-center mt-8">
        <Link href="/summary">
          <a className="bg-blue-500 text-white py-3 px-8 rounded-lg text-lg hover:bg-blue-400 transition">
            View Summary & Checkout
          </a>
        </Link>
      </div>
    </div>
  );
};

export default CustomizationPage;
import React, { useState } from 'react';
import CollectionSelection from './components/CollectionSelection'; // Import CollectionSelection component

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
    <div className="customization-container">
      <div className="watch-preview">
        <h2>Preview</h2>
        <div className="image-wrapper">
          <img
            src={getImagePath()}
            alt="Apple Watch Preview"
            width={300}
            height={300}
          />
        </div>
      </div>

      <div className="options">
        {/* Select Size */}
        <div className="size-selection">
          <h3>Select Size</h3>
          {sizes.map((size) => (
            <button
              key={size}
              className={selectedSize === size ? 'selected' : ''}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>

        {/* Select Case */}
        <div className="case-selection">
          <h3>Select Case</h3>
          {cases.map((caseType) => (
            <button
              key={caseType}
              className={selectedCase === caseType ? 'selected' : ''}
              onClick={() => setSelectedCase(caseType)}
            >
              {caseType}
            </button>
          ))}
        </div>

        {/* Select Band */}
        <div className="band-selection">
          <h3>Select Band</h3>
          {bands.map((band) => (
            <button
              key={band}
              className={selectedBand === band ? 'selected' : ''}
              onClick={() => setSelectedBand(band)}
            >
              {band}
            </button>
          ))}
        </div>

        {/* Select Color */}
        <div className="color-selection">
          <h3>Select Color</h3>
          {colors.map((color) => (
            <button
              key={color}
              className={selectedColor === color ? 'selected' : ''}
              onClick={() => setSelectedColor(color)}
            >
              {color}
            </button>
          ))}
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

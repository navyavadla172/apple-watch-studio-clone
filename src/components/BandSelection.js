// components/BandSelection.js

import React from 'react';

const BandSelection = ({ onSelectBand, selectedSize, selectedCase, selectedColor }) => {
  // Available bands
  const bands = [
    "Stainless Steel", "Sport Loop", "Sport Band", 
    "FineWoven", "Braided Solo Loop", "Solo Loop", 
    "Nike Sport Loop", "Nike Sport Band"
  ];

  // Image path generator based on folder structure
  const getImagePath = (band) => {
    return `/images/${selectedSize}/${selectedCase}/${band}/watch-${selectedSize}-${selectedCase}-${band}-${selectedColor || 'Black Unity'}-front.png`;
  };

  return (
    <div className="band-selection">
      <h2>Choose your Band</h2>
      <div className="band-options">
        {bands.map((band) => (
          <div key={band} className="band-option" onClick={() => onSelectBand(band)}>
            <img src={getImagePath(band)} alt={band} className="band-img"/>
            <p>{band}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BandSelection;

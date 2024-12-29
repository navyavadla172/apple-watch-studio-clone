// src/components/BandSelection.js
import React from 'react';

const BandSelection = ({ selectedBand, setSelectedBand }) => {
  const bands = [
    "Sport Band", 
    "Solo Loop", 
    "Braided Solo Loop", 
    "FineWoven", 
    "Nike Sport Band", 
    "Nike Sport Loop",
    "Stainless Steel Milanese", 
    "Stainless Steel Link",
    "Sport Loop Ultra", 
    "Sport Loop Lake Green", 
    "Sport Loop Blue Cloud",
    "Sport Loop Ink", 
    "Sport Loop Plum", 
    "Sport Loop Pride Edition", 
    "Sport Loop Black Unity"
  ];

  return (
    <div className="band-selection">
      <h3 className="text-lg font-semibold">Select Band</h3>
      <div className="flex space-x-4 mt-4 flex-wrap">
        {bands.map((band, index) => (
          <button
            key={index}
            className={`w-32 h-32 rounded-full flex items-center justify-center border-2 ${selectedBand === band ? "border-blue-500 bg-gray-700" : "border-gray-500 bg-gray-800"} text-white`}
            onClick={() => setSelectedBand(band)}
          >
            {band}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BandSelection;

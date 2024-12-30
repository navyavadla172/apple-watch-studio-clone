import React from 'react';

const WatchPreview = ({ selectedSize, selectedCase, selectedBand, selectedColor }) => {
  // Dynamically generate the image path based on selections
  const previewImage = `/images/${selectedSize}/${selectedCase}/${selectedBand}/${selectedColor || 'Black Unity'}/watch-${selectedSize}-${selectedCase}-${selectedBand}-${selectedColor || 'Black Unity'}-front.png`;

  return (
    <div className="watch-preview text-center">
      <h2 className="text-xl font-semibold mb-4">Your Watch Preview</h2>
      <div className="image-wrapper">
        <img
          src={previewImage}
          alt="Watch Preview"
          className="watch-image mx-auto"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default WatchPreview;

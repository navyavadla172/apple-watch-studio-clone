// components/WatchPreview.js

import React from 'react';

const WatchPreview = ({ selectedSize, selectedCase, selectedBand }) => {
  const imageSrc = `/images/${selectedSize}/${selectedCase}/${selectedBand}/watch-${selectedSize}-${selectedCase}-${selectedBand}.png`;

  return (
    <div className="watch-preview">
      <img
        src={imageSrc}
        alt="Apple Watch Preview"
        className="max-w-full h-auto"
      />
    </div>
  );
};

export default WatchPreview;

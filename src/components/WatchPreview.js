import React from 'react';

const WatchPreview = ({ selectedBand, selectedCase, selectedSize }) => {
  const imagePath = `/images/watch-${selectedSize}-${selectedCase}-${selectedBand}.png`;
  
  return (
    <div className="watch-preview">
      <h3>Watch Preview</h3>
      <img src={imagePath} alt="Selected watch" />
    </div>
  );
};

export default WatchPreview;

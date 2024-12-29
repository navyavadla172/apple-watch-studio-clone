import React from 'react';

const BandSelection = ({ bands, onBandSelect }) => {
  if (!bands || bands.length === 0) return <div>No bands available</div>;

  return (
    <div className="band-selection">
      {bands.map((band, index) => (
        <div
          key={index}
          className="band-option"
          onClick={() => onBandSelect(band)}
        >
          <img src={band.image} alt={band.name} />
          <p>{band.name}</p>
        </div>
      ))}
    </div>
  );
};

export default BandSelection;

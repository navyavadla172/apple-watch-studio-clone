import React from 'react';

const BandSelection = ({ bands, selectedBand, onSelectBand }) => {
  return (
    <div className="band-selection">
      <h3>Choose Your Band</h3>
      <div className="band-options">
        {bands.map((band) => (
          <button
            key={band.id}
            onClick={() => onSelectBand(band)}
            className={`band-item ${selectedBand === band ? 'selected' : ''}`}
          >
            <img src={band.imageUrl} alt={band.name} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default BandSelection;

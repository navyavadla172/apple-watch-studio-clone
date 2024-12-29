// src/components/WatchPreview.js

import React from 'react';

const WatchPreview = ({ selectedCase, selectedBand, selectedFace }) => {
  return (
    <div className="watch-preview mt-6">
      <div className="relative w-72 h-72 mx-auto">
        {/* Watch Case */}
        {selectedCase && (
          <img 
            src={`/images/${selectedCase}.png`} 
            alt="Watch Case" 
            className="absolute top-0 left-0 w-full h-full object-contain" 
          />
        )}
        
        {/* Watch Band */}
        {selectedBand && (
          <img 
            src={`/images/${selectedBand}.png`} 
            alt="Band" 
            className="absolute top-0 left-0 w-full h-full object-contain" 
          />
        )}

        {/* Watch Face */}
        {selectedFace && (
          <img 
            src={`/images/${selectedFace}.png`} 
            alt="Watch Face" 
            className="absolute top-0 left-0 w-full h-full object-contain" 
          />
        )}
      </div>
    </div>
  );
};

export default WatchPreview;

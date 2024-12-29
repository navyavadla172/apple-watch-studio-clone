// components/WatchFaceSelection.js

import React from 'react';

const WatchFaceSelection = ({ watchFaces = [], setSelectedFace }) => {
  const faceButtons = [];

  // Using a traditional for loop
  for (let index = 0; index < watchFaces.length; index++) {
    faceButtons.push(
      <button
        key={index}
        onClick={() => setSelectedFace(watchFaces[index])}
        className="w-16 h-16 rounded-full bg-gray-300 hover:bg-gray-400 transition-colors"
      >
        {watchFaces[index].name}
      </button>
    );
  }

  return (
    <div className="watch-face-selection">
      <h3 className="text-lg font-semibold">Select Watch Face</h3>
      <div className="flex space-x-4 mt-2">
        {watchFaces.length > 0 ? faceButtons : <p>No watch faces available</p>}
      </div>
    </div>
  );
};

export default WatchFaceSelection;

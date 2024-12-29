import React from 'react';

const WatchFaceSelection = ({ watchFaces = [], setSelectedFace }) => {
  return (
    <div className="watch-face-selection">
      <h3 className="text-lg font-semibold">Select Watch Face</h3>
      <div className="flex space-x-4 mt-2">
        {watchFaces.length === 0 ? (
          <p>No watch faces available</p>
        ) : (
          watchFaces.map((face, index) => (
            <button
              key={index}
              onClick={() => setSelectedFace(face)}
              className="w-16 h-16 rounded-full bg-gray-300 hover:bg-gray-400 transition-colors"
            >
              {face.name}
            </button>
          ))
        )}
      </div>
    </div>
  );
};

export default WatchFaceSelection;

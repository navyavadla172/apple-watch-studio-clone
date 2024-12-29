import React from 'react';

const WatchFaceSelection = ({ watchFaces, selectedWatchFace, onSelectWatchFace }) => {
  return (
    <div className="watch-face-selection">
      <h3>Choose Watch Face</h3>
      <div className="watch-face-options">
        {watchFaces.map((face) => (
          <button
            key={face.id}
            onClick={() => onSelectWatchFace(face)}
            className={`watch-face-item ${selectedWatchFace === face ? 'selected' : ''}`}
          >
            <img src={face.imageUrl} alt={face.name} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default WatchFaceSelection;

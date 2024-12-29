import React from 'react';

const WatchFaceSelection = ({ faces, onFaceSelect }) => {
  if (!faces || faces.length === 0) return <div>No watch faces available</div>;

  return (
    <div className="watch-face-selection">
      {faces.map((face, index) => (
        <div
          key={index}
          className="watch-face-option"
          onClick={() => onFaceSelect(face)}
        >
          <img src={face.image} alt={face.name} />
          <p>{face.name}</p>
        </div>
      ))}
    </div>
  );
};

export default WatchFaceSelection;

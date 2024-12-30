import React from 'react';

const WatchFaceSelection = ({ onSelectWatchFace, selectedWatchFace }) => {
  const watchFaces = [
    { name: "Analog", value: "analog" },
    { name: "Digital", value: "digital" },
    { name: "Modular", value: "modular" }
  ];

  return (
    <div className="watch-face-selection">
      <h2 className="text-xl font-semibold mb-4">Choose your Watch Face</h2>
      <div className="flex space-x-6 mt-4 justify-center">
        {watchFaces.map((face) => (
          <div
            key={face.value}
            onClick={() => onSelectWatchFace(face)}
            className={`${
              selectedWatchFace === face.value
                ? "bg-blue-500 text-white border-blue-500"
                : "bg-gray-300 text-black"
            } px-6 py-3 rounded-full cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105`}
          >
            <p>{face.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WatchFaceSelection;

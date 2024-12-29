// src/components/CaseSelection.js
import React from 'react';

const CaseSelection = ({ selectedCase, setSelectedCase }) => {
  const cases = [
    { name: "Aluminum", size: ["42mm", "46mm"] },
    { name: "Titanium", size: ["42mm", "46mm"] }
  ];

  return (
    <div className="case-selection">
      <h3 className="text-lg font-semibold">Select Case</h3>
      <div className="flex space-x-4 mt-4 flex-wrap">
        {cases.map((watchCase, index) => (
          <div key={index} className="flex flex-col items-center">
            <h4 className="text-md font-medium">{watchCase.name}</h4>
            {watchCase.size.map((size, sizeIndex) => (
              <button
                key={sizeIndex}
                className={`w-32 h-32 rounded-full flex items-center justify-center border-2 ${selectedCase === `${watchCase.name} ${size}` ? "border-blue-500 bg-gray-700" : "border-gray-500 bg-gray-800"} text-white`}
                onClick={() => setSelectedCase(`${watchCase.name} ${size}`)}
              >
                {size}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseSelection;

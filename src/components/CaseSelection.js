import React from 'react';

const CaseSelection = ({ cases, selectedCase, onSelectCase }) => {
  return (
    <div className="case-selection">
      <h3>Select Case</h3>
      <div className="case-options">
        {cases.map((item) => (
          <button
            key={item.id}
            onClick={() => onSelectCase(item)}
            className={`case-item ${selectedCase === item ? 'selected' : ''}`}
          >
            <img src={item.imageUrl} alt={item.name} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default CaseSelection;

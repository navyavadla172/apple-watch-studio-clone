// components/CaseSelection.js

import React from 'react';

const CaseSelection = ({ onSelectCase }) => {
  const cases = ["Aluminum", "Titanium"];

  return (
    <div className="case-selection">
      <h2>Choose your Case</h2>
      <div className="case-options">
        {cases.map((caseType) => (
          <div key={caseType} className="case-option" onClick={() => onSelectCase(caseType)}>
            <p>{caseType}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseSelection;

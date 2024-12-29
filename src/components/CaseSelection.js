import React from 'react';

const CaseSelection = ({ cases, onCaseSelect }) => {
  if (!cases || cases.length === 0) return <div>No cases available</div>;

  return (
    <div className="case-selection">
      {cases.map((caseType, index) => (
        <div
          key={index}
          className="case-option"
          onClick={() => onCaseSelect(caseType)}
        >
          <img src={caseType.image} alt={caseType.name} />
          <p>{caseType.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CaseSelection;

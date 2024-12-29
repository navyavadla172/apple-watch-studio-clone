import React from 'react';

const CaseSelection = ({ onCaseChange }) => {
    return (
        <div className="case-selection">
            <h2>Select Case Material</h2>
            <button onClick={() => onCaseChange('Aluminum')}>Aluminum</button>
            <button onClick={() => onCaseChange('Titanium')}>Titanium</button>
        </div>
    );
};

export default CaseSelection;

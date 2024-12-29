import React from 'react';

const SizeSelection = ({ onSizeChange }) => {
    return (
        <div className="size-selection">
            <h2>Select Watch Size</h2>
            <button onClick={() => onSizeChange('42mm')}>42mm</button>
            <button onClick={() => onSizeChange('46mm')}>46mm</button>
        </div>
    );
};

export default SizeSelection;

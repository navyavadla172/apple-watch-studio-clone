import React from 'react';

const WatchFaceSelection = ({ onFaceChange }) => {
    return (
        <div className="watch-face-selection">
            <h2>Select Watch Face</h2>
            <button onClick={() => onFaceChange('Classic')}>Classic</button>
            <button onClick={() => onFaceChange('Modern')}>Modern</button>
            <button onClick={() => onFaceChange('Sport')}>Sport</button>
        </div>
    );
};

export default WatchFaceSelection;

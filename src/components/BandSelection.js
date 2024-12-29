import React from 'react';

const BandSelection = ({ onBandChange }) => {
    return (
        <div className="band-selection">
            <h2>Select Band</h2>
            <button onClick={() => onBandChange('Sport Band')}>Sport Band</button>
            <button onClick={() => onBandChange('Sport Loop')}>Sport Loop</button>
            <button onClick={() => onBandChange('Stainless Steel')}>Stainless Steel</button>
            <button onClick={() => onBandChange('FineWoven')}>FineWoven</button>
            <button onClick={() => onBandChange('Braided Solo Loop')}>Braided Solo Loop</button>
            <button onClick={() => onBandChange('Solo Loop')}>Solo Loop</button>
            <button onClick={() => onBandChange('Nike Sport Band')}>Nike Sport Band</button>
            <button onClick={() => onBandChange('Nike Sport Loop')}>Nike Sport Loop</button>
        </div>
    );
};

export default BandSelection;

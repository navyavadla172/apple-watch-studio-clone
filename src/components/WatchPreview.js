import React from 'react';

const WatchPreview = ({ size, caseType, band, color }) => {
    // Constructing the image path based on selected size, case, band, and color
    const imagePath = `/images/watch-${size}-${caseType}-${band}-${color}-front.png`;
    
    return (
        <div className="watch-preview">
            <img className="animate-fade" src={imagePath} alt="Watch Preview" />
        </div>
    );
};

export default WatchPreview;

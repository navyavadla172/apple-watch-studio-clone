import React from 'react';

const CollectionSelection = ({ onCollectionChange }) => {
    return (
        <div className="collection-selection">
            <h2>Select Collection</h2>
            <button onClick={() => onCollectionChange('Sport')}>Sport</button>
            <button onClick={() => onCollectionChange('Nike')}>Nike</button>
            <button onClick={() => onCollectionChange('Edition')}>Edition</button>
        </div>
    );
};

export default CollectionSelection;

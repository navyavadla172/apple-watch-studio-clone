// components/CollectionSelection.js

import React from 'react';

const CollectionSelection = ({ selectedCollection, onSelectCollection }) => {
  const collections = ["Watch Series", "Watch Ultra", "Watch SE"];

  return (
    <div className="collection-selection">
      <h2>Choose your Collection</h2>
      <div className="collection-options">
        {collections.map((collection) => (
          <div
            key={collection}
            className={`collection-option ${selectedCollection === collection ? 'selected' : ''}`}
            onClick={() => onSelectCollection(collection)}
          >
            <p>{collection}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionSelection;

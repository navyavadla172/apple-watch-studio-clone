import React from 'react';

const CollectionSelection = ({ collections, selectedCollection, onSelectCollection }) => {
  return (
    <div className="collection-selection">
      <h3>Select Collection</h3>
      <div className="collection-options">
        {collections.map((collection) => (
          <button
            key={collection.id}
            onClick={() => onSelectCollection(collection)}
            className={`collection-item ${selectedCollection === collection ? 'selected' : ''}`}
          >
            <img src={collection.imageUrl} alt={collection.name} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default CollectionSelection;

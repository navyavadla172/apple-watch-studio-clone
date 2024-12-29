// src/components/CollectionSelection.js
import React from "react";

const CollectionSelection = ({ collections, selectedCollection, onSelectCollection }) => {
  return (
    <div className="collection-selection">
      <h3 className="text-lg font-semibold">Select Collection</h3>
      <select
        className="border-2 p-2 rounded-md mt-2 bg-gray-800 text-white"
        value={selectedCollection?.name}
        onChange={(e) => onSelectCollection(collections.find(collection => collection.name === e.target.value))}
      >
        {collections.map((collection) => (
          <option key={collection.name} value={collection.name}>
            {collection.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CollectionSelection;

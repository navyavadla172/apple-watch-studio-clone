// components/CollectionSelection.js
import React from "react";

const CollectionSelection = ({ collections, selectedCollection, onSelectCollection }) => {
  return (
    <select
      className="border p-2 rounded"
      value={selectedCollection?.name}
      onChange={(e) => onSelectCollection(e.target.value)}
    >
      {collections.map((collection) => (
        <option key={collection.name} value={collection.name}>
          {collection.name}
        </option>
      ))}
    </select>
  );
};

export default CollectionSelection;

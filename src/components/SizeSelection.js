import React from 'react';

const SizeSelection = ({ sizes, onSizeSelect }) => {
  if (!sizes || sizes.length === 0) return <div>No sizes available</div>; // Avoid empty map()

  return (
    <div className="size-selection">
      {sizes.map((size, index) => (
        <div
          key={index}
          className="size-option"
          onClick={() => onSizeSelect(size)}
        >
          <p>{size}</p>
        </div>
      ))}
    </div>
  );
};

export default SizeSelection;

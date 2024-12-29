import React from 'react';

const SizeSelection = ({ sizes, selectedSize, onSelectSize }) => {
  return (
    <div className="size-selection">
      <h3>Select Size</h3>
      <div className="size-options">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => onSelectSize(size)}
            className={`size-item ${selectedSize === size ? 'selected' : ''}`}
          >
            {size} mm
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizeSelection;

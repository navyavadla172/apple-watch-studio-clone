import React from 'react';
import { useSpring, animated } from 'react-spring';

const WatchPreview = ({ selectedSize, selectedCase, selectedBand, selectedFace }) => {
  const imagePath = `/images/${selectedSize}-${selectedCase}-${selectedBand}-${selectedFace}.png`;

  // Animation to fade in the image
  const fade = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 500 } });

  return (
    <div className="watch-preview">
      <h2>Watch Preview</h2>
      <div className="watch-image">
        <animated.img src={imagePath} alt="Watch Preview" style={fade} />
      </div>
    </div>
  );
};

export default WatchPreview;

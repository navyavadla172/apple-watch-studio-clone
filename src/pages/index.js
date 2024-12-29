// pages/index.js

import React, { useState } from 'react';
import SizeSelection from '../components/SizeSelection';
import BandSelection from '../components/BandSelection';
import CaseSelection from '../components/CaseSelection';
import WatchFaceSelection from '../components/WatchFaceSelection';
import WatchPreview from '../components/WatchPreview';

const IndexPage = () => {
  const [selectedSize, setSelectedSize] = useState('42mm');  // Default value set to 42mm
  const [selectedBand, setSelectedBand] = useState('Sport Band');  // Default value set to Sport Band
  const [selectedCase, setSelectedCase] = useState('Aluminum');  // Default value set to Aluminum case
  const [selectedFace, setSelectedFace] = useState('Black');  // Default value set to Black watch face

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-semibold text-center">Welcome to Apple Watch Studio</h1>

      <div className="mt-6">
        <SizeSelection setSelectedSize={setSelectedSize} selectedSize={selectedSize} />
        <BandSelection setSelectedBand={setSelectedBand} selectedBand={selectedBand} />
        <CaseSelection setSelectedCase={setSelectedCase} selectedCase={selectedCase} />
        <WatchFaceSelection setSelectedFace={setSelectedFace} selectedFace={selectedFace} />
      </div>

      <div className="mt-6">
        <WatchPreview
          selectedSize={selectedSize}
          selectedBand={selectedBand}
          selectedCase={selectedCase}
          selectedFace={selectedFace}
        />
      </div>
    </div>
  );
};

export default IndexPage;

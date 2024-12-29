// pages/index.js

import React, { useState } from 'react';
import SizeSelection from '../components/SizeSelection';
import BandSelection from '../components/BandSelection';
import CaseSelection from '../components/CaseSelection';
import WatchPreview from '../components/WatchPreview';

const IndexPage = () => {
  const [selectedSize, setSelectedSize] = useState('42mm');
  const [selectedBand, setSelectedBand] = useState('Sport Band');
  const [selectedCase, setSelectedCase] = useState('Aluminum');
  const [selectedFace, setSelectedFace] = useState('Black'); // Not used yet in preview

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-semibold text-center">Welcome to Apple Watch Studio</h1>

      <div className="mt-6">
        <SizeSelection setSelectedSize={setSelectedSize} selectedSize={selectedSize} />
        <BandSelection setSelectedBand={setSelectedBand} selectedBand={selectedBand} />
        <CaseSelection setSelectedCase={setSelectedCase} selectedCase={selectedCase} />
      </div>

      <div className="mt-6">
        <WatchPreview
          selectedSize={selectedSize}
          selectedBand={selectedBand}
          selectedCase={selectedCase}
        />
      </div>
    </div>
  );
};

export default IndexPage;

import React, { useState } from 'react';
import BandSelection from '../components/BandSelection';
import SizeSelection from '../components/SizeSelection';
import CaseSelection from '../components/CaseSelection';
import WatchPreview from '../components/WatchPreview';

const CustomizationPage = () => {
  const [selectedBand, setSelectedBand] = useState('Sport Band');
  const [selectedSize, setSelectedSize] = useState(42);
  const [selectedCase, setSelectedCase] = useState('Aluminum');

  const bands = ['Sport Band', 'Sport Loop', 'FineWoven'];
  const sizes = [42, 46];
  const cases = ['Aluminum', 'Titanium', 'Stainless Steel'];

  return (
    <div className="customization-page">
      <h1>Customize Your Watch</h1>
      <div className="selectors">
        <SizeSelection sizes={sizes} selectedSize={selectedSize} setSelectedSize={setSelectedSize} />
        <CaseSelection cases={cases} selectedCase={selectedCase} setSelectedCase={setSelectedCase} />
        <BandSelection bands={bands} selectedBand={selectedBand} setSelectedBand={setSelectedBand} />
      </div>
      <WatchPreview selectedSize={selectedSize} selectedBand={selectedBand} selectedCase={selectedCase} />
    </div>
  );
};

export default CustomizationPage;

import React, { useState } from 'react';
import WatchPreview from '../components/WatchPreview'; // Import the WatchPreview component
import SizeSelection from '../components/SizeSelection';
import CaseSelection from '../components/CaseSelection';
import BandSelection from '../components/BandSelection';
import WatchFaceSelection from '../components/WatchFaceSelection';

const WatchStudioPage = () => {
  const [selectedSize, setSelectedSize] = useState('42mm');
  const [selectedCase, setSelectedCase] = useState('Aluminum');
  const [selectedBand, setSelectedBand] = useState('Sport Loop');
  const [selectedWatchFace, setSelectedWatchFace] = useState('Analog'); // Initial watch face

  // Handle the state changes for selections
  const handleSizeChange = (size) => setSelectedSize(size);
  const handleCaseChange = (caseType) => setSelectedCase(caseType);
  const handleBandChange = (band) => setSelectedBand(band);
  const handleWatchFaceChange = (watchFace) => setSelectedWatchFace(watchFace);

  return (
    <div className="watch-studio p-6">
      <h1 className="text-3xl font-bold mb-6">Apple Watch Studio Clone</h1>
      <p className="mb-4 text-lg">Here's your watch preview with all the selected options!</p>

      <div className="selection-container mb-8">
        <SizeSelection selectedSize={selectedSize} onSizeChange={handleSizeChange} />
        <CaseSelection onSelectCase={handleCaseChange} />
        <BandSelection onSelectBand={handleBandChange} />
        <WatchFaceSelection onSelectWatchFace={handleWatchFaceChange} />
      </div>

      <WatchPreview selectedSize={selectedSize} selectedMaterial={selectedCase} selectedBand={selectedBand} />
    </div>
  );
};

export default WatchStudioPage;

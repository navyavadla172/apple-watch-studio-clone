import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BandSelection from '../components/BandSelection';
import CaseSelection from '../components/CaseSelection';
import SizeSelection from '../components/SizeSelection';
import WatchPreview from '../components/WatchPreview';
import CollectionSelection from '../components/CollectionSelection';
import WatchFaceSelection from '../components/WatchFaceSelection';

const WatchStudioPage = () => {
  const [selectedBand, setSelectedBand] = useState(null);
  const [selectedCase, setSelectedCase] = useState(null);
  const [selectedSize, setSelectedSize] = useState(42); // Default size is 42mm
  const [selectedCollection, setSelectedCollection] = useState(null);
  const [selectedWatchFace, setSelectedWatchFace] = useState(null);

  const bands = [
    { id: '1', name: 'Sport Loop', imageUrl: '/images/band-sport-loop.png' },
    { id: '2', name: 'Nike Sport Loop', imageUrl: '/images/band-nike-sport-loop.png' },
  ];

  const cases = [
    { id: '1', name: 'Aluminum', imageUrl: '/images/case-aluminum.png' },
    { id: '2', name: 'Titanium', imageUrl: '/images/case-titanium.png' },
  ];

  const sizes = [42, 46];

  const collections = [
    { id: '1', name: 'Nike Edition', imageUrl: '/images/collection-nike.png' },
    { id: '2', name: 'Standard Edition', imageUrl: '/images/collection-standard.png' },
  ];

  const watchFaces = [
    { id: '1', name: 'Classic', imageUrl: '/images/face-classic.png' },
    { id: '2', name: 'Modern', imageUrl: '/images/face-modern.png' },
  ];

  return (
    <div className="watch-studio">
      <Header />
      <div className="customization">
        <SizeSelection sizes={sizes} selectedSize={selectedSize} onSelectSize={setSelectedSize} />
        <CaseSelection cases={cases} selectedCase={selectedCase} onSelectCase={setSelectedCase} />
        <BandSelection bands={bands} selectedBand={selectedBand} onSelectBand={setSelectedBand} />
        <CollectionSelection collections={collections} selectedCollection={selectedCollection} onSelectCollection={setSelectedCollection} />
        <WatchFaceSelection watchFaces={watchFaces} selectedWatchFace={selectedWatchFace} onSelectWatchFace={setSelectedWatchFace} />
        <WatchPreview selectedBand={selectedBand?.name} selectedCase={selectedCase?.name} selectedSize={selectedSize} />
      </div>
      <Footer />
    </div>
  );
};

export default WatchStudioPage;

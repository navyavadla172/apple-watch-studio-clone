import React, { useState } from 'react';
import SizeSelection from '../components/SizeSelection';
import CaseSelection from '../components/CaseSelection';
import BandSelection from '../components/BandSelection';
import WatchPreview from '../components/WatchPreview';
import WatchFaceSelection from '../components/WatchFaceSelection';
import Footer from '../components/Footer';
import Header from '../components/Header';
import CollectionSelection from '../components/CollectionSelection';


const CustomizationPage = () => {
    const [selectedBand, setSelectedBand] = useState(null);
    const [selectedCase, setSelectedCase] = useState(null);
    const [selectedSize, setSelectedSize] = useState(42); // Default size 42mm
    
    const bands = [
      { id: '1', name: 'Sport Loop', imageUrl: '/images/band-sport-loop.png' },
      { id: '2', name: 'Nike Sport Loop', imageUrl: '/images/band-nike-sport-loop.png' },
    ];
    
    const cases = [
      { id: '1', name: 'Aluminum', imageUrl: '/images/case-aluminum.png' },
      { id: '2', name: 'Titanium', imageUrl: '/images/case-titanium.png' },
    ];
  
    const sizes = [42, 46];
    
    return (
      <div className="customization-page">
        <h2>Customize Your Watch</h2>
        
        <SizeSelection
          sizes={sizes}
          selectedSize={selectedSize}
          onSelectSize={setSelectedSize}
        />
        <CaseSelection
          cases={cases}
          selectedCase={selectedCase}
          onSelectCase={setSelectedCase}
        />
        <BandSelection
          bands={bands}
          selectedBand={selectedBand}
          onSelectBand={setSelectedBand}
        />
        
        <WatchPreview
          selectedBand={selectedBand?.name}
          selectedCase={selectedCase?.name}
          selectedSize={selectedSize}
        />
      </div>
    );
  };
  
export default CustomizationPage;

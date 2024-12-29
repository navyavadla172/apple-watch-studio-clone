import React, { useState } from 'react';
import SizeSelection from '../components/SizeSelection';
import CaseSelection from '../components/CaseSelection';
import BandSelection from '../components/BandSelection';
import WatchFaceSelection from '../components/WatchFaceSelection';
import WatchPreview from '../components/WatchPreview';
import Footer from '../components/Footer';
import Header from '../components/Header';

const IndexPage = () => {
  const [selectedSize, setSelectedSize] = useState('42mm');
  const [selectedCase, setSelectedCase] = useState('Aluminum');
  const [selectedBand, setSelectedBand] = useState('Sport Band');
  const [selectedFace, setSelectedFace] = useState('Front');

  // Sample data structure for sizes, cases, bands, and faces
  const sizes = ['42mm', '46mm'];
  const cases = [
    { name: 'Aluminum', image: '/images/aluminum.jpg' },
    { name: 'Titanium', image: '/images/titanium.jpg' }
  ];
  const bands = [
    { name: 'Sport Band', image: '/images/sportband.jpg' },
    { name: 'Nike Sport Loop', image: '/images/nikesportloop.jpg' }
  ];
  const faces = [
    { name: 'Front', image: '/images/front.jpg' },
    { name: 'Back', image: '/images/back.jpg' }
  ];

  return (
    <div>
      <Header />
      <SizeSelection sizes={sizes} onSizeSelect={setSelectedSize} />
      <CaseSelection cases={cases} onCaseSelect={setSelectedCase} />
      <BandSelection bands={bands} onBandSelect={setSelectedBand} />
      <WatchFaceSelection faces={faces} onFaceSelect={setSelectedFace} />
      <WatchPreview
        selectedSize={selectedSize}
        selectedCase={selectedCase}
        selectedBand={selectedBand}
        selectedFace={selectedFace}
      />
      <Footer />
    </div>
  );
};

export default IndexPage;

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
    const [size, setSize] = useState('42mm');
    const [caseType, setCaseType] = useState('Aluminum');
    const [band, setBand] = useState('Sport Band');
    const [watchFace, setWatchFace] = useState('Classic');

    const imagePaths = {
        'Sport Band': 'watch-42mm-Aluminum-Sport Band-Black-front.png',
        'Sport Loop': 'watch-42mm-Aluminum-Sport Loop-Red-front.png',
        'Stainless Steel': 'watch-42mm-Aluminum-Stainless Steel-Silver-front.png',
        // Add more mappings for the band options
    };

    return (
        <div>
            <Header />
            <SizeSelection onSizeChange={setSize} />
            <CaseSelection onCaseChange={setCaseType} />
            <BandSelection onBandChange={setBand} />
            <WatchFaceSelection onFaceChange={setWatchFace} />
            <CollectionSelection onCollectionChange={() => {}} />
            <WatchPreview size={size} caseType={caseType} band={band} imagePaths={imagePaths} />
            <Footer />
        </div>
    );
};

export default CustomizationPage;

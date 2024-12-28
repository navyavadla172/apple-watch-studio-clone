import Header from '../components/Header';
import { useState } from 'react';

const Customization = () => {
  const [watchColor, setWatchColor] = useState('space-gray');
  const [bandColor, setBandColor] = useState('black');

  const handleWatchColorChange = (color) => {
    setWatchColor(color);
  };

  const handleBandColorChange = (color) => {
    setBandColor(color);
  };

  return (
    <div>
      <Header />
      <main className="p-6">
        <div className="max-w-7xl mx-auto space-y-10">
          {/* Customization Section */}
          <section className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
            {/* Watch Model Customization */}
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-4">Customize Your Apple Watch</h2>
              <div>
                <h3 className="text-lg font-semibold">Select Watch Case Color</h3>
                <div className="flex space-x-4 mt-2">
                  <button
                    onClick={() => handleWatchColorChange('space-gray')}
                    className={`w-16 h-16 rounded-full ${watchColor === 'space-gray' ? 'ring-2 ring-gray-500' : ''} bg-gray-800`}
                  ></button>
                  <button
                    onClick={() => handleWatchColorChange('silver')}
                    className={`w-16 h-16 rounded-full ${watchColor === 'silver' ? 'ring-2 ring-gray-500' : ''} bg-silver-400`}
                  ></button>
                  <button
                    onClick={() => handleWatchColorChange('gold')}
                    className={`w-16 h-16 rounded-full ${watchColor === 'gold' ? 'ring-2 ring-gray-500' : ''} bg-yellow-500`}
                  ></button>
                </div>
              </div>

              {/* Watch Band Options */}
              <div className="mt-6">
                <h3 className="text-lg font-semibold">Select Band Color</h3>
                <div className="flex space-x-4 mt-2">
                  <button
                    onClick={() => handleBandColorChange('black')}
                    className={`w-16 h-16 rounded-full ${bandColor === 'black' ? 'ring-2 ring-gray-500' : ''} bg-black`}
                  ></button>
                  <button
                    onClick={() => handleBandColorChange('white')}
                    className={`w-16 h-16 rounded-full ${bandColor === 'white' ? 'ring-2 ring-gray-500' : ''} bg-white`}
                  ></button>
                  <button
                    onClick={() => handleBandColorChange('blue')}
                    className={`w-16 h-16 rounded-full ${bandColor === 'blue' ? 'ring-2 ring-gray-500' : ''} bg-blue-500`}
                  ></button>
                </div>
              </div>
            </div>

            {/* Apple Watch Preview */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold">Preview Your Apple Watch</h3>
              <div className="flex justify-center items-center">
                <div
                  className={`w-64 h-64 rounded-lg border-4 border-gray-300 flex justify-center items-center ${
                    watchColor === 'space-gray' ? 'bg-gray-800' : watchColor === 'silver' ? 'bg-silver-400' : 'bg-yellow-500'
                  }`}
                >
                  <div className={`w-32 h-32 rounded-full ${bandColor === 'black' ? 'bg-black' : bandColor === 'white' ? 'bg-white' : 'bg-blue-500'}`}></div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Customization;

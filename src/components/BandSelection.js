// components/BandSelection.js
const BandSelection = ({ selectedBandColor, onBandColorChange }) => {
    return (
      <div>
        <div className="flex space-x-4 mt-2">
          <button
            onClick={() => onBandColorChange('black')}
            className={`w-16 h-16 rounded-full ${selectedBandColor === 'black' ? 'ring-2 ring-gray-500' : ''} bg-black`}
          ></button>
          <button
            onClick={() => onBandColorChange('white')}
            className={`w-16 h-16 rounded-full ${selectedBandColor === 'white' ? 'ring-2 ring-gray-500' : ''} bg-white`}
          ></button>
          <button
            onClick={() => onBandColorChange('blue')}
            className={`w-16 h-16 rounded-full ${selectedBandColor === 'blue' ? 'ring-2 ring-gray-500' : ''} bg-blue-500`}
          ></button>
        </div>
      </div>
    );
  };
  
  export default BandSelection;
  
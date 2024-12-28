// components/CaseSelection.js
const CaseSelection = ({ selectedCaseColor, onCaseColorChange }) => {
    return (
      <div>
        <div className="flex space-x-4 mt-2">
          <button
            onClick={() => onCaseColorChange('space-gray')}
            className={`w-16 h-16 rounded-full ${selectedCaseColor === 'space-gray' ? 'ring-2 ring-gray-500' : ''} bg-gray-800`}
          ></button>
          <button
            onClick={() => onCaseColorChange('silver')}
            className={`w-16 h-16 rounded-full ${selectedCaseColor === 'silver' ? 'ring-2 ring-gray-500' : ''} bg-silver-400`}
          ></button>
          <button
            onClick={() => onCaseColorChange('gold')}
            className={`w-16 h-16 rounded-full ${selectedCaseColor === 'gold' ? 'ring-2 ring-gray-500' : ''} bg-yellow-500`}
          ></button>
        </div>
      </div>
    );
  };
  
  export default CaseSelection;
  
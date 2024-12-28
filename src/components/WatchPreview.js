// components/WatchPreview.js
const WatchPreview = ({ watchColor, bandColor }) => {
    return (
      <div className="flex justify-center items-center">
        <div
          className={`w-64 h-64 rounded-lg border-4 border-gray-300 flex justify-center items-center ${
            watchColor === 'space-gray'
              ? 'bg-gray-800'
              : watchColor === 'silver'
              ? 'bg-silver-400'
              : 'bg-yellow-500'
          }`}
        >
          <div
            className={`w-32 h-32 rounded-full ${
              bandColor === 'black'
                ? 'bg-black'
                : bandColor === 'white'
                ? 'bg-white'
                : 'bg-blue-500'
            }`}
          ></div>
        </div>
      </div>
    );
  };
  
  export default WatchPreview;
  
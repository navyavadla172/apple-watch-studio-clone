const WatchPreview = ({ selectedSize, selectedBand, selectedCase }) => {
  const imageSrc = `/images/${selectedSize}/${selectedCase}/${selectedBand}/watch-${selectedSize}-${selectedCase}-${selectedBand}.png`;
  
  return (
    <div className="watch-preview">
      <img src={imageSrc} alt="Selected Watch" />
    </div>
  );
};

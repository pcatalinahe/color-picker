const ColorPicker = ({ colors, selectedColor, onColorChange }) => {
    const handleReset = () => {
      onColorChange("");
    };
  
    return (
      <div className="color-picker" style={{ backgroundColor: selectedColor || 'white' }}>
        <div className="color-buttons">
          {colors.map((color) => (
            <button
              key={color.value}
              onClick={() => onColorChange(color.value)}
              className="color-button"
              style={{ backgroundColor: color.value }}
            >
              {color.label}
            </button>
          ))}
        </div>
        <button onClick={handleReset} className="reset-button">
          Reset
        </button>
      </div>
    );
  };
  
  export default ColorPicker;
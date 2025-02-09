import ColorPicker from "./component/ColorPicker";
import { useState } from "react";
import "./App.css";

function App() {
  const [selectedColor, setSelectedColor] = useState("");

  const colors = [
    { label: "Soft Pink", value: "#ffd1dc" },
    { label: "Baby Blue", value: "#b5d8eb" },
    { label: "Mellow Yellow", value: "#fff4bd" },
    { label: "Mint Green", value: "#98ddca" },
  ];

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="app">
      <h1>Color Picker App</h1>
      <ColorPicker 
        colors={colors} 
        selectedColor={selectedColor} 
        onColorChange={handleColorChange} 
      />
    </div>
  );
}
export default App;
import "./App.css";
import React, { useState } from "react";

function App() {
  /*initialise state*/
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  /*generate a random hex color*/
  const hexNumbers = "0123456789ABCDEF";
  /*loop that runs 6 times to generate a hex code*/
  const generateRandomColor = () => {
    let color = "#";
    for (let i = 0; i < 6; i++) {
      /*generate a random integer and assign to variable randomIndex*/
      let randomIndex = Math.floor(Math.random() * hexNumbers.length);
      /* Append random hex number to color string */
      color += hexNumbers[randomIndex];
    }
    // Changes the state of background color
    setBackgroundColor(color);
    
  };
  return (
    <div className="app" style={{ background: backgroundColor }}>
      <button id="button" onClick={generateRandomColor}>
        Click me!
      </button>
    </div>
  );
}

export default App;

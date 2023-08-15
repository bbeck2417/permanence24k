import React from "react";
import "./App.css";
import EnglishPeaks from "./Components/englishPeaks";
import FrenchPeaks from "./Components/frenchPeaks";

function App() {
  
  return (
    <div className="topFlex">
    <div className="App App-header">
      <div className="fade-component">
          <EnglishPeaks/>
      </div>
    </div>
    </div>
  );
}

export default App;

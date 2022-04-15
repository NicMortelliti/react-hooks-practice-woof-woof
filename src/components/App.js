import React from "react";
import Filter from "./Filter";

function App() {
  return (
    <div className="App">
      <Filter />
      <div id="dog-bar"></div>
      <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <div id="dog-info"></div>
      </div>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import Filter from "./Filter";

function App() {
  // Store filter state at App level
  const [filterState, setFilterState] = useState(false);

  return (
    <div className="App">
      <Filter filterGoodDogs={filterState} />
      <div id="dog-bar"></div>
      <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <div id="dog-info"></div>
      </div>
    </div>
  );
}

export default App;

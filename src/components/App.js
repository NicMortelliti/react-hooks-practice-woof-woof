import React, { useState } from "react";
import Filter from "./Filter";
import Bar from "./Bar";

function App() {
  // Store filter state at App level
  const [filterState, setFilterState] = useState(false);

  return (
    <div className="App">
      <Filter filterState={filterState} setFilterState={setFilterState} />
      <Bar />
      <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <div id="dog-info"></div>
      </div>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import Filter from "./Filter";
import Bar from "./Bar";

const API = "http://localhost:3001/pups";

function App() {
  // Store filter state at App level
  const [filterState, setFilterState] = useState(false);
  const [dogArrayState, setDogArrayState] = useState([]);

  // Get dog info from API upon page load
  useEffect(() => {
    fetch(API)
      .then(r => r.json())
      .then(setDogArrayState);
  }, []);

  return (
    <div className="App">
      <Filter filterState={filterState} setFilterState={setFilterState} />
      <Bar dogArray={dogArrayState} />
      <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <div id="dog-info"></div>
      </div>
    </div>
  );
}

export default App;

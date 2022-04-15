import React, { useState, useEffect } from "react";
import Filter from "./Filter";
import Bar from "./Bar";
import Profile from "./Profile";

const API = "http://localhost:3001/pups";

function App() {
  // Store filter state at App level
  const [filterState, setFilterState] = useState(false);
  const [dogArrayState, setDogArrayState] = useState([]);
  const [selectedDogState, setSelectedDogState] = useState();

  // Get dog info from API upon page load
  useEffect(() => {
    fetch(API)
      .then(r => r.json())
      .then(setDogArrayState);
  }, []);

  return (
    <div className="App">
      <Filter filterState={filterState} setFilterState={setFilterState} />
      <Bar
        filterState={filterState}
        dogArray={dogArrayState}
        setSelectedDogState={setSelectedDogState}
      />
      {dogArrayState.map(dog => {
        return dog.id === selectedDogState ? (
          <Profile selectedDog={dog} />
        ) : null;
      })}
    </div>
  );
}

export default App;

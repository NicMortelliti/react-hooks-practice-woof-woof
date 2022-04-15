import React from "react";
import DogSelect from "./DogSelect";

function Bar({ filterState, dogArray, setSelectedDogState }) {
  return (
    <div id="dog-bar">
      {dogArray.map(dog => {
        return filterState ? (
          dog.isGoodDog ? (
            <DogSelect
              key={dog.id}
              dog={dog}
              setSelectedDogState={setSelectedDogState}
            /> // Show good dogs only
          ) : null
        ) : (
          <DogSelect
            key={dog.id}
            dog={dog}
            setSelectedDogState={setSelectedDogState}
          />
        ); // Show all dogs
      })}
    </div>
  );
}

export default Bar;

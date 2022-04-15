import React from "react";

function DogSelect({ dog, setSelectedDogState }) {
  return <span onClick={() => setSelectedDogState(dog.id)}>{dog.name}</span>;
}

export default DogSelect;

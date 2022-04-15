import React from "react";

function Profile({ selectedDog: { isGoodDog, name, image } }) {
  return (
    <div id="dog-summary-container">
      <h1>DOGGO:</h1>
      <div id="dog-info">
        <img src={image} alt={name} />
        <h2>{name}</h2>
        <button>{isGoodDog ? "Bad Dog!" : "Good Dog!"}</button>
      </div>
    </div>
  );
}

export default Profile;

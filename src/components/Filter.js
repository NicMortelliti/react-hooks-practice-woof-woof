import React from "react";

function Filter({ filterState, setFilterState }) {
  return (
    <div id="filter-div">
      <button id="good-dog-filter" onClick={() => setFilterState(!filterState)}>
        {filterState ? "Filter good dogs: ON" : "Filter good dogs: OFF"}
      </button>
    </div>
  );
}

export default Filter;

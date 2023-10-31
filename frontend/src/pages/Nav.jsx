import React from "react";

function Nav() {
  return (
    <div className="container navigation">
      <img
        className="logo"
        src="./src/assets/logoFoodT.svg"
        alt="logo Food Treck"
      />

      <input
        className="searchBar"
        type="text"
        placeholder="Search For a country or a meal"
      />
    </div>
  );
}

export default Nav;

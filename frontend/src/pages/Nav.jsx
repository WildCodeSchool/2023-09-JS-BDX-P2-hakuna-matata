import React, { useState } from "react";

function Nav() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <div className="container navigation">
      <img className="logo" src="/assets/logo.svg" alt="logo Food Truck" />

      <div className="burger-container">
        <button type="button" className="hamburger" onClick={toggleHamburger}>
          <img
            className="burger-logo"
            src="/src/assets/hommeburger.svg"
            alt="hamburger"
          />
        </button>
        {hamburgerOpen && (
          <div className="menu">
            <a href="welcome-page-link">Welcome</a>
            <a href="recipes-page-link">Recipes</a>
            <a href="world-map-link">World Food</a>
          </div>
        )}
      </div>

      <input
        className="searchBar"
        type="text"
        placeholder="Search for a country or a meal"
      />
    </div>
  );
}

export default Nav;

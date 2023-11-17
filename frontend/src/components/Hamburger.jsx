import React, { useState } from "react";
import "./Hamburger.css";
import hamburgerLogo from "../assets/hamburger2.png";

export default function Hamburger() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <div className="burger-container">
      <button type="button" className="hamburger" onClick={toggleHamburger}>
        <img className="burger-logo" src={hamburgerLogo} alt="hamburger" />
      </button>

      {hamburgerOpen && (
        <div className="menu">
          <div className="menu-style">
            <a href="/">Home Page</a>
            <a href="/meals/:id">Recipes</a>
            <a href="/country/:id">Country List</a>
          </div>
        </div>
      )}
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="container navigation">
      <Link to="/">
        <img
          className="logo"
          src="./src/assets/logo.svg"
          alt="logo Food Treck"
        />
      </Link>
      <input
        className="searchBar"
        type="text"
        placeholder="Search For a country or a meal"
      />
    </div>
  );
}

export default Nav;

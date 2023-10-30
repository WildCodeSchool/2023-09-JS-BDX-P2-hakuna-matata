import { useState } from "react";
import Hamburger from "./Hamburger";

export default function NavBar() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <div className="navigation">
      <p className="search-function">recherche</p>
      <h1 className="logo-name">Food Treck</h1>
      <Hamburger onClick={toggleHamburger} />
      {hamburgerOpen && (
        <div className="hide">
          <a href="welcome-page-link">Welcome</a>
          <a href="recepies-page-link">Recepies</a>
          <a href="world-map-link">World Food</a>
        </div>
      )}
    </div>
  );
}

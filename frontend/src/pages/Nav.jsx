import { Link } from "react-router-dom";
import Hamburger from "../components/Hamburger";

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

      <Hamburger />

      <input
        className="searchBar"
        type="text"
        placeholder="Search for a country or a meal"
      />
    </div>
  );
}

export default Nav;

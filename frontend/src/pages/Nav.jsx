import Hamburger from "../components/Hamburger";

function Nav() {
  return (
    <div className="container navigation">
      <img className="logo" src="/assets/logo.svg" alt="logo Food Truck" />

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

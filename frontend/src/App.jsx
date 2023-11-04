import { Outlet } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";

function App() {
  const [country, setCountry] = useState(null);
  const [countryDishes, setCountryDishes] = useState(null);

  return (
    <div className="App">
      <Nav />
      <SearchBar callback={setCountry} callbackdishes={setCountryDishes} />
      <main>
        <Outlet context={{ country, countryDishes }} />
      </main>
      <Footer />
    </div>
  );
}

export default App;

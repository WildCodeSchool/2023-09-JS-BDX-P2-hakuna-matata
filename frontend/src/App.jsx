import { Outlet } from "react-router-dom";
import { useMemo, useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import MyContext from "./components/Mycontext";

function App() {
  const [country, setCountry] = useState(null);
  const [countryDishes, setCountryDishes] = useState(null);

  const values = useMemo(
    () => ({
      country,
      countryDishes,
      setCountry,
      setCountryDishes,
    }),
    [country, countryDishes, setCountry, setCountryDishes]
  );

  return (
    <div className="App">
      <Nav />
      <SearchBar callback={setCountry} callbackdishes={setCountryDishes} />
      <main>
        <MyContext.Provider value={values}>
          <Outlet />
        </MyContext.Provider>
      </main>
      <Footer />
    </div>
  );
}

export default App;

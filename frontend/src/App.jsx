import { Outlet } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";

function App() {
  const [country, setCountry] = useState(null);

  return (
    <div className="App">
      <Nav />
      <SearchBar callback={setCountry} />
      <main>
        <Outlet context={{ country }} />
      </main>
      <Footer />
    </div>
  );
}

export default App;

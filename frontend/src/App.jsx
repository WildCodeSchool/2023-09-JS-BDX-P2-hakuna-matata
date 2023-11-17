import { Outlet, ScrollRestoration } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="App">
      <ScrollRestoration />
      <NavBar />
      <SearchBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;

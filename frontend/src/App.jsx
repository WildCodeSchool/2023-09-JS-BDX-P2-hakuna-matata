import { Outlet } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="App">
      <Nav />
      <SearchBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;

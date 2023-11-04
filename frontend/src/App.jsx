import { Outlet } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Nav from "./pages/Nav";
import Footer from "./pages/Footer";

function App() {
  const [country, setCountry] = useState(null);
  return (
    <div className="App">
      <Nav />
      <main>
        <Outlet context={[country, setCountry]} />
      </main>
      <Footer />
    </div>
  );
}

export default App;

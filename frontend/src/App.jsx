import { Outlet } from "react-router-dom";
import "./App.css";
import Nav from "./pages/Nav";
import Footer from "./pages/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;

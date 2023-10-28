import { useState } from "react";
import "./App.css";
import Table from "./components/Table";
import { fetcher } from "./components/helpers";

function App() {
  const [allDishes, setAllDisches] = useState([]);
  return (
    <div className="App">
      <h1>first h1</h1>
      <button type="button" onClick={() => fetcher(setAllDisches)}>
        fetch
      </button>
      <Table tableList={allDishes} />
    </div>
  );
}

export default App;

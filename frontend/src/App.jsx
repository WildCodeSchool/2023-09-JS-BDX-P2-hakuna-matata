import { useState } from "react";
import "./App.css";
import Table from "./components/Table";

function App() {
  const [allDishes, setAllDisches] = useState([]);
  async function fetcher() {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian`
      );
      const dishes = await response.json();
      // console.log("all dishes ", dishes.meals);
      setAllDisches([...dishes.meals]);
    } catch (err) {
      // console.log(err);
    }
  }
  return (
    <div className="App">
      <h1>first h1</h1>
      <button type="button" onClick={fetcher}>
        fetch
      </button>
      <Table tableList={allDishes} />
    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import SingleDishCard from "./components/SingleDishCard";

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
      {allDishes.length > 0 &&
        allDishes.map((myDish) => <SingleDishCard dish={myDish} />)}
    </div>
  );
}

export default App;

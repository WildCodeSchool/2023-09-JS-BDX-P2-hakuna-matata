import { useState } from "react";
import "./App.css";
import SingleDishCard from "./components/SingleDishCard";

function App() {
  let [mydish, setMyDish] = useState({
    strMeal: "Montreal Smoked Meat",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/uttupv1511815050.jpg/preview",
  });
  async function fetcher() {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian`
      );
      const dishes = await response.json();
      console.log(dishes);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="App">
      <h1>first h1</h1>
      <button type="button" onClick={fetcher}>
        fetch
      </button>
      <SingleDishCard dish={mydish} />
    </div>
  );
}

export default App;

import { useState } from "react";
import "../App.css";
import Table from "./Table";
import { fetcher, fetcherByCategory } from "./helpers";

const areas = [
  "American",
  "British",
  "Canadian",
  "Chinese",
  "Croatian",
  "Dutch",
  "Egyptian",
  "Filipino",
  "French",
  "Greek",
  "Indian",
  "Irish",
  "Italian",
  "Jamaican",
  "Japanese",
  "Kenyan",
  "Malaysian",
  "Mexican",
  "Moroccan",
  "Polish",
  "Portuguese",
  "Russian",
  "Spanish",
  "Thai",
  "Tunisian",
  "Turkish",
  "Vietnamese",
  "Unknown",
];
const categories = [
  "Beef",
  "Breakfast",
  "Chicken",
  "Dessert",
  "Goat",
  "Lamb",
  "Miscellaneous",
  "Pasta",
  "Pork",
  "Seafood",
  "Side",
  "Starter",
  "Vegan",
  "Vegetarian",
];

function SearchDishes() {
  const [allDishes, setAllDisches] = useState([]);
  return (
    <div className="App">
      <h1>search dishes page</h1>
      <input
        type="text"
        onKeyDown={(e) => {
          // console.log(e);
          if (e.key === "Enter") {
            fetcherByCategory(setAllDisches, e.target.value);
          }
        }}
        // onInput={}
      />
      <select
        name=""
        id=""
        onChange={(e) => {
          fetcherByCategory(setAllDisches, e.target.value);
        }}
      >
        {categories.map((category) => (
          <option value={category}>{category}</option>
        ))}
      </select>
      <select
        name=""
        id=""
        onChange={(e) => {
          fetcher(setAllDisches, e.target.value);
        }}
      >
        {areas.map((area) => (
          <option value={area}>{area}</option>
        ))}
      </select>
      <button type="button" onClick={() => fetcher(setAllDisches)}>
        fetch
      </button>
      {allDishes.length > 0 && <Table tableList={allDishes} />}
    </div>
  );
}

export default SearchDishes;

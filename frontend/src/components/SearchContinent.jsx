import { useState } from "react";
import "../App.css";
import Table from "./Table";
import { continents, fetcherByContinent } from "./helpers";

function SearchContinent() {
  const [allDishes, setAllDisches] = useState([]);
  return (
    <div className="App">
      <h1>search dishes page</h1>
      <button
        type="button"
        onClick={() => fetcherByContinent(setAllDisches, continents.Africa)}
      >
        fetch africa
      </button>
      {allDishes.length > 0 && <Table tableList={allDishes} />}
    </div>
  );
}

export default SearchContinent;

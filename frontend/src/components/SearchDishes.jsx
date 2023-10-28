import { useState } from "react";
import "../App.css";
import Table from "./Table";
import { fetcher, fetcherByCategory } from "./helpers";

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
      />
      <select
        name=""
        id=""
        onChange={(e) => {
          fetcher(setAllDisches, e.target.value);
        }}
      >
        <option value="All">All</option>
        <option value="Canadian">Canadian</option>
        <option value="American">American</option>
      </select>
      <button type="button" onClick={() => fetcher(setAllDisches)}>
        fetch
      </button>
      {allDishes.length > 0 && <Table tableList={allDishes} />}
    </div>
  );
}

export default SearchDishes;

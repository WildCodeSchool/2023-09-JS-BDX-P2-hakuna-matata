import { useEffect, useState } from "react";
import "../App.css";

function SearchByIngredients() {
  const [allIngredients, setAllIngredients] = useState([]);
  const [filteredIngredients, setFilteredIngredients] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSearching, setIsSearching] = useState(false);
  useEffect(() => {
    async function fetchAllIngredients() {
      const results = await fetch(
        "https://www.themealdb.com/api/json/v1/1/list.php?i=list"
      );
      const ingredients = await results.json();
      setAllIngredients(ingredients.meals);
      setIsLoading(false);
    }
    fetchAllIngredients();
  }, []);
  function showMatchedSearch(e) {
    if (!isLoading && !isSearching) {
      const results = [];
      for (let i = 0, j = 0; i < allIngredients.length || j > 10; i += 1) {
        if (
          allIngredients[i].strIngredient
            .toLowerCase()
            .includes(e.target.value.toLowerCase())
        ) {
          results.push(allIngredients[i]);
          setFilteredIngredients([...results]);
          j += 1;
        }
      }
      setIsSearching(false);
    }
  }
  return (
    <div className="App">
      <input type="text" onInput={(e) => showMatchedSearch(e)} />
      {!isSearching &&
        filteredIngredients.map((ing) => (
          <h4 key={ing.idIngredient}>{ing.idIngredient}</h4>
        ))}
    </div>
  );
}

export default SearchByIngredients;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchByContinent, continents } from "./helpers";
import CardDish from "../components/CardDish";

function Continent() {
  const [dishesOfContinent, setDishesOfContinent] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { continent } = useParams();

  useEffect(() => {
    async function getData() {
      setIsLoading(() => true);
      await fetchByContinent(setDishesOfContinent, continents.America);
      setIsLoading(() => false);
    }
    getData();
  }, []);

  return (
    <div>
      <h3>continent loaded is {continent}</h3>
      {!isLoading &&
        dishesOfContinent.map((element) => <CardDish dish={element} />)}
    </div>
  );
}

export default Continent;

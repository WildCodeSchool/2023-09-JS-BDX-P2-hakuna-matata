import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import CardDish from "../components/CardDish";
import "./Country.css";

export default function Country() {
  const { country, countryDishes } = useLoaderData();
  const [dishes, setDishes] = useState(countryDishes);

  const types = [...new Set(countryDishes.map((ele) => ele.strCategory))];

  function filterByType(type) {
    const filteredDishes = countryDishes.filter(
      (ele) => ele.strCategory.toString() === type
    );
    setDishes([...filteredDishes]);
  }

  return (
    <div>
      <div className="banner">
        <div className="description">
          <h2>{country.Country}</h2>
          <p>{country.Description ?? ""}</p>
        </div>
        <div
          className="flag-img"
          style={{
            backgroundImage: `url(${
              country
                ? country.ImageURL
                : "https://placehold.co/600x400/EEE/31343C"
            })`,
          }}
        />
      </div>
      <div className="filters">
        <button type="button" onClick={() => setDishes([...countryDishes])}>
          All
        </button>
        {types.map((ele) => (
          <button type="button" onClick={() => filterByType(ele)}>
            {ele}
          </button>
        ))}
      </div>
      <div className="table">
        {country.Country &&
          (dishes?.length ?? 0) > 0 &&
          dishes?.map((ele) => <CardDish dish={ele} key={ele.idMeal} />)}
      </div>
    </div>
  );
}

import { useLoaderData } from "react-router-dom";
import CardDish from "../components/CardDish";
import "./Country.css";

export default function Country() {
  const { country, countryDishes } = useLoaderData();

  return (
    <div className="container-country-page">
      <h1>{country.strArea}</h1>
      <div className="banner">
        <p className="description">{country.Description ?? ""}</p>
        <div
          className="image"
          style={{
            backgroundImage: `url(${
              country
                ? country.ImageURL
                : "https://placehold.co/600x400/EEE/31343C"
            })`,
            backgroundSize: `contain`,
            backgroundRepeat: "no-repeat",
            width: `80%`,
            height: `190px`,
          }}
        />
      </div>
      <div className="table">
        {country.Country &&
          (countryDishes?.length ?? 0) > 0 &&
          countryDishes?.map((ele) => <CardDish dish={ele} key={ele.idMeal} />)}
      </div>
    </div>
  );
}

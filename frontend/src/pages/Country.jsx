import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import CardDish from "../components/CardDish";
import MyContext from "../components/Mycontext";
import "./Country.css";

export default function Country() {
  const country = useLoaderData();
  const { countryDishes } = useContext(MyContext);

  return (
    <div>
      <div className="banner">
        <p className="description">{country.Description ?? ""}</p>
        <div
          style={{
            backgroundImage: `url(${
              country
                ? country.ImageURL
                : "https://placehold.co/600x400/EEE/31343C"
            })`,
            backgroundSize: `contain`,
            backgroundRepeat: "no-repeat",
            width: `400px`,
            height: `300px`,
          }}
        />
      </div>
      <div className="table">
        {country.Country &&
          countryDishes.length > 0 &&
          countryDishes.map((ele) => <CardDish dish={ele} key={ele.idMeal} />)}
      </div>
    </div>
  );
}

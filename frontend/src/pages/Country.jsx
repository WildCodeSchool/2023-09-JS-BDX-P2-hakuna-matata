import { useLoaderData } from "react-router-dom";
import CardDish from "../components/CardDish";
import "./Country.css";
import Spacer from "../components/Spacer";

export default function Country() {
  const { country, countryDishes } = useLoaderData();

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
          (countryDishes?.length ?? 0) > 0 &&
          countryDishes?.map((ele) => <CardDish dish={ele} key={ele.idMeal} />)}
      </div>
      <Spacer />
    </div>
  );
}

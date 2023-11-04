import { useOutletContext } from "react-router-dom";
import "./Country.css";
import CardDish from "../components/CardDish";

export default function Country() {
  const { country, countryDishes } = useOutletContext();
  // console.log(countryDishes);

  return (
    <div>
      <div className="banner">
        <p className="description">{country.Description ?? ""}</p>
        <div
          style={{
            background: `url(${
              country
                ? country.ImageURL
                : "https://placehold.co/600x400/EEE/31343C"
            })
             no-repeat`,
            backgroundSize: `contain`,
            width: `400px`,
            height: `300px`,
          }}
        />
      </div>
      <div className="table">
        {country.Country &&
          countryDishes.length > 0 &&
          countryDishes.map((ele) => <CardDish dish={ele} />)}
      </div>
    </div>
  );
}

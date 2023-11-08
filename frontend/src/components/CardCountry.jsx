import { useParams } from "react-router-dom";
import { continents } from "../pages/helpers";
import "./CardCountry.css";

export default function CardCountry() {
  const { continent } = useParams();
  const countries = continents[continent] || [];

  const flags = {
    England: "/src/assets/flags/united-kingdom2.svg",
    Netherland: "/src/assets/flags/netherland.svg",
    France: "/src/assets/flags/france.svg",
    Italy: "/src/assets/flags/italy.svg",
    Ireland: "/src/assets/flags/ireland.svg",
    Portugal: "/src/assets/flags/portugal.svg",
    Spain: "/src/assets/flags/spain.svg",
  };

  const countryTexts = {
    England: "Enjoy your meal !",
    Netherland: "Eet smakelijk",
    France: "Bon appétit",
    Italy: "Buon appetito!",
    Ireland: "Enjoy your meal mate",
    Portugal: "Bom apetite !",
    Spain: "Buen provecho!",
  };

  return (
    <div className="flag-container">
      <h3 className="flag-title">Welcome to {continent}</h3>
      <ul className="flag-list">
        {countries.map((country) => (
          <li className="flag-li" key={country}>
            <span className="enjoy-meal">
              {country}
              <p className="country-text">{countryTexts[country]}</p>
            </span>
            <img className="flag-image" src={flags[country]} alt={country} />
          </li>
        ))}
      </ul>
    </div>
  );
}

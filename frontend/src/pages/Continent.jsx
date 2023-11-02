import { useParams } from "react-router-dom";
import { continents } from "./helpers";

function Continent() {
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
    France: "Bonne appétit",
    Italy: "Buon appetito!",
    Ireland: "Enjoy your meal mate",
    Portugal: "Bom apetite !",
    Spain: "Buen provecho!",
  };

  const { continent } = useParams();
  const countries = continents[continent] || [];

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
export default Continent;

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { fetchByContinent, continents } from "./helpers";
// import CardDish from "../components/CardDish";

// function Continent() {
//   const [dishesOfContinent, setDishesOfContinent] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const { continent } = useParams();

//   useEffect(() => {
//     async function getData() {
//       setIsLoading(() => true);
//       await fetchByContinent(setDishesOfContinent, continents[continent]);
//       setIsLoading(() => false);
//     }
//     getData();
//   }, [continent]);

//   return (
//     <div>
//       <h3>continent loaded is {continent}</h3>
//       {!isLoading &&
//         dishesOfContinent.map((element) => (
//           <CardDish key={element.id} dish={element} />
//         ))}
//     </div>
//   );
// }

// export default Continent;

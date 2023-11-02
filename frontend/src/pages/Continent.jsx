import { useParams } from "react-router-dom";
import { continents } from "./helpers";

function Continent() {
  const flags = {
    British: "/src/assets/united-kingdom.svg",
  };

  const { continent } = useParams();
  const countries = continents[continent] || [];

  return (
    <div>
      <h3>Pays du continent {continent}</h3>
      <ul>
        {countries.map((country) => (
          <li key={country}>
            <img src={flags[country]} alt={country} />
            {country}
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

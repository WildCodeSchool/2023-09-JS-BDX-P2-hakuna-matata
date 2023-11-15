import { useLoaderData, useParams } from "react-router-dom";
import CountryCard from "../components/CountryCard";
import "./Continent.css";

function Continent() {
  const listCountries = useLoaderData();
  const { continent } = useParams();

  return (
    <div>
      <div className="title-container-continent">
        <h1 className="title-continent">
          Welcome to {continent.charAt(0).toUpperCase() + continent.slice(1)}
        </h1>
      </div>
      <div className="countries-container container">
        {listCountries.map((pays) => (
          <CountryCard key={pays.Id} country={pays} />
        ))}
      </div>
    </div>
  );
}
export default Continent;

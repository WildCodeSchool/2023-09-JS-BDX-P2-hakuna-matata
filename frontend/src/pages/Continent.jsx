import { useParams } from "react-router-dom";
import { countriesDetailed } from "./helpers";
import CountryCard from "../components/CountryCard";

function Continent() {
  const { continent } = useParams();

  const listCountries = countriesDetailed.find(
    (ele) => ele.Continent.toLowerCase() === continent
  ).Countries;

  return (
    <div className="countries-container">
      {listCountries.map((pays) => (
        <CountryCard country={pays} />
      ))}
    </div>
  );
}

export default Continent;

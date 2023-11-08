import { useLoaderData } from "react-router-dom";
import CountryCard from "../components/CountryCard";

function Continent() {
  const listCountries = useLoaderData();

  return (
    <div className="countries-container">
      {listCountries.map((pays) => (
        <CountryCard country={pays} />
      ))}
    </div>
  );
}
export default Continent;

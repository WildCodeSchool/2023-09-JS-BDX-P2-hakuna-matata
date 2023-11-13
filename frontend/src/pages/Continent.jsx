import { useLoaderData } from "react-router-dom";
import CountryCard from "../components/CountryCard";

function Continent() {
  const listCountries = useLoaderData();

  return (
    <div>
      <div className="countries-container container">
        {listCountries.map((pays) => (
          <CountryCard key={pays.Id} country={pays} />
        ))}
      </div>
    </div>
  );
}
export default Continent;

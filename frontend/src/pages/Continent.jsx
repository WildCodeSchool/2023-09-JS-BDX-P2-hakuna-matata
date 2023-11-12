import { useLoaderData } from "react-router-dom";
import CountryCard from "../components/CountryCard";
import Spacer from "../components/Spacer";

function Continent() {
  const listCountries = useLoaderData();

  return (
    <div>
      <div className="countries-container container">
        {listCountries.map((pays) => (
          <CountryCard key={pays.Id} country={pays} />
        ))}
      </div>
      <Spacer />
    </div>
  );
}
export default Continent;

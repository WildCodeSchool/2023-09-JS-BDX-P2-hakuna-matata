import { useNavigate } from "react-router-dom";
import "./SearchBar.css";
import { countriesDetailed, countries } from "../pages/helpers";

export default function SearchBar() {
  const navigate = useNavigate();
  function handleSelection(e) {
    const country = countries.find((ele) => ele.Id === +e.target.value);
    navigate(`/country/${country.CountryApi}`);
  }
  return (
    <select className="form-select" onChange={async (e) => handleSelection(e)}>
      <option value="all">Where do you want to eat?</option>
      {countriesDetailed.map((cont) => (
        <optgroup label={cont.Continent} key={cont.Continent}>
          {cont.Countries.map((country) => (
            <option value={country.Id} key={country.Id}>
              {country.Country}
            </option>
          ))}
        </optgroup>
      ))}
    </select>
  );
}

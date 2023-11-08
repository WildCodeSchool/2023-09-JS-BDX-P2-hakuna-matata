import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./SearchBar.css";
// import { countriesDetailed, fetchByArea, countries } from "../pages/helpers";
import { countries, countriesDetailed, fetchByArea } from "../pages/helpers";

export default function SearchBar({ callback, callbackdishes }) {
  const navigate = useNavigate();
  async function handleSelection(e) {
    const country = countries.find((ele) => ele.Id === +e.target.value);
    await fetchByArea(callbackdishes, country.CountryApi);
    callback(country);
    e.target.value = "all";
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
SearchBar.propTypes = {
  callback: PropTypes.func.isRequired,
  callbackdishes: PropTypes.func.isRequired,
};

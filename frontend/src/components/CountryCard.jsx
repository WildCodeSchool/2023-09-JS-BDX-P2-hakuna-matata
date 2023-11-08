import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import PropTypes from "prop-types";
import { fetchByArea } from "../pages/helpers";
import MyContext from "./Mycontext";
import "./CountryCard.css";

export default function CountryCard({ country }) {
  const { setCountry, setCountryDishes } = useContext(MyContext);
  const navigate = useNavigate();
  async function GetData() {
    await fetchByArea(setCountryDishes, country.CountryApi);
    setCountry(country);
    navigate(`/country/${country.CountryApi}`);
  }
  return (
    <div className="myCard" onClick={GetData} aria-hidden="true">
      <div className="flip">
        <div
          className="front"
          style={{
            backgroundImage: `url(${country.ImageURL})`,
          }}
        >
          <h1 className="text-shadow">{country.Country}</h1>
        </div>
        <div className="back">
          <h2>{country.Country}</h2>
          <p className="truncate">{country.Description}</p>
        </div>
      </div>
    </div>
  );
}

CountryCard.propTypes = {
  country: PropTypes.shape({
    Country: PropTypes.string,
    CountryApi: PropTypes.string,
    ImageURL: PropTypes.string,
    Description: PropTypes.string,
  }).isRequired,
};

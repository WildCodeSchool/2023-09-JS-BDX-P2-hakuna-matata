import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./CountryCard.css";

export default function CountryCard({ country }) {
  const navigate = useNavigate();
  async function GetData() {
    navigate(`/country/${country.CountryApi}`);
  }
  return (
    <button
      type="button"
      onClick={GetData}
      className="wrapper"
      style={{ cursor: `grab` }}
    >
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div
              src={country.ImageURL}
              alt="Avatar"
              style={{
                width: "300px",
                aspectRatio: `3 / 2`,
                backgroundImage: `url(${country.ImageURL})`,
                backgroundRepeat: `no-repeat`,
                backgroundSize: `100% 100%`,
              }}
            />
          </div>
          <div className="flip-card-back">
            <h3>{country.Country}</h3>
            <p className="line-clamp">{country.Description}</p>
          </div>
        </div>
      </div>
    </button>
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

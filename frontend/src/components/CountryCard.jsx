import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./CountryCard.scss";
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
      <div className="cols">
        <div
          className="col"
          onTouchStart={(event) => event.target.classNameList.toggle("hover")}
        >
          <div className="container">
            <div
              className="front flag "
              style={{ backgroundImage: ` url(${country.ImageURL})` }}
            >
              <div className="inner">
                <p>{country.Country}</p>
              </div>
            </div>
            <div
              className="back flag"
              style={{
                backgroundImage: ` url(${country.ImageURL})`,

                backgroundSize: "100%",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div
                className="inner"
                style={{
                  backgroundColor: "rgba(0 ,0,0, 0.2)",
                  width: "100%",
                  height: "100%",
                  borderRadius: "10px",
                }}
              >
                <p>{country.Description}</p>
              </div>
            </div>
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

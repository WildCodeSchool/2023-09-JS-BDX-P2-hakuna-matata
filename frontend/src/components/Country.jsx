import PropTypes from "prop-types";
import "./Country.css";

export default function Country({ country }) {
  const path = country.ImageURL;
  return (
    <div
      className="country-flag"
      style={{
        background: `url(${path}) no-repeat`,
        backgroundSize: "100% 100%",
      }}
    />
  );
}
Country.propTypes = {
  country: PropTypes.shape({
    ImageURL: PropTypes.string.isRequired,
  }).isRequired,
};

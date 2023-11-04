import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";
import "./SearchBar.css";
import { countriesDetailed, fetchByArea } from "../pages/helpers";

export default function SearchBar({ callback, callbackdishes }) {
  const navigate = useNavigate();
  return (
    <Form.Select
      aria-label="Default select example"
      className="form-select"
      size="sm"
      onChange={async (e) => {
        const country = countriesDetailed.find(
          (ele) => ele.CountryApi === e.target.value
        );
        if (country) {
          await fetchByArea(callbackdishes, country.CountryApi);
          callback(country);
        } else {
          callback({ Country: "all", CountryApi: "all" });
        }
        navigate(`/country/${e.target.value}`);
      }}
    >
      <option value="all">Where do you want to eat?</option>
      {countriesDetailed.map((area) => (
        <option key={area.Id} value={area.CountryApi}>
          {area.Country}
        </option>
      ))}
    </Form.Select>
  );
}
SearchBar.propTypes = {
  callback: PropTypes.func.isRequired,
  callbackdishes: PropTypes.func.isRequired,
};

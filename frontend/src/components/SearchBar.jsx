import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import "./SearchBar.css";
import { countriesDetailed } from "../pages/helpers";

export default function SearchBar() {
  const navigate = useNavigate();

  return (
    <Form.Select
      aria-label="Default select example"
      className="form-select"
      size="sm"
      onChange={(e) => navigate(`/country/${e.target.value}`)}
    >
      <option>Where do you want to eat?</option>
      {countriesDetailed.map((area) => (
        <option key={area.Id} value={area.CountryApi}>
          {area.Country}
        </option>
      ))}
    </Form.Select>
  );
}

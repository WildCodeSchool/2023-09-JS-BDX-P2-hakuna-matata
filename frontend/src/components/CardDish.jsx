import { useState } from "react";
import PropTypes from "prop-types";
import "./CardDish.css";
import { useNavigate } from "react-router-dom";

export default function CardDish({ dish }) {
  const [isBeenHovered, setIsBeenHovered] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="container-dish-card">
      <div className="title-dish-mobile-container">
        <h3 className="dish-title-mobile">{dish.strMeal}</h3>
      </div>
      <button
        type="button"
        onClick={() => {
          navigate(`/meals/${dish.idMeal}`);
        }}
        className="image-card-dish-button"
        style={{
          backgroundImage: `url(${dish.strMealThumb})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: `100% `,
          aspectRatio: ` 4 / 3`,
        }}
        onMouseEnter={() => setIsBeenHovered(true)}
        onMouseLeave={() => setIsBeenHovered(false)}
      >
        <div
          className="card-dish-top"
          style={{ display: !isBeenHovered ? "none" : "block" }}
        >
          <h3 className="dish-title-desktop">{dish.strMeal}</h3>
        </div>
      </button>
    </div>
  );
}
CardDish.propTypes = {
  dish: PropTypes.shape({
    strMeal: PropTypes.string.isRequired,
    strMealThumb: PropTypes.string.isRequired,
    idMeal: PropTypes.string.isRequired,
  }).isRequired,
};

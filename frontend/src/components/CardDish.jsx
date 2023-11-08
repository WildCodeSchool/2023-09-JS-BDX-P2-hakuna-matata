import { useState } from "react";
import PropTypes from "prop-types";
import "./CardDish.css";

export default function CardDish({ dish }) {
  const [isBeenHovered, setIsBeenHovered] = useState(false);
  return (
    <div
      className="card-dish"
      style={{
        backgroundImage: `url(${dish.strMealThumb})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: `contain`,
      }}
      onMouseEnter={() => setIsBeenHovered(true)}
      onMouseLeave={() => setIsBeenHovered(false)}
    >
      <div
        className="card-dish-top"
        style={{ display: !isBeenHovered ? "none" : "block" }}
      >
        <h3>{dish.strMeal}</h3>
      </div>
    </div>
  );
}
CardDish.propTypes = {
  dish: PropTypes.shape({
    strMeal: PropTypes.string.isRequired,
    strMealThumb: PropTypes.string.isRequired,
  }).isRequired,
};

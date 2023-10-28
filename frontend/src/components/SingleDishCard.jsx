import { useState } from "react";
import PropTypes from "prop-types";
import "./style.css";

export default function SingleDishCard({ dish }) {
  const [showText, setShowText] = useState(false);
  return (
    <a
      className="card"
      style={{
        background: `url(${dish.strMealThumb}) no-repeat`,
        backgroundSize: "contain",
        width: `200px`,
        height: `200px`,
      }}
      onMouseEnter={() => setShowText(true)}
      onMouseLeave={() => setShowText(false)}
      href={`/dishes/${dish.idMeal}`}
    >
      <div
        className="card-top"
        style={{ display: `${!showText ? "none" : ""}` }}
      >
        <h3>{dish.strMeal}</h3>
      </div>
    </a>
  );
}
SingleDishCard.propTypes = {
  dish: PropTypes.shape({
    idMeal: PropTypes.string.isRequired,
    strMeal: PropTypes.string.isRequired,
    strMealThumb: PropTypes.string.isRequired,
  }).isRequired,
};

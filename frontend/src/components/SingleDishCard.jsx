import { useState } from "react";
import PropTypes from "prop-types";
import "./style.css";

export default function SingleDishCard({ dish }) {
  const [showText, setShowText] = useState(false);
  return (
    <div
      className="card"
      style={{
        background: `url(https://picsum.photos/200)`,
        width: `200px`,
        height: `200px`,
      }}
      onMouseEnter={() => setShowText(true)}
      onMouseLeave={() => setShowText(false)}
    >
      <div
        className="card-top"
        style={{ display: `${!showText ? "none" : ""}` }}
      >
        <h3>{dish.strMeal}</h3>
      </div>
    </div>
  );
}
SingleDishCard.propTypes = {
  dish: PropTypes.shape({
    strMeal: PropTypes.string.isRequired,
    strMealThumb: PropTypes.string.isRequired,
  }).isRequired,
};

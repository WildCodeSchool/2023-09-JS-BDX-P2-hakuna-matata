import PropTypes from "prop-types";
import SingleDishCard from "./SingleDishCard";
import "./styleTable.css";

export default function Table({ tableList }) {
  return (
    <div className="table">
      {tableList.length > 0 &&
        tableList.map((myDish) => (
          <SingleDishCard key={myDish.idMeal} dish={myDish} />
        ))}
    </div>
  );
}
Table.propTypes = {
  tableList: PropTypes.arrayOf({
    dish: PropTypes.shape({
      idMeal: PropTypes.string,
      strMeal: PropTypes.string.isRequired,
      strMealThumb: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

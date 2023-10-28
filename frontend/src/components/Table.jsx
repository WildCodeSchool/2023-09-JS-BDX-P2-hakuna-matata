// import { useState } from "react";
import PropTypes from "prop-types";
import SingleDishCard from "./SingleDishCard";

export default function Table({ tableList }) {
  // const [myList, setMyList] = useState(tableList);
  return (
    <div>
      {tableList.length > 0 &&
        tableList.map((myDish) => <SingleDishCard dish={myDish} />)}
    </div>
  );
}
Table.propTypes = {
  tableList: PropTypes.arrayOf({
    dish: PropTypes.shape({
      strMeal: PropTypes.string.isRequired,
      strMealThumb: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

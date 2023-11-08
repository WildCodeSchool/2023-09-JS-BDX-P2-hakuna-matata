import React from "react";
import { useLoaderData } from "react-router-dom";
import "./Meals.css";

export default function SingleDish() {
  const dish = useLoaderData();

  const generateUniqueID = () => {
    return Math.random().toString(36);
  };
  const formatInstructions = (instructions) => {
    const steps = instructions.split("\n").filter((step) => step.trim() !== "");
    return (
      <div className="instructions">
        {steps.map((step) => (
          <p key={generateUniqueID()}>{step}</p>
        ))}
      </div>
    );
  };

  return (
    <div className="big-card">
      <div className="image-recette">
        <div className="dish-ingredients">
          <h1>{dish.strMeal}</h1>
          <h3>Ingredients</h3>
          <ul>
            {dish.strIngredient1 && dish.strIngredient1 !== " " ? (
              <li>
                {dish.strMeasure1} of {dish.strIngredient1}
              </li>
            ) : (
              ""
            )}
            {dish.strIngredient2 && dish.strIngredient2 !== " " ? (
              <li>
                {dish.strMeasure2} of {dish.strIngredient2}
              </li>
            ) : (
              ""
            )}
            {dish.strIngredient3 && dish.strIngredient3 !== " " ? (
              <li>
                {dish.strMeasure3} of {dish.strIngredient3}
              </li>
            ) : (
              ""
            )}
            {dish.strIngredient4 && dish.strIngredient4 !== " " ? (
              <li>
                {dish.strMeasure4} of {dish.strIngredient4}
              </li>
            ) : (
              ""
            )}
            {dish.strIngredient5 && dish.strIngredient5 !== " " ? (
              <li>
                {dish.strMeasure5} of {dish.strIngredient5}
              </li>
            ) : (
              ""
            )}
            {dish.strIngredient6 && dish.strIngredient6 !== " " ? (
              <li>
                {dish.strMeasure6} of {dish.strIngredient6}
              </li>
            ) : (
              ""
            )}
            {dish.strIngredient7 && dish.strIngredient7 !== " " ? (
              <li>
                {dish.strMeasure7} of {dish.strIngredient7}
              </li>
            ) : (
              ""
            )}
            {dish.strIngredient8 && dish.strIngredient8 !== " " ? (
              <li>
                {dish.strMeasure8} of {dish.strIngredient8}
              </li>
            ) : (
              ""
            )}
            {dish.strIngredient9 && dish.strIngredient9 !== " " ? (
              <li>
                {dish.strMeasure9} of {dish.strIngredient9}
              </li>
            ) : (
              ""
            )}
            {dish.strIngredient10 && dish.strIngredient10 !== " " ? (
              <li>
                {dish.strMeasure10} of {dish.strIngredient10}
              </li>
            ) : (
              ""
            )}
            {dish.strIngredient11 && dish.strIngredient11 !== " " ? (
              <li>
                {dish.strMeasure11} of {dish.strIngredient11}
              </li>
            ) : (
              ""
            )}
            {dish.strIngredient12 && dish.strIngredient12 !== " " ? (
              <li>
                {dish.strMeasure12} of {dish.strIngredient12}
              </li>
            ) : (
              ""
            )}
            {dish.strIngredient13 && dish.strIngredient13 !== " " ? (
              <li>
                {dish.strMeasure13} of {dish.strIngredient13}
              </li>
            ) : (
              ""
            )}
            {dish.strIngredient14 && dish.strIngredient14 !== " " ? (
              <li>
                {dish.strMeasure14} of {dish.strIngredient14}
              </li>
            ) : (
              ""
            )}
            {dish.strIngredient15 && dish.strIngredient15 !== " " ? (
              <li>
                {dish.strMeasure15} of {dish.strIngredient15}
              </li>
            ) : (
              ""
            )}
          </ul>
        </div>
        <div
          className="dish-description"
          style={{
            backgroundImage: `url(${dish.strMealThumb})`,
          }}
        />
      </div>
      <div className="dish-infos">
        {dish.strArea && (
          <div className="speciality">{dish.strArea} speciality</div>
        )}
        {dish.strCategory && (
          <div className="category">Main ingredient : {dish.strCategory}</div>
        )}
      </div>
      <div>{formatInstructions(dish.strInstructions)}</div>
    </div>
  );
}

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetcherById } from "./helpers";
import "./dishPage.css";

export default function SingleDish() {
  const { id } = useParams();
  const [dish, setDish] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function getData() {
      await fetcherById(setDish, id);
      setIsLoading(false);
    }
    getData();
  }, []);

  return (
    !isLoading && (
      <div className="big-card">
        <h1>{dish[0].strMeal}</h1>

        <div className="image-recette">
          <div
            className="dish-description"
            style={{
              background: `url(${dish[0].strMealThumb}) no-repeat`,
              backgroundSize: "contain",
              width: "50%",
              height: "500px",
            }}
          >
            Image
          </div>
          <div className="dish-ingredients">
            <h3>Ingredients</h3>
            <ul>
              {dish[0].strIngredient1 && dish[0].strIngredient1 !== " " ? (
                <li>
                  {dish[0].strMeasure1} of {dish[0].strIngredient1}
                </li>
              ) : (
                ""
              )}
              {dish[0].strIngredient2 && dish[0].strIngredient2 !== " " ? (
                <li>
                  {dish[0].strMeasure2} of {dish[0].strIngredient2}
                </li>
              ) : (
                ""
              )}
              {dish[0].strIngredient3 && dish[0].strIngredient3 !== " " ? (
                <li>
                  {dish[0].strMeasure3} of {dish[0].strIngredient3}
                </li>
              ) : (
                ""
              )}
              {dish[0].strIngredient4 && dish[0].strIngredient4 !== " " ? (
                <li>
                  {dish[0].strMeasure4} of {dish[0].strIngredient4}
                </li>
              ) : (
                ""
              )}
              {dish[0].strIngredient5 && dish[0].strIngredient5 !== " " ? (
                <li>
                  {dish[0].strMeasure5} of {dish[0].strIngredient5}
                </li>
              ) : (
                ""
              )}
              {dish[0].strIngredient6 && dish[0].strIngredient6 !== " " ? (
                <li>
                  {dish[0].strMeasure6} of {dish[0].strIngredient6}
                </li>
              ) : (
                ""
              )}
              {dish[0].strIngredient7 && dish[0].strIngredient7 !== " " ? (
                <li>
                  {dish[0].strMeasure7} of {dish[0].strIngredient7}
                </li>
              ) : (
                ""
              )}
              {dish[0].strIngredient8 && dish[0].strIngredient8 !== " " ? (
                <li>
                  {dish[0].strMeasure8} of {dish[0].strIngredient8}
                </li>
              ) : (
                ""
              )}
              {dish[0].strIngredient9 && dish[0].strIngredient9 !== " " ? (
                <li>
                  {dish[0].strMeasure9} of {dish[0].strIngredient9}
                </li>
              ) : (
                ""
              )}
              {dish[0].strIngredient10 && dish[0].strIngredient10 !== " " ? (
                <li>
                  {dish[0].strMeasure10} of {dish[0].strIngredient10}
                </li>
              ) : (
                ""
              )}
              {dish[0].strIngredient11 && dish[0].strIngredient11 !== " " ? (
                <li>
                  {dish[0].strMeasure11} of {dish[0].strIngredient11}
                </li>
              ) : (
                ""
              )}
              {dish[0].strIngredient12 && dish[0].strIngredient12 !== " " ? (
                <li>
                  {dish[0].strMeasure12} of {dish[0].strIngredient12}
                </li>
              ) : (
                ""
              )}
              {dish[0].strIngredient13 && dish[0].strIngredient13 !== " " ? (
                <li>
                  {dish[0].strMeasure13} of {dish[0].strIngredient13}
                </li>
              ) : (
                ""
              )}
              {dish[0].strIngredient14 && dish[0].strIngredient14 !== " " ? (
                <li>
                  {dish[0].strMeasure14} of {dish[0].strIngredient14}
                </li>
              ) : (
                ""
              )}
              {dish[0].strIngredient15 && dish[0].strIngredient15 !== " " ? (
                <li>
                  {dish[0].strMeasure15} of {dish[0].strIngredient15}
                </li>
              ) : (
                ""
              )}
            </ul>
          </div>
        </div>
        <div className="dish-infos">
          {dish[0].strArea && (
            <div className="speciality">{dish[0].strArea} speciality</div>
          )}
          {dish[0].strCategory && (
            <div className="category">
              Main ingredient : {dish[0].strCategory}
            </div>
          )}
        </div>
        <p>{dish[0].strInstructions}</p>
      </div>
    )
  );
}

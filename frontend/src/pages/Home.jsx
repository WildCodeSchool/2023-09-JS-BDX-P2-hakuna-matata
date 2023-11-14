import React from "react";
import Map from "../components/Map";
import CardDish from "../components/CardDish";
import Caroussel from "../components/Caroussel";

function Home() {
  const weeklyDishes = [
    {
      strMeal: "Lamb Tagine",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/yuwtuu1511295751.jpg",
      idMeal: "52843",
    },
    {
      strMeal: "Chicken Enchilada Casserole",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/qtuwxu1468233098.jpg",
      idMeal: "52765",
    },
    {
      strMeal: "Lasagne",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/wtsvxx1511296896.jpg",
      idMeal: "52844",
    },
    {
      strMeal: "BBQ Pork Sloppy Joes",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/atd5sh1583188467.jpg",
      idMeal: "52995",
    },
  ];
  return (
    <div className="container">
      <Caroussel />
      <h1
        style={{
          margin: `0 auto`,
          textAlign: "center",
          padding: `30px`,
          color: "white",
          backgroundColor: `#1b2123`,
        }}
      >
        Taste the world
      </h1>
      <Map />
      <h2
        style={{
          margin: `0 auto`,
          textAlign: "center",
          padding: `30px`,
          color: "white",
          backgroundColor: `#1b2123`,
        }}
      >
        Our weekly selection
      </h2>
      <div className="weekly">
        {weeklyDishes.map((dish) => (
          <CardDish key={dish.idMeal} dish={dish} />
        ))}
      </div>
    </div>
  );
}

export default Home;

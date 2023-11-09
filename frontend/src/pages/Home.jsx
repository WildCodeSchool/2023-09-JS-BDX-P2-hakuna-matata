import React from "react";
import Map from "../components/Map";
import CardDish from "../components/CardDish";

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
      <div className="banniere">
        <img
          className="banniere_img"
          src="./src/assets/bannière.svg"
          alt="Bannière"
        />
      </div>
      <h3 style={{ margin: `0 auto`, textAlign: "center" }}>
        Food treck the world
      </h3>
      <Map />
      <h3 style={{ margin: `0 auto`, textAlign: "center" }}>Weekly dishes</h3>
      <div className="weekly">
        {weeklyDishes.map((dish) => (
          <CardDish key={dish.idMeal} dish={dish} />
        ))}
      </div>
    </div>
  );
}

export default Home;

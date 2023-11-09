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
      <div className="banniere" />
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

// const worldRegions = [
//   {
//     name: "Mediterranean Cuisine",
//     imgUrl: "./src/assets/salade.jpg",
//     description:
//       "Delicious and healthy foods from the Mediterranean region, known for olive oil, fresh vegetables, and a variety of herbs and spices.",
//   },
//   {
//     name: "Asian Cuisine",
//     imgUrl: "./src/assets/sushi.jpg",
//     description:
//       "Diverse and flavorful foods from Asia, including Chinese, Japanese, Indian, and Southeast Asian dishes, featuring a balance of flavors and unique cooking techniques.",
//   },
//   {
//     name: "North African Cuisine",
//     imgUrl: "./src/assets/tajine.jpg",
//     description:
//       "Rich and aromatic foods from North Africa, combining influences from Arabic, Berber, and Mediterranean cuisines, often featuring couscous, tagines, and a mix of spices.",
//   },
//   {
//     name: "North American Cuisine",
//     imgUrl: "./src/assets/hamburger.jpg",
//     description:
//       "Varied and eclectic foods from North America, reflecting the cultural diversity of the continent, with influences from Native American, European, African, and Asian culinary traditions.",
//   },
// ];

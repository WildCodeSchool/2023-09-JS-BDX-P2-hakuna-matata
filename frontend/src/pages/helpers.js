const continents = {
  America: ["American", "Canadian", "Mexican", "Jamaican"],
  WestEurop: [
    "British",
    "Dutch",
    "French",
    "Italian",
    "Irish",
    "Portuguese",
    "Spanish",
  ],
  EastEurop: ["Croatian", "Greek", "Polish", "Russian"],
  MiddleEast: ["Egyptian", "Turkish"],
  Africa: ["Moroccan", "Kenyan", "Tunisian"],
  Asia: [
    "Chinese",
    "Filipino",
    "Indian",
    "Malaysian",
    "Japanese",
    "Thai",
    "Vietnamese",
  ],
};
const areas = [
  "American",
  "British",
  "Canadian",
  "Chinese",
  "Croatian",
  "Dutch",
  "Egyptian",
  "Filipino",
  "French",
  "Greek",
  "Indian",
  "Irish",
  "Italian",
  "Jamaican",
  "Japanese",
  "Kenyan",
  "Malaysian",
  "Mexican",
  "Moroccan",
  "Polish",
  "Portuguese",
  "Russian",
  "Spanish",
  "Thai",
  "Tunisian",
  "Turkish",
  "Vietnamese",
  "Unknown",
];
const categories = [
  "Beef",
  "Breakfast",
  "Chicken",
  "Dessert",
  "Goat",
  "Lamb",
  "Miscellaneous",
  "Pasta",
  "Pork",
  "Seafood",
  "Side",
  "Starter",
  "Vegan",
  "Vegetarian",
];
/* search by Area
 * async function that must be called with await
 * 1- the "setStateCallBack" is the callback function,
 * that set the state in calling component
 * 2- the "area", is the region where we want to search (American, British ....)
 */
async function fetchByArea(setStateCallBack, area = "American") {
  try {
    const url = new URL("https://www.themealdb.com/api/json/v1/1/filter.php");
    const params = {
      a: area,
    };
    url.search = new URLSearchParams(params).toString();
    const response = await fetch(url);
    const dishes = await response.json();
    setStateCallBack(() => [...dishes.meals]);
    return dishes;
  } catch (err) {
    setStateCallBack(() => []);
    return [];
  }
}
/* search by category
 * async function that must be called with await
 * 1- the "setStateCallBack" is the callback function,
 * that set the state in calling component
 * 2- the "category", is the category of foods that we want to search  (Beef, Chicken, Dessert...)
 */
async function fetchByCategory(setStateCallBack, category = "Beef") {
  try {
    const url = new URL("https://www.themealdb.com/api/json/v1/1/filter.php");
    const params = {
      c: category,
    };
    url.search = new URLSearchParams(params).toString();
    const response = await fetch(url);
    const dishes = await response.json();
    setStateCallBack(() => [...dishes.meals]);
    return dishes;
  } catch (err) {
    setStateCallBack(() => []);
    return [];
  }
}
/* search by Id
 * async function that must be called with await
 * 1- the "setStateCallBack" is the callback function,
 * that set the state in calling component
 * 2- the "id", is the id of the dish that we want to fetch
 */
async function fetchById(setStateCallBack, id) {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const dishes = await response.json();
    setStateCallBack(() => dishes.meals);
    return dishes;
  } catch (err) {
    setStateCallBack(() => []);
    return [];
  }
}
/* search by continent
 * async function that must be called with await
 * 1- the "setStateCallBack" is the callback function,
 * it is used to set the state that handle the dishes from a specific continent
 * 2- the "continent", is one of variables of the array continents
 */
async function fetchByContinent(setStateCallBack, continent) {
  const response = [];
  try {
    const links = continent.map((area) => {
      const url = new URL("https://www.themealdb.com/api/json/v1/1/filter.php");
      const params = {
        a: area,
      };
      url.search = new URLSearchParams(params).toString();
      return url;
    });
    await Promise.all(
      links.map(async (lien) => {
        const tmp = await fetch(lien);
        const dishes = await tmp.json();
        response.push(...dishes.meals);
      })
    );

    setStateCallBack([...response]);
  } catch (err) {
    setStateCallBack([]);
  }
}
export {
  fetchByArea,
  fetchByCategory,
  fetchById,
  fetchByContinent,
  continents,
  areas,
  categories,
};

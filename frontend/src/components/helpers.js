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

async function fetcherByArea(setStateCallBack, area = "American") {
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
async function fetcherByCategory(setStateCallBack, category = "Beef") {
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
async function fetcherById(setStateCallBack, id) {
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
// continent is an array of areas
async function fetcherByContinent(setStateCallBack, continent) {
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
    // console.log(err);
    setStateCallBack([]);
  }
}
export {
  fetcherByArea,
  fetcherByCategory,
  fetcherById,
  continents,
  fetcherByContinent,
};

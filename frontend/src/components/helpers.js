async function fetcher(setStateCallBack, area = "American") {
  try {
    const url = new URL("https://www.themealdb.com/api/json/v1/1/filter.php");
    const params = {
      a: area,
    };
    url.search = new URLSearchParams(params).toString();
    const response = await fetch(url);
    const dishes = await response.json();
    // console.log("all dishes ", dishes.meals);
    setStateCallBack(() => [...dishes.meals]);
    return dishes;
  } catch (err) {
    // console.log(err);
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
    // console.log("all dishes ", dishes.meals);
    setStateCallBack(() => [...dishes.meals]);
    return dishes;
  } catch (err) {
    // console.log(err);
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
    // console.log(dishes.meals);
    return dishes;
  } catch (err) {
    // console.log(err);
    setStateCallBack(() => []);
    return [];
  }
}
export { fetcher, fetcherByCategory, fetcherById };

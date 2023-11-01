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
const countriesDetailed = [
  {
    Id: 1,
    Country: "USA",
    Description:
      "The United States boasts a wide-ranging culinary landscape. From Southern comfort food like fried chicken and biscuits to Tex-Mex tacos, and the iconic New York-style pizza, American cuisine is diverse and flavorful. Barbecue, with its regional variations, is a BBQ lover's dream.",
    ImageURL: "https://example.com/usa.jpg",
  },
  {
    Id: 2,
    Country: "UK",
    Description:
      "Traditional British cuisine features hearty and comforting dishes. Fish and chips, a national favorite, pairs battered and fried fish with chunky fries. Roast dinners with roast meats, Yorkshire puddings, and vegetables are a staple. Don't forget the full English breakfast, complete with beans, eggs, bacon, and sausage.",
    ImageURL: "https://example.com/uk.jpg",
  },
  {
    Id: 3,
    Country: "Canada",
    Description:
      "Canada's culinary scene is influenced by its multicultural society. Poutine, a Quebecois invention, combines crispy fries with cheese curds and savory gravy. Tourtière, a meat pie, is popular in French-speaking regions. Butter tarts, a sweet and buttery pastry, are a beloved dessert.",
    ImageURL: "https://example.com/canada.jpg",
  },
  {
    Id: 4,
    Country: "China",
    Description:
      "Chinese cuisine varies greatly across regions. From the aromatic flavors of Peking duck in Beijing to the fiery spice of Sichuan dishes, there's something for everyone. Don't miss dim sum, a delightful array of small dishes served with tea.",
    ImageURL: "https://example.com/china.jpg",
  },
  {
    Id: 5,
    Country: "Croatia",
    Description:
      "Coastal Croatia offers a bounty of fresh seafood, often grilled to perfection. Inland, you'll find heartwarming stews like pasticada. Prosciutto and cheese are common appetizers, and you can't leave without trying traditional Croatian wines.",
    ImageURL: "https://example.com/croatia.jpg",
  },
  {
    Id: 6,
    Country: "Egypt",
    Description:
      "Egyptian cuisine is a flavorful journey. Koshari, a national dish, combines lentils, rice, and pasta with spicy tomato sauce. Falafel and shawarma are popular street foods, while baklava and hawawshi, a meat-filled pastry, are sweet and savory delights.",
    ImageURL: "https://example.com/egypt.jpg",
  },
  {
    Id: 7,
    Country: "Holland (Netherlands)",
    Description:
      "Dutch cuisine may surprise you with its delicious simplicity. Stroopwafels, thin waffle cookies filled with syrup, are a must-try sweet treat. Dutch herring, raw fish served with onions and pickles, is a favorite street food. Poffertjes are mini-pancakes often topped with powdered sugar.",
    ImageURL: "https://example.com/netherlands.jpg",
  },
  {
    Id: 8,
    Country: "Philippines",
    Description:
      "Filipino cuisine is a fusion of flavors. Adobo, a savory dish of marinated meat, is a staple. Sinigang is a tangy tamarind soup, and lechon is a crispy roast pig often served on special occasions.",
    ImageURL: "https://example.com/philippines.jpg",
  },
  {
    Id: 9,
    Country: "France",
    Description:
      "France is famous for its culinary artistry. Indulge in croissants and escargot, or enjoy a classic coq au vin. French pastries, from macarons to éclairs, are masterpieces in themselves.",
    ImageURL: "https://example.com/france.jpg",
  },
  {
    Id: 10,
    Country: "Greece",
    Description:
      "Greek cuisine is a Mediterranean delight. Moussaka, layers of eggplant, meat, and bechamel sauce, is a comforting dish. Souvlaki, skewered and grilled meat, and baklava, a sweet pastry with honey and nuts, are favorites.",
    ImageURL: "https://example.com/greece.jpg",
  },
  {
    Id: 11,
    Country: "India",
    Description:
      "Indian cuisine is a diverse tapestry of flavors. Curries come in a multitude of styles, biryani is fragrant and spiced rice, and tandoori dishes are marinated and grilled to perfection. Samosas, crispy pastry pockets filled with savory delights, are a popular snack.",
    ImageURL: "https://example.com/india.jpg",
  },
  {
    Id: 12,
    Country: "Ireland",
    Description:
      "Irish cuisine is hearty and rustic. Irish stew is a comforting blend of lamb or beef with potatoes, carrots, and onions. Colcannon combines mashed potatoes with cabbage or kale, and soda bread is a traditional bread baked in every Irish home.",
    ImageURL: "https://example.com/ireland.jpg",
  },
  {
    Id: 13,
    Country: "Italy",
    Description:
      "Italian cuisine is celebrated for its simplicity and quality ingredients. From the endless pasta varieties to the classic pizza, the cuisine is a symphony of flavors. Don't forget to indulge in gelato and explore the extensive wine regions.",
    ImageURL: "https://example.com/italy.jpg",
  },
  {
    Id: 14,
    Country: "Jamaica",
    Description:
      "Jamaican cuisine is a burst of bold flavors. Jerk chicken and pork are marinated in a fiery spice blend and slow-cooked to perfection. Ackee and saltfish is a national dish, and coconut-based desserts like gizzada and grater cake offer a sweet finish.",
    ImageURL: "https://example.com/jamaica.jpg",
  },
  {
    Id: 15,
    Country: "Japan",
    Description:
      "Japanese cuisine is an art form. Sushi showcases pristine seafood atop vinegared rice, while ramen is a soul-soothing noodle soup. Tempura features delicate, deep-fried vegetables and seafood, and kaiseki is an exquisite multi-course dining experience.",
    ImageURL: "https://example.com/japan.jpg",
  },
  {
    Id: 16,
    Country: "Kenya",
    Description:
      "Kenyan cuisine reflects the country's diverse ethnic groups. Nyama choma, grilled meat, is a beloved dish. Ugali, a stiff porridge made from cornmeal, is a staple accompaniment to many Kenyan meals.",
    ImageURL: "https://example.com/kenya.jpg",
  },
  {
    Id: 17,
    Country: "Malaysia",
    Description:
      "Malaysian cuisine is a harmonious blend of Malay, Chinese, and Indian influences. Nasi lemak, a fragrant coconut rice dish, is a national favorite. Rendang, a slow-cooked dry curry, and laksa, a spicy noodle soup, are must-tries.",
    ImageURL: "https://example.com/malaysia.jpg",
  },
  {
    Id: 18,
    Country: "Mexico",
    Description:
      "Mexican cuisine is a tapestry of vibrant flavors. Tacos, with their endless fillings, are a street food sensation. Enchiladas, corn tortillas filled with meat and smothered in sauce, are comforting. Mole sauce, a complex and rich chocolate-based sauce, is a culinary treasure.",
    ImageURL: "https://example.com/mexico.jpg",
  },
  {
    Id: 19,
    Country: "Morocco",
    Description:
      "Moroccan cuisine is a fragrant journey. Tagine, a slow-cooked stew, is a staple, and couscous is served in various savory preparations. Pastilla, a sweet and savory pie, blends flavors in a delightful way.",
    ImageURL: "https://example.com/morocco.jpg",
  },
  {
    Id: 20,
    Country: "Poland",
    Description:
      "Polish cuisine is hearty and satisfying. Pierogi, dumplings stuffed with various fillings, are a beloved comfort food. Kielbasa, flavorful sausages, are enjoyed in many forms. Bigos, known as hunter's stew, combines sauerkraut with meat.",
    ImageURL: "https://example.com/poland.jpg",
  },
  {
    Id: 21,
    Country: "Portugal",
    Description:
      "Portuguese cuisine is known for its seafood. Bacalhau, or salt cod, is a national treasure prepared in various ways. Pastéis de nata, custard tarts with a crispy crust, are the perfect sweet treat. Feijoada, a hearty bean stew, showcases Portugal's diverse culinary influences.",
    ImageURL: "https://example.com/portugal.jpg",
  },
  {
    Id: 22,
    Country: "Russia",
    Description:
      "Russian cuisine is designed to keep you warm and satisfied. Borscht, a beet soup, is vibrant and hearty. Blini, thin pancakes, can be filled with sweet or savory toppings. Pelmeni, small dumplings filled with meat, are a delicious comfort food.",
    ImageURL: "https://example.com/russia.jpg",
  },
  {
    Id: 23,
    Country: "Spain",
    Description:
      "Spanish cuisine is known for its tapas culture. Paella, a saffron-infused rice dish with various toppings, is a Spanish classic. Gazpacho, a cold tomato soup, is refreshing on hot days. Churros, deep-fried dough served with chocolate, make for a delightful dessert or snack.",
    ImageURL: "https://example.com/spain.jpg",
  },
  {
    Id: 24,
    Country: "Thailand",
    Description:
      "Thai cuisine is a balance of sweet, sour, salty, and spicy flavors. Green curry, with its aromatic herbs and spices, is a popular dish. Pad Thai, stir-fried noodles with a mix of flavors, is another must-try. Tom yum, a hot and sour soup, is a quintessential Thai dish.",
    ImageURL: "https://example.com/thailand.jpg",
  },
  {
    Id: 25,
    Country: "Tunisia",
    Description:
      "Tunisian cuisine reflects North African and Mediterranean influences. Couscous, steamed semolina grains, is a staple, often served with a flavorful stew. Merguez, spicy lamb sausages, are a favorite street food, and brik, a deep-fried pastry filled with egg and tuna, is a delicious",
    ImageURL: "https://example.com/tunisia.jpg",
  },
  {
    Id: 26,
    Country: "Turkey",
    Description:
      "Turkish cuisine offers kebabs, baklava, and stuffed grape leaves, along with Turkish delight sweets.",
    ImageURL: "https://example.com/turkey.jpg",
  },
  {
    Id: 27,
    Country: "Vietnam",
    Description:
      "Vietnamese cuisine is known for its fresh and vibrant flavors. Pho, banh mi, spring rolls, and a range of fresh herbs make up Vietnamese cuisine's distinctive flavors.",
    ImageURL: "https://example.com/vietnam.jpg",
  },
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
  countriesDetailed,
};

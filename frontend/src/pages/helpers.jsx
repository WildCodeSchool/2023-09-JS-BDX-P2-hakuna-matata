import canada from "../assets/flags/canada.png";
import usa from "../assets/flags/usa.jpg";
import mexico from "../assets/flags/mexico.png";
import jamaica from "../assets/flags/jamaica.png";
import kenya from "../assets/flags/kenya.png";
import egypt from "../assets/flags/egypt.png";
import morocco from "../assets/flags/morocco.png";
import tunisia from "../assets/flags/tunisia.png";
import uk from "../assets/flags/uk.jpg";
import croatia from "../assets/flags/croatia.png";
import holland from "../assets/flags/holland.png";
import france from "../assets/flags/french.png";
import greece from "../assets/flags/greece.png";
import ireland from "../assets/flags/ireland.png";
import italy from "../assets/flags/italy.png";
import poland from "../assets/flags/poland.png";
import portugal from "../assets/flags/portugal.png";
import spain from "../assets/flags/spain.png";
import china from "../assets/flags/china.png";
import philippines from "../assets/flags/philippines.png";
import india from "../assets/flags/india.png";
import japan from "../assets/flags/japan.png";
import malaysia from "../assets/flags/malaysia.png";
import russia from "../assets/flags/russia.png";
import turkey from "../assets/flags/turkey.png";
import vietnam from "../assets/flags/vietnam.png";
import thailand from "../assets/flags/thailand.png";

const countries = [
  {
    Id: 0,
    Country: "all",
    Description: "allo country ",
    ImageURL: canada,
  },
  {
    Id: 1,
    Country: "USA",
    CountryApi: "american",
    Description:
      "The United States boasts a wide-ranging culinary landscape, reflecting its melting pot of cultures. Southern comfort food delights with dishes like crispy fried chicken, flaky biscuits, and creamy grits. Tex-Mex cuisine adds a spicy kick with tacos and enchiladas, while the iconic New York-style pizza captures the essence of the bustling city. Barbecue enthusiasts can savor regional variations, from the smoky brisket of Texas to the vinegar-based pulled pork of the Carolinas. For dessert, dive into the sweet nostalgia of classic apple pie, a symbol of American home-cooking often enjoyed with a scoop of velvety vanilla ice cream.",
    ImageURL: usa,
  },
  {
    Id: 2,
    Country: "Canada",
    CountryApi: "canadian",
    Description:
      "Canada's culinary scene is a vibrant mosaic influenced by its multicultural society. Poutine, a Quebecois invention, tantalizes taste buds with a combination of crispy fries, squeaky cheese curds, and savory gravy. Tourtière, a traditional meat pie, warms the heart with its rich filling. Explore the sweet side of Canadian cuisine with butter tarts, a delectable dessert featuring a gooey buttery filling encased in a flaky pastry.",
    ImageURL: canada,
  },
  {
    Id: 3,
    Country: "Mexico",
    CountryApi: "mexican",
    Description:
      "Mexican cuisine is a vibrant tapestry of flavors that dance on the palate. Tacos, the beloved street food, offer an explosion of tastes with endless filling options. Enchiladas, corn tortillas filled with succulent meat and smothered in flavorful sauce, provide a comforting and satisfying meal. Mole sauce, a culinary masterpiece, delights with its complex blend of chocolate, spices, and depth of flavor.",
    ImageURL: mexico,
  },
  {
    Id: 4,
    Country: "Jamaica",
    CountryApi: "jamaican",
    Description:
      "Jamaican cuisine is a lively celebration of bold flavors and vibrant spices. Jerk chicken and pork, marinated in a fiery spice blend and slow-cooked to perfection, deliver an unforgettable taste experience. Ackee and saltfish, the national dish, combines the unique flavors of ackee fruit with salted cod. Conclude your Jamaican culinary journey with coconut-based delights like gizzada and grater cake, offering a sweet and tropical finish.",
    ImageURL: jamaica,
  },
  {
    Id: 5,
    Country: "Kenya",
    CountryApi: "kenyan",
    Description:
      "Kenyan cuisine reflects the rich diversity of the country's ethnic groups. Nyama choma, the beloved grilled meat, showcases Kenya's love for barbecue. Ugali, a staple made from stiff cornmeal porridge, accompanies many Kenyan meals, providing a satisfying and hearty base for various dishes.",
    ImageURL: kenya,
  },
  {
    Id: 6,
    Country: "Egypt",
    CountryApi: "Egyptian",
    Description:
      "Egyptian cuisine takes you on a flavorful journey through the land of the pharaohs. Koshari, a national dish, harmoniously blends lentils, rice, pasta, and spicy tomato sauce into a satisfying and hearty meal. Falafel and shawarma, popular street foods, offer a quick and delicious taste of Egyptian flavors. Indulge your sweet tooth with baklava and hawawshi, a delightful meat-filled pastry.",
    ImageURL: egypt,
  },
  {
    Id: 7,
    Country: "Morocco",
    CountryApi: "moroccan",
    Description:
      "Moroccan cuisine is a fragrant journey through the bustling markets and spice-filled kitchens. Tagine, a slow-cooked stew, captures the essence of Moroccan comfort food. Couscous, served in various savory preparations, showcases the country's mastery of this versatile grain. Pastilla, a sweet and savory pie, combines flavors in a culinary masterpiece.",
    ImageURL: morocco,
  },
  {
    Id: 8,
    Country: "Tunisia",
    CountryApi: "tunisian",
    Description:
      "Tunisian cuisine reflects the influences of North Africa and the Mediterranean. Couscous, steamed semolina grains, takes center stage, often accompanied by a flavorful stew. Merguez, spicy lamb sausages, are a favorite street food, while brik, a deep-fried pastry filled with egg and tuna, tantalizes the taste buds with its savory goodness.",
    ImageURL: tunisia,
  },
  {
    Id: 9,
    Country: "England",
    CountryApi: "british",
    Description:
      "Traditional British cuisine is a hearty and comforting journey through time. Fish and chips, a national favorite, pairs crispy battered fish with chunky fries. Roast dinners, featuring succulent meats, Yorkshire puddings, and an array of vegetables, are a staple of British home cooking. Complete your culinary adventure with the iconic full English breakfast, boasting beans, eggs, bacon, and sausage.",
    ImageURL: uk,
  },
  {
    Id: 10,
    Country: "Croatia",
    CountryApi: "Croatian",
    Description:
      "Croatian cuisine offers a delightful blend of coastal freshness and hearty inland fare. Indulge in fresh seafood grilled to perfection along the picturesque coastline. Inland, savor heartwarming stews like pasticada, rich in flavors and culinary history. Prosciutto and cheese, common appetizers, provide a taste of Croatian artisanal delights, while the extensive selection of traditional wines is a testament to the country's viticultural heritage.",
    ImageURL: croatia,
  },
  {
    Id: 11,
    Country: "Netherlands",
    CountryApi: "dutch",
    Description:
      "Dutch cuisine surprises with its delicious simplicity and diverse treats. Stroopwafels, thin waffle cookies filled with syrup, are a must-try sweet delight. Dutch herring, raw fish served with onions and pickles, is a favorite street food that reflects the country's maritime traditions. Poffertjes, mini-pancakes often topped with powdered sugar, provide a delightful taste of Dutch sweetness.",
    ImageURL: holland,
  },
  {
    Id: 12,
    Country: "France",
    CountryApi: "french",
    Description:
      "France, renowned for its culinary artistry, invites you to indulge in a symphony of flavors. Croissants and escargot showcase the elegance of French patisserie. Classic coq au vin, a savory chicken stew, exemplifies the depth of French culinary traditions. From the delicate macarons to the indulgent éclairs, French pastries are masterpieces in themselves, inviting you to savor the sweet side of French gastronomy.",
    ImageURL: france,
  },
  {
    Id: 13,
    Country: "Greece",
    CountryApi: "greek",
    Description:
      "Greek cuisine is a Mediterranean delight, offering a feast for the senses. Moussaka, layers of eggplant, meat, and bechamel sauce, provides a comforting and flavorful experience. Souvlaki, skewered and grilled meat, is a favorite street food showcasing Greece's love for simple, quality ingredients. Conclude your Greek culinary journey with baklava, a sweet pastry filled with honey and nuts, for the perfect balance of indulgence and tradition.",
    ImageURL: greece,
  },
  {
    Id: 14,
    Country: "Ireland",
    CountryApi: "irish",
    Description:
      "Irish cuisine is hearty and rustic, capturing the essence of Ireland's rich agricultural tradition. Irish stew, a comforting blend of lamb or beef with potatoes, carrots, and onions, warms the soul on chilly days. Colcannon, a traditional dish combining mashed potatoes with cabbage or kale, showcases the simplicity of Irish home cooking. Soda bread, a staple in every Irish home, is a testament to the country's love for wholesome and hearty fare.",
    ImageURL: ireland,
  },
  {
    Id: 15,
    Country: "Italy",
    CountryApi: "italian",
    Description:
      "Italian cuisine is celebrated for its simplicity and the quality of its ingredients, inviting you on a journey through iconic flavors. From the endless varieties of pasta to the classic pizza, each dish is a symphony of taste. Indulge in the creamy delights of gelato and explore the extensive wine regions, where every sip tells a story of Italy's rich culinary heritage.",
    ImageURL: italy,
  },
  {
    Id: 16,
    Country: "Poland",
    CountryApi: "polish",
    Description:
      "Polish cuisine is hearty and satisfying, reflecting a deep connection to tradition and local produce. Pierogi, dumplings stuffed with various fillings, are a beloved comfort food. Kielbasa, flavorful sausages made with a blend of spices, are enjoyed in many forms. Bigos, known as hunter's stew, combines sauerkraut with an array of meats, creating a rich and hearty dish that exemplifies Polish culinary heritage.",
    ImageURL: poland,
  },
  {
    Id: 17,
    Country: "Portugal",
    CountryApi: "portuguese",
    Description:
      "Portuguese cuisine is a treasure trove of flavors, showcasing the country's love for seafood and rich culinary history. Bacalhau, or salt cod, is prepared in various mouthwatering ways, offering a unique taste of Portugal's maritime traditions. Pastéis de nata, custard tarts with a crispy crust, are the perfect sweet treat, encapsulating the sweetness of Portugal's past and present. Feijoada, a hearty bean stew, brings together diverse culinary influences in a celebration of Portugal's diverse heritage.",
    ImageURL: portugal,
  },
  {
    Id: 18,
    Country: "Spain",
    CountryApi: "spanish",
    Description:
      "Spanish cuisine is a celebration of lively flavors and the rich tapestry of regional traditions. Immerse yourself in the tapas culture, savoring small bites of chorizo, manchego, and olives. Paella, a saffron-infused rice dish with an array of toppings, captures the essence of Spanish communal dining. Refresh your palate with gazpacho, a cold tomato soup perfect for warm days, and satisfy your sweet tooth with churros, deep-fried dough served with rich chocolate, creating a delightful balance of flavors.",
    ImageURL: spain,
  },
  {
    Id: 19,
    Country: "China",
    CountryApi: "chinese",
    Description:
      "Chinese cuisine is a mesmerizing journey through a vast and diverse culinary landscape. From the aromatic flavors of Peking duck in Beijing to the fiery spice of Sichuan dishes, each region offers a unique culinary experience. Dim sum, an array of small dishes served with tea, invites you to indulge in the artistry of Chinese cooking, while the rich history of Chinese cuisine tells a story of tradition, innovation, and the art of balancing flavors.",
    ImageURL: china,
  },
  {
    Id: 20,
    Country: "Philippines",
    CountryApi: "filipino",
    Description:
      "Filipino cuisine is a harmonious fusion of flavors, reflecting the country's diverse history and cultural influences. Adobo, a savory dish of marinated meat, captures the essence of Filipino comfort food. Sinigang, a tangy tamarind soup, provides a refreshing and unique taste experience. Lechon, a crispy roast pig often enjoyed on special occasions, is a testament to the festive and celebratory nature of Filipino cuisine.",
    ImageURL: philippines,
  },
  {
    Id: 21,
    Country: "India",
    CountryApi: "indian",
    Description:
      "Indian cuisine is a journey through a vast and diverse tapestry of flavors, aromas, and textures. Curries, each with its unique blend of spices, showcase the complexity and richness of Indian culinary traditions. Biryani, fragrant and spiced rice dishes, delight the senses with layers of flavor. Tandoori dishes, marinated and grilled to perfection, offer a tantalizing taste of Indian barbecue. Samosas, crispy pastry pockets filled with savory delights, are a popular snack that embodies the street food culture of India.",
    ImageURL: india,
  },
  {
    Id: 22,
    Country: "Japan",
    CountryApi: "japanese",
    Description:
      "Japanese cuisine is an exquisite art form, inviting you to savor the delicate flavors and artistic presentation of each dish. Sushi, showcasing pristine seafood atop vinegared rice, provides a symphony of taste and texture. Ramen, a soul-soothing noodle soup, reflects the comforting side of Japanese culinary traditions. Tempura, featuring delicately fried vegetables and seafood, is a testament to the mastery of Japanese culinary techniques. Kaiseki, an exquisite multi-course dining experience, captures the essence of Japanese culinary artistry.",
    ImageURL: japan,
  },
  {
    Id: 23,
    Country: "Malaysia",
    CountryApi: "malaysian",
    Description:
      "Malaysian cuisine is a harmonious blend of Malay, Chinese, and Indian influences, creating a symphony of flavors. Nasi lemak, a fragrant coconut rice dish, stands as a national favorite, offering a taste of Malaysia's culinary diversity. Rendang, a slow-cooked dry curry, showcases the intricate balance of spices in Malaysian cooking. Laksa, a spicy noodle soup, tantalizes the taste buds with its rich and aromatic broth, creating a sensory experience that reflects Malaysia's cultural melting pot.",
    ImageURL: malaysia,
  },
  {
    Id: 24,
    Country: "Russia",
    CountryApi: "russian",
    Description:
      "Russian cuisine is designed to keep you warm and satisfied, reflecting the country's vast landscapes and cold climate. Borscht, a vibrant beet soup, is a symbol of Russian hospitality and comfort. Blini, thin pancakes, provide a versatile canvas for both sweet and savory toppings, while pelmeni, small dumplings filled with meat, offer a comforting and hearty meal that embodies the spirit of Russian home cooking.",
    ImageURL: russia,
  },
  {
    Id: 25,
    Country: "Turkey",
    CountryApi: "turkish",
    Description:
      "Turkey, a culinary delight, boasts a rich and diverse food culture. Turkish cuisine offers an exquisite array of dishes, including the world-famous kebabs, succulent baklava that melts in your mouth, and perfectly crafted stuffed grape leaves. Delve into the sweetness of Turkish delight, an iconic treat that has captivated taste buds for centuries. Every bite tells a story of tradition, hospitality, and the love for good food. Explore the flavors of Turkey, where the culinary journey is as vibrant as the culture itself.",
    ImageURL: turkey,
  },
  {
    Id: 26,
    Country: "Vietnam",
    CountryApi: "Vietnamese",
    Description:
      "Embark on a culinary adventure in Vietnam, where freshness and vibrancy define the gastronomic experience. Vietnamese cuisine is a symphony of flavors, with signature dishes like the aromatic pho, the irresistible banh mi, and the delicate spring rolls that burst with freshness. The distinctive taste of Vietnamese cuisine comes from the harmonious blend of fresh herbs, creating a balance that tingles the taste buds. Each dish tells a story of the country's rich history and the artistry of its culinary traditions. Vietnam, where every meal is a celebration of life and flavors.",
    ImageURL: vietnam,
  },
  {
    Id: 27,
    Country: "Thailand",
    CountryApi: "thai",
    Description:
      "Experience the enchanting flavors of Thailand, a culinary paradise that tantalizes the senses. Thai cuisine is a masterpiece of balance, combining sweet, sour, salty, and spicy elements in perfect harmony. Indulge in the aromatic delight of green curry, where herbs and spices come together to create a symphony of taste. Sample the iconic Pad Thai, a stir-fried noodle dish that captivates with its diverse mix of flavors. Dive into the bold and invigorating Tom Yum soup, a hot and sour sensation that reflects the heart of Thai culinary expertise. Thailand, where every meal is an exploration of the extraordinary.",
    ImageURL: thailand,
  },
];
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
    Continent: "America",
    Countries: [countries[1], countries[2], countries[3], countries[4]],
  },
  {
    Continent: "Africa",
    Countries: [countries[5], countries[6], countries[7], countries[8]],
  },
  {
    Continent: "Europe",
    Countries: [
      countries[9],
      countries[10],
      countries[11],
      countries[12],
      countries[13],
      countries[14],
      countries[15],
      countries[16],
      countries[17],
      countries[18],
    ],
  },
  {
    Continent: "Asia",
    Countries: [
      countries[19],
      countries[20],
      countries[21],
      countries[22],
      countries[23],
      countries[24],
      countries[25],
      countries[26],
      countries[27],
    ],
  },
];
/* search by Area
 * async function that must be called with await
 * 1- the "setStateCallBack" is the callback function,
 * that set the state in calling component
 * 2- the "area", is the region where we want to search (American, British ....)
 */
async function fetchByArea(area = "American") {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
    );
    const dishes = await response.json();
    return dishes.meals;
  } catch (err) {
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
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
    );
    const dishes = await response.json();
    setStateCallBack(() => [...dishes.meals]);
  } catch (err) {
    setStateCallBack(() => []);
  }
}
/* search by Id
 * async function that must be called with await
 * 1- the "setStateCallBack" is the callback function,
 * that set the state in calling component
 * 2- the "id", is the id of the dish that we want to fetch
 */
async function fetchById(id) {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const collection = await response.json();
    // TODO: erreur si tableau vide
    return collection.meals[0];
  } catch (err) {
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
      return `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`;
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
  countries,
  categories,
  countriesDetailed,
};

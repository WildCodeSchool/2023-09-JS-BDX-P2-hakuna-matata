# Fiche Technique de la API

## fetching lists by

### Categories

is done by fetcing this link `www.themealdb.com/api/json/v1/1/list.php?c=list`
results are stored in array of object with one key `strCategory`
14 categories

```json
"meals": [
        {
            "strCategory": "Beef"
        },]
```

### Area

is done by fetcing this link `www.themealdb.com/api/json/v1/1/list.php?a=list`
results are stored in array of object with one key `strArea`
28 areas

```json
    "meals": [
        {
            "strArea": "American"
        },
        {
            "strArea": "British"
        },
        {
            "strArea": "Canadian"
        }
        ]
```

### Ingredients

is done by fetcing this link `www.themealdb.com/api/json/v1/1/list.php?i=list`
results are stored in array of object with one key `strArea`
574 ingredients, main ingredients are descriped in details , like chiken, beef ....
secondary are listed without description

```json
 "meals": [
        {
            "idIngredient": "1",
            "strIngredient": "Chicken",
            "strDescription": "The chicken is a type of domesticated fowl, a subspecies of the red junglefowl (Gallus gallus). It is one of the most common and widespread domestic animals, with a total population of more than 19 billion as of 2011. There are more chickens in the world than any other bird or domesticated fowl. Humans keep chickens primarily as a source of food (consuming both their meat and eggs) and, less commonly, as pets. Originally raised for cockfighting or for special ceremonies, chickens were not kept for food until the Hellenistic period (4th–2nd centuries BC).\r\n\r\nGenetic studies have pointed to multiple maternal origins in South Asia, Southeast Asia, and East Asia, but with the clade found in the Americas, Europe, the Middle East and Africa originating in the Indian subcontinent. From ancient India, the domesticated chicken spread to Lydia in western Asia Minor, and to Greece by the 5th century BC. Fowl had been known in Egypt since the mid-15th century BC, with the \"bird that gives birth every day\" having come to Egypt from the land between Syria and Shinar, Babylonia, according to the annals of Thutmose III.",
            "strType": null
        },
        {
            "idIngredient": "36",
            "strIngredient": "Breadcrumbs",
            "strDescription": null,
            "strType": null
        }
 ]
```

3 keys available :

1. id: of type integer number
2. strIngredient: the name stored as string
3. strDescription: description, that can be null for secondary ingredients
4. strType: useless key, unused

## Filters

for all filters, results are listed as json with objects of three keys

```json
{
  "strMeal": "Montreal Smoked Meat",
  "strMealThumb": "https://www.themealdb.com/images/media/meals/uttupv1511815050.jpg",
  "idMeal": "52927"
}
```

1. idMeal: unique id
2. strMeal: name
3. strMeanthumb: image `700px X 700px`, of good quality, and another one if we put `/preview` at the end of its link
   `https://www.themealdb.com/images/media/meals/uttupv1511815050.jpg/preview`

### Main ingredient

this is done by fetching : `https://www.themealdb.com/api/json/v1/1/filter.php?i=${MainIngredients}`
where ${MainIngredients} is replaced by the main ingredient name, like `chicken+breast` or `chicken_breast`

### Category

we fetch
`www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
where ${category} stands for the category of the main ingredient (14 categories available, like `SeaFood` and `Beef`)

### Area

we fetch
`www.themealdb.com/api/json/v1/1/filter.php?a=${Area}`
${Area} is variable of 28 available values like `Canadian` and `French`

## Individual search

### by name

`https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`

### by id

`www.themealdb.com/api/json/v1/1/lookup.php?i=52772`

### by first letter (useless)

`www.themealdb.com/api/json/v1/1/search.php?f=a`

## Feeling lucky (google style, random meal)

`www.themealdb.com/api/json/v1/1/random.php`

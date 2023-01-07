const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// for (const ingredient of ingredients) {
//   const ingredientEl = document.createElement("li");
//   ingredientEl.textContent = ingredient;
//   ingredientEl.classList.add("item");
//   console.log(ingredientEl);
//   const ingredientsEl = document.getElementById("ingredients");
//   ingredientsEl.appendChild(ingredientEl);
// }
const ingredientsEl = document.getElementById("ingredients");

const listIngredients = ingredients.map(ingredient => {
  const ingredientEl = document.createElement("li");
    ingredientEl.textContent = ingredient;
    ingredientEl.classList.add("item");
    console.log(ingredientEl);
    return ingredientEl;
})
ingredientsEl.append(...listIngredients);

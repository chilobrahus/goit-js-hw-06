 const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
 ];

const ingredientsEl = document.querySelector('#ingredients');

const createItemEl = ingredients.map(el => {
  const ingredientItemsEl = document.createElement('li');
  ingredientItemsEl.classList.add('item');
  ingredientItemsEl.textContent = el;

  return ingredientItemsEl;
});

ingredientsEl.append(...createItemEl);
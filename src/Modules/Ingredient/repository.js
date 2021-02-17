import Ingredients from './model.js';

const getIngredientsForCheckboxes = async () => {
  const ingredients = await Ingredients.find({}, 'name');
  return ingredients;
};

// eslint-disable-next-line import/prefer-default-export
export { getIngredientsForCheckboxes };

import { IngredientModel } from "../components/common/Ingredient/Ingredient";

const getPizzaCost = (ingredients: IngredientModel[]): number => {
  return ingredients.reduce((count, { price }) => count + price, 10000);
};

export default getPizzaCost;

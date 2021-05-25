import { useContext, useEffect } from "react";
import { SelectedIngredientsContext } from "../../PizzaMaker/PizzaMaker";
import Ingredient, {
  INGREDIENT_NAMES,
  IngredientModel,
} from "../Ingredient/Ingredient";
import "./IngredientList.scss";

const IngredientList = () => {
  const getIngredientPrice = (ingredientName: INGREDIENT_NAMES): number => {
      switch (ingredientName) {
        case INGREDIENT_NAMES.PEPPERONI: {
          return 4500;
        }
        case INGREDIENT_NAMES.CHICKEN: {
          return 5000;
        }
        default:
          return 3000;
      }
    },
    { setSelectedIngredients, ingredients, setIngredients } = useContext(
      SelectedIngredientsContext
    ),
    checkIngredient = (newIngredient: IngredientModel, isChecked: boolean) => {
      let newSelectedIngredients: IngredientModel[] = [];
      const newIngredients = ingredients.map((ingredient) => {
        if (ingredient.name === newIngredient.name) {
          ingredient.isSelected = isChecked;
        }
        if (ingredient.isSelected) {
          newSelectedIngredients = [...newSelectedIngredients, ingredient];
        }
        return ingredient;
      });

      setIngredients(newIngredients);
      setSelectedIngredients(newSelectedIngredients);
    };

  useEffect(() => {
    setIngredients(
      Object.keys(INGREDIENT_NAMES).map((name) => {
        const ingredientName = (INGREDIENT_NAMES as any)[
          name as keyof INGREDIENT_NAMES
        ];

        return {
          name: ingredientName,
          isSelected: false,
          price: getIngredientPrice(ingredientName),
        };
      })
    );
  }, []);

  return (
    <div className="ingrendient-list">
      <ul>
        {ingredients.map((ingredient) => {
          const { name, isSelected }: IngredientModel = ingredient;

          return (
            <li key={name} className="ingredient__item ingredient">
              <input
                type="checkbox"
                onChange={({ target }) =>
                  checkIngredient(ingredient, target.checked)
                }
                checked={isSelected}
              />
              <Ingredient ingredient={ingredient} />
              <span className="ingredient__price">$ {ingredient.price}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default IngredientList;

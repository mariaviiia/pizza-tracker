import { Link } from "react-router-dom";
import Button, { BUTTON_TYPES } from "../common/Button/Button";
import IngredientList from "../common/IngredientList/IngredientList";
import Pizza from "../common/Pizza/Pizza";
import { createContext, useContext, useState } from "react";
import { IngredientModel } from "../common/Ingredient/Ingredient";
import Prices from "../common/Prices/Prices";
import { PizzasContext } from "../../Routes/Routes";
import "./PizzaMaker.scss";

export const SelectedIngredientsContext = createContext<{
  ingredients: IngredientModel[];
  setIngredients: (newIngredients: IngredientModel[]) => void;
  selectedIngredients: IngredientModel[];
  setSelectedIngredients: (newSelectedIngredients: IngredientModel[]) => void;
}>([] as any);

const PizzaMaker = () => {
  const [selectedIngredients, setSelectedIngredients] = useState<
      IngredientModel[]
    >([]),
    [ingredients, setIngredients] = useState<IngredientModel[]>([]),
    { pizzas, setPizzas } = useContext(PizzasContext),
    [pizzaName, setPizzaName] = useState<string>(""),
    addPizza = () => {
      setPizzas([
        ...pizzas,
        {
          name: pizzaName,
          ingredients: [...selectedIngredients],
        },
      ]);
      setPizzaName("");
      setSelectedIngredients([]);
      setIngredients(
        ingredients.map((ingredient) => ({
          ...ingredient,
          isSelected: false,
        }))
      );
    };

  return (
    <SelectedIngredientsContext.Provider
      value={{
        selectedIngredients,
        setSelectedIngredients,
        ingredients,
        setIngredients,
      }}
    >
      <div className="pizza-maker">
        <div className="pizza-maker__title">Make your pizza</div>
        <div className="pizza-maker__container">
          <Pizza />
          <IngredientList />
        </div>
        <Prices />
        <div className="pizza-maker__pizza-name">
          <span>Which is your favorite city?</span>
          <input
            value={pizzaName}
            onChange={({ target }) => setPizzaName(target.value)}
          />
        </div>
        <div className="pizza-maker__buttons">
          <Button
            type={BUTTON_TYPES.SECONDARY}
            disabled={!pizzaName}
            buttonLabel="Add another pizza"
            onClick={addPizza}
          />
          <div className="pizza-maker__buttons--pay">
            <Link to="/userInfo">
              <Button
                onClick={addPizza}
                buttonLabel="PAY"
                disabled={!pizzaName}
              />
            </Link>
          </div>
        </div>
      </div>
    </SelectedIngredientsContext.Provider>
  );
};

export default PizzaMaker;

import { useContext } from "react";
import Ingredient from "../Ingredient/Ingredient";
import { SelectedIngredientsContext } from "../../PizzaMaker/PizzaMaker";
import Dough from "../../../assets/dough.svg";
import "./Pizza.scss";

const Pizza = () => {
  const { selectedIngredients } = useContext(SelectedIngredientsContext);

  return (
    <ul className="pizza__container">
      <span className="pizza__title">Selected Ingredients</span>
      <li>
        <div>
          <div className="pizza">
            <img className={`pizza__icon`} src={Dough} alt="" />
            <span className="pizza__name">Dough</span>
          </div>
        </div>
      </li>
      {selectedIngredients.map((ingredient) => {
        return (
          <li key={ingredient.name}>
            <Ingredient ingredient={ingredient} />
          </li>
        );
      })}
    </ul>
  );
};

export default Pizza;

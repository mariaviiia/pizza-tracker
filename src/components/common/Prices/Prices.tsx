import { useContext, useEffect, useState } from "react";
import { SelectedIngredientsContext } from "../../PizzaMaker/PizzaMaker";
import getPizzaCost from "../../../Utilities/getPizzaCost";

import "./Prices.scss";

const Prices = () => {
  const { selectedIngredients } = useContext(SelectedIngredientsContext),
    [total, setTotal] = useState<number>(10000);

  useEffect(() => {
    const newTotal = getPizzaCost(selectedIngredients);

    setTotal(newTotal);
  }, [selectedIngredients]);

  return (
    <div className="prices">
      <ul>
        <li>
          <span>base:</span> 10000
        </li>
        {selectedIngredients.map(({ name, price }) => {
          return (
            <li key={name}>
              <span>{name}:</span> {price}
            </li>
          );
        })}
        <li className="total">
          <span>total:</span>
          {total}
        </li>
      </ul>
    </div>
  );
};

export default Prices;

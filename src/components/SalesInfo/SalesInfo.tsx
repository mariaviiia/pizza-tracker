import { useContext } from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { PizzasContext } from "../../Routes/Routes";
import "./SalesInfo.scss";
import getPizzaCost from "../../Utilities/getPizzaCost";
import Ingredient from "../common/Ingredient/Ingredient";

const SalesInfo = () => {
  const { orders } = useContext(PizzasContext);

  return (
    <div className="sales-info">
      <span className="sales-info__title">Orders</span>
      <div className="sales-info__container">
        {orders.map(({ pizzas, total, userName, date }) => {
          return (
            <div key={date} className="sales-info__order">
              <div className="sales-info__order--info">
                <span>Order {userName}</span> {date}
              </div>
              {pizzas.map(({ ingredients, name }) => {
                const pizzaTotal = getPizzaCost(ingredients);
                return (
                  <div key={name}>
                    <Accordion>
                      <AccordionSummary
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        expandIcon={
                          <ExpandMoreIcon className="sales-info__card--expand" />
                        }
                      >
                        <div className="sales-info__card">
                          <div className="sales-info__card--sale">
                            <span>{name}</span>total: {pizzaTotal}
                          </div>
                        </div>
                      </AccordionSummary>
                      <AccordionDetails>
                        {ingredients.map((ingredient) => (
                          <div key={ingredient.name}>
                            <Ingredient
                              className="sales-info__ingredients"
                              ingredient={ingredient}
                            />
                          </div>
                        ))}
                      </AccordionDetails>
                    </Accordion>
                  </div>
                );
              })}
              <div className="sales-info__order--info">
                <span>total:</span> ${total}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SalesInfo;

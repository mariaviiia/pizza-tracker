import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { PizzasContext } from "../../Routes/Routes";
import Button from "../common/Button/Button";
import getPizzaCost from "../../Utilities/getPizzaCost";
import "./FormUserInfo.scss";

const FormUserInfo = () => {
  const { pizzas, orders, setOrders } = useContext(PizzasContext),
    [userName, setUserName] = useState<string>(""),
    [phone, setPhone] = useState<string>(""),
    [date, setDate] = useState<string>(""),
    isFinishButtonEnabled = () => userName && phone && date,
    save = () => {
      const total = pizzas.reduce(
          (count, { ingredients }) => count + getPizzaCost(ingredients),
          0
        ),
        newOrders = [
          ...orders,
          {
            userName,
            phone,
            date,
            pizzas,
            total,
          },
        ];

      localStorage.setItem("pizzaTrackerOrders", JSON.stringify(newOrders));
      setOrders(newOrders);
    };

  return (
    <div className="user-info">
      <div className="user-info__form">
        <span>Nombre*</span>
        <input
          type="text"
          onChange={({ target }) => {
            setUserName(target.value);
          }}
          value={userName}
        />
        <span>Telefono*</span>
        <input
          type="number"
          onChange={({ target }) => {
            setPhone(target.value);
          }}
          value={phone}
        />
        <span>Fecha*</span>
        <input
          type="date"
          onChange={({ target }) => {
            setDate(target.value);
          }}
          value={date}
        />
      </div>
      <div className="user-info__details">
        <span className="user-info__details--title">order details</span>
        {pizzas.map(({ name, ingredients }) => {
          return (
            <div key={name} className="user-info__details--description">
              <span>{name}:</span> {ingredients.length} ingredients.
            </div>
          );
        })}
      </div>
      <Link to="/sales">
        <Button
          onClick={save}
          disabled={!isFinishButtonEnabled()}
          buttonLabel="Finish"
        />
      </Link>
    </div>
  );
};

export default FormUserInfo;

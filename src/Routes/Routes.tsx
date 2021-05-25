import App from "../App";
import Order from "../pages/0rder";
import Sales from "../pages/Sales";
import UserInfo from "../pages/UserInfo";
import NotFoundPage from "../pages/NotFoundPage";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import { createContext, useState, useEffect } from "react";
import { IngredientModel } from "../components/common/Ingredient/Ingredient";

export interface PizzaModel {
  name: string;
  ingredients: IngredientModel[];
}

export interface OrderModel {
  userName: string;
  phone: string;
  date: string;
  pizzas: PizzaModel[];
  total: number;
}

export const PizzasContext = createContext<{
  pizzas: PizzaModel[];
  setPizzas: (newPizzas: PizzaModel[]) => void;
  orders: OrderModel[];
  setOrders: (newOrders: OrderModel[]) => void;
}>([] as any);

const Routes = () => {
  const [pizzas, setPizzas] = useState<PizzaModel[]>([]),
    [orders, setOrders] = useState<OrderModel[]>([]);

  useEffect(() => {
    const localOrders = JSON.parse(
      localStorage.getItem("pizzaTrackerOrders") || "[]"
    );
    setOrders(localOrders);
  }, []);

  return (
    <PizzasContext.Provider value={{ pizzas, setPizzas, orders, setOrders }}>
      <Router>
        <div className="page">
          <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/Order" component={Order} />
            <Route exact path="/UserInfo" component={UserInfo} />
            <Route exact path="/sales" component={Sales} />
            <Route path="/404" component={NotFoundPage} />
            <Redirect to="/404" />
          </Switch>
        </div>
      </Router>
    </PizzasContext.Provider>
  );
};
export default Routes;

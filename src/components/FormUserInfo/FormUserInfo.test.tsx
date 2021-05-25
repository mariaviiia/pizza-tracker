import FormUserInfo from "./FormUserInfo";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { PizzasContext } from "../../Routes/Routes";

describe("PizzaMaker component", () => {
  const MockPizzas = {
    pizzas: [],
    setPizzas: () => undefined,
    orders: [],
    setOrders: () => undefined,
  };
  it("renders correctly", () => {
    const { container } = render(
      <PizzasContext.Provider value={MockPizzas}>
        <Router>
          <FormUserInfo />
        </Router>
      </PizzasContext.Provider>
    );
    expect(container).toMatchSnapshot();
  });
});

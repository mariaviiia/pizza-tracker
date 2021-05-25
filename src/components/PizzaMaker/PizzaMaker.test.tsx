import PizzaMaker, { SelectedIngredientsContext } from "./PizzaMaker";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

describe("PizzaMaker component", () => {
  const MockSelectedIngredients = {
    selectedIngredients: [],
    setSelectedIngredients: () => undefined,
    ingredients: [],
    setIngredients: () => undefined,
  };
  it("renders correctly", () => {
    const { container } = render(
      <SelectedIngredientsContext.Provider value={MockSelectedIngredients}>
        <Router>
          <PizzaMaker />
        </Router>
      </SelectedIngredientsContext.Provider>
    );
    expect(container).toMatchSnapshot();
  });
});

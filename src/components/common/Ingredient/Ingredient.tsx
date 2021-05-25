import "./Ingredient.scss";
export enum INGREDIENT_NAMES {
  CHEESE = "cheese",
  PEPPERONI = "pepperoni",
  PINEAPPLE = "pineapple",
  MUSHROOM = "mushroom",
  HAM = "ham",
  SAUSAGE = "sausage",
  PEPPER = "pepper",
  TUNA = "tuna",
  OLIVE = "olive",
  CHICKEN = "chicken",
  BACON = "bacon",
  TOMATO = "tomato",
  SHRIMP = "shrimp",
  MEAT = "meat",
  SALAMI = "salami",
}

export interface IngredientModel {
  name: INGREDIENT_NAMES;
  isSelected: boolean;
  price: number;
}

interface IngredientProps {
  ingredient: IngredientModel;
  className?: string;
}

const Ingredient = ({ ingredient, className }: IngredientProps) => {
  const src = `${process.env.PUBLIC_URL}/assets/ingredients/${ingredient.name}.svg`;

  return (
    <div className={`ingredient__container ${className}`}>
      <div className="ingredient">
        <img className={`ingredient__icon`} src={src} alt="" />
        <span className="ingredient__name">{ingredient.name}</span>
      </div>
    </div>
  );
};

export default Ingredient;

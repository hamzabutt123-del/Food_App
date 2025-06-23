import Button from "./UI/Button";
import CartContext from "../store/CartContext.jsx";
import { useContext } from "react";
import { currencyFormatter } from "../../../util/formatting.js";
import UserProgressContext from "../store/UserProgressContext.jsx";

export default function MealItem({ meal }) {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  function handleAddMealToCart() {
    cartCtx.addItem(meal);
    userProgressCtx.showCart();
  }

  return (
    <li className="meal-item">
      <article>
        <img src={meal.image} alt={meal.name} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">
            {currencyFormatter.format(meal.price)}
          </p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <p className="meal-item-actions">
          <Button onClick={handleAddMealToCart}>Add to Cart</Button>
        </p>
      </article>
    </li>
  );
}

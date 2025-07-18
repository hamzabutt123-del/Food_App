import { useContext } from "react";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";
import CartItem from "./CartItem";
import { currencyFormatter } from "../../../util/formatting";
import Button from "./UI/Button";

export default function Cart() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  function handleCloseCart() {
    userProgressCtx.hideCart();
  }

  function handleGoToCheckout() {
    userProgressCtx.showCheckout();
  }
  console.log(cartCtx, "cartCtx");

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>Your Cart</h2>
        <ul>
          {cartCtx.items.map((item, index) => (
            <CartItem
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              price={item.price}
              onIncrease={() => cartCtx.addItem(item)}
              onDecrease={() => cartCtx.removeItem(item)}
            />
          ))}
        </ul>
        <p className="cart-total">
          Total: {currencyFormatter.format(cartTotal)}
        </p>
        <p className="modal-actions">
          <Button textOnly onClick={handleCloseCart}>
            Close
          </Button>
          <Button onClick={handleGoToCheckout}>Go to Checkout</Button>
        </p>
      </div>
    </div>
  );
}

import { useContext, useState } from "react";
import CartContext from "../store/CartContext.jsx";
import { currencyFormatter } from "../../../util/formatting";
import CartItem from "./CartItem.jsx";
import UserProgressContext from "../store/UserProgressContext.jsx";
import { IoCloseOutline } from "react-icons/io5";
import Button from "./UI/Button.jsx";

export default function Checkout() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  function handleConfirmOrder() {
    setOrderConfirmed(true);

    cartCtx.clearCart?.();

    setTimeout(() => {
      userProgressCtx.hideCheckout();
      setOrderConfirmed(false);
    }, 5000);
  }

  return (
    <div className="modal-backdrop">
      <div className="modal">
        {orderConfirmed ? (
          <p className="confirmation-message"> Order Confirmed! Thank you!</p>
        ) : (
          <>
            <div className="styling">
              <h2>Checkout</h2>
              <button
                onClick={userProgressCtx.hideCheckout}
                className="close-button"
                aria-label="Close"
              >
                <IoCloseOutline size={28} />
              </button>
            </div>
            <ul>
              {cartCtx.items.map((item) => (
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
            <p>
              Total: <strong>{currencyFormatter.format(cartTotal)}</strong>
            </p>
            <div className="modal-actions">
              <Button onClick={handleConfirmOrder}>Confirm Order</Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

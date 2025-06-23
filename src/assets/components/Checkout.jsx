import { useContext, useState } from "react";
import CartContext from "../store/CartContext.jsx";
import { currencyFormatter } from "../../../util/formatting";
import CartItem from "./CartItem.jsx";
import UserProgressContext from "../store/UserProgressContext.jsx";

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
    }, 1000);
  }

  return (
    <div className="modal-backdrop">
      <div className="modal">
        {orderConfirmed ? (
          <p className="confirmation-message"> Order Confirmed! Thank you!</p>
        ) : (
          <>
            <h2>Checkout</h2>
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
             <p>Total: <strong>{currencyFormatter.format(cartTotal)}</strong></p>
            <div className="modal-actions">
              <button onClick={handleConfirmOrder}>Confirm Order</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

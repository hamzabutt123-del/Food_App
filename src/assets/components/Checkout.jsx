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
          <p className="confirmation-message">Order Confirmed! Thank you!</p>
        ) : (
          <>
            <div className="styling">
              <h2>Checkout</h2>
              <button
                onClick={userProgressCtx.hideCheckout}
                className="close-button"
              >
                <IoCloseOutline size={28} />
              </button>
            </div>

            <div className="order-summary">
              <h3>Order Summary</h3>
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

              <div className="order-totals">
                <div className="total-row">
                  <span>Subtotal:</span>
                  <span>{currencyFormatter.format(cartTotal)}</span>
                </div>
                <div className="total-row">
                  <span>Tax (10%):</span>
                  <span>{currencyFormatter.format(cartTotal * 0.1)}</span>
                </div>
                <div className="total-row grand-total">
                  <span>Total:</span>
                  <span>{currencyFormatter.format(cartTotal * 1.1)}</span>
                </div>
              </div>
            </div>

            <div className="customer-info">
              <h3>Customer Information</h3>
              <form>
                <div className="form-group">
                  <label>Name:</label>
                  <input type="text" required />
                </div>
                <div className="form-group">
                  <label>Email:</label>
                  <input type="email" required />
                </div>
                <div className="form-group">
                  <label>Address:</label>
                  <textarea required></textarea>
                </div>
                <div className="form-group">
                  <label>Payment Method:</label>
                  <select>
                    <option>Credit Card</option>
                    <option>PayPal</option>
                    <option>Cash on Delivery</option>
                  </select>
                </div>
              </form>
            </div>

            <div className="modal-actions">
              <Button onClick={handleConfirmOrder}>Confirm Order</Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

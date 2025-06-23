import { useContext } from "react";
import CartContext from "../store/CartContext";

export default function OrdersPage() {
  const cartCtx = useContext(CartContext);

  return (
    <div className="page">
      <h2>Your Orders</h2>
      <ul>
        {cartCtx.items.length === 0 ? (
          <p>No orders found.</p>
        ) : (
          cartCtx.items.map((item) => (
            <li key={item.id}>
              {item.name} - {item.quantity} x ${item.price}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

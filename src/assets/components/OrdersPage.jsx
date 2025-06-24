import { useContext } from "react";
import CartContext from "../store/CartContext";
import { useNavigate } from "react-router-dom";
import Button from "./UI/Button";
export default function OrdersPage() {
  const cartCtx = useContext(CartContext);
const navigate = useNavigate();
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
      <Button onClick= {()=> navigate("../")}>Home</Button>
    </div>
  );
}

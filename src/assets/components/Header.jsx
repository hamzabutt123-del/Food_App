import { useContext } from "react";
import logoImg from "../../assets/logo.jpg";
import Button from "./UI/Button";
import AdminContext from "../store/AdminContext";
import { useNavigate } from "react-router-dom";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";
export default function Header() {
  const navigate = useNavigate();
  const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);
    const totalCartItems = cartCtx.items.reduce((total, item) => {
      return total + item.quantity;
    }, 0);
  
    function handleShowCart() {
      userProgressCtx.showCart();
    }

  const { login } = useContext(AdminContext);

  const handleAdminLogin = () => {
    login();
    navigate("/admin");
  };

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="A restaurant" />
        <h1>ReactFood</h1>
      </div>
      <nav>
        <Button textOnly onClick={handleShowCart}>
        Cart ({totalCartItems})
      </Button>
        <Button onClick={handleAdminLogin}>Admin Panel</Button>
      </nav>
    </header>
  );
}

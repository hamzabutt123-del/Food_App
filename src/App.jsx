import Cart from "./assets/components/Cart.jsx";
import Header from "./assets/components/Header.jsx";
import Meals from "./assets/components/Meals.jsx";
import Checkout from "./assets/components/Checkout.jsx";

import { CartContextProvider } from "./assets/store/CartContext.jsx";
import { UserProgressProvider } from "./assets/store/UserProgressContext.jsx";
import { useContext } from "react";
import UserProgressContext from "./assets/store/UserProgressContext.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductManager from "./assets/components/ProductManager";
import OrdersPage from "./assets/components/OrdersPage";

function AppContent() {
  const userProgressCtx = useContext(UserProgressContext);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Meals />} />
        <Route path="/products" element={<ProductManager />} />
        <Route path="/orders" element={<OrdersPage />} />
      </Routes>
      {userProgressCtx.progress === "cart" && <Cart />}
      {userProgressCtx.progress === "checkout" && <Checkout />}
    </>
  );
}

function App() {
  return (
    <CartContextProvider>
      <UserProgressProvider>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </UserProgressProvider>
    </CartContextProvider>
  );
}

export default App;

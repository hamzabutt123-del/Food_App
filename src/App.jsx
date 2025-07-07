import { useState, useContext } from "react";
import Cart from "./assets/components/Cart.jsx";
import Header from "./assets/components/Header.jsx";
import Meals from "./assets/components/Meals.jsx";
import Checkout from "./assets/components/Checkout.jsx";
import Banner from "./assets/components/Banner.jsx";
import UserProgressContext from "./assets/store/UserProgressContext.jsx";
import { CartContextProvider } from "./assets/store/CartContext.jsx";
import { UserProgressProvider } from "./assets/store/UserProgressContext.jsx";

function AppContent() {
  const userProgressCtx = useContext(UserProgressContext);
  const [activeCategory, setActiveCategory] = useState("pizza");

  return (
    <>
      <Header />
      <Banner />
      <Meals
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />
      {userProgressCtx.progress === "cart" && <Cart />}
      {userProgressCtx.progress === "checkout" && <Checkout />}
    </>
  );
}

function App() {
  return (
    <CartContextProvider>
      <UserProgressProvider>
        <AppContent />
      </UserProgressProvider>
    </CartContextProvider>
  );
}

export default App;

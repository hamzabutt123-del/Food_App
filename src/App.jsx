import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext, useState } from "react";
import Cart from "./assets/components/Cart.jsx";
import Header from "./assets/components/Header.jsx";
import Meals from "./assets/components/Meals.jsx";
import Checkout from "./assets/components/Checkout.jsx";
import Banner from "./assets/components/Banner.jsx";
import UserProgressContext from "./assets/store/UserProgressContext.jsx";
import { CartContextProvider } from "./assets/store/CartContext.jsx";
import { UserProgressProvider } from "./assets/store/UserProgressContext.jsx";
import { ProductsContextProvider } from "./assets/store/ProductContext.jsx";
import AdminPanel from "./assets/components/AdminPanel";
import { AdminContextProvider } from "./assets/store/AdminContext.jsx";
import AdminRoute from "./assets/components/AdminRoute.jsx";
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
    <Router>
      <AdminContextProvider>
        <ProductsContextProvider>
          <CartContextProvider>
            <UserProgressProvider>
              <Routes>
                <Route path="/" element={<AppContent />} />
                <Route
                  path="/admin"
                  element={
                    <AdminRoute>
                      <AdminPanel />
                    </AdminRoute>
                  }
                />
              </Routes>
            </UserProgressProvider>
          </CartContextProvider>
        </ProductsContextProvider>
      </AdminContextProvider>
    </Router>
  );
}

export default App;

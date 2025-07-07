import { createContext, useState } from "react";

const UserProgressContext = createContext({
  progress: "",
  showCart: () => {},
  hideCart: () => {},
  showCheckout: () => {},
  hideCheckout: () => {},
});

export function UserProgressProvider({ children }) {
  const [progress, setProgress] = useState("");

  function showCart() {
    setProgress("cart");
  }

  function hideCart() {
    setProgress("");
  }

  function showCheckout() {
    setProgress("checkout");
  }

  const contextValue = {
    progress,
    showCart,
    hideCart,
    showCheckout,
    hideCheckout: () => setProgress(""),
  };

  return (
    <UserProgressContext.Provider value={contextValue}>
      {children}
    </UserProgressContext.Provider>
  );
}

export default UserProgressContext;

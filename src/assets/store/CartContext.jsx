import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

function cartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    const updatedItems = [...state.items];
    const existingIndex = updatedItems.findIndex(
      (i) => i.id === action.item.id
    );

    if (existingIndex > -1) {
      updatedItems[existingIndex].quantity += 1;
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }

    return { items: updatedItems };
  }

  if (action.type === "REMOVE_ITEM") {
     const updatedItems = [...state.items];
    const existingIndex = updatedItems.findIndex(
      (i) => i.id === action.item.id
    );
    console.log(updatedItems[existingIndex].quantity)
     if (existingIndex == 0) {
      updatedItems[existingIndex].quantity -= 1;
    } else {
      updatedItems.push({ ...action.item, quantity: 0 });
    }
      return { items: updatedItems };
  }

  return state;
}

export function CartContextProvider({ children }) {
  const [cartState, dispatch] = useReducer(cartReducer, { items: [] });

  function addItem(item) {
    dispatch({ type: "ADD_ITEM", item });
  }

  function removeItem(item) {
    dispatch({ type: "REMOVE_ITEM", item });
  }

  const contextValue = {
    items: cartState.items,
    addItem,
    removeItem,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}
export default CartContext;

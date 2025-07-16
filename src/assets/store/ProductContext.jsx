import { createContext, useState } from "react";

const initialProducts = {
  pizza: [],
  burger: [],
  sandwich: [],
  pasta: [],
};

const ProductsContext = createContext({
  products: initialProducts,
  addProduct: (product) => {},
  updateProduct: (id, updatedProduct) => {},
  deleteProduct: (id) => {},
});

export function ProductsContextProvider({ children }) {
  const [products, setProducts] = useState(initialProducts);

  function addProduct(product) {
    setProducts((prevProducts) => {
      const newId = `m${prevProducts[product.category]?.length + 1 || 1}`;
      return {
        ...prevProducts,
        [product.category]: [
          ...(prevProducts[product.category] || []),
          { ...product, id: newId },
        ],
      };
    });
  }

  function updateProduct(id, updatedProduct) {
    setProducts((prevProducts) => {
      const updatedCategories = Object.keys(prevProducts).reduce(
        (acc, category) => {
          const updatedItems = prevProducts[category].map((item) =>
            item.id === id ? { ...item, ...updatedProduct } : item
          );
          return { ...acc, [category]: updatedItems };
        },
        {}
      );
      return updatedCategories;
    });
  }

  function deleteProduct(id) {
    setProducts((prevProducts) => {
      const updatedCategories = Object.keys(prevProducts).reduce(
        (acc, category) => {
          const filteredItems = prevProducts[category].filter(
            (item) => item.id !== id
          );
          return { ...acc, [category]: filteredItems };
        },
        {}
      );
      return updatedCategories;
    });
  }

  const contextValue = {
    products,
    addProduct,
    updateProduct,
    deleteProduct,
  };

  return (
    <ProductsContext.Provider value={contextValue}>
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductsContext;

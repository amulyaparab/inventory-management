import { useContext, useReducer } from "react";
import { createContext } from "react";

const ProductsContext = createContext();
export const ProductsProvider = ({ children }) => {
  const departments = ["Kitchen", "Clothing", "Toys"];
  const productsReducer = (productsState, action) => {
    switch (action.type) {
    }
  };
  const initialState = {};
  const [productsState, productsDispatch] = useReducer(
    productsReducer,
    initialState
  );
  return (
    <ProductsContext.Provider value={{ departments }}>
      {children}
    </ProductsContext.Provider>
  );
};
export const useProducts = () => useContext(ProductsContext);

import { useContext, useReducer } from "react";
import { createContext } from "react";
import { inventoryData } from "../Database/inventoryData";
import { productsReducer } from "../Reducers/productsReducer";

const ProductsContext = createContext();
export const ProductsProvider = ({ children }) => {
  const departments = ["Kitchen", "Clothing", "Toys"];

  const initialState = {
    products: inventoryData,
    filteredProducts: inventoryData,
    areLowStockItems: false,
    currentDepartment: "All",
  };

  const [productsState, productsDispatch] = useReducer(
    productsReducer,
    initialState
  );

  return (
    <ProductsContext.Provider
      value={{ departments, productsState, productsDispatch }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
export const useProducts = () => useContext(ProductsContext);

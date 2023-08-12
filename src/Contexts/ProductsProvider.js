import { useContext, useReducer } from "react";
import { createContext } from "react";
import { inventoryData } from "../Database/inventoryData";

const ProductsContext = createContext();
export const ProductsProvider = ({ children }) => {
  const departments = ["Kitchen", "Clothing", "Toys"];
  const productsReducer = (productsState, action) => {
    switch (action.type) {
      case "FILTER_BY_DEPARTMENT":
        return {
          ...productsState,
          filteredProducts: productsState.products.filter((product) =>
            action.payload === "All"
              ? product
              : product.department === action.payload
          ),
        };
      case "SORT_BY":
      case "LOW_STOCK_ITEMS":
        return {
          ...productsState,
          areLowStockItems: action.payload,
          filteredProducts: productsState.areLowStockItems
            ? productsState.filteredProducts.filter(
                (product) => product.stock <= 10
              )
            : productsState.filteredProducts,
        };
      default:
        return productsState;
    }
  };
  const initialState = {
    products: inventoryData,
    filteredProducts: inventoryData,
    areLowStockItems: false,
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

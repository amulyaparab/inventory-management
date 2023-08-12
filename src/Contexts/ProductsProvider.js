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
    newProduct: {
      id: "",
      department: "",
      name: "",
      description: "",
      price: 0,
      stock: 0,
      sku: "",
      supplier: "",
      delivered: 0,
      imageUrl: "",
    },
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

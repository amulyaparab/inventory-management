import { useContext, useEffect, useReducer } from "react";
import { createContext } from "react";
import { inventoryData } from "../Database/inventoryData";
import { productsReducer } from "../Reducers/productsReducer";

const ProductsContext = createContext();
export const ProductsProvider = ({ children }) => {
  const departments = ["Kitchen", "Clothing", "Toys"];

  const initialState = {
    products: inventoryData,
    filteredProducts:
      JSON.parse(localStorage.getItem("currentProducts")) || inventoryData,
    areLowStockItems:
      JSON.parse(localStorage.getItem("isLowStockApplied")) || false,
    currentDepartment:
      JSON.parse(localStorage.getItem("currentDepartment")) || "All",
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
  const filteredProducts = productsState.filteredProducts.filter(
    (product) =>
      ((productsState.currentDepartment === "All"
        ? product
        : product.department === productsState.currentDepartment) &&
        !productsState.areLowStockItems) ||
      product.stock <= 10
  );

  useEffect(() => {
    localStorage.setItem(
      "currentProducts",
      JSON.stringify(productsState?.filteredProducts || [])
    );
    localStorage.setItem(
      "currentDepartment",
      JSON.stringify(productsState?.currentDepartment || "")
    );
    localStorage.setItem(
      "isLowStockApplied",
      JSON.stringify(productsState?.areLowStockItems || false)
    );
  }, [
    productsState.filteredProducts,
    productsState.currentDepartment,
    productsState.areLowStockItems,
  ]);
  return (
    <ProductsContext.Provider
      value={{ departments, productsState, productsDispatch, filteredProducts }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
export const useProducts = () => useContext(ProductsContext);

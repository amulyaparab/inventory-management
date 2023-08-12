import { useContext } from "react";
import { createContext } from "react";
import { inventoryData } from "../Database/inventoryData";

const DashboardContext = createContext();
export const DashboardProvider = ({ children }) => {
  const totalStock = inventoryData.reduce(
    (totalStock, inventory) => (totalStock += inventory.stock),
    0
  );
  const totalDelivered = inventoryData.reduce(
    (totalDelivered, inventory) => (totalDelivered += inventory.delivered),
    0
  );
  const lowStockItems = inventoryData.filter(
    (inventory) => inventory.stock <= 10
  ).length;

  return (
    <DashboardContext.Provider
      value={{ totalStock, totalDelivered, lowStockItems }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
export const useDashboardData = () => useContext(DashboardContext);

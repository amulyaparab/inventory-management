import { useDashboardData } from "../../Contexts/DashboardProvider";
import "./dashboard.css";
export const Dashboard = () => {
  const { totalStock, totalDelivered, lowStockItems } = useDashboardData();
  return (
    <>
      <h1>Dashboard</h1>
      <div className="all-boxes">
        <div className="single-box">
          <h3 className="green">{totalStock}</h3>
          <h3>Total Stock</h3>
        </div>
        <div className="single-box">
          <h3 className="orange">{totalDelivered}</h3>
          <h3>Total Delivered</h3>
        </div>
        <div className="single-box">
          <h3 className="red">{lowStockItems}</h3>
          <h3>Low Stock</h3>
        </div>
      </div>
    </>
  );
};

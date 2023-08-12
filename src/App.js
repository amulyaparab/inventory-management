import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./Pages/Dashboard";
import { Departments } from "./Pages/Departments";
import { ProductListing } from "./Pages/ProductListing";
import { ProductDetail } from "./Pages/ProductDetail";
import { ProductManagement } from "./Pages/ProductManagement";
import { SideNav } from "./Components/SideNav";

function App() {
  return (
    <div className="App">
      <SideNav />
      <div>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/productListingPage" element={<ProductListing />} />
          <Route path="/productDetail/:productId" element={<ProductDetail />} />
          <Route path="/productManagemnet" element={<ProductManagement />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

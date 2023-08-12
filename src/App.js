import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./Pages/Dashboard/Dashboard";
import { Departments } from "./Pages/Deparments/Departments";
import { ProductListing } from "./Pages/ProductListing/ProductListing";
import { ProductDetail } from "./Pages/ProductDetail/ProductDetail";
import { ProductManagement } from "./Pages/ProductManagement/ProductManagement";
import { SideNav } from "./Components/SideNav/SideNav";

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
          <Route path="/productManagement" element={<ProductManagement />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

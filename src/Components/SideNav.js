import { NavLink } from "react-router-dom";
import "./sideNav.css";
export const SideNav = () => {
  return (
    <nav className="side-nav">
      <NavLink to="/">Dashboard</NavLink>
      <NavLink to="/departments">Departments</NavLink>
      <NavLink to="/productListingPage">Products</NavLink>
    </nav>
  );
};

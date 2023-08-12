import { useNavigate } from "react-router-dom";
import { useProducts } from "../Contexts/ProductsProvider";

export const Departments = () => {
  const { departments } = useProducts();
  const navigate = useNavigate();
  return (
    <>
      <h1>Departments</h1>
      <div className="all-boxes">
        {departments.map((department) => (
          <h2
            className="single-box"
            onClick={() => navigate(`/departments/${department}`)}
          >
            {department}
          </h2>
        ))}
      </div>
    </>
  );
};

import { useNavigate } from "react-router-dom";
import { useProducts } from "../../Contexts/ProductsProvider";

export const Departments = () => {
  const { departments, productsDispatch } = useProducts();
  const navigate = useNavigate();
  return (
    <>
      <h1>Departments</h1>
      <div className="all-boxes">
        {departments.map((department) => (
          <h2
            className="single-box clickable-box"
            onClick={() => {
              productsDispatch({
                type: "FILTER_BY_DEPARTMENT",
                payload: department,
              });
              navigate("/productListingPage");
            }}
          >
            {department}
          </h2>
        ))}
      </div>
    </>
  );
};

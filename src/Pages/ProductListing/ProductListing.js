import { useNavigate } from "react-router-dom";
import { useProducts } from "../../Contexts/ProductsProvider";
import "./productListing.css";
import { ProductRow } from "../../Components/ProductRow.js/ProductRow";
export const ProductListing = () => {
  const { productsState, productsDispatch, filteredProducts } = useProducts();
  const navigate = useNavigate();
  return (
    <>
      <h1>Products</h1>
      <select
        value={productsState.currentDepartment}
        onChange={(event) =>
          productsDispatch({
            type: "FILTER_BY_DEPARTMENT",
            payload: event.target.value,
          })
        }
      >
        <option value="All">All Departments</option>
        <option value="Kitchen">Kitchen</option>
        <option value="Clothing">Clothing</option>
        <option value="Toys">Toys</option>
      </select>
      <label>
        <input
          type="checkbox"
          checked={productsState.areLowStockItems}
          onChange={(event) =>
            productsDispatch({
              type: "LOW_STOCK_ITEMS",
              payload: event.target.checked,
            })
          }
        />
        Low Stock Items
      </label>

      <select
        onChange={(event) =>
          productsDispatch({ type: "SORT_BY", payload: event.target.value })
        }
      >
        <option value="sort">Sort By</option>
        <option value="name">Name</option>
        <option value="price">Price</option>
        <option value="stock">Stock</option>
      </select>
      <button onClick={() => navigate("/productManagement")}>New</button>

      <div>
        {filteredProducts?.length ? (
          <table className="all-products">
            <thead>
              <tr className="single-product">
                <th>Image</th>
                <th>Name</th>
                <th>Description</th>
                <th className="smaller">Price</th>
                <th className="smaller">Stock</th>
                <th className="smaller">Supplier</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts?.map((item) => (
                <ProductRow {...item} />
              ))}
            </tbody>
          </table>
        ) : (
          <h2>No Products Available.</h2>
        )}
      </div>
    </>
  );
};

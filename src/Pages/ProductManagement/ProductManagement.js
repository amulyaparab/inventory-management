import { useNavigate } from "react-router-dom";
import { useProducts } from "../../Contexts/ProductsProvider";
import "./productManagement.css";
export const ProductManagement = () => {
  const { productsDispatch, productsState } = useProducts();
  const navigate = useNavigate();
  return (
    <>
      <h1>Add New Product</h1>
      <form
        className="new-product-form"
        onSubmit={(event) => {
          event.preventDefault();
          productsDispatch({ type: "SUBMIT_FORM" });
          navigate("/productListingPage");
        }}
      >
        <label className="single-input">
          Department
          <input
            value={productsState?.newProduct?.department}
            required
            onChange={(event) =>
              productsDispatch({
                type: "NEW_PRODUCT_DEPARTMENT",
                payload: event.target.value,
              })
            }
          />
        </label>
        <label className="single-input">
          Name
          <input
            value={productsState?.newProduct?.name}
            required
            onChange={(event) =>
              productsDispatch({
                type: "NEW_PRODUCT_NAME",
                payload: event.target.value,
              })
            }
          />
        </label>
        <label className="single-input">
          Description
          <textarea
            value={productsState?.newProduct?.description}
            required
            onChange={(event) =>
              productsDispatch({
                type: "NEW_PRODUCT_DESCRIPTION",
                payload: event.target.value,
              })
            }
          ></textarea>
        </label>{" "}
        <label className="single-input">
          Price:
          <input
            value={productsState?.newProduct?.price}
            required
            type="number"
            onChange={(event) =>
              productsDispatch({
                type: "NEW_PRODUCT_PRICE",
                payload: event.target.value,
              })
            }
          />
        </label>
        <label className="single-input">
          Stock:
          <input
            value={productsState?.newProduct?.stock}
            required
            type="number"
            onChange={(event) =>
              productsDispatch({
                type: "NEW_PRODUCT_STOCK",
                payload: event.target.value,
              })
            }
          />
        </label>
        <label className="single-input">
          SKU:
          <input
            value={productsState?.newProduct?.sku}
            required
            onChange={(event) =>
              productsDispatch({
                type: "NEW_PRODUCT_SKU",
                payload: event.target.value,
              })
            }
          />
        </label>
        <label className="single-input">
          Supplier:
          <input
            value={productsState?.newProduct?.supplier}
            required
            onChange={(event) =>
              productsDispatch({
                type: "NEW_PRODUCT_SUPPLIER",
                payload: event.target.value,
              })
            }
          />
        </label>
        <label className="single-input">
          Delivered:
          <input disabled />
        </label>
        <label className="single-input">
          Image URL:
          <input
            value={productsState?.newProduct?.imageUrl}
            required
            onChange={(event) =>
              productsDispatch({
                type: "NEW_PRODUCT_IMAGE",
                payload: event.target.value,
              })
            }
          />
        </label>
        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

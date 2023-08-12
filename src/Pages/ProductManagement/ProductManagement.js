import "./productManagement.css";
export const ProductManagement = () => {
  return (
    <>
      <h1>Add New Product</h1>
      <form className="new-product-form">
        <label className="single-input">
          Department
          <input />
        </label>
        <label className="single-input">
          Name
          <input />
        </label>
        <label className="single-input">
          Description
          <textarea></textarea>
        </label>{" "}
        <label className="single-input">
          Price:
          <input />
        </label>
        <label className="single-input">
          Stock:
          <input />
        </label>
        <label className="single-input">
          SKU:
          <input />
        </label>
        <label className="single-input">
          Supplier:
          <input />
        </label>
        <label className="single-input">
          Delivered:
          <input />
        </label>
        <label className="single-input">
          Image URL:
          <input />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

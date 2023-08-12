import { useParams } from "react-router-dom";
import { useProducts } from "../../Contexts/ProductsProvider";
import "./productDetail.css";
export const ProductDetail = () => {
  const { productId } = useParams();
  const { productsState } = useProducts();
  const findProduct =
    productsState.filteredProducts.find(
      (product) => product.id === Number(productId)
    ) ||
    productsState.filteredProducts.find((product) => product.id === productId);

  return (
    <div className="product-detail">
      <h1>{findProduct?.name}</h1>
      <img src={findProduct?.imageUrl} alt={findProduct?.name} />
      <div className="details">
        <p>Price: ${findProduct?.price}</p>
        <p>Stock: {findProduct?.stock}</p>
        <p>Supplier: {findProduct?.supplier}</p>
        <p>Department: {findProduct?.department}</p>
        <p>SKU: {findProduct?.sku}</p>
        <p>Delivered: {findProduct?.delivered}</p>
        <p>Description: {findProduct?.description}</p>
      </div>
    </div>
  );
};

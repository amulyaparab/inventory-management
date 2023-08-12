import { useParams } from "react-router-dom";
import { useProducts } from "../Contexts/ProductsProvider";

export const ProductDetail = () => {
  const { productId } = useParams();
  const { productsState } = useProducts();
  const findProduct = productsState.filteredProducts.find(
    (product) => product.id === Number(productId)
  );
  console.log(findProduct);
  return (
    <>
      <h1>{findProduct?.name}</h1>
      <img src={findProduct?.imageUrl} alt={findProduct?.name} />
    </>
  );
};
// {
//   id: 1,
//   department: "Kitchen",
//   name: "Stainless Steel Cookware Set",
//   description:
//     "A set of high-quality stainless steel cookware including pots and pans.",
//   price: 149.99,
//   stock: 15,
//   sku: "KITCH001",
//   supplier: "KitchenWonders Inc.",
//   delivered: 15,
//   imageUrl: "https://m.media-amazon.com/images/I/616vJsA33kL.jpg",
// },

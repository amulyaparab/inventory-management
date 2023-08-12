import { useNavigate } from "react-router-dom";

export const ProductRow = ({
  id,
  name,
  imageUrl,
  description,
  stock,
  supplier,
  price,
}) => {
  const navigate = useNavigate();
  return (
    <tr
      className="single-product"
      key={id}
      onClick={() => navigate(`/productDetail/${id}`)}
    >
      <td>
        <img src={imageUrl} alt={name} />
      </td>
      <td>{name}</td>
      <td>{description}</td>
      <td className="smaller">${price}</td>
      <td className="smaller">{stock}</td>
      <td className="smaller">{supplier}</td>
    </tr>
  );
};

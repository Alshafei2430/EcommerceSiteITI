import { useParams } from "react-router-dom";
import { products } from "../../data";
import Product from "../components/Product";

const ProductPage = () => {
  const { id } = useParams();
  const product = products.find((product) => product.id == id);
  return (
    <div className="flex">
      <Product {...product} />
    </div>
  );
};

export default ProductPage;

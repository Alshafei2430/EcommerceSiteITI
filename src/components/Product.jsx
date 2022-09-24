import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../reducers/cartsSlice";

const Product = ({ id, name, image, category }) => {
  const dispatch = useDispatch();
  return (
    <div
      className="
      flex
      flex-col
      justify-center
      mb-8
      transation ease-in-out delay-100 hover:scale-110 hover:ease-out duration-500 shadow-lg hover:z-50
      "
    >
      <Link to={`/products/${id}`}>
        <img
          className="h-96 w-full object-cover object-center rounded-t-lg"
          src={image}
          alt={name}
        />
      </Link>
      <div className="flex justify-between p-5 shadow-lg w-full">
        <Link to={`/products/${id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
        </Link>
        <Button onClick={() => dispatch(addToCart())}>Add</Button>
      </div>
    </div>
  );
};

export default Product;

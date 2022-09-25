import { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllProducts,
  getProductsWithFilter,
} from "../reducers/productsSlice";

import Product from "./Product";

const Products = ({}) => {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.products);
  const [filter, setFilter] = useState(null);

  const getClass = (wantedFilter) => {
    if (wantedFilter === filter) {
      return "transation ease-in-out  duration-500 hover:scale-110 hover:ease-in-out rounded-3xl focus:ring focus:ring-gray-300 dark:bg-gray-100 dark:text-gray-900 text-gray-100 focus:text-gray-100 p-2 mx-2 border border-gray-300 shadow-sm bg-gray-900";
    } else {
      return "transation ease-in-out  duration-500 hover:scale-110 hover:ease-in-out rounded-3xl focus:ring focus:ring-gray-300  focus:text-gray-100 p-2 mx-2 border border-gray-300 shadow-sm ";
    }
  };

  const handleClick = (filter) => {
    if (filter) {
      dispatch(getProductsWithFilter(filter));
    } else {
      dispatch(getAllProducts());
    }
    setFilter(filter);
  };

  return (
    <div>
      <div className="flex justify-center mb-8">
        <button onClick={() => handleClick(null)} className={getClass(null)}>
          All
        </button>
        <button
          onClick={() => handleClick("food")}
          className={getClass("food")}
        >
          Food
        </button>
        <button
          onClick={() => handleClick("drinks")}
          className={getClass("drinks")}
        >
          Drinks
        </button>
      </div>
      <div className="columns-1 sm:columns-2 md:columns-3 lg:gap-8">
        {products.map((product, i) => (
          <Product key={i} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Products;

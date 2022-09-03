import { useEffect, useState } from "react";
import { Outlet, useSearchParams } from "react-router-dom";
import { Carousel } from "flowbite-react";
import Product from "./Product";
import { products } from "../../data";

const Products = () => {
  const [filter, setFilter] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const getClass = (wantedFilter) => {
    if (wantedFilter === filter) {
      return "transation ease-in-out  duration-500 hover:scale-110 hover:ease-in-out rounded-3xl focus:ring focus:ring-gray-300 dark:bg-gray-100 dark:text-gray-900 text-gray-100 focus:text-gray-100 p-2 mx-2 border border-gray-300 shadow-sm bg-gray-900";
    } else {
      return "transation ease-in-out  duration-500 hover:scale-110 hover:ease-in-out rounded-3xl focus:ring focus:ring-gray-300  focus:text-gray-100 p-2 mx-2 border border-gray-300 shadow-sm ";
    }
  };

  useEffect(() => {
    setFilteredProducts(
      filter
        ? products.filter((product) => product.category === filter)
        : products
    );
  }, [filter]);

  return (
    <>
      <div className="flex justify-center">
        <button onClick={() => setFilter(null)} className={getClass(null)}>
          All
        </button>
        <button onClick={() => setFilter("food")} className={getClass("food")}>
          Food
        </button>
        <button
          onClick={() => setFilter("drinks")}
          className={getClass("drinks")}
        >
          Drinks
        </button>
      </div>
      <Carousel className="h-full">
        {filteredProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </Carousel>
    </>
  );
};

export default Products;

import { useEffect, useState } from "react";
import { Outlet, useSearchParams, Link } from "react-router-dom";
import { Carousel } from "flowbite-react";
import { products } from "../../data";

const ProductSwiper = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel className="h-full">
        {products.map((product) => (
          <Link to={`/products/${product.id}`}>
            <img
              key={product.id}
              src={product.image}
              alt={product.name}
              className="object-contain w-full"
            />
          </Link>
        ))}
      </Carousel>
    </div>
  );
};

export default ProductSwiper;

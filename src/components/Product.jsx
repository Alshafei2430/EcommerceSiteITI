import { Card } from "flowbite-react";

const Product = ({ product: { id, name, image, category } }) => {
  return (
    <div
      className="
        max-w-sm
        rounded-lg
        object-contain
        flex
        flex-col
        items-center
        justify-center
        h-full
        w-full
        mx-auto
    "
    >
      <img
        className="
        h-96
        w-full
        object-cover
        object-center
        shadow-lg
        dark:shadow-gray-600
    "
        src={image}
        alt={name}
      />
      <div className="p-5 shadow-lg shadow-gray-700 w-full">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
      </div>
    </div>
  );
};

export default Product;

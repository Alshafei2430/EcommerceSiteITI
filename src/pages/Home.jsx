import ProductSwiper from "../components/ProductSwiper";
import Products from "../components/Products";

const Home = () => {
  return (
    <div className="flex flex-col">
      <section className="p-4">
        <blockquote className="text-lg text-center italic text-gray-90 py-2">
          <p>
            " We are a Restaurant You can order Food and Drinks You can browse
            to see What we sell "
          </p>
        </blockquote>
      </section>
      <section className="p-4">
        <div className="flex flex-col">
          <ProductSwiper />
          <hr className="mt-10 mb-4 border-2 rounded-sm w-3/4 mx-auto border-gray-400" />
          <Products />
        </div>
      </section>
    </div>
  );
};
export default Home;

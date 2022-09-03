import Products from "../components/Products";

const Home = () => {
  return (
    <div className="flex flex-col h-full">
      <section className="p-4">
        <blockquote className="text-lg text-center italic text-gray-90 py-2">
          <p>
            " We are a Restaurant You can order Food and Drinks You can browse
            to see What we sell "
          </p>
        </blockquote>
      </section>
      <section className="flex-1 p-4">
        <Products />
      </section>
    </div>
  );
};
export default Home;

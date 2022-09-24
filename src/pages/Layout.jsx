import { Footer } from "flowbite-react";
import { Outlet } from "react-router-dom";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import Header from "../components/Header";

const Layout = ({ enableDarkMode }) => {
  return (
    <div className="flex flex-col dark:bg-gray-900 dark:text-gray-300 font-mono">
      <Header enableDarkMode={enableDarkMode} />
      <div className="flex-1 container mx-auto">
        <Outlet />
      </div>
      <Footer container={true}>
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Restaurant" year={2022} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
          </div>
        </div>
      </Footer>
    </div>
  );
};
export default Layout;

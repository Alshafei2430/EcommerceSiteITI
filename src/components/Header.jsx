import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

const Header = ({ enableDarkMode }) => {
  const [darkMode, setDarkMode] = useState(true);

  const handleToggleMode = () => {
    setDarkMode(!darkMode);
    enableDarkMode();
  };

  const navLink = {
    active:
      "transation ease-in-out delay-100 hover:scale-110 hover:ease-out duration-500 shadow-lg rounded-sm m-2 p-2 inline-block text-gray-100 dark:text-gray-900 bg-gray-900 dark:bg-gray-100",
    inActive:
      "transation ease-in-out delay-100 hover:scale-110 hover:ease-out duration-500 shadow-lg rounded-sm m-2 p-2 inline-block hover:text-black ",
  };
  return (
    <nav className="flex bg-gray-100 dark:bg-gray-800 shadow-lg dark:shadow-gray-800">
      <ul className="mx-auto flex justify-between">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? navLink.active : navLink.inActive
            }
          >
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="about"
            className={({ isActive }) =>
              isActive ? navLink.active : navLink.inActive
            }
          >
            <span>About</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="contact"
            className={({ isActive }) =>
              isActive ? navLink.active : navLink.inActive
            }
          >
            <span>Conatct Us</span>
          </NavLink>
        </li>
      </ul>
      <button className="mr-4" onClick={handleToggleMode}>
        {darkMode ? (
          <SunIcon className="transation ease-in-out delay-100 hover:scale-110 hover:ease-out duration-500 h-8 w-8 text-gray-100 border rounded-full shadow-sm shadow-gray-100" />
        ) : (
          <MoonIcon className="transation ease-in-out delay-100 hover:scale-110 hover:ease-out duration-500 h-8 w-8 text-gray-900 border  rounded-full shadow-sm shadow-gray-800" />
        )}
      </button>
    </nav>
  );
};

export default Header;

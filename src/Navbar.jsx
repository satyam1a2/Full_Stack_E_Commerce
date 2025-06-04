import React from "react";
import { Link } from "react-router-dom";
import {useContext} from "react";
import { ThemeStore } from "./utility/ThemeContext"; // Importing the Theme context


let Navbar = () => {

  let {theme, setTheme} = useContext(ThemeStore); // Using useContext to access the theme context

  let darkTheme= 'navbar bg-base-300 ';
  let lightTheme= 'navbar bg-[#FFE97F] shadow-md text-black';

  return (
    <>
      <div className={theme === "dark" ? darkTheme : lightTheme}>
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl text-green-500">GeeksCart</Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              {/* Anchor tag refreshes our page 
               <a href="/cart">Cart</a>  */}
              <Link to="/cart">Cart</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link className="text-red-600 font-bold border border-red-600" to="/food">Food</Link>
            </li>
            <li>
              <div>
                <label className="flex cursor-pointer gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="5" />
                    <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                  </svg>
                  <input
                    type="checkbox"
                    value="synthwave"
                    className="toggle theme-controller"
                    ///////////////////////////
                    onClick={ () => {
      
                      let newTheme = (theme === "dark" ? "light" : "dark") ; // Determine new theme
                      setTheme(newTheme); // Toggle theme on click
                      localStorage.setItem("Theme", newTheme); // Store the theme in localStorage
                    }}
                    ///////////////////////////
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                  </svg>
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;

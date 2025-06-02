
import React from "react";
import { Link } from "react-router-dom";


let Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-300">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl text-green-500">GeeksCart</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              {/* Anchor tag refreshes our page 
               <a href="/cart">Cart</a>  */}
              <Link to ="/cart">Cart</Link>
            </li>
            <li>
              <Link to ="/about">About</Link>
            </li>
            <li>
              <Link to ="/theme">Theme</Link>
            </li>

          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;

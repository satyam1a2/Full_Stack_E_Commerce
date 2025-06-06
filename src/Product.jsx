import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShimmerUI from "./ShimmerUI";
import useCallSingleProductApi from "./utility/useCallSingleProductApi"; // Uncomment if using custom hook
import Reviews from "./Reviews/Reviews"; // Importing the Reviews component
import {useContext} from "react";
import ThemeContext from "./utility/ThemeContext"; // Importing the Theme context



  // let darkTheme = "h-[92vh] w-screen bg-base-200 pt-6";
  // let lightTheme = "card w-96 bg-[#FFF7A8] m-4 text-black";

const Product = () => {

  // useParams is a hook that returns an object of key/value pairs of the dynamic params from the current URL.
  // For example, if the current URL is /product/123, useParams will return { id: '123' }.
  let { id } = useParams();

  let obj = useCallSingleProductApi(id); // Call the custom hook to fetch product data

  if (obj == null ) {
    return <ShimmerUI />;
  }

  let { thumbnail, title, category, price, rating, stock, reviews } = obj;

  let { theme } = useContext(ThemeContext); 

  let lightTheme_Outer ="h-[92vh] w-screen bg-[#FFF9C4] pt-6" ;
  let darkTheme_Outer = "h-[92vh] w-screen bg-base-200 pt-6" ; 

  let lightTheme_Inner = "card card-side bg-[#FFF7A8] shadow-xl w-1/2 mx-auto text-black" ;
  let darkTheme_Inner = "card card-side bg-base-100 shadow-xl w-1/2 mx-auto" ;

  let lightTheme_Reviews1 = " btn border bg-[#FFF9C4] text-black shadow-md m-2 ";
  let darkTheme_Reviews1 = "btn border m-2";

  return (
    <div className={theme === "dark" ? darkTheme_Outer : lightTheme_Outer}>
      <div className={theme === "dark" ? darkTheme_Inner : lightTheme_Inner}>
        <figure>
          <img src={thumbnail} alt={"Product"} />{" "}
        </figure>

        <div className="card-body ">
          <h2 className="card-title">{title}</h2>

          <div>

            <button className={theme === "dark" ? darkTheme_Reviews1 : lightTheme_Reviews1}>
              Price: <div className="badge badge-secondary">{price}$</div>
            </button>

            {/* <button className="btn border bg-[#FFF9C4] text-black shadow-md m-2">
              Price: <div className="badge bg-[#FF4081] text-white ml-2">{price}$</div>
            </button> */}


            <button className={theme === "dark" ? darkTheme_Reviews1 : lightTheme_Reviews1}>
              Rating: <div className="badge badge-secondary">{rating}</div>
            </button>

        
               <button className={theme === "dark" ? darkTheme_Reviews1 : lightTheme_Reviews1}>
                 Category:{" "}
                 <div className="badge badge-secondary ">{category}</div>
               </button>

               <button className={theme === "dark" ? darkTheme_Reviews1 : lightTheme_Reviews1}>
                 Stock: <div className="badge badge-secondary ">{stock}</div>
               </button>
          </div>

          <div className="card-actions justify-end " >
            <button className="btn btn-primary">Add to Cart</button>
          </div>
          
        </div>
      </div>
      <Reviews reviews={reviews}> </Reviews>
    </div>
  );
};

export default Product;

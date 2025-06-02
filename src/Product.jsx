import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShimmerUI from "./ShimmerUI";
import useCallSingleProductApi from "./utility/useCallSingleProductApi"; // Uncomment if using custom hook

const Product = () => {

  // useParams is a hook that returns an object of key/value pairs of the dynamic params from the current URL.
  // For example, if the current URL is /product/123, useParams will return { id: '123' }.
  let { id } = useParams();

  let obj = useCallSingleProductApi(id); // Call the custom hook to fetch product data
  
  if (obj == null) {
    return <ShimmerUI />;
  }

  let { thumbnail, title, category, price, rating, stock } = obj;

  return (
    <div className="h-[92vh] w-screen bg-base-200 pt-6">
      <div className="card card-side bg-base-100 shadow-xl w-1/2 mx-auto">
        <figure>
          <img src={thumbnail} alt={"Product"} />{" "}
        </figure>

        <div className="card-body ">
          <h2 className="card-title">{title}</h2>

          <div>
            <button className="btn border  m-2">
              Price: <div className="badge badge-secondary">{price}$</div>
            </button>

            <button className="btn m-2">
              Rating: <div className="badge badge-secondary">{rating}</div>
            </button>

       
               <button className="btn m-2">
                 Category:{" "}
                 <div className="badge badge-secondary">{category}</div>
               </button>

               <button className="btn m-2">
                 Stock: <div className="badge badge-secondary">{stock}</div>
               </button>
              </div>

          <div className="card-actions justify-end " >
            <button className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

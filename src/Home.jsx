import ProductCard from "./ProductCard.jsx";
import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI.jsx";
import useProductFilter from "./utility/useProductFilter.jsx"; // Custom hook to fetch product data
import { useContext } from "react";
import { ThemeContext } from "./utility/ThemeContext"; // Importing the Theme context

let Home = () => {

  let {allProducts, productData, handleRating, handleCategory, handleSearch, searchQuery, setSearchQuery} = useProductFilter(); // Custom hook to fetch product data

  let {theme} = useContext(ThemeContext); // No need of setTheme, we are not changing the theme in Home component

  // useEffect(() => {
  //   console.log("useEffect with no dependency array, runs on every render");
  // },);

  // useEffect(() => {
  //   console.log("useEffect with [query], query dependency array runs when query changes");
  // }, [searchQuery]);



  if( allProducts.length === 0) {
    // {console.log("Render called")};
    return <ShimmerUI />;
  }


  let darkTheme = " w-screen flex   flex-col origin-top ";
  let lightTheme = " w-screen flex flex-col origin-top bg-[#FFF9C4]  shadow-md ";

  let darkTheme_Search= " border-white h-11 p-2 rounded-2xl border border-green-500";
  let lightTheme_Search = " border-white h-11 p-2 rounded-2xl bg-[#FFF7A8] border border-green-500";

  return (
    <div className={theme === "dark" ? darkTheme : lightTheme}>
      <div className="utility flex justify-around w-100  p-3 ">
        {/* {console.log("Render called")} */}
        {/* we have to pass the refrence of the callback functionwe have to pass the refrence of the callback function */}
        <button className="btn btn-primary " onClick={handleRating}>
          Top Rated
        </button>

        {/* we have to pass the refrence of the callback function // but we are passing arguments So make arrow function */}
        <button
          className="btn btn-primary"
          onClick={() => handleCategory("furniture")}
        >
          Furniture
        </button>

        <div className="searchBar flex flex-row gap-2">
          {/* now searchQuery is sync with the input field, InputText and SearchQuery will have same value */}
          <input
            type="text"
            className={theme === "dark" ? darkTheme_Search : lightTheme_Search}
            placeholder="Search Products"
            value={searchQuery}  // searchQuery used
            onChange={(event) => {
              setSearchQuery(event.target.value);  // setSearchQuery will update the searchQuery state
            }}
          />
          <button className="btn btn-success mx-2" onClick={handleSearch}>
            Search
          </button>
        </div>

        <button
          className="btn btn-primary"
          onClick={() => handleCategory("beauty")}
        >
          Beauty
        </button>
        <button
          className="btn btn-primary"
          onClick={() => handleCategory("groceries")}
        >
          Grocery
        </button>
      </div>

      <div className="flex flex-wrap justify-around ">
        {productData.map((obj) => {
          // We are showing the data
          return (
            <ProductCard obj={obj} key={obj.id}>
              {" "}
            </ProductCard>
          );
        })}
      </div>
    </div>
  );
};

export default Home;

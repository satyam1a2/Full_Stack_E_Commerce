import ProductCard from "./ProductCard.jsx";
import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI.jsx";

let Home = () => {
  let [allProducts, setAllProducts] = useState([]);
  let [productData, setProductData] = useState([]);

  let [searchQuery, setSearchQuery] = useState(""); // for search bar

  let getData = async () => {
    let data = await fetch("https://dummyjson.com/products"); // fetch data from API
    let jsonData = await data.json(); // convert to JSON format
    setAllProducts(jsonData.products); // set the allProducts state with the products from API
    setProductData(jsonData.products); // set the productData state with the products from API
  };

  useEffect(() => {
    getData();
    console.log("useEffect with [], empty array runs only once after the first render");
  }, []);   

  // useEffect(() => {
  //   console.log("useEffect with no dependency array, runs on every render");
  // },);

  // useEffect(() => {
  //   console.log("useEffect with [query], query dependency array runs when query changes");
  // }, [searchQuery]);



  if( allProducts.length === 0) {
    // if allProducts is empty, show shimmer UI 
    // {console.log("Render called")};
    return <ShimmerUI />;
  }

  // Obj is an item of the Data array, Intially all obj are showing in the productData array
  // when we use any filter function, we are changing the productData array
  let handleRating = () => {
    let filteredArray = allProducts.filter((obj) => {
      return obj.rating >= 4;
    });

    setProductData(filteredArray); // this will change the values of productData and re-render the component
    // and we are showing this on Website
  };

  let handleCategory = (category) => {
    let filteredArray = allProducts.filter((obj) => {
      return obj.category == category;
    });

    setProductData(filteredArray);
  };

  let handleSearch = () => {
    // console.log(searchQuery);
    let filteredArray = allProducts.filter((obj) => {
      // allProducts.filter search in all obj by Search Query and Update the productData array(by SetProductData)
      return obj.title.toLowerCase().includes(searchQuery.toLowerCase().trim()); // trim remove // extra spaces from the start and end of the string
    });

    setProductData(filteredArray);
    setSearchQuery(""); // when we click on category, search bar will be empty
  };

  return (
    <div className=" h-[91vh] w-screen flex   flex-col scale-90 origin-top">
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
            className=" border-white h-11 p-2 rounded-2xl"
            placeholder="Search Products"
            value={searchQuery}
            onChange={(event) => {
              setSearchQuery(event.target.value);
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

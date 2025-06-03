import React, { useState, useEffect } from "react";

let useProductFilter = () => {
  let [allProducts, setAllProducts] = useState([]);
  let [productData, setProductData] = useState([]);

  let [searchQuery, setSearchQuery] = useState(""); // for search bar

  let getData = async () => {
    let data = await fetch("https://dummyjson.com/products");
    let jsonData = await data.json();
    setAllProducts(jsonData.products);
    setProductData(jsonData.products);
  };

  useEffect(() => {
    getData();
  }, []);

  // Obj is an item of the Data array, Intially all obj are showing in the productData array
  // when we use any filter function, we are changing the productData array
  let handleRating = () => {
    let filteredArray = allProducts.filter((obj) => {
      return obj.rating >= 4;
    });

    setProductData(filteredArray); // this will change the values of productData and re-render the component
    // and we are showing setProductData on Website
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

  return  {allProducts, productData, handleRating, handleCategory, handleSearch, searchQuery, setSearchQuery};
};

export default useProductFilter;

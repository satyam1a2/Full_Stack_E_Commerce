import React from "react";
import ThemeContext from "./ThemeContext.js";
import {  useState } from "react";

// ThemeContext ko Children component(children ki jagah kuch bhi likh skte) mila

let ThemeContextProvider = ({ children }) => {   

  let [theme, setTheme] = useState( localStorage.getItem("Theme")  ); // default theme is light


  return (
    // {children} compnents will have value of theme and setTheme
    // so we can use it in any component which is inside ThemeContext
    <ThemeContext.Provider value={{ theme, setTheme }}>   
      {children}  
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
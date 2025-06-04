import React from "react";
import { createContext, useState } from "react";


export let ThemeStore = createContext(null); // this is var I am storig an obj in it( theme, setTheme )

let ThemeContext = ({ children }) => {

  let [theme, setTheme] = useState( localStorage.getItem("Theme")  ); // default theme is light


  return (
    // {children} compnents will have value of theme and setTheme
    // so we can use it in any component which is inside ThemeContext
    <ThemeStore.Provider value={{ theme, setTheme }}>   
      {children}
    </ThemeStore.Provider>
  );
};

export default ThemeContext;
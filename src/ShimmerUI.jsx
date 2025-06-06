
import React from 'react';

import { useContext } from 'react';
import ThemeContext from './utility/ThemeContext';




const ShimmerUI = () => { 
    
    let {theme} = useContext(ThemeContext);

let lightTheme = "h-[91vh] w-screen flex flex-wrap justify-around bg-[#FFF7A8] ";
let darkTheme = "h-[91vh] w-screen flex flex-wrap justify-around";

let lightTheme_Cards = "skeleton w-96 h-[22rem] m-4 bg-[#FFF9C4]";
let darkTheme_Cards = "skeleton w-96 h-[22rem] m-4  ";

    return(
        <div  className= {theme=== "dark"? darkTheme: lightTheme}>
            <div className= {theme=== "dark"? darkTheme_Cards : lightTheme_Cards}></div>
            <div className={theme=== "dark"? darkTheme_Cards : lightTheme_Cards}></div>
            <div className={theme=== "dark"? darkTheme_Cards : lightTheme_Cards}></div>
            <div className={theme=== "dark"? darkTheme_Cards : lightTheme_Cards}></div>
            <div className={theme=== "dark"? darkTheme_Cards : lightTheme_Cards}></div>
            <div className={theme=== "dark"? darkTheme_Cards : lightTheme_Cards}></div>
            <div className={theme=== "dark"? darkTheme_Cards : lightTheme_Cards}></div>
            <div className={theme=== "dark"? darkTheme_Cards : lightTheme_Cards}></div>
            <div className={theme=== "dark"? darkTheme_Cards : lightTheme_Cards}></div>
            <div className={theme=== "dark"? darkTheme_Cards : lightTheme_Cards}></div>
            <div className={theme=== "dark"? darkTheme_Cards : lightTheme_Cards}></div>
            <div className={theme=== "dark"? darkTheme_Cards : lightTheme_Cards}></div>
            <div className={theme=== "dark"? darkTheme_Cards : lightTheme_Cards}></div>
            <div className={theme=== "dark"? darkTheme_Cards : lightTheme_Cards}></div>
            <div className={theme=== "dark"? darkTheme_Cards : lightTheme_Cards}></div>
            <div className={theme=== "dark"? darkTheme_Cards : lightTheme_Cards}></div>
            <div className={theme=== "dark"? darkTheme_Cards : lightTheme_Cards}></div>
            <div className={theme=== "dark"? darkTheme_Cards : lightTheme_Cards}></div>
            <div className={theme=== "dark"? darkTheme_Cards : lightTheme_Cards}></div>
            <div className={theme=== "dark"? darkTheme_Cards : lightTheme_Cards}></div>
            <div className={theme=== "dark"? darkTheme_Cards : lightTheme_Cards}></div>
            <div className={theme=== "dark"? darkTheme_Cards : lightTheme_Cards}></div>
            <div className={theme=== "dark"? darkTheme_Cards : lightTheme_Cards}></div>
            <div className={theme=== "dark"? darkTheme_Cards : lightTheme_Cards}></div>
            <div className={theme=== "dark"? darkTheme_Cards : lightTheme_Cards}></div>
            <div className={theme=== "dark"? darkTheme_Cards : lightTheme_Cards}></div>
            <div className={theme=== "dark"? darkTheme_Cards : lightTheme_Cards}></div>
            <div className={theme=== "dark"? darkTheme_Cards : lightTheme_Cards}></div>
            <div className={theme=== "dark"? darkTheme_Cards : lightTheme_Cards}></div>

        </div>
    )
}

export default ShimmerUI;
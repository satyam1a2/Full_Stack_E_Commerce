import React from "react";

import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./Cart.jsx";
import About from "./About.jsx";
import Home from "./Home.jsx";
import Error from "./Error.jsx";
import Product from "./Product.jsx";

let Router = createBrowserRouter([
  {
    path: "/",
    element: <App> </App>,
      children: [
         { path: "/", element: <Home/> },
         { path: "/cart", element: <Cart /> },
         { path: "/about", element: <About /> },
         { path: "/product/:id", element: <Product /> },
         // { path: "*", element: <Error /> }  //We can write this also
      ],
      errorElement: <Error />
  }


]);

// let h1tag = React.createElement("h1",{}, "Hello World from React");

// let h1tag = <h1> Hello world from React by babel</h1>

// function Hey() {
//   return (
//     <h1> Hello World from React through a Function </h1>
//   )
// }

// createRoot(document.getElementById('root')).render(

//    // These all are same
//    // Hey(), <Hey />, <Hey> </Hey>

//    <App />

// )

ReactDOM.createRoot(document.getElementById("root")).render(
   <RouterProvider router={Router} > </RouterProvider>
);

import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// let h1tag = React.createElement("h1",{}, "Hello World from React");

// let h1tag = <h1> Hello world from React by babel</h1>

// function Hey() {
//   return (
//     <h1> Hello World from React through a Function </h1>
//   )
// }

createRoot(document.getElementById('root')).render(
  
   // These all are same 
   // Hey(), <Hey />, <Hey> </Hey>

   <App />


)

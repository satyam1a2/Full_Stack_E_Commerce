
import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import { ThemeContext } from "./utility/ThemeContext"; // Importing the Theme context
import { useDispatch } from "react-redux";


let ProductCard = ( {obj} ) => {
    let {title, thumbnail, category, rating, price,id } = obj; // Extract id from obj
    let Navigate= useNavigate();

  let { theme } = useContext(ThemeContext); 

  let handleClick = () => {
    //  console.log("Product is clicked");
    Navigate(`/product/${id}`); // Navigate to the product details page using the id
  }

  let handleAddButton = (event) => {
    // console.log("Add button clicked for product:");
    event.stopPropagation(); // Prevent the click event from bubbling up to the card
  }

  let darkTheme = "card w-96 bg-base-300 shadow-xl m-4";
  let lightTheme = "card w-96 bg-[#FFF7A8] m-4 text-black";

  return (
    <div className={theme === "dark" ? darkTheme : lightTheme} onClick={handleClick}>
      <figure>
        <img className="bg-zinc-400 h-[85%] rounded 2xl" src={thumbnail} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>

        <div className="card-actions justify-between items-center">
          <div className="badge badge-secondary bg-green-300 text-black">
            {category}
          </div>
          <div className="badge badge-secondary bg-green-300 text-black">
            {rating}
          </div>

          <p className="p-1 "> {price}$ </p>
          <button className="bg-black text-white p-4 rounded-2xl" onClick={handleAddButton}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;


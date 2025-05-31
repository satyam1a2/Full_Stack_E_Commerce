







let ProductCard = ( {obj} ) => {
    let {title, thumbnail, category, rating, price } = obj;

  return (
    <div className="card w-96 bg-base-300 shadow-xl m-4">
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
          <button className="bg-black text-white p-4 rounded-2xl">Add</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;


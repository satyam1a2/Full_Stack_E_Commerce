import React, {useState, useEffect} from "react";
import ShimmerUI from "../ShimmerUI";

const ReviewComp = ( {obj, idx, showIdx, setShowIdx} ) => {

    let { reviewerName, comment, rating } = obj;





  return (
    <>
        <div className="box1 py-5 w-3/4 bg-gray-300 mx-auto rounded-3xl flex justify-between items-center px-20 text-black border-2 border-black">
          <p> {reviewerName} </p>

           <p onClick={ () => {
                              if (showIdx === idx) setShowIdx(null);
                              else setShowIdx(idx);
                            
                              }
                       }> 🔼 </p>
        </div>

        {

            showIdx == idx ? <div className="box2 py-3 w-3/4 bg-gray-100 mx-auto rounded-3xl flex justify-between items-center px-16 text-black ">
                          <p> {comment} </p>
                          <p> {rating} </p>
                          </div> : <></>  // If show is false, do not render the second box
      
        }

    </>
  );
};


export default ReviewComp;
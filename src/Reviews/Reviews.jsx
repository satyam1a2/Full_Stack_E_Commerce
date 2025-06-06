import React, {useState} from "react";
import ReviewComp from "./ReviewComp.jsx";

const Reviews = ({reviews}) => { // reviews is an array of review objects

    let [showIdx, setShowIdx] = useState(null); 

    return (
        <>
           <div className="w-3/4 h-1/3 bg-white mx-auto mt-12 rounded-3xl">
                {
                   reviews.map( (obj, idx) => { return <ReviewComp obj={obj} idx={idx} showIdx={showIdx} setShowIdx={setShowIdx} >  </ReviewComp>} )
                }
           </div>
        </>
    )
};

export default Reviews;

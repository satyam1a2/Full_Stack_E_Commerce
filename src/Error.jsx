import React from 'react';



// const Error = () => {
//     return (
//         <div>
//             <p>This is my custom error message.</p>
//         </div>
//     );
// }



// Another way to write the Error component

import { useRouteError } from "react-router-dom"; 
import { Link } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    console.log(error);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <p>Something went wrong.</p>
            <div>{error.status}</div>
            <div>{error.data}</div>

            <Link to="/" className="btn btn-primary">HomePageLink</Link>
        </div>
    );
}


export default Error;
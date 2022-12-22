import React from "react";
import SearchBox from "./SearchBox";


function UpperComponent(){
    return(
        <div className="upperFlex">
            <img src={process.env.PUBLIC_URL+"logo.jpeg"} alt="Logo" />
            <SearchBox />
        </div>
    )
}

export default UpperComponent;
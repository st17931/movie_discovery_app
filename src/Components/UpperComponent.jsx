import React from "react";
import SearchBox from "./SearchBox";
import image from "../logo.jpeg";


function UpperComponent(){
    return(
        <div className="upperFlex">
            <img src={image} alt="Logo" />
            <SearchBox />
        </div>
    )
}

export default UpperComponent;
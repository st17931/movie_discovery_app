import React from "react";
import SearchBox from "./SearchBox";
import image from "../logo.jpeg";


function UpperComponent({result, setFunction}){
    return(
        <div className="upperFlex">
            <img src={image} alt="Logo" />
            <SearchBox value = {result} setFunction = {setFunction}/>
        </div>
    )
}

export default UpperComponent;
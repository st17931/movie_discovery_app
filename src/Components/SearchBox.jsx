import React from "react";

function SearchBox(){
    return(
        <form className="nosubmit">
          <input className="nosubmit" type="search" placeholder="Search the movies" 
          onKeyDown={(e)=>{
            
            if(e.key === 'Enter'){
              // alert('Input value is',e.target.value);
              console.log("e is",e.target.value);
            }
          }}
          
          // onChange={event => console.log("event value is",event.target.value)}
          />
        </form>
    )
}

export default SearchBox;
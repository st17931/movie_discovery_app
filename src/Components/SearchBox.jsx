import React, {useState} from "react";


function SearchBox({value, setFunction}){
    const [message, setmessage]  = useState('');
    console.log("values in searchBox component",value,setFunction);

    function handleKeyDown(e){
      if(e.key === 'Enter'){
        const newMainState = value.filter((ob)=> ob.original_title ===  message)
        setFunction(newMainState);
        e.preventDefault()
      }
    }
    return(
        <form className="nosubmit">
          <input className="nosubmit" type="search" placeholder="Search the movies" 
          onKeyDown={handleKeyDown}
          
          onChange={event => setmessage(event.target.value)}
          />
        </form>
    )
}

export default SearchBox;
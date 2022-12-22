import React ,{useState} from "react";
import AboutMovie from "./AboutMovie";


function MovieCard({result}){
    const [show,setshow] = useState(false);
    return(
        <>
        <div className="card">
               <img 
               src={`http://image.tmdb.org/t/p/w185/${result.poster_path}`} 
               alt="Avatar"
               onClick={()=>{
                   setshow(true);
               }}  
               />
            <div className="Center">
             <h1>{result.original_title}</h1>
            </div>
            {/* <div class="dot">{result.vote_average}</div> */}
        </div>
        <AboutMovie onClose={()=>{setshow(false)}} obj={result} is={show} />
        </>
    )
}

export default MovieCard;
import React from "react";
import MovieCard from "./MovieCard";

function MovieGrid({result}){
    console.log("props is",result);
    const listItem = result.map((Sresult)=>(
        <MovieCard key={Sresult.id.toString()} result={Sresult}/>
    ));
    return(
        <div className="grid">
            {
                listItem
            }
        </div>
    )
}

export default MovieGrid;
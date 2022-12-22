import React from "react";
import UpperComponent from "./Components/UpperComponent.jsx";
import MovieGrid from "./Components/MovieGrid.jsx";
import { useEffect, useState } from "react";

const URI = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=2`

function App(){
    const [Value,setValue] = useState([]);
    console.log("Value is",Value);
    async function searchMovies(){
        const response = await fetch(URI);
        console.log("response is",response);
        const data =await response.json();
        setValue(data.results);
        console.log("data is",data);
    }
    useEffect(()=>{
        searchMovies();
    },[])

    return(
        <>
        <UpperComponent />
        <hr></hr>
        <h1>Most Recent Movies</h1>
        <MovieGrid result ={Value}  />
        </>
    )
}

export default App;
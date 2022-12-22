import React from "react";

function AboutMovie({onClose,obj,is}){
if(!is){
    return null;
}

return(
 <div className="modal" onClick={onClose}>
    <div className="grid1" onClick={e=>e.stopPropagation()}>
        <div className="flexbox margin2">
          <h2>{obj.original_title}</h2>
          <button onClick={onClose}>X</button>
        </div>
        <div className="flexbox margin1">
          <img src={`http://image.tmdb.org/t/p/w185/${obj.poster_path}`} alt="Avatar"  />
          <div className="margin3">
              <h6><b>Release date:</b>{obj.release_date}</h6>
              <p1 className="overview">{obj.overview}</p1>
              <h6><b>{obj.vote_average}</b>/10 ({obj.vote_count} total votes)</h6>
          </div>
        </div>
    </div> 
 </div>
)

}

export default AboutMovie;
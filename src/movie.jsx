import React from "react";
import search from'./search.svg'
function Movie(props){
return(
<>
    <div className="movie">
        <div>
            <p>{props.movie.Year}</p>
        </div>
        <div>
            <img src={props.movie.Poster !== 'N/A'? props.movie.Poster : 'https://via.placeholder.com/400'} alt={props.movie.Title }/>
        </div>
        <div>
            <span>{props.movie.Type}</span>
            <h3>{props.movie.Title}</h3>
        </div>
    </div>
    
</>
)
}
export default Movie
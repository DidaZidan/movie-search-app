import {useEffect,useState} from "react"
import './App.css'
import search from'./search.svg'
import Movie from "./movie"

//c0a5bb49
function App(){
    let [movies , setmovies]=useState([])
    let [searchTerm,setSearchTerm]=useState('')
    const API_URL ='http://www.omdbapi.com?apikey=c0a5bb49'
    
    const searchMovie = async (title)=>{
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();
        setmovies(data.Search||[])
    }
    useEffect(()=>{
        searchMovie('batman')
    },[])
    return(
    <>
    <div className="app">
        <h1>Movie land</h1>
        <div className="search">
            <input
                placeholder="Search for movie"
                value={searchTerm}
                onChange={(event)=>setSearchTerm(event.target.value)}
            />
            <img src={search} alt="search icon"
            onClick={()=>{searchMovie(searchTerm)}}
            />
        </div>
        {
            movies?.length > 0 ?(
                movies.map((movie)=>{
                    return(
                    <div className="container">
                        <Movie movie = {movie}/>
                    </div>)
                  
                })
            ):(
                <h2 className="empty">movie not found</h2>
            )
        }
    </div>
    </>
    )
}
export default App
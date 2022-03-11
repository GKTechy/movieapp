import {React, useEffect, useState} from 'react'
import './App.css';
import MovieCart from './MovieCart';
import searchIcon from './search.svg'
const API_URL="http://omdbapi.com?apikey=c032e2d7";

const  App = ()=> {

  const [movies, setMovies] =useState([]);
  const [searchTeam, setsearchTeam]=useState('');

  const searchMovies = async(title)=>{
    const response= await fetch(`${API_URL}&s=${title}`);
    const data= await response.json();
   // console.log(data)
    setMovies(data.Search);
    console.log(JSON.stringify(movies))
  }

  useEffect( ()=>{
    //searchMovies('Spiderman');
  },[])

  return (
    <div className='App'>
          <h1>Movie Land</h1>
          <div className='search'>
              <input placeholder='Search for Movies'
                value={searchTeam}
                onChange={ (e)=>{ setsearchTeam (e.target.value)}}
              />
              <img src={searchIcon} alt="search" 
              onClick={ ()=>{searchMovies(searchTeam)}} 
              />
          </div>
          
          {
            movies?.length > 0 ?
              (
                <div className="container">
                    {
                      movies.map ( (movie)=>(
                         <MovieCart movie={movie}/>
                      ))
                    }
                 
                </div>
              ) :(
                <div className='empty'>
                  <h2>No Movies Found</h2>
                </div>
              )

          }

    </div>
  );
}

export default App;

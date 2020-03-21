import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './MovieList.css'

function MovieList() {
  const [state, setState] = useState({ movies: [] });  

  useEffect(() => {
    async function fetchMovies() {
      const moviesResp = await fetch('/movies.json');
      const movies = await (moviesResp.json());            
      setState({ movies });
    }
    fetchMovies();    
  }, []);

  function oneMovie(movie) {
    return (
    <p key={movie.id}><Link to={`/movie-detail/${movie.id}`}>{movie.name} - {movie.released}</Link></p>
    );
  }

  return (
    <div className="MovieList">
      { state.movies.map(movie => oneMovie(movie))  }
    </div>
  );
}

export default MovieList;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './MovieList.css'

function MovieList() {
  const [state, setState] = useState({ movies: [] });

  useEffect(() => {
    async function fetchMovies() {
      const moviesResp = await fetch('/movies.json');
      const movies = await (moviesResp.json());
      movies.forEach((movie, idx) => { movie.id = idx + 1 });
      setState({ movies });
    }
    fetchMovies();
  }, []);

  function oneMovie(movie) {
    return (
      <Link to={`/movie-detail/${movie.id}`} key={movie.id}>
        <div className="MovieCard">
          <img src={movie.poster || 'large_movie_poster.png'} alt="Poster for {movie.titke}" className="PosterImage" />
          <div>
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <div className="MovieList">
      {state.movies.map(movie => oneMovie(movie))}
    </div>
  );
}

export default MovieList;

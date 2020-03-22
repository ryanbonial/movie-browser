import React from 'react';
import { Link } from 'react-router-dom';

import './MovieList.css'

function MovieList(props) {
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
      {props.movies.map(movie => oneMovie(movie))}
    </div>
  );
}

export default MovieList;

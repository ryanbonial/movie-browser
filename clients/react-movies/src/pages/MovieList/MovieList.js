import React from 'react';

import './MovieList.css'

function MovieList() {
  const movies = [
    { id: 1, name: 'Hackers', released: 1995 },
    { id: 2, name: 'Pulp Fiction', released: 1994 },
  ];

  function oneMovie(movie) {
    return (
    <p id={movie.id}>{movie.name} - {movie.released}</p>
    );
  }

  return (
    <div className="MovieList">
      { movies.map(movie => oneMovie(movie))  }
    </div>
  );
}

export default MovieList;

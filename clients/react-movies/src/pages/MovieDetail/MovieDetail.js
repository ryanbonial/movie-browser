import React from 'react';
import { useParams } from 'react-router-dom';

function MovieDetail (props) {
  const { id } = useParams();
  const movie = props.movies.find(movie => movie.id === +id);  

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>Movie Detail for movie with id {id}</p>
    </div>
  );
} 

export default MovieDetail;
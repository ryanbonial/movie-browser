import React from 'react';
import { useParams } from 'react-router-dom';

function MovieDetail (props) {
  const { id } = useParams();
  return (
   <p>Movie Detail for movie with id {id}</p>
  );
} 

export default MovieDetail;
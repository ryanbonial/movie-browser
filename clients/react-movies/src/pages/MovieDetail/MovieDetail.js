import React from 'react';
import { useParams } from 'react-router-dom';

import './MovieDetails.css';

function MovieDetail(props) {
  const { id } = useParams();
  const movie = props.movies.find(movie => movie.id === +id);
  
  function renderDetails() {
    return (
      <div className="MovieDetails">
        <div className="MovieHeading">
          <img src={movie.poster || '../large_movie_poster.png'} alt={`Poster for ${movie.title}`} className="PosterImage" />
          <div>
            <h1>{movie.title}</h1>
            <p className="genres">{movie.genres.join(', ')}</p>
            <div className="starRating">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="rgb(232, 238, 190)">  
                <path d="M20 7h-7L10 .5 7 7H0l5.46 5.47-1.64 7 6.18-3.7 6.18 3.73-1.63-7z"/>
              </svg>              
              {movie.rating} / 10
            </div>
            <p>{movie.description}</p>
          </div>
        </div>
        <div className="cast">
          <h2>CAST</h2>
          <ul>
            {movie.cast.map(member => renderCastMember(member))}
          </ul>
        </div>
      </div>
    );
  }

  function renderLoading() {
    return (<h2>Loading...</h2>);
  }

  function renderCastMember(castMember) {
    return (<li key={castMember.character}>{castMember.actor} <em>as {castMember.character}</em></li>)
  }

  return movie ? renderDetails() : renderLoading();
}

export default MovieDetail;
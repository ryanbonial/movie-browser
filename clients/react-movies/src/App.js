import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom'

import './App.css';
import MovieList from './pages/MovieList';
import MovieDetail from './pages/MovieDetail';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const moviesResp = await fetch('/movies.json');
      const movies = await (moviesResp.json());
      movies.forEach((movie, idx) => { movie.id = idx + 1 });
      setMovies(movies);
    }
    fetchMovies();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h3>Movie Browser</h3>
      </header>
      <main className="MainContent">
        <Switch>
          <Route path="/" exact render={(props) => <MovieList {...props} movies={movies} />} />
          <Route path="/movie-detail/:id"  render={(props) => <MovieDetail {...props} movies={movies} />} />
        </Switch>      
      </main>
    </div>
  );
}

export default App;

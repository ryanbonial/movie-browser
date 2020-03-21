import React from 'react';
import './App.css';
import MovieList from './pages/MovieList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Movie Browser</h3>
      </header>        

      <MovieList></MovieList>
    </div>
  );
}

export default App;

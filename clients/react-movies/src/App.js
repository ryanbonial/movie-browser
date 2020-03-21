import React from 'react';
import { Route, Switch } from 'react-router-dom'

import './App.css';
import MovieList from './pages/MovieList';
import MovieDetail from './pages/MovieDetail';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Movie Browser</h3>
      </header>
      <Switch>
        <Route path="/" component={MovieList} exact />
        <Route path="/movie-detail/:id" component={MovieDetail} />
      </Switch>      
    </div>
  );
}

export default App;

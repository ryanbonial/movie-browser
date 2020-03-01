const fetch = require('node-fetch');

const topMovies = require('./imdb-top-movies.json');
const serverConfig = require('./json-server.json');


fetch(`http://localhost:${serverConfig.port}/movies`, {
  method: 'post',
  body: JSON.stringify(topMovies[0]),
  headers: { 'Content-Type': 'application/json' },
}).then(res => res.json())
  .then(json => console.log(json));


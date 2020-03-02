const fetch = require('node-fetch');

const topMovies = require('./imdb-top-movies.json');
const serverConfig = require('./json-server.json');

topMovies.forEach(async movie => {
  const res = await fetch(`http://localhost:${serverConfig.port}/movies`, {
    method: 'post',
    body: JSON.stringify(movie),
    headers: { 'Content-Type': 'application/json' },
  });
  const json = await res.json();
  console.log(json)
});
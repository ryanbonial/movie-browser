const fetch = require('node-fetch');

const topMovies = require('./imdb-top-movies.json');
const serverConfig = require('./json-server.json');

async function runIt() {
  for (let movie of topMovies) {
    const res = await fetch(`http://localhost:${serverConfig.port}/movies`, {
      method: 'post',
      body: JSON.stringify(movie),
      headers: { 'Content-Type': 'application/json' },
    });
    const json = await res.json();
    console.log(json)
    await new Promise(resolve => setTimeout(resolve, 100));
  }
}

runIt();
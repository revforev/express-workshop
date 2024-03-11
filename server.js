const express = require('express');

const server = express();

// Tell the server to call our GET

server.get('/', (request, response, next) => {
  console.log(request.method + ' ' + request.url);
  next();
});

server.get('/', (request, response) => {
  response.send('<h1>Hello</h1>');
});

server.use((request, response) => {
  response.status(404).send('<h1>Not found</h1>');
});

// Listen to a port

const PORT = 3000;


server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));

// POST method to submit user data to from forms

server.post('/submit', (request, response) => {
  console.log('posted');
  response.send('thanks for submitting');
});

// Request Body

const bodyParser = express.urlencoded();

server.post('/submit', bodyParser, (request, response) => {
  console.log(request.body);
  response.send('thanks for submitting');
});

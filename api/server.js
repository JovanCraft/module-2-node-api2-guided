// BREAK UP THIS MONOLITHIC FILE USING ROUTES
// BREAK UP THIS MONOLITHIC FILE USING ROUTES
// BREAK UP THIS MONOLITHIC FILE USING ROUTES
const express = require('express');
const adoptersRouter = require('./adopters/adopters-router')
const dogsRouter = require('./dogs/dogs-router')

const server = express();

server.use(express.json());//need this line to add things to req.body in post requests!!!
//server.use(adoptersRouter);
server.use('/api/adopters', adoptersRouter)
server.use('/api/dogs', dogsRouter)



// OTHER ENDPOINTS
// OTHER ENDPOINTS
// OTHER ENDPOINTS
server.get('/', (req, res) => {
  res.send(`
    <h2>Shelter API</h>
    <p>Welcome to the Shelter API</p>
  `);
});

module.exports = server;

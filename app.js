require('dotenv').config();

const Server = require('./models/server');

// levnatar la instancia del server 
const server = new Server();

// Escuchar el puereto 

server.listen();


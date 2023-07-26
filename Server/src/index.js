const express = require('express');
const router = require('./routes/index')
const morgan = require('morgan');
const server = express();
const cors = require('cors');
const PORT = 3001;

server.use(morgan('dev'));
server.use(cors());
server.use(express.json());

server.use('/rickandmorty', router)

server.listen(PORT, () => {
    console.log(`Server raised in port: ${PORT}`);
});

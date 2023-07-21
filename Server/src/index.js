const http = require('http');
const getCharById = require('./controllers/getCharById');

http.createServer((req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    const { url } = req;
    
//! Este console.log es solo de prueba
    console.log(url);

    if (url.includes("/rickandmorty/character")) {
        const id = url.split("/").at(-1);
        getCharById(res, id)
    }
}).listen(3001, 'localhost')
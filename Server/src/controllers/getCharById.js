const axios = require('axios');

const getCharById = (res, id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(({data}) => {
        const { name, gender, species, origin, image, status } = data;

        res.writeHead(200,{"Content-Type":"Application/json"})
        res.end(JSON.stringify({id, name, gender, species, origin, image, status}))
    })
    .catch((err) => {
        res.writeHead(500,{"Content-Type":"text/plain"})
        res.end(err.message)
    })
}

module.exports = getCharById;
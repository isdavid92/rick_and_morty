const axios = require('axios');
const URL_BASE = 'https://rickandmortyapi.com/api/character/';

const getCharById = (req, res) => {
    const id = parseInt(req.params.id);


    axios(`${URL_BASE}${id}`)
    .then(({ data }) => {
        const { name, gender, species, origin, image, status } = data;
        const character = { id, name, gender, species, origin, image, status };

        return character.name ? res.status(200).json(character) : res.status(404).send('Not found')
    })
    .catch((error) => {
        res.status(500).json({error:error.message})
    })
}

module.exports = getCharById;
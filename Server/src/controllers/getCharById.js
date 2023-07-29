const axios = require('axios');
const errorHandler = require('../utils/errors')
const URL_BASE = 'https://rickandmortyapi.com/api/character/';

const getCharById = async (req, res) => {
    const id = parseInt(req.params.id);

    try {
        const respose = await axios(`${URL_BASE}${id}`);
        const { name, gender, species, origin, image, status } = respose.data;
        const character = { id, name, gender, species, origin, image, status };

        return res.status(200).json(character)
    } catch (error) {
        errorHandler(res, error)
    }
}

module.exports = getCharById;
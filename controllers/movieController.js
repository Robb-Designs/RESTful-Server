const axios = require('axios');
require('dotenv').config();


async function searchMovies(req, res) {
    try {
        const title = req.query.title
        const response = await axios.get(
            `http://www.omdbapi.com/?s=${title}&apikey=${process.env.OMDB_API_KEY}`
        );


        res.json(response.data);
    } catch (error) {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.error('API Error:', error.response.status, error.response.data);
            res.status(error.response.status).json({ message: 'Error fetching data from external API.' });
        } else {
            // Something happened in setting up the request that triggered an Error
            console.error('Network Error:', error.message);
            res.status(500).json({ message: 'A network error occurred.' });
        }
    }
}
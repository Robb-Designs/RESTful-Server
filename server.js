// DEPENDENCIES--------------------------------------------------------------------------------------------
const express = require('express');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT;

const movieRouter = require('./routes/movieRoutes.js');
const { searchMovies } = require('./controllers/movieController.js');



// MIDDLEWARE--------------------------------------------------------------------------------------------
//Route Mounting
app.use('/api', movieRouter);



// ROUTES--------------------------------------------------------------------------------------------
//Test Route
app.get('/', (req, res) => {
    res.send('Testing route...')
})

//PORT--------------------------------------------------------------------------------------------
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
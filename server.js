// DEPENDENCIES--------------------------------------------------------------------------------------------
const express = require('express');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT;

const movieRouter = require('./routes/movieRoutes.js');



// MIDDLEWARE--------------------------------------------------------------------------------------------
//Route Mounting
app.use('/api', movieRoutes);



// ROUTES--------------------------------------------------------------------------------------------
//Test Route
app.get('/', (req, res) => {
    res.send('Testing route...')
})




//PORT--------------------------------------------------------------------------------------------
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
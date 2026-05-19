const express = require('express');
const router = express.Router(); //empty router obj

//Imported 2 Controller Functions
const { searchMovies, getMovieDetails } = require('../controllers/movieController.js');




// ADDING ROUTES TO EMPTY ROUTER OBJ VARIABLE ABOVE
//search route
router.get('/search', searchMovies);

//Movie Details Route
router.get('/movies/:id', getMovieDetails);

module.exports = router;
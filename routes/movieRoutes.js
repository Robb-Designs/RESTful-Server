const express = require('express');
const router = express.Router();

//Imported 2 Controller Functions
const { searchMovies, getMovieDetails } = require('../controllers/movieController.js');
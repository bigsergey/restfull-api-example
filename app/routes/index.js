var express = require('express');
var movies = require('./movies');

var router = express.Router();


//middleware to use for all requests
router.use(function(req, res, next) {
	//do logging
	console.log('Request handled!');
	next();
});

router.get('/', function(req, res) {
    res.json({
        message: 'Welcome to our api!'
    });
});

router.use('/movies', movies);

module.exports = router;
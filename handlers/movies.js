'use strict';

var Movie = require('./../models/movie');

/**
 * Operations on /movies
 */
module.exports = {
    /**
     * Returns all movies from the Rental Service
     * parameters: tags, limit
     * produces: application/json
     */
    get: function findMovies(req, res) {
        res.send(501);
    },
    /**
     *
     * parameters: body
     * produces: application/json
     */
    post: function addMovie(req, res, next) {
        Movie.create(req.body, function (err, post) {
            if (err) return next(err);
            res.json(post);
        });
    },
    /**
     *
     * parameters: body
     * produces: application/json
     */
    put: function updateMovie(req, res) {
        res.send(501);
    }
};
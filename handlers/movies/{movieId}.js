'use strict';

var Movie = require('./../../models/movie');

/**
 * Operations on /movies/{movieId}
 */
module.exports = {
    /**
     *
     * parameters: movieId
     * produces: application/json
     */
    get: function getMovieById(req, res, next) {
        Movie.findById(req.params.movieId, function(err, post) {
            if (err) return next(err);
            res.status(200);
            res.json(post);
        });
    },
    /**
     *
     * parameters: movieId, title, status
     * produces: application/json
     */
    put: function updateMovieById(req, res, next) {
        Movie.findByIdAndUpdate(req.params.movieId, req.body, function(err, post) {
            if (err) return next(err);
            res.status(200);
            res.json(post);
        });
    },
    /**
     *
     * parameters: movieId
     * produces:
     */
    delete: function deleteMovieById(req, res, next) {
        Movie.findByIdAndRemove(req.params.movieId, function(err, post) {
            if (err) return next(err);
            res.status(200);
            res.json(post);
        });
    }
};

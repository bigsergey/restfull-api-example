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

        if (!Movie.isValidId(req.params.movieId)) {
            var badRequest = new Error('Invalid movie ID');
            badRequest.status = 400;
            return next(badRequest);
        }

        Movie.findById(req.params.movieId, function(err, post) {

            if (err) return next(err);

            if (!post) {
                var notFound = new Error('Movie not found');
                notFound.status = 404;
                return next(notFound);
            }

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
        if (!Movie.isValidId(req.params.movieId)) {
            var badRequest = new Error('Invalid movie ID');
            badRequest.status = 400;
            return next(badRequest);
        }

        Movie.findByIdAndUpdate(req.params.movieId, req.body, function(err, post) {
            if (err) return next(err);

            if (!post) {
                var notFound = new Error('Movie not found');
                notFound.status = 404;
                return next(notFound);
            }

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
        if (!Movie.isValidId(req.params.movieId)) {
            var badRequest = new Error('Invalid movie ID');
            badRequest.status = 400;
            return next(badRequest);
        }

        Movie.findByIdAndRemove(req.params.movieId, function(err, post) {
            if (err) return next(err);

            if (!post) {
                var notFound = new Error('Movie not found');
                notFound.status = 404;
                return next(notFound);
            }

            res.status(200);
            res.json(post);
        });
    }
};

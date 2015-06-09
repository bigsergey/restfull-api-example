'use strict';

var Movie = require('./../models/movie');
var _ = require('lodash-node');

/**
 * Operations on /movies
 */
module.exports = {
    /**
     * Returns all movies from the Rental Service
     * parameters: title, limit
     * produces: application/json
     */
    get: function findMovies(req, res, next) {
        if (_.isEmpty(req.query)) {
            Movie.find(function(err, post) {
                if (err) return next(err);

                if (!post) {
                    var notFound = new Error('Movies not found');
                    notFound.status = 404;
                    return next(notFound);
                }

                res.status(200);
                res.json(post);
            });
        } else {
            Movie.findByTitle(req.query.title).limit(req.query.limit || 0).exec(function(err, post) {
                if (err) return next(err);

                if (!post) {
                    var notFound = new Error('Movies not found');
                    notFound.status = 404;
                    return next(notFound);
                }

                res.json(post);
            });
        }
    },
    /**
     *
     * parameters: body
     * produces: application/json
     */
    post: function addMovie(req, res, next) {

        Movie.create(req.body, function(err, post) {
            if (err) return next(err);
            res.status(200);
            res.json(post);
        });
    }
};

'use strict';

var User = require('./../../../models/user');
var Movie = require('./../../../models/movie');

/**
 * Operations on /users/{userId}/movies
 */
module.exports = {

    /**
     *
     * parameters: userId
     * produces: application/json
     */
    get: function userMovies(req, res, next) {
        if (!User.isValidId(req.params.userId)) {
            var badRequest = new Error('Invalid user ID');
            badRequest.status = 400;
            return next(badRequest);
        }

        User.findById(req.params.userId, function(err, post) {
            if (err) return next(err);

            if (!post) {
                var notFound = new Error('User not found');
                notFound.status = 404;
                return next(notFound);
            }

            var movies = [];
            var stream = Movie.find({
                _id: {
                    $in: post.movies
                }
            }).stream();
            stream.on('data', function(movie) {
                movies.push(movie);
            }).on('error', function(err) {
                console.log('Movie find error', err);
            }).on('close', function() {
                res.status(200);
                res.json(movies);
            });
        });
    },

    /**
     *
     * parameters: userId, body
     * produces: application/json
     */
    put: function updateUserMovies(req, res, next) {
        if (!User.isValidId(req.params.userId)) {
            var badRequest = new Error('Invalid user ID');
            badRequest.status = 400;
            return next(badRequest);
        }

        User.update({
            _id: req.params.userId
        }, {
            $set: {
                movies: req.body
            }
        }, function(err, post) {
            if (err) return next(err);

            if (!post) {
                var notFound = new Error('User not found');
                notFound.status = 404;
                return next(notFound);
            }

            res.status(200);
            res.json(post);
        });
    }

};

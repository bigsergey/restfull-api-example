'use strict';

var User = require('./../../../models/user');
var Movie = require('./../../../models/movie');
var _ = require('lodash-node');

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
        User.findById(req.params.userId, function(err, post) {
            if (err) return next(err);
            var movies = [];
            var stream = Movie.find({ _id: {$in: post.movies}}).stream();
            stream.on('data', function (movie) {
                movies.push(movie);
            }).on('error', function(err) {
                console.log('Movie find error', err);
            }).on('close', function(){
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
        User.update({
            _id: req.params.userId
        }, {
            $set: {
                movies: req.body
            }
        }, function(err, post) {
            if (err) return next(err);
            res.json(post);
        });
    }

};

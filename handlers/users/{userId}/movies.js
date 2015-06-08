'use strict';

var User = require('./../../../models/user');

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
            res.json(post.movies);
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

'use strict';

var User = require('./../../models/user');

/**
 * Operations on /users/{userId}
 */
module.exports = {
    /**
     *
     * parameters: userId
     * produces: application/json
     */
    get: function getUserById(req, res, next) {
        User.findById(req.params.userId, function(err, post) {
            if (err) return next(err);
            res.status(200);
            res.json(post);
        });
    },
    /**
     *
     * parameters: userId, body
     * produces: application/json
     */
    put: function updateUserById(req, res, next) {
        User.findByIdAndUpdate(req.params.userId, req.body, function(err, post) {
            if (err) return next(err);
            res.status(200);
            res.json(post);
        });
    },
    /**
     *
     * parameters: userId
     * produces: application/json
     */
    delete: function deleteUserById(req, res, next) {
        User.findByIdAndRemove(req.params.userId, function(err, post) {
            if (err) return next(err);
            res.status(200);
            res.json(post);
        });
    }
};

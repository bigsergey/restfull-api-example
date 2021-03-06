'use strict';

var User = require('./../models/user');
var _ = require('lodash-node');

/**
 * Operations on /users
 */
module.exports = {
    /**
     * Returns all Users from the Rental Service
     * parameters: username
     * produces: application/json
     */
    get: function findUsers(req, res, next) {
        if (_.isEmpty(req.query)) {
            User.find(function(err, post) {
                if (err) return next(err);
                res.json(post);
            });
        } else {
            User.findByTitle(req.query.username).limit(req.query.limit || 0).exec(function(err, post) {
                if (err) return next(err);
                res.json(post);
            });
        }
    },
    /**
     *
     * parameters: body
     * produces: application/json
     */
    post: function createUser(req, res, next) {
        User.create(req.body, function(err, post) {
            if (err) return next(err);
            res.json(post);
        });
    }
};

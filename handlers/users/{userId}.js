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
        if (!User.isValidId(req.params.userId)) {
            var badRequest = new Error('Invalid user ID');
            badRequest.status = 400;
            return next(badRequest);
        }

        User.findByIdAndUpdate(req.params.userId, req.body, function(err, post) {
            if (err) return next(err);

            if (!post) {
                var notFound = new Error('User not found');
                notFound.status = 404;
                return next(notFound);
            }

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
        if (!User.isValidId(req.params.userId)) {
            var badRequest = new Error('Invalid user ID');
            badRequest.status = 400;
            return next(badRequest);
        }

        User.findByIdAndRemove(req.params.userId, function(err, post) {
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

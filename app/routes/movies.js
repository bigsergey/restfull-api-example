var _ = require('lodash-node');
var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

var Movie = require('../models/movie');

/* GET /movies?name=value */
router.get('/', function(req, res, next) {
    if (_.isEmpty(req.query)) {
        Movie.find(function(err, post) {
            if (err) return next(err);
            res.json(post);
        });
    } else {
        Movie.findByName(req.query.name, function(err, post) {
            if (err) return next(err);
            res.json(post);
        });
    }
});

/* POST /movies */
router.post('/', function(req, res, next) {
    Movie.create(req.body, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* GET /movies/:id */
router.get('/:id', function(req, res, next) {
    Movie.findById(req.params.id, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* PUT /movies/:id */
router.put('/:id', function(req, res, next) {
    Movie.findByIdAndUpdate(req.params.id, req.body, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* DELETE /movies/:id */
router.delete('/:id', function(req, res, next) {
    Movie.findByIdAndRemove(req.params.id, req.body, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;

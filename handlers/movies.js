'use strict';
/**
 * Operations on /movies
 */
module.exports = {
    /**
     * Returns all movies from the Rental Service
     * parameters: tags, limit
     * produces: application/json
     */
    get: function findMovies(req, res) {
        res.send(501);
    },
    /**
     * 
     * parameters: body
     * produces: application/json
     */
    post: function addMovie(req, res) {
        res.send(501);
    },
    /**
     * 
     * parameters: body
     * produces: application/json
     */
    put: function updateMovie(req, res) {
        res.send(501);
    }
};
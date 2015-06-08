'use strict';
/**
 * Operations on /movies/{movieId}
 */
module.exports = {
    /**
     * 
     * parameters: movieId
     * produces: application/json
     */
    get: function getMovieById(req, res) {
        res.send(501);
    },
    /**
     * 
     * parameters: movieId, title, status
     * produces: application/json
     */
    put: function updateMovieWithForm(req, res) {
        res.send(501);
    },
    /**
     * 
     * parameters: movieId
     * produces: 
     */
    delete: function deleteMovie(req, res) {
        res.send(501);
    }
};
'use strict';
/**
 * Operations on /users/{username}
 */
module.exports = {
    /**
     * 
     * parameters: username
     * produces: application/json
     */
    get: function getUserByName(req, res) {
        res.send(501);
    },
    /**
     * 
     * parameters: username, body
     * produces: application/json
     */
    put: function updateUser(req, res) {
        res.send(501);
    },
    /**
     * 
     * parameters: username
     * produces: application/json
     */
    delete: function deleteUser(req, res) {
        res.send(501);
    }
};
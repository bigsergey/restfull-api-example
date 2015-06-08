'use strict';

function user(options) {
    if (!options) {
        options = {};
    }
    
    this.id = options.id;
    this.username = options.username;
    this.firstName = options.firstName;
    this.lastName = options.lastName;
    this.email = options.email;
    this.movies = options.movies;
}

module.exports = user;

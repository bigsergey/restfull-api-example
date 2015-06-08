'use strict';

function movie(options) {
    if (!options) {
        options = {};
    }
    
    this.id = options.id;
    this.categories = options.categories;
    this.title = options.title;
    this.posterUrls = options.posterUrls;
}

module.exports = movie;

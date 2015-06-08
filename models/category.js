'use strict';

function Category(options) {
    if (!options) {
        options = {};
    }
    
    this.id = options.id;
    this.title = options.title;
}

module.exports = Category;

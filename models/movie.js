'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var validId = require('mongoose-valid-id');

var MovieSchema = new Schema({
	title: String,
	posterUrls: [String],
	categories: [String]
});

MovieSchema.static('findByTitle', function (title, callback) {
	return this.find({title: title}, callback);
});

MovieSchema.plugin(validId);

module.exports = mongoose.model('Movie', MovieSchema);

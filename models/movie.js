'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var MovieSchema = new Schema({
	title: String,
	posterUrls: [String],
	categories: [Schema.Types.ObjectId]
});

MovieSchema.static('findByTitle', function (title, callback) {
	return this.find({title: title}, callback);
});

module.exports = mongoose.model('Movie', MovieSchema);

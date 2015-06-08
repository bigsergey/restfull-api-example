'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
	username: String,
	firstName: String,
	lastName: String,
	email: String,
	movies: [Schema.Types.ObjectId]
});

UserSchema.static('findByUsername', function (username, callback) {
	return this.find({username: username}, callback);
});

module.exports = mongoose.model('User', UserSchema);

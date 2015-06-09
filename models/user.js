'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var validId = require('mongoose-valid-id');

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

UserSchema.plugin(validId);

module.exports = mongoose.model('User', UserSchema);

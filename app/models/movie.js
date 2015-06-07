var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var MovieSchema = new Schema({
	name: String
});

MovieSchema.static('findByName', function (name, callback) {
	return this.find({name: name}, callback);
});

module.exports = mongoose.model('Movie', MovieSchema);
'use strict';

var Mongoose = require('mongoose');

// THIS IS OUR SCHEMA
var dogSchema = Mongoose.Schema({
	name: {type: String, required: true},
	age: {type: Number, required: true},
	sex: {type: String, required: true},
	photo: {type: String}
});

// THIS IS OUR MODEL
var Dog = Mongoose.model('Dog', dogSchema);

module.exports = Dog;

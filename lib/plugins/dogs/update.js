'use strict';

// WE NEED TO BRING IN OUR DOG MODEL
var Dog = require('../../models/dog')

exports.register = function(server, options, next) {
	server.route({
		method: 'PUT',
		path: '/dogs/{dogId}',
		config: {
			description: 'Update a SINGLE dog',
			handler: function(request, reply) {
				// Dog.findOne({_id: request.params.dogId}, function(err, dogs){
				Dog.findByIdAndUpdate(request.params.dogId, request.payload, function(err, dog){
					return reply(dog);
				});

			}
		}
	});
	return next();
};

exports.register.attributes = {
	name: 'dogs.update'
};

'use strict';

// WE NEED TO BRING IN OUR DOG MODEL
var Dog = require('../../models/dog')

exports.register = function(server, options, next) {
	server.route({
		method: 'DELETE',
		path: '/dogs/{dogId}',
		config: {
			description: 'Delete a SINGLE dog',
			handler: function(request, reply) {
				// Dog.findOne({_id: request.params.dogId}, function(err, dogs){
				Dog.findByIdAndRemove(request.params.dogId, function(err, dog){
					return reply(dog);
				});

			}
		}
	});
	return next();
};

exports.register.attributes = {
	name: 'dogs.destroy'
};

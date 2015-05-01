'use strict';

// WE NEED TO BRING IN OUR DOG MODEL
var Dog = require('../../models/dog')

exports.register = function(server, options, next) {
	server.route({
		method: 'GET',
		path: '/dogs/{dogId}',
		config: {
			description: 'Get a SINGLE dogs',
			handler: function(request, reply) {
				// Dog.findOne({_id: request.params.dogId}, function(err, dogs){
				Dog.findById(request.params.dogId, function(err, dog){
					return reply(dog);
				});

			}
		}
	});
	return next();
};

exports.register.attributes = {
	name: 'dogs.show'
};

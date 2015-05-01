'use strict';

// WE NEED TO BRING IN OUR DOG MODEL
var Dog = require('../../models/dog')

exports.register = function(server, options, next) {
	server.route({
		method: 'POST',
		path: '/dogs',
		config: {
			description: 'Creates a dog',
			handler: function(request, reply) {
				var dog = new Dog(request.payload);
					dog.save(function() {
						if(dog.errors) {
							return reply(dog.errors).code(400);
						} else {
							// dog has finished saving
							return reply(dog);
						}
					});
			}
		}
	});
	return next();
};

exports.register.attributes = {
	name: 'dogs.create'
};

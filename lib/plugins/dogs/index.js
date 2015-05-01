'use strict';

// WE NEED TO BRING IN OUR DOG MODEL
var Dog = require('../../models/dog')

exports.register = function(server, options, next) {
	server.route({
		method: 'GET',
		path: '/dogs',
		config: {
			description: 'Get ALL dogs',
			handler: function(request, reply) {
				Dog.find(function(err, dogs){
					// NEVER SEND BACK AN ARRAY !!!!
					return reply({dogs: dogs});
				});

			}
		}
	});
	return next();
};

exports.register.attributes = {
	name: 'degs.index'
};

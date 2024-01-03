exports.handler = function (event, context) {
	console.log(event);
	context.succeed('¡Hola, ' + event.name + '!');
};
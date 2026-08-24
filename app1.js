function greet(name, callback) {
	const message = `Hello, ${name}!`;
	console.log(message);
	callback(message);
}

greet('World', (message) => {
	console.log(`Callback received: ${message}`);
});

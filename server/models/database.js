var pg = require('pg');
var path = require('path');
var connectionString = require(path.join(__dirname, '../', '../', 'config'));

var client = new pg.Client(connectionString);
client.connect();

var query = client.query('CREATE TABLE users(id SERIAL PRIMARY KEY, username VARCHAR(40) not null, email VARCHAR(80) not null, twitter VARCHAR(40), title VARCHAR(40), company VARCHAR(40), bookmark JSON)');

query.on('end', function() {
	client.end();
});
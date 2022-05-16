var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname));

var port = 9000;

app.get('/login', (req, res) => {
	res.sendFile(path.join(__dirname, 'html/login.html'));
});
app.get('/signup', (req, res) => {
	res.sendFile(path.join(__dirname, 'html/signup.html'));
});

app.post('/api', (req, res) => {
	if (req.body.type == "signup") {
		// Insert item in database
		console.log('SIGNIN ', req.body);

	}
	else if (req.body.type == "login") {
		// Check against item in database
		console.log('LOGIN: ', req.body);
	}
});

// start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port);

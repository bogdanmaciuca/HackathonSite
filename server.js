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
app.get('/chat', (req, res) => {
	res.sendFile(path.join(__dirname, 'html/chat.html'));
});

users = [];

app.post('/api', (req, res) => {
	if (req.body.type == "signup") {
		// Insert item in database
		console.log('SIGNUP ', req.body);

		var bOk = true;
		for(var i = 0; i < users.length; i++) {
			if (users[i].username == req.body.usr) {
				res.status(422).end();
				bOk = false;
				break;
			}
		}
		if (bOk) {
			users.push({
				username: req.body.usr,
				password: req.body.psw
			});
			res.status(200).end();
		}
	}
	else if (req.body.type == "login") {
		// Check against item in database
		console.log('LOGIN: ', req.body);
		var bOk = false;
		for (var i = 0; i < users.length; i++) {
			if (req.body.usr == users[i].username) {
				if (req.body.psw == users[i].password) {
					res.status(200).end();
					bOk = true;
				}
				break;
			}
		}
		if (!bOk)
			res.status(401).end();
	}
});

// start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port);

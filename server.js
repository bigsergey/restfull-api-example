'use strict';

var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var swaggerize = require('swaggerize-express');
var path = require('path');

var app = express();
var server = http.createServer(app);
var port = process.env.PORT || 8000;

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/restapi', function(err) {
    if (err) {
        console.log('Database connection error', err);
    } else {
        console.log('Database connection successful');
    }
});

app.use(bodyParser.json());

app.use(swaggerize({
    api: path.resolve('./config/swagger.json'),
    handlers: path.resolve('./handlers')
}));

app.use('/api-docs', function(req, res) {
    res.sendFile(path.join(__dirname,'/config/swagger.json'));
});
app.use('/swagger', express.static(path.join(__dirname, 'public')));


app.get('*', function(req, res, next) {
	var err = new Error();
	next(err);
});

app.use(function(err, req, res, next) {
	if(err.status !== 404) {
		return next(err);
	}
	res.status(404);
	res.send(err.message);
});

app.use(function(err, req, res, next) {
	if(err.status !== 400) {
		return next();
	}
	res.status(400);
	res.send(err.message);
});

app.use(function(err, req, res, next) {
	if(err.status !== 500) {
		return next(err);
	}
	res.status(500);
	res.send('Internal server error!');
});

server.listen(port, function() {
    app.setHost(server.address().address + ':' + server.address().port);
});

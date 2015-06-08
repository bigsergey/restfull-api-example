var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var http = require('http');
var swagger = require('swagger-express');
var api = require('./api');

var app = express();
var port = process.env.PORT || 8080;

var mongoose = require('mongoose');
var routes = require('./app/routes/index');

mongoose.connect('mongodb://localhost/restapi', function(err) {
    if (err) {
        console.log('Database connection error', err);
    } else {
        console.log('Database connection successful');
    }
});



app.set('port', port);
app.all('/*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(swagger.init(app, {
    apiVersion: '1.0',
    swaggerVersion: '1.0',
    basePath: 'http://localhost:8080',
    swaggerURL: '/swagger',
    swaggerJSON: '/api-docs.json',
    swaggerUI: './public/swagger/',
    apis: ['./api.js']
}));

app.use(express.static(path.join(__dirname, 'public')));



app.use('/api', routes);

app.post('/login', api.login);

http.createServer(app).listen(app.get('port'), function() {
    console.log("Express server listening on port " + app.get('port'));
});

var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


var routes = require('./app/routes/index');


var app = express();
var port = process.env.PORT || 8080;


mongoose.connect('mongodb://localhost/restapi', function(err) {
    if (err) {
        console.log('Database connection error', err);
    } else {
        console.log('Database connection successful');
    }
});


app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use('/api', routes);

app.listen(port);

console.log('Server is listening on port ' + port + ' http://localhost:' + port);

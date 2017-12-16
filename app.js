var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var routes = require('./routes/app');

var app = express();
// Connect to Mongoose
mongoose.connect('mondodb://localhost/xpost');
var db = mongoose.connection;

app.use(bodyParser.json());
app.use('/', require('./routes/app'));
app.listen(3000);
console.log('Running on port 3000');

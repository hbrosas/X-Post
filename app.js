var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var routes = require('./routes/app');

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', require('./routes/app'));

// Connect to Mongoose
mongoose.connect('mondodb://127.0.0.1/xpost');
var db = mongoose.connection;

app.listen(3000);
console.log('Running on port 3000');

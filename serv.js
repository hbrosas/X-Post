var express  = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');


var app = express();

// controllers
//var dataController = require('./server/controllers/data-controller');
process.env.SECRET_KEY = "SECRETMYKEY";

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//var config = require('./server/config/config.js');
//config.setConfig();

mongoose.connect(process.env.MONGOOSE_CONNECT);

//app.get('/api/authenticate', authenticateController.authenticate);
//app.get('/api/get-data', dataController.getById);
//app.post('/api/post-data', dataController.postData);

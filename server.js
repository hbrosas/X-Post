var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');
var logger = require('./logger.js');

process.env.SECRET_KEY = "mysecretkey";

function Server(port, router) {

	this.port = port;

	this.router = router;

	this.start = function() {

		var app = express();

        //parsers
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json());
        app.use(methodOverride());

        //routes
        app.use('/public', express.static(__dirname + '/public'));
    		app.use('/api', this.router);

				var authenticateController = require('./server/controllers/authenticate.controller');
				app.get('/api/authenticate', authenticateController.authenticate);
		// // User profile
		app.get('/signin', function(req, res){
			res.sendfile(__dirname + '/client/index.html');
		})

		app.get('/profile', function(req, res){
			res.sendfile(__dirname + '/client/profile.html');
		})

		app.get('/notifications', function(req, res){
			res.sendfile(__dirname + '/client/setting.html');
		})

    app.get('/notifications', function(req, res){
      res.sendfile(__dirname + '/client/dashboard.html');
    })

		// Posts
		app.listen(port, function() {
			logger.info('Server started at port ' + port + '.');
		});
	};
}

module.exports = Server;

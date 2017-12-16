var user = require('../models/user.model.js');

exports.create = function(req, res) {
    // Create and Save a new user

};

exports.findAll = function(req, res) {
    // Retrieve and return all user from the database.

};

exports.findOne = function(req, res) {
    // Find a single user with a userId

};

exports.update = function(req, res) {
    // Update a user identified by the userId in the request

};

exports.delete = function(req, res) {
    // Delete a user with the specified userId in the request

};

exports.create = function(req, res) {
    // Create and Save a new user
    if(!req.body.content) {
        res.status(400).send({message: "User can not be empty"});
    }
   var Schema = mongoose.Schema;
   var userSchema = Schema({
        userId : String,
        firstName : String,
        lastName : String,
        userName : String,
        emailAddress : String,
        password : String,
        birthday : String,
        gender : String,
        followers : Number,
        questions : Number,
        messages : Number}, 
            {
        timestamps: true
    });

	var User = mongoose.model('User', userSchema);
    User.save(function(err, data) {
        console.log(data);
        if(err) {
            console.log(err);
            res.status(500).send({message: "Some error occurred while creating the User."});
        } else {
            res.send(data);
        }
    });
};

exports.findAll = function(req, res) {
    // Retrieve and return all users from the database.
    user.find(function(err, users){
        if(err) {
            res.status(500).send({message: "Some error occurred while retrieving users."});
        } else {
            res.send(users);
        }
    });
};

exports.findOne = function(req, res) {
    // Find a single user with a userId
    User.findById(req.params.userId, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not retrieve user with id " + req.params.userId});
        } else {
            res.send(data);
        }
    });
};
exports.update = function(req, res) {
    // Update a user identified by the userId in the request
    user.findById(req.params.userId, function(err, user) {
        if(err) {
            res.status(500).send({message: "Could not find a user with id " + req.params.userId});
        }

        user.title = req.body.title;
        user.content = req.body.content;

        user.save(function(err, data){
            if(err) {
                res.status(500).send({message: "Could not update user with id " + req.params.userId});
            } else {
                res.send(data);
            }
        });
    });
};
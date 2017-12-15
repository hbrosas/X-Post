var User = require('../models/user.js');
var mongoose = require('mongoose');

//POST /User
exports.create = function(req, res) {

    var user = req.body;

    var signup = new User({
      firstName : user.firstName,
      lastName : user.lastName,
      username : user.username,
      email_Add : user.email_Add,
      password : user.password,
      birthday : user.birthday,
      gender : user.gender,
    });

    signup.save(function(err, data) {
        if(err) return console.error(err);
    });

    res.status(204).send();
}



//GET /User/:id
exports.getById = function(req, res, next) {
    return next(new Error('Oops this is an intentional error'));

    var id = req.params.id;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send();
    } else {
        User.findById(id, function(err, data) {
            if(err) return next(err);

            if(data) {
                res.status(200).json(data);
            } else {
                res.status(404).send();
            }
        });
    }
}

//GET /User
exports.getAll = function(req, res) {

    User.find(function(err, data) {
        if(err) return console.error(err);

        res.status(200).json(data);
    });
}

//DELETE /Post/:id
exports.delete = function(req, res) {
    var id = req.params.id;
    Post.findByIdAndRemove(id, function(err, data) {
        if(err) return console.error(err);

        res.status(204).send();
    });
}

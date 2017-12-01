var Book = require('../models/book.js');
var mongoose = require('mongoose');

//POST /
exports.create = function(req, res) {

    var post = req.body;

    var entry = new Post({
        post = post.user;
        date = post.date;
        numReveals = post.numReveals;
    });

    var user

    entry.save(function(err, data) {
        if(err) return console.error(err);
    });

    res.status(204).send();
}

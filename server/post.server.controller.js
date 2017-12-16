const Post = require("../models/post.model.js");

exports.getAll = function(req, res) {

    Post.findAll()
        .then((Posts) => {
            return res.status(200).json(Posts);
        })
        .catch((error) => {
            console.log(error);
            return res.status(400).send();
        });
}

exports.getById = function(req, res) {

    Post.findById(req.params.PostId, function(err, Post) {
        if(err) {
            console.log(err);
            return res.status(500).send();
        } else {
            return res.status(200).send(Post);
        }
    });
}

exports.create = function(req, res) {
    let Post = new Post(req.body);

    Post.save((err, Post) => {
        if(err) {
            console.log(err);
            return res.status(500).send();
        } else {
            return res.status(204).send();
        }
    });
}

exports.delete = function(req, res) {
    console.log(req.params.PostId);

    Post.findByIdAndRemove(req.params.PostId, function(err, data) {
        if(!err) {
            res.status(204).send();
        } else {
            res.status(500).send();
        }
    });
}

exports.update = function(req, res) {
    console.log(req.params.PostId);
    let Post = {
        yesterday: req.body.yesterday,
        today: req.body.today,
        impediment: req.body.impediment
    }

    Post.findByIdAndUpdate(req.params.PostId, Post, function(err, data) {
        if(!err) {
            res.status(204).send();
        } else {
            res.status(500).send();
        }
    })
}

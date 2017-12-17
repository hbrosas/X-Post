const Post = require("../models/post.model.js");

exports.getAll = function(req, res) {
    Post.findAll()
        .then((posts) => {
            return res.status(200).send(posts);
        })
        .catch((error) => {
            console.log(error);
            return res.status(400).send();
        });
}

exports.getById = function(req, res) {
    Post.findById(req.params.postId, function(err, postId) {
        if(err) {
            console.log(err);
            return res.status(500).send();
        } else {
            return res.status(200).send(Post);
        }
    });
}

exports.create = function(req, res) {
    let post = new Post(req.body);
		console.log("POST" + req.body.postContent);
    post.save((err, post) => {
        if(err) {
            console.log(err);
            return res.status(500).send();
        } else {
            return res.status(204).send();
        }
    });
}

exports.delete = function(req, res) {
    console.log(req.params.postId);
    Post.findByIdAndRemove(req.params.postId, function(err, data) {
        if(!err) {
            res.status(204).send();
        } else {
            res.status(500).send();
        }
    });
}

exports.update = function(req, res) {
    console.log(req.params.postId);
    let post = {
        postContent: req.body.postContent
    }

    Post.findByIdAndUpdate(req.params.postId, post, function(err, data) {
        if(!err) {
            res.status(204).send();
        } else {
            res.status(500).send();
        }
    })
}

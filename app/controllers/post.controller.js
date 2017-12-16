var post = require('../models/post.model.js');

exports.create = function(req, res) {
    // Create and Save a new post

};

exports.findAll = function(req, res) {
    // Retrieve and return all post from the database.

};

exports.findOne = function(req, res) {
    // Find a single post with a postId

};

exports.update = function(req, res) {
    // Update a post identified by the postId in the request

};

exports.delete = function(req, res) {
    // Delete a post with the specified postId in the request

};

exports.create = function(req, res) {
    // Create and Save a new post
    if(!req.body.content) {
        res.status(400).send({message: "post can not be empty"});
    }
   var post = new Post({
   postType : req.body.postType,
   postContent : req.body.postContent,
   numReveals : req.body.numReveals,
   postDate : req.body.postDate,
   postTo : req.body.postTo
});

    post.save(function(err, data) {
        console.log(data);
        if(err) {
            console.log(err);
            res.status(500).send({message: "Some error occurred while creating the post."});
        } else {
            res.send(data);
        }
    });
};

exports.findAll = function(req, res) {
    // Retrieve and return all posts from the database.
    post.find(function(err, posts){
        if(err) {
            res.status(500).send({message: "Some error occurred while retrieving posts."});
        } else {
            res.send(posts);
        }
    });
};

exports.findOne = function(req, res) {
    // Find a single post with a postId
    post.findById(req.params.postId, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not retrieve post with id " + req.params.postId});
        } else {
            res.send(data);
        }
    });
};
exports.update = function(req, res) {
    // Update a post identified by the postId in the request
    post.findById(req.params.postId, function(err, post) {
        if(err) {
            res.status(500).send({message: "Could not find a post with id " + req.params.postId});
        }

        post.title = req.body.title;
        post.content = req.body.content;

        post.save(function(err, data){
            if(err) {
                res.status(500).send({message: "Could not update post with id " + req.params.postId});
            } else {
                res.send(data);
            }
        });
    });
};
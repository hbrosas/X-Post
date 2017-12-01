var mongoose = require('mongoose');

var postSchema = mongoose.Schema({
   postId = String;
   postCategory = String;
   message = String;
   numReveals = String;
   date = String;
});

var Post = mongoose.model('Post', postSchema);

module.exports = Post;

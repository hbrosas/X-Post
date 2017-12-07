var mongoose = require('mongoose');
var Schema  = mongoose.Schema;
var postSchema = new Schema({
   postId = String;
   postCategory = String;
   message = String;
   numReveals = String;
   date = String;
});

var Post = mongoose.model('Post', postSchema);

module.exports = Post;

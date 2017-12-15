var mongoose = require('mongoose');
var Schema  = mongoose.Schema;
var postSchema = new Schema({
   postId = String;
   postType = Number;
   postContent = String;
   numReveals = Number;
   postDate = String;
   postTo = String;
});

var Post = mongoose.model('Post', postSchema);

module.exports = Post;

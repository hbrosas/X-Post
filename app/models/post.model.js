var mongoose = require('mongoose');
var postSchema = mongoose.Schema({
   postType : String,
   postContent : String,
   numReveals : String,
   postDate : String,
   postTo : String },
               {
        timestamps: true
});

var Post = mongoose.model('Post', postSchema);
module.exports = mongoose.model('Post', postSchema);


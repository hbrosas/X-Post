const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Post Schema & Model
let PostSchema = new Schema({
		postContent: { type: String, required: true },
		currReveals: Number,
		expReveals: Number,
		postTo: String,
		postType: Number,
		createdOn: { type: Date, default: Date.now }
});


var Post = mongoose.model("Post", PostSchema);
module.exports = Post;

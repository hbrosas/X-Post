const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Post Schema & Model
let PostSchema = new Schema({
	postContent: { type: String, required: true },
	currReveals: Number,
	expReveals: Number,
	postTo: String,
	postType: Number
	},{
		timestamps: true
	}
});


var Post = mongoose.model("Post", PostSchema);

module.exports = Post;

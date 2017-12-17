const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Post Schema & Model
let PostSchema = new Schema({
		postContent: { type: String, required: true },
		createdOn: { type: Date, default: Date.now }
});

PostSchema.statics = {
    findAll() {
        return new Promise((resolve, reject) => {
            this.find({}, (err, posts) => {
                if(!err) {
                    resolve(posts);
                } else {
                    reject(err);
                }
            });
        });
    }
};

var Post = mongoose.model("Post", PostSchema);
module.exports = Post;

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var FollowSchema = new Schema ({
	followerId: Number,
	foloweeId: Number
});


var Follow = mongoose.model("Follow", FollowSchema);

module.exports = Follow;

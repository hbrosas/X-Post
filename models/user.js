var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Create User Schema & Model
var UserSchema = new Schema({
	userid: {
		type: Integer,
	}
});

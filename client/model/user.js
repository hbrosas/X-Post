
var app = express();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema({
    userId = {type: String, required:true},
    firstName = {type: String, required:true},
    lastName = {type: String, required:true},
    userName  ={type: String, required:true},
    emailAddress = {type: String, required:true},
    password = {type: String, required:true},
    birthday = {type: String, required:true},
    gender ={type: String, required:true},
    followers = Number;
    questions = Number;
    messages = Number;
});

var User = mongoose.model('User', userSchema);

module.exports = User;

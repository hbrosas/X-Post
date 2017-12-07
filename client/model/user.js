
var app = express();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema({
    userId = {type: String, required:true},
    firstName = {type: String, required:true},
    lastName = {type: String, required:true},
    username  ={type: String, required:true},
    email_Add = {type: String, required:true},
    password = {type: String, required:true},
    birthday = {type: String, required:true},
    gender ={type: String, required:true}
});

var User = mongoose.model('User', userSchema);

module.exports = User;

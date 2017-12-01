var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    userId = String;
    firstName = String;
    lastName = String;
    username = String;
    email_Add = String;
    password = String;
    birthday = String;
    gender = String;
});

var User = mongoose.model('User', userSchema);

module.exports = User;

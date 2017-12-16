var mongoose = require('mongoose');
var Schema = mongoose.Schema;
   var userSchema = Schema({
    firstName : String,
    lastName : String,
    userName : String,
    emailAddress : String,
    password : String,
    birthday : String,
    gender : String,
    followers : Number,
    questions : Number,
    messages : Number },
    {
    timestamps: true
});


var User = mongoose.model('User', userSchema);
module.exports = mongoose.model('User', userSchema);
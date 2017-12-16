const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

mongoose.Promise = global.Promise;

// Create User Schema & Model
let UserSchema = new Schema({
	firstName: { type: String, required: [true, 'First Name is Required'] },
	lastName: { type: String, required: [true, 'Last Name is Required'] },
	userName: { type: String, required: [true, 'Username is Required'] },
	emailAddress: { type: String, required: [true, 'Email Address Required'] },
	password: { type: String, required: [true, 'Password Required'] },
	birthday: String,
	gender: String
	},{
		timestamps: true
	}
});

userSchema.pre("save", function(next) {
    bcrypt
        .hash(this.password, 10)
        .then((hash) => {
            this.password = hash
            next();
        });
});

userSchema.statics = {
    findPasswordHash(name) {
        userid = name;

        return new Promise((resolve, reject) => {
            this.findOne({ name: userid }, (err, user) => {
                if(!err) {
                    if(user) {
                        resolve(user.password);
                    } else {
                        reject("User not found.");
                    }
                } else {
                    reject(err);
                }
            });
        });
    }
}

var User = mongoose.model("User", UserSchema);
module.exports = User;

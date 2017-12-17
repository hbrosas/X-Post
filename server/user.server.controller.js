const User = require("../models/user.model.js");

exports.register = (req, res) => {
    let entry = new User(req.body);

    entry.save((error, data) => {
        if(error) {
            console.error(error);
            return res.status(500).send();
        } else {
            return res.status(204).send();
        }
    });
}

module.exports = function(app) {

    var user = require('../controllers/user.controller.js');

    // Create a new Note
    app.post('/user', user.create);

    // Retrieve all user
    app.get('/user', user.findAll);

    // Retrieve a single Note with noteId
    app.get('/user/:userId', user.findOne);

    // Update a Note with noteId
    app.put('/user/:userId', user.update);

    // Delete a Note with noteId
    app.delete('/user/:userId', user.delete);
}
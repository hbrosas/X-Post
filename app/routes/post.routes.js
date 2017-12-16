module.exports = function(app) {

    var post = require('../controllers/post.controller.js');

    // Create a new Note
    app.post('/post', post.create);

    // Retrieve all post
    app.get('/post', post.findAll);

    // Retrieve a single Note with noteId
    app.get('/post/:noteId', post.findOne);

    // Update a Note with noteId
    app.put('/post/:noteId', post.update);

    // Delete a Note with noteId
    app.delete('/post/:noteId', post.delete);
}
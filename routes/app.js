let express = require("express");
let auth = require("./auth.js");
let sessionCtrl = require("./server/controllers/session.server.controller.js");
let postCtrl = require("./server/controllers/post.server.controller.js");
let userCtrl = require("./server/controllers/user.server.controller.js");
let router = express.Router();

// Index
router.get('/', function(req, res) {
	res.send('Hello Worlddddasd!');
});

// Session
router.post("/session", sessionCtrl.create);
router.post("/account/register", accountCtrl.register);

// Posts
router.get("/post", auth.check, postCtrl.getAll);
router.get("/post/:postId", auth.check, postCtrl.getById);
router.post("/post", auth.check, postCtrl.create);
router.put("/post/:postId", auth.check, postCtrl.update);
router.delete("/post/:postId", auth.check, postCtrl.delete);

module.exports = router;

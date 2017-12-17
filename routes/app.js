let express = require("express");
// let auth = require("./auth.js");
// let sessionCtrl = require("./server/controllers/session.server.controller.js");
let postCtrl = require("../server/post.server.controller.js");
let userCtrl = require("../server/user.server.controller.js");
let router = express.Router();

// Index
router.get('/', function(req, res) {
	res.redirect('index.html');
});
// Dashboard
router.get('/dashboard', function(req, res) {
	res.redirect('dashboard.html');
});

// Session
// router.post("/session", sessionCtrl.create);
// router.post("/account/register", accountCtrl.register);

// Posts
// router.get("/post", auth.check, postCtrl.getAll);
// router.get("/post/:postId", auth.check, postCtrl.getById);
// router.post("/post", auth.check, postCtrl.create);
// router.put("/post/:postId", auth.check, postCtrl.update);
// router.delete("/post/:postId", auth.check, postCtrl.delete);

router.get("/post", postCtrl.getAll);
router.get("/post/:postId",  postCtrl.getById);
router.post("/post", postCtrl.create);
router.put("/post/:postId", postCtrl.update);
router.delete("/post/:postId", postCtrl.delete);

module.exports = router;

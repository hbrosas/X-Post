var express = require("express");
var jwt = require("jsonwebtoken");
var sessionCtrl = require("./server/controllers/session.server.controller.js");
var postctrl = require("./server/controllers/meeting.server.controller.js");

var router = express.Router();


//routes

router.get('/users/:id', ctrl.getAll);
router.get('/posts/:id', ctrl.getById);
router.get('/posts', ctrl.getAll);
router.delete('/posts/:id', ctrl.delete);
router.patch('/posts/:id', ctrl.update);

//authentication middleware
router.use(function(req, res, next) {
    var token = req.headers.authorization;

    if(!req.url.startsWith("/session"))
    {
        if(!token) {
            return res.status(401).send();
        } else {
            jwt.verify(token, "secret", function(error, decoded) {
                if(error) {
                    return res.status(401).send();
                } else {
                    req.decoded = decoded;
                    next();
                }
            });
        }
    } else {
        next();
    }
});

//authorization middleware
router.use(function(req, res, next) {
    if(!req.url.startsWith("/session")) {
        console.log(req.decoded);

        var access = req.decoded.access.split(",");

        if(req.url == "/index" && access.includes("dashboard")) {
            next();
        } else {
            return res.status(401).send();
        }

    } else {
        next();
    }
});

router.get("/meeting", meetingCtrl.getAll);
router.post("/session", sessionCtrl.create);

module.exports = router;

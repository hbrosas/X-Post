var express = require('express');
var router = express.Router();

// Index
router.get('/', function(req, res) {
	res.send('Hello Worlddddasd!');
});

module.exports = router;

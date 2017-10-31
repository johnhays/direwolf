var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log(req.direwolf);
	res.render('index', { title: 'netTNC', direwolf: req.direwolf });
});

module.exports = router;

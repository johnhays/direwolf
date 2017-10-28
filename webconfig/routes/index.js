var express = require('express');
var fs = require('fs');
var router = express.Router();

var radios = require('../data/radios.json');
console.log(JSON.stringify(radios));
var modems = require('../data/modems.json');
console.log(JSON.stringify(modems));

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'netTNC', radios:radios, modems:modems });
});

module.exports = router;

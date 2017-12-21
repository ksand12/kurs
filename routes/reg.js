var express = require('express');
var router = express.Router();
var Themas = require('../models/themas').Themas;
/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('reg');	
});
 
router.post('/',function(req,res,next){
	var post = req.body;
	console.log(post)
});

module.exports = router;

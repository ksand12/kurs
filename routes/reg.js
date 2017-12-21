var express = require('express');
var router = express.Router();
var Themas = require('../models/themas').Themas;

//app.get('/logout', checkAuth, reg.logout);

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('reg');	
});
 
router.post('/',function(req,res,next){
	var post = req.body;
	var Users = require('../models/users').Users;
	var username = req.body.username;
	var password = req.body.password;
	var users = new Users({
		username: username,
		password: password
	});
	users.save(function(err, user){
		console.log(arguments);
		req.session.user = user._id;
	}); 

});

module.exports = router;




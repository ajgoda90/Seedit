var IUser = require('../interfaces/i-user-controller.js');
var self = null;

User.prototype = new IUser();

function User() {
  IUser.apply(this, arguments);
}

User.prototype.login = function(){
	this.app.post("/users/:username", function (req, res){
		
	});
}

User.prototype.getUser = function() {
  this.app.get("/users/:username", function(req, res) {
  	var response = {
  	  url : req.protocol + '://' + req.get('host') + req.originalUrl,
  	  type : req.method,
  	  query : req.query,
  	  params : req.params,
  	  body : req.body
  	}
    res.send(JSON.stringify(response));
  });
}

User.prototype.updateUser = function() {
  this.app.put("/users/:username", function(req, res) {
  	var response = {
  	  url : req.protocol + '://' + req.get('host') + req.originalUrl,
  	  type : req.method,
  	  query : req.query,
  	  params : req.params,
  	  body : req.body
  	}
    res.send(JSON.stringify(response));
  });
}

User.prototype.authUser = function() {
  this.app.post("/users/:username", function(req, res) {
  	console.log("see me?");
  	var response = {
  	  url : req.protocol + '://' + req.get('host') + req.originalUrl,
  	  type : req.method,
  	  query : req.query,
  	  params : req.params,
  	  body : req.body
  	}
    res.send(JSON.stringify(response));
  });
}

User.prototype.getUserIdeas = function() {
  this.app.get("/users/:username/ideas", function(req, res) {
  	var response = {
  	  url : req.protocol + '://' + req.get('host') + req.originalUrl,
  	  type : req.method,
  	  query : req.query,
  	  params : req.params,
  	  body : req.body
  	}
    res.send(JSON.stringify(response));
  });
}

User.prototype.initRoutes = function(){
	this.login();
	this.getUser();
	this.updateUser();
	this.authUser();
	this.getUserIdeas();
}

module.exports = function(){
	if (self === null){
		self = new User();
	}
	return self;
}



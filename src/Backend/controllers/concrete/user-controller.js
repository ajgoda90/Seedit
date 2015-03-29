var IUser = require('../interfaces/i-user-controller.js');
var self = null;

User.prototype = new IUser();

function User() {
  IUser.apply(this, arguments);
}

User.prototype.addUser = function() {
  var userModel = this.userModel;
  this.app.post("/users", function(req, res) {
    console.log(req.body);
    userModel.addUser(req.body.firstName, req.body.lastName, req.body.email, req.body.username, req.body.password, function(err, newUser) {
      if(!err) {
        res.end(JSON.stringify(newUser));
      }
      else {
        res.end(err.toString());
      }
    });
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
  var userModel = this.userModel;
  this.app.post("/users/:username", function(req, res) {
    req.body.password.split(":");
    console.log(req.body.password);
    res.end();
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
  this.addUser();
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



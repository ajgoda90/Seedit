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
  var userModel = this.userModel;
  this.app.get("/users/:username", function(req, res) {
    userModel.getUser(req.params.username, function(err, user) {
      if(!err) {
        var userInfo = {
          firstName : user.first_name,
          lastName : user.last_name,
          email : user.email,
          isGettingSelf : false
        }
        if(req.session.userName === user.username) {
          userInfo.isGettingSelf = true;
        }
        res.end(JSON.stringify(userInfo));
      }
      else {
        res.end(err.toString());
      }
    });
  });
}

User.prototype.updateUser = function() {
  var userModel = this.userModel;
  this.app.put("/users/:username", function(req, res) {
    var username = req.params.username;//req.param("username");
    if(username === req.session.userName) {
      //the user logged in is the one being updated
      var userID = req.session.userID;
      var user_json = req.body;
      //they shouldn't be able to update username or user_id
      //but in order to update with entity we need a param for each column in db
      user_json.username = username;
      user_json.user_id = userID;

      userModel.updateUser(user_json, function(err, user) {
        if(!err) {
          res.end(JSON.stringify(user));
        }
        else {
          res.end(err.toString());
        }
      });
    }
    else {
      //username in route isn't the username who is logged in
      res.end("Not authorized to edit that user");
    }
  });
}

User.prototype.authUser = function() {
  var userModel = this.userModel;
  this.app.post("/users/:username", function(req, res) {
    userModel.login(req.params.username, req.body.password, function(err, user) {
      if(!err) {
        if(user) {
          req.session.userID = user.user_id;
          req.session.userName = user.username;
          req.session.firstName = user.first_name;
          req.session.lastName = user.last_name;
          res.end(user.user_id);
        }
        else {
          res.end("invalid user");
        }
      }
      else {
        res.end(err.toString());
      }
    });
  });
}

User.prototype.getUserIdeas = function() {
  var userModel = this.userModel;
  this.app.get("/users/:username/ideas", function(req, res) {
    //first get user id associated with username
    userModel.getUser(req.params.username, function(err, user) {
      if(!err) {
        var userID = user.user_id;

        //then get the ideas associated with that user id
        userModel.getUserIdeas(userID, function(err, ideas) {
          if(!err) {
            res.end(JSON.stringify(ideas));
          }
          else {
            res.end(err.toString());
          }
        });
      }
      else {
        res.end(err.toString());
      }
    });
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



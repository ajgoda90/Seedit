var IUserModel = require('../interfaces/i-user-model.js');
var bcrypt = require('bcrypt');
var hashFactor = 15;
var self = null;

UserModel.prototype = new IUserModel();

function UserModel() {
  IUserModel.apply(this, arguments);
}

UserModel.prototype.login = function(username, password, cb) {
  this.userEntity.getByUniqueColumn('username', username, function(err, user) {
    if(!err) {
      if(user) {
        bcrypt.compare(password, user.pass, function(err, authenticated) {
          if(!err) {
            if(authenticated === true) {
              cb(null, user);
            }
            else {
              cb(new Error('invalid username or password1'), null);
            }
          }
          else {
            console.log(err.toString());
            cb(new Error('unable to compare passwords'), null);
          }
        });
      }
      else {
        cb(new Error('invalid username or password2'), null);
      }
    }
    else {
      console.log(err.toString());
      cb(new Error('unable to get user credentials'), null);
    }
  });
}

UserModel.prototype.addUser = function(first, last, email, username, password, cb) {
  var userEntity = this.userEntity;
  bcrypt.genSalt(hashFactor, function(err, salt) {
    if(!err) {
      bcrypt.hash(password, salt, function(err, hash) {
        if(!err) {
          var user = { 
    	    first_name : first,
    	    last_name : last,
            email : email,
    	    username : username,
    	    pass : hash
  		  }
  		  userEntity.create(user, function(err, newUser) {
  		  	if(!err) {
      		  cb(null, newUser);
    		}
    		else {
    		  console.log(err);
      		  cb(new Error('unable to create user (entity)'), null);
    		}
  		  });
  		}
  		else {
  		  console.log(err);
  		  cb(new Error('unable to hash password'), null);
  	    }
      });
    }
    else {
      console.log(err);
      cb(new Error('unable to generate salt'), null);
    }
  });
}

UserModel.prototype.getUser = function(username, cb) {
    var userEntity = this.userEntity;
    userEntity.getByUniqueColumn('username', username, function(err, user) {
        if(!err) {
            if(user) {
                cb(null, user);
            }
            else {
                cb(new Error('invalid username'), null);
            }
        }
        else {
            console.log(err.toString());
            cb(new Error('unable to get user based on that username'), null);
        }
    });
}

UserModel.prototype.updateUser = function(json_object, cb) {
    var userEntity = this.userEntity;
    //maybe get user then compare hashed password to this one to see if same first
    //i'm just rehashing there "new" password even though it might be the same
    bcrypt.genSalt(hashFactor, function(err, salt) {
        if(!err) {
            bcrypt.hash(json_object.pass, salt, function(err, hash) {
                if(!err) {
                    json_object.pass = hash;
                    userEntity.update(json_object, function(err, user) {
                        if(!err) {
                            if(user) {
                                cb(null, user);
                            }
                            else {
                                cb(new Error('invalid user'), null);
                            }
                        }
                        else {
                            console.log(err.toString());
                            cb(new Error('error updating user'));
                        }
                    });
                }
                else {
                    cb(new Error("couldn't hash the new password"));
                }
            });
        }
        else {
            cb(new Error("error generating salt"));
        }
    });
}

UserModel.prototype.getUserIdeas = function(userID, cb) {
    var ideaEntity = this.ideaEntity;
    var statement = "Select * from Idea where author_user_id =?;"

    ideaEntity.db.do(statement, userID, function(error, results) {
        if(!error) {
            cb(null, results);
        }
        else {
            var err = new Error("unable to get user ideas" + "'\n" + 'Database error message: \n=>' + error);
            cb(err, null);
        }
    });
}

module.exports = function() {
  if (self === null){
	self = new UserModel();
  }
  return self;
}
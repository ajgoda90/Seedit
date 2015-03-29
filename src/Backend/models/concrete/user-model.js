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
              cb(null, { message : 'invalid username or password' });
            }
          }
          else {
            console.log(err.toString());
            cb(new Error('unable to compare passwords'), null);
          }
        });
      }
      else {
        cb(null, { message : 'invalid username or password' });
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

module.exports = function() {
  if (self === null){
	self = new UserModel();
  }
  return self;
}
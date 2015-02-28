var Interface = require('../../interface.js');

IUser.prototype = new Interface();

function IUser(){}
 
IUser.prototype.validateInterface = function() {
  this.validateImplementation('i-user-controller', IUser.prototype, this);
}

IUser.prototype.login = function(username, password, callback) {}

module.exports = IUser;
var Interface = require('../../base/interface.js');

IUser.prototype = new Interface();

function IUser(){}

IUser.prototype.addUser = function(){};
IUser.prototype.getUserIdeas = function(){};
IUser.prototype.updateUser = function(){};
IUser.prototype.getUser = function(){};
IUser.prototype.authUser = function(){};
IUser.prototype.initRoutes = function(){};

IUser.prototype.inject = function(app, userModel){
	this.validateImplementation('i-user-controller', IUser.prototype, this);
	this.app = app;
	this.userModel = userModel;
	this.initRoutes();
}

module.exports = IUser;
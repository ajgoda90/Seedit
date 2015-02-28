var Interface = require('../../base/interface.js');

IUser.prototype = new Interface();

function IUser(){}

IUser.prototype.getUserIdeas = function(){};
IUser.prototype.updateUser = function(){};
IUser.prototype.getUser = function(){};
IUser.prototype.authUser = function(){};
IUser.prototype.inject = function(app){
	this.validateImplementation('i-user-controller', IUser.prototype, this);
	this.app = app;
	this.initRoutes();
}

IUser.prototype.initRoutes = function(){};
module.exports = IUser;
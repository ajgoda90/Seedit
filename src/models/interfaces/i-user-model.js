var Interface = require('../../base/interface.js');

IUserModel.prototype = new Interface();

function IUserModel(){}

//IUserModel.prototype.login = function(username, password, callback) {}

IUserModel.prototype.inject = function(userEntity, ideaEntity) {
  this.validateImplementation("i-user-model", IUserModel.prototype, this);
  this.userEntity = userEntity;
  this.ideaEntity = ideaEntity;
}

module.exports = IUserModel;
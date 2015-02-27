// UserModel superclasss / interface
IUserModel.prototype = new Interface();
function IUserModel() {}

IUserModel.prototype.validateImplementation() {
  this.validateInterface("i-user-model", IUserModel.prototype, this);
}

IUserModel.prototype.login = function(username, password, callback) {}

module.exports = IUserModel;

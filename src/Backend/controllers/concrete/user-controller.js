var IUser = require('../interfaces/i-user-controller.js');

User.prototype = new IUser();

function User(iUserModel) {
  IUser.apply(this, arguments);
  iUserModel.validateInterface();
  this.userModel = iUserModel;
}

User.prototype.login = function(username, password)
var IUserModel = require('../concrete/user-model.js');
var self = null;


UserModel.prototype = new IUserModel();

UserModel = function(mysqlDAO) {
  this.apply(this, arguments);
  this.mysqlDAO = mysqlDAO;
}

UserModel.prototype.login = function(username, password, callback) {
  var isAuthenticated = (username === 'Bob' && password === 'bob123');
  var result = {
    isAuthenticated : isAuthenticated,
    name : (isAuthenticated) ? "Bob Smith" : null,
  }
  callback(result);
}
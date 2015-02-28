var IndexController = require('./controllers/concrete/index-controller.js');
var UserController = require('./controllers/concrete/user-controller.js');
/*To Do*/ //var ideaController = require('./controllers/concrete/idea-controller.js');
var TagController = require('./controllers/concrete/tag-controller.js');

module.exports.init = function(app, mysqlDAO) {
  /*To Do*/ //var userModel
  /*To Do*/ //var ideaModel
  /*To Do*/ //var tagModel

  var indexController = new IndexController();
  indexController.inject(app);
  var userController = new UserController();
  userController.inject(app);
  var tagController = new TagController();
  tagController.inject(app);


}
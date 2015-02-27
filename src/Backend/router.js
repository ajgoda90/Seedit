var IndexController = require('./controllers/concrete/index-controller.js');
/*To Do*/ //var userController = require('./controllers/concrete/user-controller.js');
/*To Do*/ //var ideaController = require('./controllers/concrete/idea-controller.js');
/*To Do*/ //var tagController = require('./controllers/concrete/tag-controller.js');

module.exports.init = function(app, mysqlDAO) {
  /*To Do*/ //var userModel = new UserModel(mysqlDAO);
  /*To Do*/ //var ideaModel = new IdeaModel(mysqlDAO);
  /*To Do*/ //var tagModel = new TagModel(mysqlDAO);

  var indexController = new IndexController(app);
  indexController.validateInterface();
  //userController.init(app, userModel);
  //ideaController.init(app, ideaModel);
  //tagController.init(app, tagModel);
}
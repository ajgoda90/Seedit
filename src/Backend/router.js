var Entity = require('./base/entity.js');
var async = require('async');

var IndexController = require('./controllers/concrete/index-controller.js');
var UserController = require('./controllers/concrete/user-controller.js');
var IdeaController = require('./controllers/concrete/idea-controller.js');
var TagController = require('./controllers/concrete/tag-controller.js');

module.exports.init = function(app, mysqlDAO) {
  /*To Do*/ //var userModel
  /*To Do*/ //var ideaModel
  /*To Do*/ //var tagModel
  
  var entity = new Entity(mysqlDAO);
  
  var tagModel;
  var ideaModel;
  var userModel;
  
  function bindTagModel(err, tags) {
    if(!err) {
      tagModel = tags;
    }
    else {
      throw err;
    }
  }
  
  async.series([
  	function(next){
    	entity.define("tag", bindTagModel, next);
  	}
	/*,function(next){
    	//define user model
    }*/
  ], function(err){
    if(err) {
      console.log(err)
    }
    else {    
      var indexController = new IndexController();
  	  indexController.inject(app);

      var userController = new UserController();
      userController.inject(app);
   
      var tagController = new TagController();
      tagController.inject(app, tagModel, ideaModel);

      var ideaController = new IdeaController();
      ideaController.inject(app);
    }
  })
}
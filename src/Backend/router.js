var Entity = require('./base/entity.js');
var async = require('async');

var IndexController = require('./controllers/concrete/index-controller.js');
var UserController = require('./controllers/concrete/user-controller.js');
var IdeaController = require('./controllers/concrete/idea-controller.js');
var TagController = require('./controllers/concrete/tag-controller.js');

var UserModel = require('./models/concrete/user-model.js');
var IdeaModel = require('./models/concrete/idea-model.js');

module.exports.init = function(app, mysqlDAO) {  
  var entity = new Entity(mysqlDAO);
  
  var tagModel;
  var ideaModel = new IdeaModel();
  var userModel = new UserModel();
  var upVoteModel;
  
  async.series([
  	function(next){
      entity.define("tag", function (err, tags) {
    	if(!err) {
      	  tagModel = tags;
      	  next();
    	}
    	else {
      	  throw err;
    	}
  	  });
  	}
	, function(next){
    	entity.define("user", function (err, users) {
    	if(!err) {
      	  userModel.inject(users);
      	  next();
    	}
    	else {
      	  throw err;
    	}
  	  });
    }
    , function(next){
      entity.define("Up_Vote", function (err, upVotes) {
      if(!err) {
          upVoteModel = upVotes;
          next();
      }
      else {
          throw err;
      }
      });
    }
    , function(next){
    	entity.define("idea", function (err, ideas) {
    	if(!err) {
      	  ideaModel.inject(ideas, upVoteModel);
      	  next();
    	}
    	else {
      	  throw err;
    	}
  	  });
    }
    
  ], function(err){
    if(err) {
      throw new Error(err.toString());
    }
    else {    
      var indexController = new IndexController();
  	  indexController.inject(app);

      var userController = new UserController();
      userController.inject(app, userModel);
   
      var tagController = new TagController();
      tagController.inject(app, tagModel, ideaModel);

      var ideaController = new IdeaController();
      ideaController.inject(app, ideaModel);


    }
  })
}
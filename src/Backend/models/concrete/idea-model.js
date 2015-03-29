var IIdeaModel = require('../interfaces/i-idea-model.js');
var bcrypt = require('bcrypt');
var hashFactor = 15;
var self = null;

IdeaModel.prototype = new IIdeaModel();

function IdeaModel() {
  IIdeaModel.apply(this, arguments);
}

IdeaModel.prototype.getIdeas = function(cb) {
  this.ideaEntity.getAll(function(err, ideaList){
  	if(!err){
  		cb(null, ideaList);
  	}
  	else{
  		cb(new Error('unable to get idea list'), null);
  	}
  });
}

IdeaModel.prototype.createIdea = function(title, blurb, description, author_user_id, time_created, parent_idea_id, cb) {
  var ideaEntity = this.ideaEntity;
  var idea = {
  	title : title,
  	blurb : blurb,
  	description : description,
  	author_user_id : author_user_id,
  	time_created : time_created,
  	parent_idea_id : parent_idea_id
  }
  ideaEntity.create(idea, function(err, newIdea){
  	if(!err){
  		cb(null, newIdea);
  	}
  	else{
  		console.log(err);
  		cb(new Error('unable to create idea (entity)'), null);
  	}
  });
}

IdeaModel.prototype.getIdea = function(idea_id, cb) {
  this.ideaEntity.get(idea_id, function(err, idea){
  	if(!err){
  		cb(null, idea);
  	}
  	else{
  		cb(new Error('unable to get single idea'), null);
  	}
  });
}

IdeaModel.prototype.updateIdea = function(json_object, cb) {
  this.ideaEntity.update(json_object, function(err, idea){
  	if(!err){
  		cb(null, idea);
  	}
  	else{
  		cb(new Error('unable to update single idea'), null);
  	}
  });
}

module.exports = function() {
  if (self === null){
	self = new IdeaModel();
  }
  return self;
}
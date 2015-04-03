var Idea = require('../../base/interface.js');

IIdea.prototype = new Idea();

function IIdea() {}

IIdea.prototype.getIdeas = function(){};
IIdea.prototype.createIdea = function(){};
IIdea.prototype.getIdea = function(){};
IIdea.prototype.updateIdea = function(){};
IIdea.prototype.upVoteIdea = function(){};
IIdea.prototype.initRoutes = function() {};
IIdea.prototype.inject = function(app, ideaModel) {
  this.validateImplementation('i-idea-controller', IIdea.prototype, this);
  this.app = app;
  this.ideaModel = ideaModel;
  this.initRoutes();
}

module.exports = IIdea;

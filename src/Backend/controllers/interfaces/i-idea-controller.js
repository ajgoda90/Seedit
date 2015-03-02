var Idea = require('../../base/interface.js');

IIdea.prototype = new Idea();
function IIdea() {}

IIdea.prototype.getIdeas = function(){};
IIdea.prototype.createIdea = function(){};
IIdea.prototype.getIdea = function(){};
IIdea.prototype.updateIdea = function(){};
IIdea.prototype.upVoteIdea = function(){};
IIdea.prototype.initRoutes = function() {};
IIdea.prototype.inject = function(app) {
  this.validateImplementation('i-idea-controller', IIdea.prototype, this);
  this.app = app;
  this.initRoutes();
}

module.exports = IIdea;

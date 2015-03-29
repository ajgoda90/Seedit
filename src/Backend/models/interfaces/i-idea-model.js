var Interface = require('../../base/interface.js');

IIdeaModel.prototype = new Interface();

function IIdeaModel(){}

//IIdeaModel.prototype.getIdeas = function(callback) {}

IIdeaModel.prototype.inject = function(ideaEntity) {
  this.validateImplementation("i-idea-model", IIdeaModel.prototype, this);
  this.ideaEntity = ideaEntity;
}

module.exports = IIdeaModel;
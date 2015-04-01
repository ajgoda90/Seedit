var Interface = require('../../base/interface.js');

IIdeaModel.prototype = new Interface();

function IIdeaModel(){}

IIdeaModel.prototype.inject = function(ideaEntity, upVotesEntity) {
  this.validateImplementation("i-idea-model", IIdeaModel.prototype, this);
  this.ideaEntity = ideaEntity;
  this.upVotesEntity = upVotesEntity;
}

module.exports = IIdeaModel;
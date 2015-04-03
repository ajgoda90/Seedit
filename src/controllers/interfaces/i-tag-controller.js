var Interface = require('../../base/interface.js');

ITag.prototype = new Interface();

function ITag(){}

ITag.prototype.inject = function(app, tagModel, ideaModel){
  this.validateImplementation('i-tag-controller', ITag.prototype, this);
  this.app = app;
  this.tagModel = tagModel;
  this.ideaModel = ideaModel;
  this.initRoutes();
}

ITag.prototype.initRoutes = function(){};
module.exports = ITag;
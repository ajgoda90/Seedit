var Interface = require('../../base/interface.js');

IIndex.prototype = new Interface();
function IIndex() {}

IIndex.prototype.home = function(){};
IIndex.prototype.initRoutes = function() {};
IIndex.prototype.inject = function(app) {
  this.validateImplementation('i-index-controller', IIndex.prototype, this);
  this.app = app;
  this.initRoutes();
}

module.exports = IIndex;

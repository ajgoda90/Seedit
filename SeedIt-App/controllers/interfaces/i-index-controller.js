// IndexController superclass / interface
var self = null;

function Index(app) {
  this.app = app;
  //this.init();
}

Index.prototype.init = function() {
  this.home();
}

Index.prototype.home = function() {
  throw "Error: Index.home not implemented."
}

module.exports = Index;

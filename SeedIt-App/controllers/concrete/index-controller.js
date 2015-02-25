var IndexSuper = require('../interfaces/i-index-controller.js');
var self = null;

Index.prototype = new IndexSuper();

function Index(app){
  IndexSuper.apply(this, arguments);
  this.init();
}

Index.prototype.home = function() {
  this.app.get('/', function(req, res) {
    res.send('implemented');
  });
}

module.exports = function(app) {
  if(self === null) {
    self = new Index(app);
  }
  return self;
}
var IIndex = require('../interfaces/i-index-controller.js');
var self = null;

Index.prototype = new IIndex();

function Index(app){
  IIndex.apply(this, arguments);
  this.app = app;
  this.initRoutes();
}

Index.prototype.home = function() {
  this.app.get('/', function(req, res) {
    res.send('implemented');
  });
}


Index.prototype.initRoutes= function() {
  this.home();
  this.doSomethingCool();
};

Index.prototype.doSomethingCool = function() {
  this.app.post('/postSomethingCool', function(req, res) {
    res.send(req.body);
  });
}


module.exports = function(app) {
  if(self === null) {
    self = new Index(app);
  }
  return self;
}
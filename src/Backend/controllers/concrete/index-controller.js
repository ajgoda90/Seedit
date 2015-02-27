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
  	var response = {
  	  url : req.protocol + '://' + req.get('host') + req.originalUrl,
  	  type : req.method,
  	  query : req.query,
  	  params : req.params,
  	  body : req.body
  	}
    res.send(JSON.stringify(response));
  });
}

Index.prototype.initRoutes= function() {
  this.home();
};

module.exports = function(app) {
  if(self === null) {
    self = new Index(app);
  }
  return self;
}
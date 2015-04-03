var IIndex = require('../interfaces/i-index-controller.js');
var self = null;

Index.prototype = new IIndex();

function Index(){
  IIndex.apply(this, arguments);
}

Index.prototype.home = function() {
  this.app.get('/', function(req, res) {
    /*
  	var response = {
  	  url : req.protocol + '://' + req.get('host') + req.originalUrl,
  	  type : req.method,
  	  query : req.query,
  	  params : req.params,
  	  body : req.body
  	}
    res.send(JSON.stringify(response));
    */
    res.render('index');
  });
}

/*
Index.prototype.mainView = function() {
  this.app.get('/mainView.html', function(req, res) {
  	res.render('mainView');
  });
}

Index.prototype.grid = function() {
  this.app.get('/grid.html', function(req, res) {
    res.render('grid');
  });
}
*/

Index.prototype.initRoutes= function() {
  this.home();
};

module.exports = function(app) {
  if(self === null) {
    self = new Index(app);
  }
  return self;
}
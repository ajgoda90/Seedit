var IIndex = require('../interfaces/i-index-controller.js');

TIndex.prototype = new IIndex();

function TIndex() {
  IIndex.apply(this, arguments);
}

TIndex.prototype.home = function(){
  this.app.get('/', function(req, res) {
    res.send('/');
  });
};
TIndex.prototype.initRoutes = function() {
  this.home();
};
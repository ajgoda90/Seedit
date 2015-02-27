var Interface = require('../../base/interface.js');

IIndex.prototype = new Interface();
function IIndex() {}

IIndex.prototype.validateInterface = function(){
  this.validateImplementation('i-index-controller', IIndex.prototype, this);
}

function home() {}
IIndex.prototype.home = home;

module.exports = IIndex;

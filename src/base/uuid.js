var uuid = require('node-uuid');

function newUUID() {
  var id = uuid.v4();
  //id = parseInt(id.replace(/-/g,''), 16);	// reduce to 16 chars --> may reduce uniqueness
  id = id.replace(/-/g,'');
  return id 
}

module.exports.newID = newUUID;
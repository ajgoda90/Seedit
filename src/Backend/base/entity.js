var Crud = require('./entity-crud.js');

var self = null;
var cruds = {};

Entity = function(mysqlDB) {
  this.db = mysqlDB;
}

/*
 *	Defines an entity for a table to enable CRUD operations (see 'entity-crud.js' for more details)
 *	
 *	Params:
 *		tableName = a string that represents a table in the database
 *				  - assumes table corresponding to tableName has a primary key column
 *
 *		cb = a function defined as function(error, entityCrudObject)
 *			 -error = any errors associated with discovering table and columns for tableName in db
 *					= otherwise, null
 *			 -entityCrudObject = if no error, an entity object through which CRUD operations can
 *								 be performed on db table corresponding to tableName
 *							   = otherwise, null
 *	throws error if table corresponding to tableName does not have a primary key column  
 */
Entity.prototype.define = function(tableName, cb, next) {
  var entity = null;
  if(cruds[tableName]) {
    entity = cruds[tableName];
    cb(entity);
  }
  else {
  	var statement = 'SHOW COLUMNS FROM ' + tableName;
  	var db = this.db;
	this.db.do(statement, [], function(error, results) {
	  if(!error) {
	    entity = new Crud(db, tableName, results);
	    cruds[tableName] = this;
	    cb(null, entity);
	    next();
	  }
	  else {
	    var err = new Error("unable to define entity for table '" + tableName + "'\n" + 'Database error message: \n=>' + error);
	    cb(err, null);
	    next();
	    //throw err;
	  }
	});
  }
}

module.exports = function(mysqlDB) {
  if(self === null) {
    self = new Entity(mysqlDB);
  }
  return self;
}


var uuid = require('./uuid.js');

/*
 *	CRUD operations object for entity.js
 *		Used to:
 *			-create a single new entry in the db for an entity
 *			-get a single new entry from the db for an entity
 *			-update a single entry in the db for an entity
 *			-delete a single entry from the db for an entity
 *
 *	Params:
 *  	db = mysqlDB object through which entity can connect to database
 *  	tableName = name of database table that entity will represent
 *		columns = sql result listing of all columns for <tableName>
 *
 *	throws error if provided table does not have a primary key column  
 */
function Crud(db, tableName, columns) {
  this.db = db;
  this.tableName = tableName;
  this.columns = {}
  this.columnKeys = {};
  for(col in columns) {
    var column = columns[col];
	this.columns[column.Field] = column;
	if(column.Key === 'PRI') {
	  this.primaryKey = column.Field;
	}
	this.columnKeys[column.Field] = column.Key;
  }
  if(!this.primaryKey) {
    throw new Error("no primary key defined for table '" + tableName + "'.  Entity defined tables must have a primary key.");
  }
};




/*
 *	Adds a new entry representing an entity object to the entity table
 *
 *	Params:
 *		object = a javascript object with a 1 to 1 mapping of object properties to database columns excepting the primary key
 *				-assumes all property types are compatible with db table definition of entity
 *				-a 32 char uuid will be added for the primary key property
 *
 *		cb = a callback function defined as function(error, object)
 *				-error = any error that occurs during the create method operation
 *					   = otherwise null
 *				-object = if no error occurs, a javascript object representing the newly created entry in
 *				 		  the db for the entity; includes the primary key value
 *						= otherwise null
 *
 */
Crud.prototype.create = function(object, cb) {
  var newEntry = {};
  var params = [];
  var tableName = this.tableName;
  
  var statement = 'INSERT INTO ' + tableName + ' VALUES (';
  
  object[this.primaryKey] = uuid.newID();
  var prependComma = false;
  for(col in this.columns) {
    var val = object[col];
    if(prependComma) {
      statement += ', '
    }
    else {
      prependComma = true;
    }
    statement += '?'
    newEntry[col] = val;
    params.push(val);
  }
  statement += ');';
  this.db.do(statement, params, function(error, results) {
    if(!error) {
      cb(null, newEntry);
    }
    else { // error
      var err = new Error("unable to perform create on entity '" + tableName + "'\n" + 'Database error message: \n=>' + error);
      cb(err, null);
    }
  });
}




/*
 *	Retrieves an entry representing an entity object with primary key matching objectID from the entity table
 *
 *	Params:
 *		objectID = the primary key corresponding to an entry in the entity db table
 *
 *		cb = a callback function defined as function(error, object)
 *				-error = any error that occurs during the get method operation
 *					   = otherwise null
 *				-object	= if no error occurs, a javascript object representing the entity table
 *						  entry corresponding to objectID
 *						= if no such entry exists, null
 *						= otherwise, null
 *						  
 */
Crud.prototype.get = function(objectID, cb) {
  var statement = 'SELECT * FROM ' + this.tableName + ' WHERE ' + this.primaryKey + '=?;';
  this.db.do(statement, [objectID], function(error, results) {
    if(!error) {
      result = (results.length === 1) ? results[0] : null;
      cb(null, result);
    }
    else {// error
      var err = new Error("unable to perform get on entity '" + tableName + "'\n" + 'Database error message: \n=>' + error);
      cb(err, null);
    }
  });
}

Crud.prototype.getByUniqueColumn = function(uniqueColumn, uniqueEntry, cb) {
  if(this.columnKeys[uniqueColumn] === 'UNI') {
    var statement = 'SELECT * FROM ' + this.tableName + ' WHERE ' + uniqueColumn + '=?;';
    this.db.do(statement, [uniqueEntry], function(error, results) {
      if(!error) {
        result = (results.length === 1) ? results[0] : null;
        cb(null, result);
      }
      else {// error
        var err = new Error("unable to perform get on entity '" + tableName + "'\n" + 'Database error message: \n=>' + error);
        cb(err, null);
      }
    });
  }
  else {
    var err = new Error("unable to perform getByUniqueColumn on entity '" + tableName + " ==> 'uniqueColumn' does not correspond to a unique table column");
    cb(err, null);
  }
}




/*
 *	Updates an entry representing an entity object with primary key matching objectID in the entity table
 *
 *	Params:
 *		object = a javascript object with a 1 to 1 mapping of object properties to database columns
 *				-assumes all property types are compatible with db table definition of entity
 *		cb = a callback function defined as function(error, object)
 *				-error = any error that occurs during the update method operation
 *					   = otherwise null
 *				-object	= if no error occurs, a javascript object representing the entity table
 *						  entry corresponding to updated object
 *						= if no such entry exists matching primary key, null
 *						= otherwise, null
 *						  
 */
Crud.prototype.update = function(object, cb) {
  var updatedEntry = {};
  var params = [];
  
  var statement = 'UPDATE ' + this.tableName + ' SET ';
  
  var prependComma = false;
  for(col in this.columns) {
    var val = object[col];
    if(prependComma) {
      statement += ', '
    }
    else {
      prependComma = true;
    }
    statement += this.columns[col].Field + '=?'
    updatedEntry[col] = val;
    params.push(val);
  }
  statement += ' WHERE ' + this.primaryKey + '=?;';
  params.push(object[this.primaryKey]);
  
  var primaryKey = this.primaryKey;
  var tableName = this.tableName;
  this.db.do(statement, params, function(error, results) {
    if(!error) {
      if(results.affectedRows === 1) {
        cb(null, updatedEntry);
      }
      else {
        cb(null, null);
      }
      /*
      if(results.affectedRows === 1) {
        cb(updatedEntry);
      }
      else {
        cb('Primary Key \'' + object[primaryKey] + '\' not found in entity \'' + tableName + '\'.', null);
      }
      */
    }
    else { // error
      var err = new Error("unable to perform update on entity '" + tableName + "'\n" + 'Database error message: \n=>' + error);
      cb(err, null);
    }
  });
}




/*
 *	Deletes an entry representing an entity object with primary key matching objectID from the entity table
 *
 *	Params:
 *		objectID = the primary key corresponding to an entry in the entity db table
 *
 *		cb = a callback function defined as function(error)
 *				-error = any error that occurs during the delete method operation
 *					   = otherwise null (including if object primary key does not correspond to entity table primary key)
 *						  
 */
Crud.prototype.delete = function(objectID, cb) {
  var statement = 'DELETE FROM ' + this.tableName + ' WHERE ' + this.primaryKey + '=?;';
  var params = [ objectID ];

  this.db.do(statement, params, function(error, results) {
    if(!error) {
      cb(null);
    }
    else { // error
      var err = new Error("unable to perform delete on entity '" + tableName + "'\n" + 'Database error message: \n=>' + error);
      cb(err);
    }
  });
}

/*
 *	Gets all entries from the entity table
 *
 *	Params:
 *		cb = a callback function defined as function(error, results)
 *				-error = any error that occurs during the delete method operation
 *					   = otherwise null (including if object primary key does not correspond to entity table primary key)
 *				-results = an array of javascript objects representing all entries in the entity table
 *						  
 */
Crud.prototype.getAll = function(cb) {
  var statement = 'SELECT * FROM ' + this.tableName + ';';
  var params = [];

  this.db.do(statement, params, function(error, results) {
    if(!error) {
      cb(null, results);
    }
    else { // error
      var err = new Error("unable to perform findAll on entity '" + tableName + "'\n" + 'Database error message: \n=>' + error);
      cb(err, null);
    }
  });
}

module.exports = Crud;
var mysql = require('mysql');
var self = null;

function MySQL_DAO(dbHost, dbUser, dbPassword, dbName, dbConnectionLimit) {
  this.pool = mysql.createPool({
    host : dbHost,
    user : dbUser,
    password : dbPassword,
    database : dbName,
    limit : dbConnectionLimit
  });
}

MySQL_DAO.prototype.do = function(sql, params, callback) {
  pool.getConnection(function(err, connection) {
	if(err) {
	  console.error(err)
	}
	else if(typeof params !== 'undefined' && params !== null && typeof params.length === 'number') {
	  connection.query(sql, params, function(error, results) {
        if (typeof callback === 'function') {
          callback(error, results);
        }
        else {
          console.error("Error: 'callback' parameter must be a function.");
        }
        connection.release();
      });
	} 
	else {
	  console.error("Error: 'params' must be an array.");
	}
  });
};

module.exports = function(dbHost, dbUser, dbPassword, dbName, dbConnectionLimit) {
  if(self === null) {
    self = new MySQL_DAO(dbHost, dbUser, dbPassword, dbName, dbConnectionLimit);
  }
  return self;
}
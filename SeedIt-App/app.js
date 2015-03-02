//  Libraries
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var session = require('express-session');

//  App Variables
var app = express();
var userSessions = session({
  secret: 'secret key',	// ***CHANGE TO SOMETHING THAT IS ACTUALLY SECURE***
});


//
//  App Setup
//

app.disable('x-powered-by');

app.engine('html', ejs.renderFile);
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(userSessions);
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;

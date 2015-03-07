var IIdea = require('../interfaces/i-idea-controller.js');
var self = null;

Idea.prototype = new IIdea();

function Idea(){
  IIdea.apply(this, arguments);
}

Idea.prototype.getIdeas = function() {
  this.app.get('/ideas', function(req, res) {
    console.log("getIdeas");
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

Idea.prototype.createIdea = function() {
  this.app.post('/ideas', function(req, res) {
    console.log("createIdea");
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

Idea.prototype.getIdea = function() {
  this.app.get('/ideas/:ideaID', function(req, res) {
    console.log("getIdea");
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

Idea.prototype.updateIdea = function() {
  this.app.put('/ideas/:ideaID', function(req, res) {
    console.log("updateIdea");
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

Idea.prototype.upVoteIdea = function() {
  this.app.post('/ideas/:ideaID/up-vote', function(req, res) {
    console.log("upVoteIdea");
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

Idea.prototype.initRoutes= function() {
  this.getIdeas();
  this.createIdea();
  this.getIdea();
  this.updateIdea();
  this.upVoteIdea();
};

module.exports = function(app) {
  if(self === null) {
    self = new Idea(app);
  }
  return self;
}
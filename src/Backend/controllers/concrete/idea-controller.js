var IIdea = require('../interfaces/i-idea-controller.js');
var self = null;

Idea.prototype = new IIdea();

function Idea(){
  IIdea.apply(this, arguments);
}

Idea.prototype.getIdeas = function() {
  var ideaModel = this.ideaModel;
  this.app.get('/ideas', function(req, res) {
    ideaModel.getIdeas(function(err, ideaList){
      if(!err) {
        res.end(JSON.stringify(ideaList));
      }
      else {
        res.end(err.toString());
      }
    });
  });
}

Idea.prototype.createIdea = function() {
  var ideaModel = this.ideaModel;
  this.app.post('/ideas', function(req, res) {
    var timeStamp = new Date().toISOString().slice(0, 19).replace('T', ' ');
    ideaModel.createIdea(req.body.title, req.body.blurb, req.body.description, req.body.author_user_id, timeStamp, req.body.parent_idea_id, function(err, newIdea){
      if(!err) {
        res.end(JSON.stringify(newIdea));
      }
      else {
        res.end(err.toString());
      }
    });
  });
}

Idea.prototype.getIdea = function() {
  var ideaModel = this.ideaModel;
  this.app.get('/ideas/:ideaID', function(req, res) {
    var idea_id = req.param("ideaID");
    ideaModel.getIdea(idea_id, function(err, idea){
      if (!err){
        res.end(JSON.stringify(idea));
      }
      else {
        res.end(err.toString());
      }
    });
  });
}

Idea.prototype.updateIdea = function() {
  var ideaModel = this.ideaModel;
  this.app.put('/ideas/:ideaID', function(req, res) {
    var idea_id = req.param("ideaID");
    var idea_json = req.body;
    idea_json.idea_id = idea_id;
    ideaModel.updateIdea(idea_json, function(err, idea){
      if (!err){
        res.end(JSON.stringify(idea));
      }
      else {
        res.end(err.toString());
      }
    });
  });
}

Idea.prototype.upVoteIdea = function() {
  this.app.post('/ideas/:ideaID/up-vote', function(req, res) {
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
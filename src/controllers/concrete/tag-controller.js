var ITag = require('../interfaces/i-tag-controller.js');
var self = null;

Tag.prototype = new ITag();

function Tag() {
  ITag.apply(this, arguments);
}

Tag.prototype.getTags = function() {
  this.app.get("/tags", function(req, res) {
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

Tag.prototype.addTag = function() {
  tagController = this;
  this.app.post("/tags/:tagName", function(req, res) {
    var tag = { title : req.params.tagName };
    tagController.tagModel.create(tag, function(err, newTag) {
      if(!err) {
        res.end(JSON.stringify(newTag));
      }
      else {
        res.end(err.toString());
      }
    });
  });
}

Tag.prototype.addTagToIdea = function() {
  this.app.post("/tags/:tagName/ideas/:ideaID", function(req, res) {
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

Tag.prototype.deleteTagFromIdea = function() {
  this.app.delete("/tags/:tagName/ideas/:ideaID", function(req, res) {
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

Tag.prototype.getTagIdeas = function() {
  this.app.get("/tags/:tagName/ideas", function(req, res) {
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

Tag.prototype.initRoutes = function(){
  this.getTags();
  this.addTagToIdea();
  this.deleteTagFromIdea();
  this.getTagIdeas();
  this.addTag();
}

module.exports = function(){
	if (self === null){
		self = new Tag();
	}
	return self;
}
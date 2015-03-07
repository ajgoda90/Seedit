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
}

module.exports = function(){
	if (self === null){
		self = new Tag();
	}
	return self;
}
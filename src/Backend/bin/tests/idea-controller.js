var expect = require("expectacle");//require('expect');
var superTest = require('supertest');
var IndexController = require('../../controllers/test-implementations/test-index-controller.js');
var IdeaController = require('../../controllers/test-implementations/test-idea-controller.js');

function test(app) {
  var indexController = new IndexController();
  indexController.inject(app);
  var ideaController = new IdeaController();
  ideaController.inject(app);
  var request = superTest(app);
  
  
  describe('test-idea-controller', function() {
    describe("Path: '/'", function() {

      it('Tests the /ideas endpoint', function(done) {
        request.get("/ideas")
        .expect(200)
        .end(function (error, result) {
          if(error) {
            console.log(error);
          }
          expect(error).toBeFalsy();
          done();
        });
      });

    });
  });
}

module.exports.test = test;
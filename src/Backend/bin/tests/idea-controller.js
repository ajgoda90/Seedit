var expect = require("expectacle");//require('expect');
var superTest = require('supertest');
var IdeaController = require('../../controllers/test-implementations/test-idea-controller.js');

function test(app) {
  var ideaController = new IdeaController();
  ideaController.inject(app);
  var request = superTest(app);
  describe('test-idea-controller', function() {
    describe("Path: '/ideas'", function() {

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

      it('Tests the /ideas endpoint', function(done) {
        request.post("/ideas")
        .expect(200)
        .end(function (error, result) {
          if(error) {
            console.log(error);
          }
          expect(error).toBeFalsy();
          done();
        });
      });

      it('Tests the /ideas/<idea id> endpoint', function(done) {
        request.get("/ideas/1337")
        .expect(200)
        .end(function (error, result) {
          if(error) {
            console.log(error);
          }
          expect(error).toBeFalsy();
          done();
        });
      });

      it('Tests the /ideas/<idea id> endpoint', function(done) {
        request.put("/ideas/1337")
        .expect(200)
        .end(function (error, result) {
          if(error) {
            console.log(error);
          }
          expect(error).toBeFalsy();
          done();
        });
      });

      it('Tests the /ideas/<idea id>/up-vote endpoint', function(done) {
        request.post("/ideas/1337/up-vote")
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
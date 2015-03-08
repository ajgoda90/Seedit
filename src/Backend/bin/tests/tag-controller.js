var expect = require("expectacle");//require('expect');
var superTest = require('supertest');
var TagController = require('../../controllers/test-implementations/test-tag-controller.js')

function test(app) {
  var tagController = new TagController();
  tagController.inject(app);
  var request = superTest(app);
  
  
  describe('tag-controller', function() {
    describe("Path: '/tags'", function() {

      it('Tests the /tags endpoint', function(done) {
        request.get("/tags")
        .expect(200)
        .end(function (error, result) {
          if(error) {
            console.log(error);
          }
          expect(error).toBeFalsy();
          done();
        });
      });

      it('Tests the /tags/<tag name>/ideas/<idea id> endpoint', function(done) {
        request.post("/tags/inCarToasters/ideas/1337")
        .expect(200)
        .end(function (error, result) {
          if(error) {
            console.log(error);
          }
          expect(error).toBeFalsy();
          done();
        });
      });

      it('Tests the /tags/<tag name>/ideas/<idea id> endpoint', function(done) {
        request.delete("/tags/inCarToasters/ideas/1337")
        .expect(200)
        .end(function (error, result) {
          if(error) {
            console.log(error);
          }
          expect(error).toBeFalsy();
          done();
        });
      });

      it('Tests the /tags/<tag name>/ideas endpoint', function(done) {
        request.get("/tags/inCarToasters/ideas")
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
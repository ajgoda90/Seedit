var expect = require("expectacle");//require('expect');
var superTest = require('supertest');
var TagController = require('../../controllers/test-implementations/test-tag-controller.js')

function test(app) {
  var tagController = new TagController();
  tagController.inject(app);
  var request = superTest(app);
  
  
  describe('tag-controller', function() {
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
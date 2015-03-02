var expect = require("expectacle");//require('expect');
var superTest = require('supertest');
var IndexController = require('../../controllers/test-implementations/test-index-controller.js');

function test(app) {
  var indexController = new IndexController();
  indexController.inject(app);
  var request = superTest(app);
  
  
  describe('index controller', function() {
    describe("Path: '/'", function() {
  
      it('returns 200', function(done) {
        request.get('/')
        .expect(200)
        .end(function (error, result) {
          if(error) {
            console.log(error);
          }
		  expect(error).toBeFalsy();
          done();
        });
      });
    
      it('returns the site relative URL', function(done) {
        request.get('/')
        //.expect(200)
        //.expect("Content-Type", "text/html; charset=utf-8")
        .end(function (error, result) {
          if(error) {
            console.log(error);
          }
		  expect(error).toBeFalsy();
		  expect(result.text).toBe('/');
          done();
        });
      });
    
      it('returns text/html content-type header', function(done) {
        request.get('/')
        .expect("Content-type", "text/html; charset=utf-8")
        .end(function(error, result) {
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
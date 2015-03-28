var expect = require("expectacle");//require('expect');
var superTest = require('supertest');
var UserController = require('../../controllers/test-implementations/test-user-controller.js')

function test(app) {
  var userController = new UserController();
  userController.inject(app);
  var request = superTest(app);
  
  describe('test-user-controller', function() {
    describe("Path: '/users'", function() {

      it('Tests the /users endpoint', function(done) {
        request.post("/users")
        .expect(200)
        .end(function (error, result) {
          if(error) {
            console.log(error);
          }
          expect(error).toBeFalsy();
          done();
        });
      });
    
      it('Tests the /users/<username> endpoint', function(done) {
        request.get("/users/sweetBobbyGeorgia")
        .expect(200)
        .end(function (error, result) {
          if(error) {
            console.log(error);
          }
          expect(error).toBeFalsy();
          done();
        });
      });

      it('Tests the /users/<username> endpoint', function(done) {
        request.put("/users/sweetBobbyGeorgia")
        .expect(200)
        .end(function (error, result) {
          if(error) {
            console.log(error);
          }
          expect(error).toBeFalsy();
          done();
        });
      });

      it('Tests the /users/<username> endpoint', function(done) {
        request.post("/users/sweetBobbyGeorgia")
        .expect(200)
        .end(function (error, result) {
          if(error) {
            console.log(error);
          }
          expect(error).toBeFalsy();
          done();
        });
      });

      it('Tests the /users/<username>/ideas endpoint', function(done) {
        request.get("/users/sweetBobbyGeorgia/ideas")
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
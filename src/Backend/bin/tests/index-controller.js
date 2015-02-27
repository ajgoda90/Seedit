var expect = require('expect');
var mocha = require('mocha');
var userRoutes = require('../../controllers/test-implementations/test-index-controller.js');

describe('index controller', function() {
  describe('home', function() {
    it('returns the site relative URL', function() {
      userRoutes['/'].fn({}, {
        json: function(data) {
          expect(data).to.eql({ foo: 'hello world' });
        }
      });
    });
  });
});
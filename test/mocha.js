var assert = require('assert');

var Ezlog = require('../index.js');

describe('logging', function (){

	it('should log a green prefix and a red text', function (){

		var logRed = new Ezlog({
			pref: {c: 'green', t: '[green prefix]'},
			text: {c: 'red'}
		});

		logRed('Hello world, red text!');

		

	});


});

/*
var assert = require("assert")
describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    })
  })
})
*/
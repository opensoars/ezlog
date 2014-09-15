var Ezlog = require('../index.js');

var log1 = new Ezlog({

	pref: {
		t: '[main test]',
		c: 'green',
		s: ['underline', 'bold']
	},

	text: {
		c: 'blue',
		s: 'bold'
	}

});

log1('hello', 'world');

log1({
	a: 'b'
});


var log2 = new Ezlog();

log2('By default it looks like this!');
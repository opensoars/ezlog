var Ezlog = require('../index.js');

var log = new Ezlog({

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

log('hello', 'world');

log({
	a: 'b'
});

var log = require('../lib/ezlog.js')({

	pref: {
		t: '[main test]',
		c: 'green',
		s: 'bold'
	},

	text: {
		c: 'blue',
		s: 'bold'
	}

});

log('It', 'works');
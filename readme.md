ezlog
=====

Simple logger function that takes care of prefixes and colored output.

## Install
`npm install ezlogger` or clone source into project node_modules folder.

## Use
```js
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
```
ezlog
=====

Simple logger function that takes care of prefixes and colored output.

## Install
`npm install ezlogger` or clone source into project node_modules folder.

## Options
* Multiple style properties: ['bold', 'underline']. Or just one: 'bold'
* Prefixes if needed.
* 9 Colors to choose from.

## Use
```js
var log = require('../lib/ezlog.js')({
	
	pref: {
		t: '[test]',
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
Which should result in the following:

<span style='color: #00FF00;'>[test]</span> <span style='color: #0064FF;'>It</span>
<span style='color: #00FF00;'>[test]</span> <span style='color: #0064FF;'>works</span>
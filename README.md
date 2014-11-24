ezlog
=====

[![Build Status](http://img.shields.io/travis/opensoars/ezlog.svg?style=flat)](https://travis-ci.org/opensoars/ezlog)
[![Coverage Status](http://img.shields.io/coveralls/opensoars/ezlog.svg?style=flat)](https://coveralls.io/r/opensoars/ezlog)
[![Dependency Status](https://david-dm.org/opensoars/ezlog.svg?style=flat)](https://david-dm.org/opensoars/ezlog)
[![Development Dependency Status](https://david-dm.org/opensoars/ezlog/dev-status.svg?style=flat)](https://david-dm.org/opensoars/ezlog#info=devDependencies&view=table)


Simple logger function that takes care of prefixes and colored output.


---

### Dependencies
* [cls](https://github.com/opensoars/cls)


### Install
`npm install ezlog`


### API
`prefix_options = [text, [color], [style]]`

Where `text` is an string or object to use as a prefix, `color` is an optional color and `style` is an optional style string or an array of style strings.

`text_options = [text, [color], [style]]`

Where `text` is an string or object to use as a prefix, `color` is an optional color and `style` is an optional style string or an array of style strings.

`new Ezlog(prefix_options, t: text_options)`

Creates an instance 

### Options
* Multiple style properties: `['bold', 'underline']`. Or just one: `'bold'`
* 9 Colors
  * white
  * grey
  * black
  * blue
  * cyan
  * green
  * magenta
  * red
  * yellow
* 5 Styles (if supported by your os/terminal)
  * bold
  * italic
  * underline
  * inverse
  * strikethrough


### Example

```js
var Ezlog = require('Ezlog');

var log = new Ezlog(
  ['[main test]', 'green', ['underline', 'bold']],
  ['blue', 'bold']
);

log('hello');
log('world');
log({a: 'b'});

log('one', 'two');
```

Which should result in the following:

* [main test] hello
* [main test] world
* [main test] {"a":"b"}
* [main test] one
* [main test] two

Where `[main test]` will be colored green bold and underlined (if your OS terminal supports it). And `hello`, `world`, `one`, `two` and `{"a":"b"}` will be colored blue bold. When you pass two arguments to the Ezlog instance, it will result in a prefixed and color console.log call for both arguments
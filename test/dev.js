var Ezlog = require('./../index.js');

var log = new Ezlog(
  ['[main test]', 'green', ['underline', 'bold']],
  ['blue', 'bold']
);

log('Hello World!');
log('one', 'two');
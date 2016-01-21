'use strict';

var assert = require('assert');

module.exports = function(stream, expect, callback) {
  var savedWrite = stream.write;
  var content = '';
  stream.write = function(data) {
    content += data;
  };
  try {
    callback();
  }
  catch (err) {
    throw err;
  }
  finally {
    stream.write = savedWrite;
  }
  assert.equal(content, expect);
};

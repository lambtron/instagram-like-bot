
/**
 * Module dependencies.
 */

var request = require('superagent');

/**
 * Thunkified GET.
 */

exports.get = function get(uri) {
  return function(fn) {
    request
      .get(uri)
      .end(fn);
  };
};

/**
 * Thunkified post.
 */

exports.post = function(uri, body) {
  return function(fn) {
    request
      .post(uri)
      .send(body)
      .end(fn);
  };
};

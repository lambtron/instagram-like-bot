
/**
 * Module dependencies.
 */

var thunkify = require('thunkify-wrap');
var ig = require('instagram-node').instagram();
var co = require('co');

/**
 * Configuring `ig`.
 */

ig.use({
  access_token: process.env.ACCESS_TOKEN,
  client_id: process.env.CLIENT_ID,
  client_secret: process.env.CLIENT_SECRET
});

/**
 * Set keywords.
 */

var keywords = ['husky', 'dog'];

/**
 * Thunkify.
 */

var get = thunkify(ig.tag_media_recent);
var like = thunkify(ig.add_like);

/**
 * Main function.
 */

module.exports = function *() {
  for (var i = 0; i < keywords.length; i++) {
    var res = yield get(keywords[i]);
    for (var j = 0; j < res[0].length; j++) {
      yield like(res[0][j].id)
    }
  }
};

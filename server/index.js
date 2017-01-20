
/**
 * Module dependencies.
 */

var thunkify = require('thunkify-wrap');
var ig = require('instagram-node').instagram();
var co = require('co');
var config = require('./config');

/**
 * Configuring `ig`.
 */

ig.use({
  access_token: config.access_token,
  client_id: config.client_id,
  client_secret: config.client_secret
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
    console.log('~~~~',keywords[i],'~~~~~');
    for (var j = 0; j < res[0].length; j++) {
      //The setTimeout will help for instagram not to understand that this is a bot
      setTimeout(function *() {
        yield like(res[0][j].id)
      }, 3000);
    }
  }
};

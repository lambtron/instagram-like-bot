
/**
 * Module dependencies.
 */

var CronJob = require('cron').CronJob;
var get = require('./index');
var co = require('co');
var config = require('./config');

/**
 * Initiate Cronjob.
 */

new CronJob({
  cronTime: "*/10 * * * *", // every ten minutes
  onTick: function () {
    console.log('~~~10 minutes past')
    co(get());
  },
  start: true,
  timeZone: config.timezone
});

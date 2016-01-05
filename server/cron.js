
/**
 * Module dependencies.
 */

var CronJob = require('cron').CronJob;
var get = require('./index');
var co = require('co');

/**
 * Initiate Cronjob.
 */

new CronJob({
  cronTime: "*/10 * * * *", // every ten minutes
  onTick: function () {
    co(get());
  },
  start: true,
  timeZone: "America/Los_Angeles"
});

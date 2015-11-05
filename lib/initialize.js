'use strict';

var sendgrid = require('sendgrid');

module.exports = function ToInitialize(app) {

  return function initialize(cb) {
    var _sendgrid;
    var config = app.config[this.configKey];
    if (config.apiKey) {
      _sendgrid = sendgrid(config.apiKey);
    } else if(config.apiUser && config.apiPassword) {
      _sendgrid = sendgrid(config.apiUser, config.apiPassword);
    } else {
      return cb(new Error('No apiKey/apiUser+apiPassword defined'));
    }
    // Bind to application
    app.sendgrid = _sendgrid;
    cb();
  };
};

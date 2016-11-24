'use strict';

var {
  NativeModules
} = require('react-native');

var ShareUtils = {
  /**
   * @param {Object} options
   * @param {String} options.url
   * @param {String} options.message
   * @param {String} options.subject
   * @return {Promise}
   */
  share: function(options) {
    return new Promise(function(resolve, reject) {
      reject(new Error("Not implemented"));
    });
  }
};

module.exports = ShareUtils;

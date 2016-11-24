'use strict';

var {
  NativeModules
} = require('react-native');

var RNShareActions = NativeModules.RNShareActions;

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
      try {
        RNShareActions.share(options.url, options.message, options.subject);

        resolve({
          success: true,
          method: 'unknown'
        });
      }
      catch(error) {
        reject(error);
      }
    });
  }
};

module.exports = ShareUtils;

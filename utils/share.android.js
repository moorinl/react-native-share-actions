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
   * @param {String} title
   * @return {Promise}
   */
  share: function(options, title) {
    return new Promise(function(resolve, reject) {
      try {
        RNShareActions.share(options, title);

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

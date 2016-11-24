'use strict';

var {
  ActionSheetIOS
} = require('react-native');

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
      ActionSheetIOS.showShareActionSheetWithOptions({
          url: options.url,
          message: options.message,
          subject: options.subject
        },
        (error) => {
          reject(error);
        },
        (success, method) => {
          resolve({
            success: success,
            method: method
          });
        })
    });
  }
};

module.exports = ShareUtils;

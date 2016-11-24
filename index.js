'use strict';

var ShareUtil = require('./utils/share');

var ShareActions = {
  /**
   * @param {Object} options
   * @param {String} options.url
   * @param {String} options.message
   * @param {String} options.subject
   * @return {Promise}
   */
  share: function(options) {
    // Wrap result in a Promise, for consistent Android and iOS Promise usage
    return new Promise(function(resolve, reject) {
      ShareUtil.share(options)
        .then(function(result) {
          resolve(result);
        })
        .catch(function(error) {
          reject(error);
        });
    });
  }
};

module.exports = ShareActions;

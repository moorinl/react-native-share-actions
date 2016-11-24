'use strict';

var ShareUtil = require('./utils/share');

var ShareActions = {
  /**
   * @param {Object} options
   * @param {String} options.url
   * @param {String} options.message
   * @param {String} options.subject
   * @param {String} title
   * @return {Promise}
   */
  share: function(options, title) {
    // Wrap result in a Promise, for consistent Android and iOS Promise usage
    return new Promise(function(resolve, reject) {
      if (!options.url) {
        reject(new Error("Url attribute is required"));
      }

      ShareUtil.share(options, title)
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

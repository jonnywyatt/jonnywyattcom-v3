'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint-disable no-console */

exports.default = {
  error: function error(err) {
    if (typeof window === 'undefined') {
      console.error(err.message);
    } else {
      window.ga && window.ga('send', 'exception', {
        exDescription: err.message,
        exFatal: false
      });
    }
  },
  info: function info(msg) {
    return console.info(msg);
  }
};
module.exports = exports['default'];
//# sourceMappingURL=logger.js.map
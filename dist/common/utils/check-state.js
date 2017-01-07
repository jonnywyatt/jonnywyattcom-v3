'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require('lodash.get');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

exports.default = function (dispatch, matchedRoute, state, actions) {
  var needs = [].concat(_toConsumableArray(matchedRoute.dynamicNeeds), _toConsumableArray(matchedRoute.staticNeeds.filter(function (needName) {
    return !(0, _lodash2.default)(state, needTypes[needName].stateDataPoint);
  })));

  var promises = needs.map(function (needName) {
    var action = getAction(actions, needTypes[needName], state.featureToggles);
    return dispatch(action(matchedRoute));
  });

  return Promise.all(promises);
};

module.exports = exports['default'];
//# sourceMappingURL=check-state.js.map
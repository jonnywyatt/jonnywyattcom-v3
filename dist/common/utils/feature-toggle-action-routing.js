"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = routeActionByFeatureToogle;
function routeActionByFeatureToogle(featureKey, defaultAction, featureAction) {
  return function (featureToggles) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return featureToggles[featureKey] ? featureAction.apply(undefined, args) : defaultAction.apply(undefined, args);
  };
}
module.exports = exports["default"];
//# sourceMappingURL=feature-toggle-action-routing.js.map
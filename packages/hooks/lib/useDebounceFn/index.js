"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _tslib = require("tslib");
var _lodashPloyfill = require("../utils/lodash-ployfill");
var _react = require("react");
var _useLatest = _interopRequireDefault(require("../useLatest"));
var _useUnmount = _interopRequireDefault(require("../useUnmount"));
function useDebounceFn(fn, options) {
  var _a;
  var fnRef = (0, _useLatest.default)(fn);
  var wait = (_a = options === null || options === void 0 ? void 0 : options.wait) !== null && _a !== void 0 ? _a : 1000;
  var debounced = (0, _react.useMemo)(function () {
    return (0, _lodashPloyfill.debounce)(function () {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return fnRef.current.apply(fnRef, (0, _tslib.__spreadArray)([], (0, _tslib.__read)(args), false));
    }, wait, options);
  }, []);
  (0, _useUnmount.default)(function () {
    debounced.cancel();
  });
  return {
    run: debounced,
    cancel: debounced.cancel,
    flush: debounced.flush
  };
}
var _default = useDebounceFn;
exports.default = _default;
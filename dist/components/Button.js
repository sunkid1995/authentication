"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Button.propTypes = {
  label: _propTypes.default.string
};
Button.defaultProps = {
  label: "Click"
};

function Button(_ref) {
  let {
    label
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("button", null, label);
}

var _default = Button;
exports.default = _default;
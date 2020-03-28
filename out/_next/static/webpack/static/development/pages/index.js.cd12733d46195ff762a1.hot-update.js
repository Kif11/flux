webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/Button/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Button/index.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.module.css */ "./src/components/Button/index.module.css");
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/kif/pr/flux/web/src/components/Button/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Button = function Button(_ref) {
  var text = _ref.text,
      onClick = _ref.onClick,
      buttonClassName = _ref.buttonClassName,
      className = _ref.className,
      disabled = _ref.disabled;
  console.log('[D] buttonClass: ', buttonClassName);
  var buttonClass = buttonClassName ? "".concat(_index_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.button, " ").concat(_index_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.buttonClassName) : _index_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.button;
  return __jsx("div", {
    className: className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("button", {
    className: buttonClass,
    onClick: onClick,
    disabled: disabled,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, text));
};

Button.defaultProps = {
  className: '',
  buttonClassName: '',
  disabled: false
};
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ })

})
//# sourceMappingURL=index.js.cd12733d46195ff762a1.hot-update.js.map
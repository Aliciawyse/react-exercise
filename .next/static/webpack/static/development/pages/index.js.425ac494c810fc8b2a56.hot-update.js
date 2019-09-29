webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var _components_TimeTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/TimeTable */ "./components/TimeTable.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/aliciabarrett/react-exercise/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




var Index = function Index() {
  var availabilityData = [{
    id: 1,
    time: "9:00 am",
    name: 'Tania',
    phone_number: '341 659 9732'
  }, {
    id: 2,
    time: "10:00 am",
    name: 'Craig',
    phone_number: '730 427 5511'
  }, {
    id: 3,
    time: "11:00 am",
    name: 'Ben',
    phone_number: '506 869 6237'
  }, {
    id: 4,
    time: "12:00 pm",
    name: 'Tania',
    phone_number: '742 303 1282'
  }, {
    id: 5,
    time: "1:00 pm",
    name: 'Craig',
    phone_number: '407 363 6700'
  }, {
    id: 6,
    time: "2:00 pm",
    name: 'Ben',
    phone_number: '696 219 3427'
  }, {
    id: 7,
    time: "3:00 pm",
    name: 'Tania',
    phone_number: '162 705 8012'
  }, {
    id: 8,
    time: "4:00 pm",
    name: 'Craig',
    phone_number: '824 849 8258'
  }, {
    id: 9,
    time: "5:00 pm",
    name: 'Ben',
    phone_number: '274 822 0717'
  }];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(availabilityData),
      slots = _useState[0],
      setSlots = _useState[1];

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_0__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "It's CRUD time!"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "View time slots"), __jsx(_components_TimeTable__WEBPACK_IMPORTED_MODULE_1__["default"], {
    slots: slots,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.425ac494c810fc8b2a56.hot-update.js.map
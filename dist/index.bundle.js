"use strict";
(self["webpackChunkwebpack_demo"] = self["webpackChunkwebpack_demo"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reverseString__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reverseString */ "./src/reverseString.js");

console.log((0,_reverseString__WEBPACK_IMPORTED_MODULE_0__["default"])("cat"));

/***/ }),

/***/ "./src/reverseString.js":
/*!******************************!*\
  !*** ./src/reverseString.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ reverseString)
/* harmony export */ });
function reverseString(str) {
  if (typeof str !== "string") {
    throw new Error("Input must be a string");
  }
  var newStr = "";
  for (var i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTRDO0FBRTVDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsMERBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUNGbEIsU0FBU0EsYUFBYUEsQ0FBQ0csR0FBRyxFQUFFO0VBQ3ZDLElBQUksT0FBT0EsR0FBRyxLQUFLLFFBQVEsRUFBRTtJQUN6QixNQUFNLElBQUlDLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQztFQUM3QztFQUNBLElBQUlDLE1BQU0sR0FBRyxFQUFFO0VBQ2YsS0FBSyxJQUFJQyxDQUFDLEdBQUdILEdBQUcsQ0FBQ0ksTUFBTSxHQUFHLENBQUMsRUFBRUQsQ0FBQyxJQUFJLENBQUMsRUFBRUEsQ0FBQyxFQUFFLEVBQUU7SUFDdENELE1BQU0sSUFBSUYsR0FBRyxDQUFDRyxDQUFDLENBQUM7RUFDcEI7RUFDQSxPQUFPRCxNQUFNO0FBQ2pCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9yZXZlcnNlU3RyaW5nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZXZlcnNlU3RyaW5nIGZyb20gXCIuL3JldmVyc2VTdHJpbmdcIjtcblxuY29uc29sZS5sb2cocmV2ZXJzZVN0cmluZyhcImNhdFwiKSk7IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmV2ZXJzZVN0cmluZyhzdHIpIHtcbiAgICBpZiAodHlwZW9mIHN0ciAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnB1dCBtdXN0IGJlIGEgc3RyaW5nXCIpO1xuICAgIH1cbiAgICBsZXQgbmV3U3RyID0gXCJcIjtcbiAgICBmb3IgKGxldCBpID0gc3RyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIG5ld1N0ciArPSBzdHJbaV07XG4gICAgfVxuICAgIHJldHVybiBuZXdTdHI7XG59Il0sIm5hbWVzIjpbInJldmVyc2VTdHJpbmciLCJjb25zb2xlIiwibG9nIiwic3RyIiwiRXJyb3IiLCJuZXdTdHIiLCJpIiwibGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==
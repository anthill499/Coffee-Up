/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function() {

eval("window.addEventListener(\"DOMContentLoaded\", function () {\n  var canvas = document.getElementById('coffee-canvas');\n  var ctx = canvas.getContext('2d');\n  canvas.width = 900;\n  canvas.height = 700;\n  ctx.fillRect(0, 100, 1200, 1000);\n  var coffeeShopBackground = new Image();\n  coffeeShopBackground.src = \"./src/assets/images/cafe_background.png\";\n  ;\n  var cashierPicture = new Image();\n  cashierPicture.src = \"./src/assets/images/Alex_idle_16x16.png\";\n\n  function animate() {\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\n    ctx.drawImage(coffeeShopBackground, 0, 100, canvas.width, canvas.height);\n    ctx.drawImage(cashierPicture, 0, 0, 16, 32, 240, 220, 110, 200);\n    requestAnimationFrame(animate);\n  }\n\n  animate();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LXNrZWxldG9uLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwibmFtZXMiOlsid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0Iiwid2lkdGgiLCJoZWlnaHQiLCJmaWxsUmVjdCIsImNvZmZlZVNob3BCYWNrZ3JvdW5kIiwiSW1hZ2UiLCJzcmMiLCJjYXNoaWVyUGljdHVyZSIsImFuaW1hdGUiLCJjbGVhclJlY3QiLCJkcmF3SW1hZ2UiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiXSwibWFwcGluZ3MiOiJBQUNBQSxNQUFNLENBQUNDLGdCQUFQLENBQXdCLGtCQUF4QixFQUE0QyxZQUFNO0FBRTlDLE1BQU1DLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLGVBQXhCLENBQWY7QUFDQSxNQUFNQyxHQUFHLEdBQUdILE1BQU0sQ0FBQ0ksVUFBUCxDQUFrQixJQUFsQixDQUFaO0FBRUFKLEVBQUFBLE1BQU0sQ0FBQ0ssS0FBUCxHQUFlLEdBQWY7QUFDQUwsRUFBQUEsTUFBTSxDQUFDTSxNQUFQLEdBQWdCLEdBQWhCO0FBRUFILEVBQUFBLEdBQUcsQ0FBQ0ksUUFBSixDQUFhLENBQWIsRUFBZ0IsR0FBaEIsRUFBcUIsSUFBckIsRUFBMkIsSUFBM0I7QUFFQSxNQUFNQyxvQkFBb0IsR0FBRyxJQUFJQyxLQUFKLEVBQTdCO0FBQ0FELEVBQUFBLG9CQUFvQixDQUFDRSxHQUFyQixHQUEyQix5Q0FBM0I7QUFDQTtBQUVBLE1BQU1DLGNBQWMsR0FBRyxJQUFJRixLQUFKLEVBQXZCO0FBQ0FFLEVBQUFBLGNBQWMsQ0FBQ0QsR0FBZixHQUFxQix5Q0FBckI7O0FBRUEsV0FBU0UsT0FBVCxHQUFtQjtBQUNmVCxJQUFBQSxHQUFHLENBQUNVLFNBQUosQ0FBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CYixNQUFNLENBQUNLLEtBQTNCLEVBQWtDTCxNQUFNLENBQUNNLE1BQXpDO0FBQ0FILElBQUFBLEdBQUcsQ0FBQ1csU0FBSixDQUFjTixvQkFBZCxFQUFvQyxDQUFwQyxFQUF1QyxHQUF2QyxFQUE0Q1IsTUFBTSxDQUFDSyxLQUFuRCxFQUEwREwsTUFBTSxDQUFDTSxNQUFqRTtBQUNBSCxJQUFBQSxHQUFHLENBQUNXLFNBQUosQ0FBY0gsY0FBZCxFQUE4QixDQUE5QixFQUFpQyxDQUFqQyxFQUFvQyxFQUFwQyxFQUF3QyxFQUF4QyxFQUE0QyxHQUE1QyxFQUFpRCxHQUFqRCxFQUFzRCxHQUF0RCxFQUEyRCxHQUEzRDtBQUNBSSxJQUFBQSxxQkFBcUIsQ0FBQ0gsT0FBRCxDQUFyQjtBQUNIOztBQUNEQSxFQUFBQSxPQUFPO0FBRVYsQ0F6QkQiLCJzb3VyY2VzQ29udGVudCI6WyJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG5cbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29mZmVlLWNhbnZhcycpO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG4gICAgY2FudmFzLndpZHRoID0gOTAwO1xuICAgIGNhbnZhcy5oZWlnaHQgPSA3MDA7XG4gICAgXG4gICAgY3R4LmZpbGxSZWN0KDAsIDEwMCwgMTIwMCwgMTAwMCk7XG5cbiAgICBjb25zdCBjb2ZmZWVTaG9wQmFja2dyb3VuZCA9IG5ldyBJbWFnZSgpO1xuICAgIGNvZmZlZVNob3BCYWNrZ3JvdW5kLnNyYyA9IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9jYWZlX2JhY2tncm91bmQucG5nXCI7XG4gICAgO1xuXG4gICAgY29uc3QgY2FzaGllclBpY3R1cmUgPSBuZXcgSW1hZ2UoKTtcbiAgICBjYXNoaWVyUGljdHVyZS5zcmMgPSBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvQWxleF9pZGxlXzE2eDE2LnBuZ1wiO1xuXG4gICAgZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpXG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoY29mZmVlU2hvcEJhY2tncm91bmQsIDAsIDEwMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KVxuICAgICAgICBjdHguZHJhd0ltYWdlKGNhc2hpZXJQaWN0dXJlLCAwLCAwLCAxNiwgMzIsIDI0MCwgMjIwLCAxMTAsIDIwMClcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuICAgIH1cbiAgICBhbmltYXRlKCk7XG5cbn0pO1xuXG4iXSwiZmlsZSI6Ii4vc3JjL2luZGV4LmpzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LXNrZWxldG9uLy4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_modules__["./src/index.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.scss"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;
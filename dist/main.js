/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_assets_stylesheets_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/assets/stylesheets/index.css */ \"./src/assets/stylesheets/index.css\");\n/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/game */ \"./src/scripts/game.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var canvas = document.getElementById('coffee-canvas');\n  var ctx = canvas.getContext('2d');\n  canvas.width = 900;\n  canvas.height = 700;\n  var newGame = new _scripts_game__WEBPACK_IMPORTED_MODULE_1__.default(ctx);\n  newGame.start(); // \"Press anywhere to Start\"\n\n  window.addEventListener('keydown', function (e) {\n    console.log(\"hey im working\");\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDQTtBQUdBQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFNO0FBRWhELE1BQU1DLE1BQU0sR0FBR0YsUUFBUSxDQUFDRyxjQUFULENBQXdCLGVBQXhCLENBQWY7QUFDQSxNQUFNQyxHQUFHLEdBQUdGLE1BQU0sQ0FBQ0csVUFBUCxDQUFrQixJQUFsQixDQUFaO0FBQ0FILEVBQUFBLE1BQU0sQ0FBQ0ksS0FBUCxHQUFlLEdBQWY7QUFDQUosRUFBQUEsTUFBTSxDQUFDSyxNQUFQLEdBQWdCLEdBQWhCO0FBR0EsTUFBTUMsT0FBTyxHQUFHLElBQUlULGtEQUFKLENBQVNLLEdBQVQsQ0FBaEI7QUFDQUksRUFBQUEsT0FBTyxDQUFDQyxLQUFSLEdBVGdELENBV2hEOztBQUVBQyxFQUFBQSxNQUFNLENBQUNULGdCQUFQLENBQXdCLFNBQXhCLEVBQW1DLFVBQUFVLENBQUMsRUFBSTtBQUNwQ0MsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksZ0JBQVo7QUFDSCxHQUZEO0FBTUgsQ0FuQkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LXNrZWxldG9uLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc3JjL2Fzc2V0cy9zdHlsZXNoZWV0cy9pbmRleC5jc3NcIlxuaW1wb3J0IEdhbWUgZnJvbSBcIi4vc2NyaXB0cy9nYW1lXCI7XG5cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuXG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvZmZlZS1jYW52YXMnKTtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjYW52YXMud2lkdGggPSA5MDA7XG4gICAgY2FudmFzLmhlaWdodCA9IDcwMDtcblxuXG4gICAgY29uc3QgbmV3R2FtZSA9IG5ldyBHYW1lKGN0eCk7XG4gICAgbmV3R2FtZS5zdGFydCgpXG5cbiAgICAvLyBcIlByZXNzIGFueXdoZXJlIHRvIFN0YXJ0XCJcbiAgICBcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcImhleSBpbSB3b3JraW5nXCIpO1xuICAgIH0pO1xuXG4gICAgXG5cbn0pO1xuXG4iXSwibmFtZXMiOlsiR2FtZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhcyIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsIndpZHRoIiwiaGVpZ2h0IiwibmV3R2FtZSIsInN0YXJ0Iiwid2luZG93IiwiZSIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Game = /*#__PURE__*/function () {\n  function Game(ctx) {\n    _classCallCheck(this, Game);\n\n    this.ctx = ctx, this.level = 0, this.phase = 1, this.score = 100, this.multiplier = 1;\n  }\n\n  _createClass(Game, [{\n    key: \"incrementCurrentLevel\",\n    value: function incrementCurrentLevel() {\n      this.level += 1;\n    }\n  }, {\n    key: \"incrementMultiplier\",\n    value: function incrementMultiplier() {\n      this.multiplier += 1;\n    }\n  }, {\n    key: \"incrementScore\",\n    value: function incrementScore() {\n      this.score += 5;\n    }\n  }, {\n    key: \"decrementScore\",\n    value: function decrementScore() {\n      this.score -= 5 * this.multiplier;\n    } // start, game loop\n\n  }, {\n    key: \"gameLoop\",\n    value: function gameLoop() {\n      console.log(\"please don't exceed max callstack\"); // window.requestAnimationFrame(this.gameLoop)\n\n      requestAnimationFrame(this.gameLoop.bind(this));\n    }\n  }, {\n    key: \"start\",\n    value: function start() {\n      this.gameLoop();\n    } // event handlers\n\n  }]);\n\n  return Game;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7SUFDTUE7QUFFRixnQkFBWUMsR0FBWixFQUFpQjtBQUFBOztBQUNiLFNBQUtBLEdBQUwsR0FBV0EsR0FBWCxFQUNBLEtBQUtDLEtBQUwsR0FBYSxDQURiLEVBRUEsS0FBS0MsS0FBTCxHQUFhLENBRmIsRUFHQSxLQUFLQyxLQUFMLEdBQWEsR0FIYixFQUlBLEtBQUtDLFVBQUwsR0FBa0IsQ0FKbEI7QUFLSDs7OztXQUVELGlDQUF3QjtBQUNwQixXQUFLSCxLQUFMLElBQWMsQ0FBZDtBQUNIOzs7V0FFRCwrQkFBc0I7QUFDbEIsV0FBS0csVUFBTCxJQUFtQixDQUFuQjtBQUNIOzs7V0FFRCwwQkFBaUI7QUFDYixXQUFLRCxLQUFMLElBQWMsQ0FBZDtBQUNIOzs7V0FFRCwwQkFBaUI7QUFDYixXQUFLQSxLQUFMLElBQWUsSUFBSSxLQUFLQyxVQUF4QjtBQUNILE1BRUQ7Ozs7V0FFQSxvQkFBVztBQUNQQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxtQ0FBWixFQURPLENBRVA7O0FBQ0FDLE1BQUFBLHFCQUFxQixDQUFDLEtBQUtDLFFBQUwsQ0FBY0MsSUFBZCxDQUFtQixJQUFuQixDQUFELENBQXJCO0FBQ0g7OztXQUVELGlCQUFTO0FBQ0wsV0FBS0QsUUFBTDtBQUVILE1BR0Q7Ozs7Ozs7QUFJSiwrREFBZVQsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3Qtc2tlbGV0b24vLi9zcmMvc2NyaXB0cy9nYW1lLmpzP2NkYzAiXSwic291cmNlc0NvbnRlbnQiOlsiXG5jbGFzcyBHYW1lIHtcblxuICAgIGNvbnN0cnVjdG9yKGN0eCkge1xuICAgICAgICB0aGlzLmN0eCA9IGN0eCxcbiAgICAgICAgdGhpcy5sZXZlbCA9IDAsXG4gICAgICAgIHRoaXMucGhhc2UgPSAxLFxuICAgICAgICB0aGlzLnNjb3JlID0gMTAwLFxuICAgICAgICB0aGlzLm11bHRpcGxpZXIgPSAxXG4gICAgfSAgIFxuXG4gICAgaW5jcmVtZW50Q3VycmVudExldmVsKCkge1xuICAgICAgICB0aGlzLmxldmVsICs9IDFcbiAgICB9XG5cbiAgICBpbmNyZW1lbnRNdWx0aXBsaWVyKCkge1xuICAgICAgICB0aGlzLm11bHRpcGxpZXIgKz0gMVxuICAgIH1cblxuICAgIGluY3JlbWVudFNjb3JlKCkge1xuICAgICAgICB0aGlzLnNjb3JlICs9IDU7XG4gICAgfVxuXG4gICAgZGVjcmVtZW50U2NvcmUoKSB7XG4gICAgICAgIHRoaXMuc2NvcmUgLT0gKDUgKiB0aGlzLm11bHRpcGxpZXIpO1xuICAgIH1cblxuICAgIC8vIHN0YXJ0LCBnYW1lIGxvb3BcblxuICAgIGdhbWVMb29wKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcInBsZWFzZSBkb24ndCBleGNlZWQgbWF4IGNhbGxzdGFja1wiKVxuICAgICAgICAvLyB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuZ2FtZUxvb3ApXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmdhbWVMb29wLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgdGhpcy5nYW1lTG9vcCgpXG4gICAgICAgIFxuICAgIH1cblxuXG4gICAgLy8gZXZlbnQgaGFuZGxlcnNcblxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lO1xuXG4iXSwibmFtZXMiOlsiR2FtZSIsImN0eCIsImxldmVsIiwicGhhc2UiLCJzY29yZSIsIm11bHRpcGxpZXIiLCJjb25zb2xlIiwibG9nIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZ2FtZUxvb3AiLCJiaW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/assets/stylesheets/index.css":
/*!******************************************!*\
  !*** ./src/assets/stylesheets/index.css ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXNzZXRzL3N0eWxlc2hlZXRzL2luZGV4LmNzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LXNrZWxldG9uLy4vc3JjL2Fzc2V0cy9zdHlsZXNoZWV0cy9pbmRleC5jc3M/N2Q0YyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/stylesheets/index.css\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LXNrZWxldG9uLy4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;
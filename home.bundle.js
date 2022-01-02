/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _load_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load-header */ \"./src/load-header.js\");\n/* harmony import */ var _load_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./load-home */ \"./src/load-home.js\");\n/* harmony import */ var _load_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./load-footer */ \"./src/load-footer.js\");\n\n\n\n\nconst content = document.querySelector('#content')\ncontent.appendChild((0,_load_header__WEBPACK_IMPORTED_MODULE_0__[\"default\"])())\ncontent.appendChild((0,_load_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])())\ncontent.appendChild((0,_load_footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"])())\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/load-footer.js":
/*!****************************!*\
  !*** ./src/load-footer.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadFooter)\n/* harmony export */ });\nfunction loadFooter() {\n    const footer = document.createElement('footer')\n    const footerText = document.createElement('a')\n    footerText.setAttribute('id', 'copyright')\n    footerText.innerText = \"Robert Shepley 2021\"\n\n    footer.append(footerText)\n    return footer\n}\n\n//# sourceURL=webpack://restaurant-page/./src/load-footer.js?");

/***/ }),

/***/ "./src/load-header.js":
/*!****************************!*\
  !*** ./src/load-header.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadHeader)\n/* harmony export */ });\n/* harmony import */ var _mystic_logo_nobkg_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mystic-logo-nobkg.png */ \"./src/mystic-logo-nobkg.png\");\n/* harmony import */ var _beer_img_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./beer-img.jpg */ \"./src/beer-img.jpg\");\n\n\n\nfunction loadHeader() {\n    const mainHeader = document.createElement('header')\n\n    const headerLink = document.createElement('a')\n    headerLink.setAttribute('href', './home.html')\n    const headerLogo = new Image()\n    headerLogo.src = _mystic_logo_nobkg_png__WEBPACK_IMPORTED_MODULE_0__\n    headerLogo.setAttribute('id', 'logo')\n    headerLink.setAttribute('id', 'logo-link')\n    headerLink.append(headerLogo)\n\n    const headerLinks = document.createElement('div')\n    headerLinks.setAttribute('id', 'header-bar')\n\n    // Hold header link names.\n    const headerNames = ['menu', 'contact']\n    // Appends links to headerLinks. Does not get appended to mainHeader.\n    headerNames.forEach(name => {\n        let link = document.createElement('a')\n        link.innerText = name.charAt(0).toUpperCase() + name.slice(1)\n        link.setAttribute('id', name)\n        link.setAttribute('href', `./${name}.html`)\n        link.classList.add('head-link')\n        headerLinks.appendChild(link)\n    })\n\n    const pageBackground = new Image()\n    pageBackground.src = _beer_img_jpg__WEBPACK_IMPORTED_MODULE_1__\n    pageBackground.setAttribute('id', 'beer-img')\n\n    mainHeader.append(headerLink, headerLinks, pageBackground)\n    return mainHeader\n}\n\n//# sourceURL=webpack://restaurant-page/./src/load-header.js?");

/***/ }),

/***/ "./src/load-home.js":
/*!**************************!*\
  !*** ./src/load-home.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadHome)\n/* harmony export */ });\n/* harmony import */ var _bar_img_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bar-img.jpg */ \"./src/bar-img.jpg\");\n\n\nfunction loadHome() {\n    const content = document.createElement('div')\n    content.setAttribute('id', 'home-content')\n\n    const homeImage = new Image()\n    homeImage.src = _bar_img_jpg__WEBPACK_IMPORTED_MODULE_0__\n    homeImage.setAttribute('id', 'bar-img')\n\n    const homeText = document.createElement('div')\n    homeText.setAttribute('id', 'home-text')\n    const bigText = document.createElement('h2')\n    bigText.innerText = 'Find your inner Mystic'\n    const smallText = document.createElement('p')\n    smallText.innerText = 'Eu mi bibendum neque egestas congue quisque. Arcu felis bibendum ut tristique et egestas.'\n    homeText.append(bigText, smallText)\n\n    content.append(homeImage, homeText)\n    return content\n}\n\n//# sourceURL=webpack://restaurant-page/./src/load-home.js?");

/***/ }),

/***/ "./src/bar-img.jpg":
/*!*************************!*\
  !*** ./src/bar-img.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0812674c60421f107771.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/bar-img.jpg?");

/***/ }),

/***/ "./src/beer-img.jpg":
/*!**************************!*\
  !*** ./src/beer-img.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7aaf276f12f7b42cf684.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/beer-img.jpg?");

/***/ }),

/***/ "./src/mystic-logo-nobkg.png":
/*!***********************************!*\
  !*** ./src/mystic-logo-nobkg.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0874b48be879c207ee86.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/mystic-logo-nobkg.png?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/home.js");
/******/ 	
/******/ })()
;
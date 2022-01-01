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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _load_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load-header */ \"./src/load-header.js\");\n/* harmony import */ var _load_contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./load-contact */ \"./src/load-contact.js\");\n/* harmony import */ var _load_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./load-footer */ \"./src/load-footer.js\");\n\n\n\n\nconst content = document.querySelector('#content')\ncontent.appendChild((0,_load_header__WEBPACK_IMPORTED_MODULE_0__[\"default\"])())\ncontent.appendChild((0,_load_contact__WEBPACK_IMPORTED_MODULE_1__[\"default\"])())\ncontent.appendChild((0,_load_footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"])())\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/load-contact.js":
/*!*****************************!*\
  !*** ./src/load-contact.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadContact)\n/* harmony export */ });\nfunction loadContact() {\n    const content = document.createElement('div')\n    content.setAttribute('id', 'contact-content')\n\n    const form = document.createElement('form')\n    form.setAttribute('action', 'javascript:void(0);')\n    form.setAttribute('id', 'contact-form')\n\n    const fNameLabel = document.createElement('label')\n    const lNameLabel = document.createElement('label')\n    const emailLabel = document.createElement('label')\n    const subjectLabel = document.createElement('label')\n    const messageLabel = document.createElement('label')\n\n    Object.assign(fNameLabel, {\n        for: 'fname',\n        innerText: 'First Name'\n    })\n    Object.assign(lNameLabel, {\n        for: 'lname',\n        innerText: 'Last Name'\n    })\n    Object.assign(emailLabel, {\n        for: 'email',\n        innerText: 'Email'\n    })\n    Object.assign(subjectLabel, {\n        for: 'subject',\n        innerText: 'Subject'\n    })\n    Object.assign(messageLabel, {\n        for: 'message',\n        innerText: 'Message'\n    })\n    \n    const fNameInput = document.createElement('input')\n    const lNameInput = document.createElement('input')\n    const emailInput = document.createElement('input')\n    const subjectInput = document.createElement('input')\n    const messageInput = document.createElement('textarea')\n    const submitButton = document.createElement('input')\n\n    Object.assign(fNameInput, {\n        type: 'text',\n        name: 'firstname',\n        id: 'fname'\n    })\n    Object.assign(lNameInput, {\n        type: 'text',\n        name: 'lastname',\n        id: 'lname'\n    })\n    Object.assign(emailInput, {\n        type: 'text',\n        name: 'email',\n        id: 'email'\n    })\n    Object.assign(subjectInput, {\n        type: 'text',\n        name: 'subject',\n        id: 'subject'\n    })\n    Object.assign(messageInput, {\n        name: 'message',\n        id: 'message',\n    })\n    Object.assign(messageInput.style, {\n        height: '200px'\n    })\n    Object.assign(submitButton, {\n        type: 'submit',\n        value: 'Submit'\n    })\n\n    const submitModal = document.createElement('div')\n    submitModal.setAttribute('id', 'submit-modal')\n    const modalContent = document.createElement('div')\n    modalContent.classList.add('modal-content')\n    const modalClose = document.createElement('span')\n    modalClose.classList.add('close')\n    modalClose.innerText = '𝗑'\n    const modalText = document.createElement('p')\n    modalText.innerText = 'Thanks for contacting us!'\n    modalContent.append(modalClose, modalText)\n    submitModal.append(modalContent)\n\n    submitButton.addEventListener('click', () => {\n        submitModal.style.display = 'block'\n    })\n\n    modalClose.addEventListener('click', () => {\n        submitModal.style.display = 'none'\n    })\n\n    window.addEventListener('click', e => {\n        if (e.target == submitModal) {\n            submitModal.style.display = 'none'\n        }\n    })\n\n    form.append(fNameLabel, \n                fNameInput, \n                lNameLabel, \n                lNameInput,\n                emailLabel,\n                emailInput,\n                subjectLabel,\n                subjectInput,\n                messageLabel,\n                messageInput,\n                submitButton)\n    content.append(form, submitModal)\n    return content\n}\n\n//# sourceURL=webpack://restaurant-page/./src/load-contact.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadHeader)\n/* harmony export */ });\n/* harmony import */ var _mystic_logo_nobkg_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mystic-logo-nobkg.png */ \"./src/mystic-logo-nobkg.png\");\n/* harmony import */ var _beer_img_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./beer-img.jpg */ \"./src/beer-img.jpg\");\n\n\n\nfunction loadHeader() {\n    const mainHeader = document.createElement('header')\n\n    const headerLink = document.createElement('a')\n    headerLink.setAttribute('href', './home.html')\n    const headerLogo = new Image()\n    headerLogo.src = _mystic_logo_nobkg_png__WEBPACK_IMPORTED_MODULE_0__\n    headerLogo.setAttribute('id', 'logo')\n    headerLink.append(headerLogo)\n\n    const headerLinks = document.createElement('div')\n    headerLinks.setAttribute('id', 'header-bar')\n\n    // Hold header link names.\n    const headerNames = ['menu', 'contact']\n    // Appends links to headerLinks. Does not get appended to mainHeader.\n    headerNames.forEach(name => {\n        let link = document.createElement('a')\n        link.innerText = name.charAt(0).toUpperCase() + name.slice(1)\n        link.setAttribute('id', name)\n        link.setAttribute('href', `./${name}.html`)\n        link.classList.add('head-link')\n        headerLinks.appendChild(link)\n    })\n\n    const pageBackground = new Image()\n    pageBackground.src = _beer_img_jpg__WEBPACK_IMPORTED_MODULE_1__\n    pageBackground.setAttribute('id', 'beer-img')\n\n    mainHeader.append(headerLink, headerLinks, pageBackground)\n    return mainHeader\n}\n\n//# sourceURL=webpack://restaurant-page/./src/load-header.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/contact.js");
/******/ 	
/******/ })()
;
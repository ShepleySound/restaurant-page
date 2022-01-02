(()=>{"use strict";var __webpack_modules__={813:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{eval("\n// EXTERNAL MODULE: ./src/mystic-logo-nobkg.png\nvar mystic_logo_nobkg = __webpack_require__(867);\n// EXTERNAL MODULE: ./src/beer-img.jpg\nvar beer_img = __webpack_require__(402);\n;// CONCATENATED MODULE: ./src/load-header.js\n\n\n\nfunction loadHeader() {\n    const mainHeader = document.createElement('header')\n\n    const headerLink = document.createElement('a')\n    headerLink.setAttribute('href', './index.html')\n    const headerLogo = new Image()\n    headerLogo.src = mystic_logo_nobkg\n    headerLogo.setAttribute('id', 'logo')\n    headerLink.setAttribute('id', 'logo-link')\n    headerLink.append(headerLogo)\n\n    const headerLinks = document.createElement('div')\n    headerLinks.setAttribute('id', 'header-bar')\n\n    // Hold header link names.\n    const headerNames = ['menu', 'contact']\n    // Appends links to headerLinks. Does not get appended to mainHeader.\n    headerNames.forEach(name => {\n        let link = document.createElement('a')\n        link.innerText = name.charAt(0).toUpperCase() + name.slice(1)\n        link.setAttribute('id', name)\n        link.setAttribute('href', `./${name}.html`)\n        link.classList.add('head-link')\n        headerLinks.appendChild(link)\n    })\n\n    const pageBackground = new Image()\n    pageBackground.src = beer_img\n    pageBackground.setAttribute('id', 'beer-img')\n\n    mainHeader.append(headerLink, headerLinks, pageBackground)\n    return mainHeader\n}\n// EXTERNAL MODULE: ./src/bar-img.jpg\nvar bar_img = __webpack_require__(323);\n;// CONCATENATED MODULE: ./src/load-home.js\n\n\nfunction loadHome() {\n    const content = document.createElement('div')\n    content.setAttribute('id', 'home-content')\n\n    const homeImage = new Image()\n    homeImage.src = bar_img\n    homeImage.setAttribute('id', 'bar-img')\n\n    const homeText = document.createElement('div')\n    homeText.setAttribute('id', 'home-text')\n    const bigText = document.createElement('h2')\n    bigText.innerText = 'Find your inner Mystic'\n    const smallText = document.createElement('p')\n    smallText.innerText = 'Eu mi bibendum neque egestas congue quisque. Arcu felis bibendum ut tristique et egestas.'\n    homeText.append(bigText, smallText)\n\n    content.append(homeImage, homeText)\n    return content\n}\n;// CONCATENATED MODULE: ./src/load-footer.js\nfunction loadFooter() {\n    const footer = document.createElement('footer')\n    const footerText = document.createElement('a')\n    footerText.setAttribute('id', 'copyright')\n    footerText.innerText = \"Robert Shepley 2022\"\n\n    footer.append(footerText)\n    return footer\n}\n;// CONCATENATED MODULE: ./src/home.js\n\n\n\n\nconst content = document.querySelector('#content')\ncontent.appendChild(loadHeader())\ncontent.appendChild(loadHome())\ncontent.appendChild(loadFooter())\n\n//# sourceURL=webpack://restaurant-page/./src/home.js_+_3_modules?")},323:(module,__unused_webpack_exports,__webpack_require__)=>{eval('module.exports = __webpack_require__.p + "0812674c60421f107771.jpg";\n\n//# sourceURL=webpack://restaurant-page/./src/bar-img.jpg?')},402:(module,__unused_webpack_exports,__webpack_require__)=>{eval('module.exports = __webpack_require__.p + "7aaf276f12f7b42cf684.jpg";\n\n//# sourceURL=webpack://restaurant-page/./src/beer-img.jpg?')},867:(module,__unused_webpack_exports,__webpack_require__)=>{eval('module.exports = __webpack_require__.p + "0874b48be879c207ee86.png";\n\n//# sourceURL=webpack://restaurant-page/./src/mystic-logo-nobkg.png?')}},__webpack_module_cache__={};function __webpack_require__(e){var n=__webpack_module_cache__[e];if(void 0!==n)return n.exports;var t=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](t,t.exports,__webpack_require__),t.exports}__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var e;__webpack_require__.g.importScripts&&(e=__webpack_require__.g.location+"");var n=__webpack_require__.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var t=n.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),__webpack_require__.p=e})();var __webpack_exports__=__webpack_require__(813)})();